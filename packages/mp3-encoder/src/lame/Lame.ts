import { ATH } from './ATH';
import type { BandPass } from './BandPass';
import type { BitStream } from './BitStream';
import { CBRNewIterationLoop } from './CBRNewIterationLoop';
import type { Encoder } from './Encoder';
import { GainAnalysis } from './GainAnalysis';
import { InOut } from './InOut';
import { LameGlobalFlags } from './LameGlobalFlags';
import type { LameInternalFlags } from './LameInternalFlags';
import { LowPassHighPass } from './LowPassHighPass';
import { MPEGMode } from './MPEGMode';
import { NumUsed } from './NumUsed';
import { PSY } from './PSY';
import { Presets } from './Presets';
import { PsyModel } from './PsyModel';
import type { Quantize } from './Quantize';
import type { QuantizePVT } from './QuantizePVT';
import type { SamplingFrequency } from './SamplingFrequency';
import { ShortBlock } from './ShortBlock';
import { VbrMode } from './VbrMode';
import { bitrateIndex, findNearestBitrate, getBitrate } from './bitrates';
import {
  BLKSIZE,
  BPC,
  ENCDELAY,
  FFTOFFSET,
  LAME_ID,
  MFSIZE,
  MPG_MD_MS_LR,
  POSTDELAY,
  PSFB12,
  PSFB21,
  SBMAX_l,
  SBMAX_s,
} from './constants';
import {
  isCloseToEachOther,
  blackmanWindow,
  gcd,
  linearInterpolation,
} from './math';

export class Lame {
  private ga: GainAnalysis | null = null;

  private bs: BitStream | null = null;

  private p: Presets = new Presets();

  private qupvt: QuantizePVT | null = null;

  private qu: Quantize | null = null;

  public psy: PsyModel | null = null;

  private enc: Encoder | null = null;

  setModules(
    ga: GainAnalysis,
    bs: BitStream,
    qupvt: QuantizePVT,
    qu: Quantize,
    psy: PsyModel,
    enc: Encoder
  ) {
    this.ga = ga;
    this.bs = bs;
    this.qupvt = qupvt;
    this.qu = qu;
    this.psy = psy;
    this.enc = enc;
  }

  lame_init(channels: number, samplerate: number, kbps: number) {
    const gfp = new LameGlobalFlags(channels, samplerate, kbps);

    const retcode = this.lame_init_params(gfp);
    if (retcode !== 0) {
      throw new Error(`lame_init_params() failed: ${retcode}`);
    }

    return gfp;
  }

  private static filterCoeficient(x: number) {
    if (x > 1.0) return 0.0;
    if (x <= 0.0) return 1.0;

    return Math.cos((Math.PI / 2) * x);
  }

  static nearestBitrateFullIndex(bitrate: number) {
    /* borrowed from DM abr presets */

    const full_bitrate_table = [
      8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320,
    ];

    let lower_range = 0;
    let lower_range_kbps = 0;
    let upper_range = 0;
    let upper_range_kbps = 0;

    /* We assume specified bitrate will be 320kbps */
    upper_range_kbps = full_bitrate_table[16];
    upper_range = 16;
    lower_range_kbps = full_bitrate_table[16];
    lower_range = 16;

    /*
     * Determine which significant bitrates the value specified falls
     * between, if loop ends without breaking then we were correct above
     * that the value was 320
     */
    for (let b = 0; b < 16; b++) {
      if (Math.max(bitrate, full_bitrate_table[b + 1]) !== bitrate) {
        upper_range_kbps = full_bitrate_table[b + 1];
        upper_range = b + 1;
        lower_range_kbps = full_bitrate_table[b];
        lower_range = b;
        break;
        /* We found upper range */
      }
    }

    /* Determine which range the value specified is closer to */
    if (upper_range_kbps - bitrate > bitrate - lower_range_kbps) {
      return lower_range;
    }
    return upper_range;
  }

  private static optimum_samplefreq(
    lowpassfreq: number,
    input_samplefreq: number
  ): SamplingFrequency {
    /*
     * Rules:
     *
     * - if possible, sfb21 should NOT be used
     */
    let suggested_samplefreq: SamplingFrequency = 44100;

    if (input_samplefreq >= 48000) suggested_samplefreq = 48000;
    else if (input_samplefreq >= 44100) suggested_samplefreq = 44100;
    else if (input_samplefreq >= 32000) suggested_samplefreq = 32000;
    else if (input_samplefreq >= 24000) suggested_samplefreq = 24000;
    else if (input_samplefreq >= 22050) suggested_samplefreq = 22050;
    else if (input_samplefreq >= 16000) suggested_samplefreq = 16000;
    else if (input_samplefreq >= 12000) suggested_samplefreq = 12000;
    else if (input_samplefreq >= 11025) suggested_samplefreq = 11025;
    else if (input_samplefreq >= 8000) suggested_samplefreq = 8000;

    if (lowpassfreq === -1) return suggested_samplefreq;

    if (lowpassfreq <= 15960) suggested_samplefreq = 44100;
    if (lowpassfreq <= 15250) suggested_samplefreq = 32000;
    if (lowpassfreq <= 11220) suggested_samplefreq = 24000;
    if (lowpassfreq <= 9970) suggested_samplefreq = 22050;
    if (lowpassfreq <= 7230) suggested_samplefreq = 16000;
    if (lowpassfreq <= 5420) suggested_samplefreq = 12000;
    if (lowpassfreq <= 4510) suggested_samplefreq = 11025;
    if (lowpassfreq <= 3970) suggested_samplefreq = 8000;

    if (input_samplefreq < suggested_samplefreq) {
      /*
       * choose a valid MPEG sample frequency above the input sample
       * frequency to avoid SFB21/12 bitrate bloat rh 061115
       */
      if (input_samplefreq > 44100) {
        return 48000;
      }
      if (input_samplefreq > 32000) {
        return 44100;
      }
      if (input_samplefreq > 24000) {
        return 32000;
      }
      if (input_samplefreq > 22050) {
        return 24000;
      }
      if (input_samplefreq > 16000) {
        return 22050;
      }
      if (input_samplefreq > 12000) {
        return 16000;
      }
      if (input_samplefreq > 11025) {
        return 12000;
      }
      if (input_samplefreq > 8000) {
        return 11025;
      }
      return 8000;
    }
    return suggested_samplefreq;
  }

  /**
   * convert samp freq in Hz to index
   */
  private static smpFrqIndex(sample_freq: number, gpf: LameGlobalFlags) {
    switch (sample_freq) {
      case 44100:
        gpf.version = 1;
        return 0;
      case 48000:
        gpf.version = 1;
        return 1;
      case 32000:
        gpf.version = 1;
        return 2;
      case 22050:
        gpf.version = 0;
        return 0;
      case 24000:
        gpf.version = 0;
        return 1;
      case 16000:
        gpf.version = 0;
        return 2;
      case 11025:
        gpf.version = 0;
        return 0;
      case 12000:
        gpf.version = 0;
        return 1;
      case 8000:
        gpf.version = 0;
        return 2;
      default:
        gpf.version = 0;
        return -1;
    }
  }

  private static optimum_bandwidth(lh: LowPassHighPass, bitrate: number) {
    /**
     * <PRE>
     *  Input:
     *      bitrate     total bitrate in kbps
     *
     *   Output:
     *      lowerlimit: best lowpass frequency limit for input filter in Hz
     *      upperlimit: best highpass frequency limit for input filter in Hz
     * </PRE>
     */
    const freq_map = [
      { bitrate: 8, lowpass: 2000 },
      { bitrate: 16, lowpass: 3700 },
      { bitrate: 24, lowpass: 3900 },
      { bitrate: 32, lowpass: 5500 },
      { bitrate: 40, lowpass: 7000 },
      { bitrate: 48, lowpass: 7500 },
      { bitrate: 56, lowpass: 10000 },
      { bitrate: 64, lowpass: 11000 },
      { bitrate: 80, lowpass: 13500 },
      { bitrate: 96, lowpass: 15100 },
      { bitrate: 112, lowpass: 15600 },
      { bitrate: 128, lowpass: 17000 },
      { bitrate: 160, lowpass: 17500 },
      { bitrate: 192, lowpass: 18600 },
      { bitrate: 224, lowpass: 19400 },
      { bitrate: 256, lowpass: 19700 },
      { bitrate: 320, lowpass: 20500 },
    ] satisfies BandPass[];

    const table_index = Lame.nearestBitrateFullIndex(bitrate);
    lh.lowerlimit = freq_map[table_index].lowpass;
  }

  private static lame_init_params_ppflt(gfp: LameGlobalFlags) {
    const gfc = gfp.internal_flags;
    /** *************************************************************/
    /* compute info needed for polyphase filter (filter type==0, default) */
    /** *************************************************************/

    let lowpass_band = 32;
    let highpass_band = -1;

    if (gfc.lowpass1 > 0) {
      let minband = 999;
      for (let band = 0; band <= 31; band++) {
        const freq = band / 31.0;
        /* this band and above will be zeroed: */
        if (freq >= gfc.lowpass2) {
          lowpass_band = Math.min(lowpass_band, band);
        }
        if (gfc.lowpass1 < freq && freq < gfc.lowpass2) {
          minband = Math.min(minband, band);
        }
      }

      /*
       * compute the *actual* transition band implemented by the polyphase
       * filter
       */
      if (minband === 999) {
        gfc.lowpass1 = (lowpass_band - 0.75) / 31.0;
      } else {
        gfc.lowpass1 = (minband - 0.75) / 31.0;
      }
      gfc.lowpass2 = lowpass_band / 31.0;
    }

    /*
     * make sure highpass filter is within 90% of what the effective
     * highpass frequency will be
     */
    if (gfc.highpass2 > 0) {
      if (gfc.highpass2 < 0.9 * (0.75 / 31.0)) {
        gfc.highpass1 = 0;
        gfc.highpass2 = 0;
        console.warn(
          'Warning: highpass filter disabled. highpass frequency too small'
        );
      }
    }

    if (gfc.highpass2 > 0) {
      let maxband = -1;
      for (let band = 0; band <= 31; band++) {
        const freq = band / 31.0;
        /* this band and below will be zereod */
        if (freq <= gfc.highpass1) {
          highpass_band = Math.max(highpass_band, band);
        }
        if (gfc.highpass1 < freq && freq < gfc.highpass2) {
          maxband = Math.max(maxband, band);
        }
      }
      /*
       * compute the *actual* transition band implemented by the polyphase
       * filter
       */
      gfc.highpass1 = highpass_band / 31.0;
      if (maxband === -1) {
        gfc.highpass2 = (highpass_band + 0.75) / 31.0;
      } else {
        gfc.highpass2 = (maxband + 0.75) / 31.0;
      }
    }

    for (let band = 0; band < 32; band++) {
      let fc1;
      let fc2;
      const freq = band / 31.0;
      if (gfc.highpass2 > gfc.highpass1) {
        fc1 = Lame.filterCoeficient(
          (gfc.highpass2 - freq) / (gfc.highpass2 - gfc.highpass1 + 1e-20)
        );
      } else {
        fc1 = 1.0;
      }
      if (gfc.lowpass2 > gfc.lowpass1) {
        fc2 = Lame.filterCoeficient(
          (freq - gfc.lowpass1) / (gfc.lowpass2 - gfc.lowpass1 + 1e-20)
        );
      } else {
        fc2 = 1.0;
      }
      gfc.amp_filter[band] = fc1 * fc2;
    }
  }

  private static lame_init_qval(gfp: LameGlobalFlags) {
    const gfc = gfp.internal_flags;

    switch (gfp.quality) {
      default:
      case 9 /* no psymodel, no noise shaping */:
        gfc.psymodel = 0;
        gfc.noise_shaping = 0;
        gfc.noise_shaping_amp = 0;
        gfc.noise_shaping_stop = 0;
        gfc.use_best_huffman = 0;
        gfc.full_outer_loop = 0;
        break;

      case 8:
        gfp.quality = 7;
      // $FALL-THROUGH$
      // eslint-disable-next-line no-fallthrough
      case 7:
        /*
         * use psymodel (for short block and m/s switching), but no noise
         * shapping
         */
        gfc.psymodel = 1;
        gfc.noise_shaping = 0;
        gfc.noise_shaping_amp = 0;
        gfc.noise_shaping_stop = 0;
        gfc.use_best_huffman = 0;
        gfc.full_outer_loop = 0;
        break;

      case 6:
        gfc.psymodel = 1;
        if (gfc.noise_shaping === 0) gfc.noise_shaping = 1;
        gfc.noise_shaping_amp = 0;
        gfc.noise_shaping_stop = 0;
        if (gfc.subblock_gain === -1) gfc.subblock_gain = 1;
        gfc.use_best_huffman = 0;
        gfc.full_outer_loop = 0;
        break;

      case 5:
        gfc.psymodel = 1;
        if (gfc.noise_shaping === 0) gfc.noise_shaping = 1;
        gfc.noise_shaping_amp = 0;
        gfc.noise_shaping_stop = 0;
        if (gfc.subblock_gain === -1) gfc.subblock_gain = 1;
        gfc.use_best_huffman = 0;
        gfc.full_outer_loop = 0;
        break;

      case 4:
        gfc.psymodel = 1;
        if (gfc.noise_shaping === 0) gfc.noise_shaping = 1;
        gfc.noise_shaping_amp = 0;
        gfc.noise_shaping_stop = 0;
        if (gfc.subblock_gain === -1) gfc.subblock_gain = 1;
        gfc.use_best_huffman = 1;
        gfc.full_outer_loop = 0;
        break;

      case 3:
        gfc.psymodel = 1;
        if (gfc.noise_shaping === 0) gfc.noise_shaping = 1;
        gfc.noise_shaping_amp = 1;
        gfc.noise_shaping_stop = 1;
        if (gfc.subblock_gain === -1) gfc.subblock_gain = 1;
        gfc.use_best_huffman = 1;
        gfc.full_outer_loop = 0;
        break;

      case 2:
        gfc.psymodel = 1;
        if (gfc.noise_shaping === 0) gfc.noise_shaping = 1;
        if (gfc.substep_shaping === 0) gfc.substep_shaping = 2;
        gfc.noise_shaping_amp = 1;
        gfc.noise_shaping_stop = 1;
        if (gfc.subblock_gain === -1) gfc.subblock_gain = 1;
        gfc.use_best_huffman = 1;
        /* inner loop */
        gfc.full_outer_loop = 0;
        break;

      case 1:
        gfc.psymodel = 1;
        if (gfc.noise_shaping === 0) gfc.noise_shaping = 1;
        if (gfc.substep_shaping === 0) gfc.substep_shaping = 2;
        gfc.noise_shaping_amp = 2;
        gfc.noise_shaping_stop = 1;
        if (gfc.subblock_gain === -1) gfc.subblock_gain = 1;
        gfc.use_best_huffman = 1;
        gfc.full_outer_loop = 0;
        break;

      case 0:
        gfc.psymodel = 1;
        if (gfc.noise_shaping === 0) gfc.noise_shaping = 1;
        if (gfc.substep_shaping === 0) gfc.substep_shaping = 2;
        gfc.noise_shaping_amp = 2;
        gfc.noise_shaping_stop = 1;
        if (gfc.subblock_gain === -1) gfc.subblock_gain = 1;
        gfc.use_best_huffman = 1;
        /*
         * type 2 disabled because of it slowness, in favor of full outer
         * loop search
         */
        gfc.full_outer_loop = 0;
        /*
         * full outer loop search disabled because of audible distortions it
         * may generate rh 060629
         */
        break;
    }
  }

  private lame_init_bitstream(gfp: LameGlobalFlags) {
    const gfc = gfp.internal_flags;
    gfp.frameNum = 0;
    gfc.PeakSample = 0.0;
  }

  /**
   * map frequency to a valid MP3 sample frequency
   *
   * Robert Hegemann 2000-07-01
   */
  private static map2MP3Frequency(freq: number): SamplingFrequency {
    if (freq <= 8000) return 8000;
    if (freq <= 11025) return 11025;
    if (freq <= 12000) return 12000;
    if (freq <= 16000) return 16000;
    if (freq <= 22050) return 22050;
    if (freq <= 24000) return 24000;
    if (freq <= 32000) return 32000;
    if (freq <= 44100) return 44100;

    return 48000;
  }

  private static readonly LAME_DEFAULT_QUALITY = 3;

  /** ******************************************************************
   * initialize internal params based on data in gf (globalflags struct filled
   * in by calling program)
   *
   * OUTLINE:
   *
   * We first have some complex code to determine bitrate, output samplerate
   * and mode. It is complicated by the fact that we allow the user to set
   * some or all of these parameters, and need to determine best possible
   * values for the rest of them:
   *
   * 1. set some CPU related flags 2. check if we are mono.mono, stereo.mono
   * or stereo.stereo 3. compute bitrate and output samplerate: user may have
   * set compression ratio user may have set a bitrate user may have set a
   * output samplerate 4. set some options which depend on output samplerate
   * 5. compute the actual compression ratio 6. set mode based on compression
   * ratio
   *
   * The remaining code is much simpler - it just sets options based on the
   * mode & compression ratio:
   *
   * set allow_diff_short based on mode select lowpass filter based on
   * compression ratio & mode set the bitrate index, and min/max bitrates for
   * VBR modes disable VBR tag if it is not appropriate initialize the
   * bitstream initialize scalefac_band data set sideinfo_len (based on
   * channels, CRC, out_samplerate) write an id3v2 tag into the bitstream
   * write VBR tag into the bitstream set mpeg1/2 flag estimate the number of
   * frames (based on a lot of data)
   *
   * now we set more flags: nspsytune: see code VBR modes see code CBR/ABR see
   * code
   *
   * Finally, we set the algorithm flags based on the gfp.quality value
   * lame_init_qval(gfp);
   *
   ********************************************************************/
  // eslint-disable-next-line complexity
  private lame_init_params(gfp: LameGlobalFlags) {
    const gfc = gfp.internal_flags;

    gfc.Class_ID = 0;
    if (gfc.ATH === null) gfc.ATH = new ATH();
    if (gfc.PSY === null) gfc.PSY = new PSY();

    gfc.channels_in = gfp.num_channels;
    if (gfc.channels_in === 1) gfp.mode = MPEGMode.MONO;
    gfc.channels_out = gfp.mode === MPEGMode.MONO ? 1 : 2;
    gfc.mode_ext = MPG_MD_MS_LR;

    if (
      gfp.VBR === VbrMode.vbr_off &&
      gfp.VBR_mean_bitrate_kbps !== 128 &&
      gfp.brate === 0
    ) {
      gfp.brate = gfp.VBR_mean_bitrate_kbps;
    }

    if (gfp.VBR === VbrMode.vbr_off && gfp.brate === 0) {
      /* no bitrate or compression ratio specified, use 11.025 */
      if (isCloseToEachOther(gfp.compression_ratio, 0))
        gfp.compression_ratio = 11.025;
      /*
       * rate to compress a CD down to exactly 128000 bps
       */
    }

    /* find bitrate if user specify a compression ratio */
    if (gfp.VBR === VbrMode.vbr_off && gfp.compression_ratio > 0) {
      if (gfp.out_samplerate === 0)
        gfp.out_samplerate = Lame.map2MP3Frequency(
          Math.trunc(0.97 * gfp.in_samplerate)
        );
      /*
       * round up with a margin of 3 %
       */

      /*
       * choose a bitrate for the output samplerate which achieves
       * specified compression ratio
       */
      gfp.brate = Math.trunc(
        (gfp.out_samplerate * 16 * gfc.channels_out) /
          (1e3 * gfp.compression_ratio)
      );

      /* we need the version for the bitrate table look up */
      gfc.samplerate_index = Lame.smpFrqIndex(gfp.out_samplerate, gfp);

      /*
       * for non Free Format find the nearest allowed
       * bitrate
       */
      gfp.brate = findNearestBitrate(
        gfp.brate,
        gfp.version,
        gfp.out_samplerate
      );
    }

    if (gfp.out_samplerate !== 0) {
      if (gfp.out_samplerate < 16000) {
        gfp.VBR_mean_bitrate_kbps = Math.max(gfp.VBR_mean_bitrate_kbps, 8);
        gfp.VBR_mean_bitrate_kbps = Math.min(gfp.VBR_mean_bitrate_kbps, 64);
      } else if (gfp.out_samplerate < 32000) {
        gfp.VBR_mean_bitrate_kbps = Math.max(gfp.VBR_mean_bitrate_kbps, 8);
        gfp.VBR_mean_bitrate_kbps = Math.min(gfp.VBR_mean_bitrate_kbps, 160);
      } else {
        gfp.VBR_mean_bitrate_kbps = Math.max(gfp.VBR_mean_bitrate_kbps, 32);
        gfp.VBR_mean_bitrate_kbps = Math.min(gfp.VBR_mean_bitrate_kbps, 320);
      }
    }

    /** **************************************************************/
    /* if a filter has not been enabled, see if we should add one: */
    /** **************************************************************/
    if (gfp.lowpassfreq === 0) {
      let lowpass: number;

      switch (gfp.VBR) {
        case VbrMode.vbr_off: {
          const lh = new LowPassHighPass();
          Lame.optimum_bandwidth(lh, gfp.brate);
          lowpass = lh.lowerlimit;
          break;
        }
        case VbrMode.vbr_abr: {
          const lh = new LowPassHighPass();
          Lame.optimum_bandwidth(lh, gfp.VBR_mean_bitrate_kbps);
          lowpass = lh.lowerlimit;
          break;
        }
        case VbrMode.vbr_rh: {
          const x = [
            19500, 19000, 18600, 18000, 17500, 16000, 15600, 14900, 12500,
            10000, 3950,
          ];
          if (gfp.VBR_q >= 0 && gfp.VBR_q <= 9) {
            const a = x[gfp.VBR_q];
            const b = x[gfp.VBR_q + 1];
            const m = gfp.VBR_q_frac;
            lowpass = linearInterpolation(a, b, m);
          } else {
            lowpass = 19500;
          }
          break;
        }
        default: {
          const x = [
            19500, 19000, 18500, 18000, 17500, 16500, 15500, 14500, 12500, 9500,
            3950,
          ];
          if (gfp.VBR_q >= 0 && gfp.VBR_q <= 9) {
            const a = x[gfp.VBR_q];
            const b = x[gfp.VBR_q + 1];
            const m = gfp.VBR_q_frac;
            lowpass = linearInterpolation(a, b, m);
          } else {
            lowpass = 19500;
          }
        }
      }
      if (
        gfp.mode === MPEGMode.MONO &&
        (gfp.VBR === VbrMode.vbr_off || gfp.VBR === VbrMode.vbr_abr)
      )
        lowpass *= 1.5;

      gfp.lowpassfreq = Math.trunc(lowpass);
    }

    if (gfp.out_samplerate === 0) {
      if (2 * gfp.lowpassfreq > gfp.in_samplerate) {
        gfp.lowpassfreq = gfp.in_samplerate / 2;
      }
      gfp.out_samplerate = Lame.optimum_samplefreq(
        Math.trunc(gfp.lowpassfreq),
        gfp.in_samplerate
      );
    }

    gfp.lowpassfreq = Math.min(20500, gfp.lowpassfreq);
    gfp.lowpassfreq = Math.min(gfp.out_samplerate / 2, gfp.lowpassfreq);

    if (gfp.VBR === VbrMode.vbr_off) {
      gfp.compression_ratio =
        (gfp.out_samplerate * 16 * gfc.channels_out) / (1e3 * gfp.brate);
    }
    if (gfp.VBR === VbrMode.vbr_abr) {
      gfp.compression_ratio =
        (gfp.out_samplerate * 16 * gfc.channels_out) /
        (1e3 * gfp.VBR_mean_bitrate_kbps);
    }

    /*
     * do not compute ReplayGain values and do not find the peak sample if
     * we can't store them
     */
    gfc.findPeakSample = false;

    gfc.findReplayGain = false;

    if (gfc.findReplayGain) {
      if (
        this.ga!.InitGainAnalysis(gfc.rgdata, gfp.out_samplerate) ===
        GainAnalysis.INIT_GAIN_ANALYSIS_ERROR
      ) {
        throw new Error('INIT_GAIN_ANALYSIS_ERROR');
      }
    }

    gfc.mode_gr = gfp.out_samplerate <= 24000 ? 1 : 2;
    /*
     * Number of granules per frame
     */
    gfp.framesize = 576 * gfc.mode_gr;

    gfc.resample_ratio = gfp.in_samplerate / gfp.out_samplerate;

    /**
     * <PRE>
     *  sample freq       bitrate     compression ratio
     *     [kHz]      [kbps/channel]   for 16 bit input
     *     44.1            56               12.6
     *     44.1            64               11.025
     *     44.1            80                8.82
     *     22.05           24               14.7
     *     22.05           32               11.025
     *     22.05           40                8.82
     *     16              16               16.0
     *     16              24               10.667
     * </PRE>
     */
    /**
     * <PRE>
     *  For VBR, take a guess at the compression_ratio.
     *  For example:
     *
     *    VBR_q    compression     like
     *     -        4.4         320 kbps/44 kHz
     *   0...1      5.5         256 kbps/44 kHz
     *     2        7.3         192 kbps/44 kHz
     *     4        8.8         160 kbps/44 kHz
     *     6       11           128 kbps/44 kHz
     *     9       14.7          96 kbps
     *
     *  for lower bitrates, downsample with --resample
     * </PRE>
     */
    switch (gfp.VBR) {
      case VbrMode.vbr_mt:
      case VbrMode.vbr_rh:
      case VbrMode.vbr_mtrh:
        {
          /* numbers are a bit strange, but they determine the lowpass value */
          const cmp = [5.7, 6.5, 7.3, 8.2, 10, 11.9, 13, 14, 15, 16.5];
          gfp.compression_ratio = cmp[gfp.VBR_q];
        }
        break;
      case VbrMode.vbr_abr:
        gfp.compression_ratio =
          (gfp.out_samplerate * 16 * gfc.channels_out) /
          (1e3 * gfp.VBR_mean_bitrate_kbps);
        break;
      default:
        gfp.compression_ratio =
          (gfp.out_samplerate * 16 * gfc.channels_out) / (1e3 * gfp.brate);
        break;
    }

    /*
     * mode = -1 (not set by user) or mode = MONO (because of only 1 input
     * channel). If mode has not been set, then select J-STEREO
     */
    if (gfp.mode === MPEGMode.NOT_SET) {
      gfp.mode = MPEGMode.JOINT_STEREO;
    }

    /* apply user driven high pass filter */
    if (gfp.highpassfreq > 0) {
      gfc.highpass1 = 2 * gfp.highpassfreq;

      if (gfp.highpasswidth >= 0)
        gfc.highpass2 = 2 * (gfp.highpassfreq + gfp.highpasswidth);
      /* 0% above on default */ else
        gfc.highpass2 = (1 + 0.0) * 2 * gfp.highpassfreq;

      gfc.highpass1 /= gfp.out_samplerate;
      gfc.highpass2 /= gfp.out_samplerate;
    } else {
      gfc.highpass1 = 0;
      gfc.highpass2 = 0;
    }
    /* apply user driven low pass filter */
    if (gfp.lowpassfreq > 0) {
      gfc.lowpass2 = 2 * gfp.lowpassfreq;
      if (gfp.lowpasswidth >= 0) {
        gfc.lowpass1 = 2 * (gfp.lowpassfreq - gfp.lowpasswidth);
        if (gfc.lowpass1 < 0) /* has to be >= 0 */ gfc.lowpass1 = 0;
      } else {
        /* 0% below on default */
        gfc.lowpass1 = (1 - 0.0) * 2 * gfp.lowpassfreq;
      }
      gfc.lowpass1 /= gfp.out_samplerate;
      gfc.lowpass2 /= gfp.out_samplerate;
    } else {
      gfc.lowpass1 = 0;
      gfc.lowpass2 = 0;
    }

    /** ********************************************************************/
    /* compute info needed for polyphase filter (filter type==0, default) */
    /** ********************************************************************/
    Lame.lame_init_params_ppflt(gfp);
    /** *****************************************************
     * samplerate and bitrate index
     *******************************************************/
    gfc.samplerate_index = Lame.smpFrqIndex(gfp.out_samplerate, gfp);
    if (gfc.samplerate_index < 0) {
      throw new Error('Invalid sample rate');
    }

    if (gfp.VBR === VbrMode.vbr_off) {
      gfp.brate = findNearestBitrate(
        gfp.brate,
        gfp.version,
        gfp.out_samplerate
      );
      gfc.bitrate_index = bitrateIndex(
        gfp.brate,
        gfp.version,
        gfp.out_samplerate
      );
      if (gfc.bitrate_index <= 0) {
        throw new Error('Invalid bitrate/samplerate combination');
      }
    } else {
      gfc.bitrate_index = 1;
    }

    this.bs!.init_bit_stream_w(gfc);

    const j =
      gfc.samplerate_index +
      3 * gfp.version +
      6 * (gfp.out_samplerate < 16000 ? 1 : 0);
    for (let i = 0; i < SBMAX_l + 1; i++)
      gfc.scalefac_band.l[i] = this.qupvt!.sfBandIndex[j].l[i];

    for (let i = 0; i < PSFB21 + 1; i++) {
      const size = (gfc.scalefac_band.l[22] - gfc.scalefac_band.l[21]) / PSFB21;
      const start = gfc.scalefac_band.l[21] + i * size;
      gfc.scalefac_band.psfb21[i] = start;
    }
    gfc.scalefac_band.psfb21[PSFB21] = 576;

    for (let i = 0; i < SBMAX_s + 1; i++)
      gfc.scalefac_band.s[i] = this.qupvt!.sfBandIndex[j].s[i];

    for (let i = 0; i < PSFB12 + 1; i++) {
      const size = (gfc.scalefac_band.s[13] - gfc.scalefac_band.s[12]) / PSFB12;
      const start = gfc.scalefac_band.s[12] + i * size;
      gfc.scalefac_band.psfb12[i] = start;
    }
    gfc.scalefac_band.psfb12[PSFB12] = 192;
    /* determine the mean bitrate for main data */
    if (gfp.version === 1)
      /* MPEG 1 */
      gfc.sideinfo_len = gfc.channels_out === 1 ? 4 + 17 : 4 + 32;
    /* MPEG 2 */ else
      gfc.sideinfo_len = gfc.channels_out === 1 ? 4 + 9 : 4 + 17;

    this.lame_init_bitstream(gfp);

    gfc.Class_ID = LAME_ID;

    {
      let k;

      for (k = 0; k < 19; k++)
        gfc.nsPsy.pefirbuf[k] = 700 * gfc.mode_gr * gfc.channels_out;

      if (gfp.ATHtype === -1) gfp.ATHtype = 4;
    }
    console.assert(gfp.VBR_q <= 9);
    console.assert(gfp.VBR_q >= 0);

    switch (gfp.VBR) {
      case VbrMode.vbr_mt:
        gfp.VBR = VbrMode.vbr_mtrh;
      // $FALL-THROUGH$
      // eslint-disable-next-line no-fallthrough
      case VbrMode.vbr_mtrh: {
        if (gfp.useTemporal === null) {
          gfp.useTemporal = false;
          /* off by default for this VBR mode */
        }

        this.p.applyPresetFromQuality(gfp, gfp.VBR_q);
        /**
         * <PRE>
         *   The newer VBR code supports only a limited
         *     subset of quality levels:
         *     9-5=5 are the same, uses x^3/4 quantization
         *   4-0=0 are the same  5 plus best huffman divide code
         * </PRE>
         */
        if (gfp.quality < 0) gfp.quality = Lame.LAME_DEFAULT_QUALITY;
        if (gfp.quality < 5) gfp.quality = 0;
        if (gfp.quality > 5) gfp.quality = 5;

        gfc.PSY.mask_adjust = gfp.maskingadjust;
        gfc.PSY.mask_adjust_short = gfp.maskingadjust_short;

        /*
         * sfb21 extra only with MPEG-1 at higher sampling rates
         */
        if (gfp.experimentalY) gfc.sfb21_extra = false;
        else gfc.sfb21_extra = gfp.out_samplerate > 44000;

        gfc.iteration_loop = new CBRNewIterationLoop(this.qu!);
        break;
      }
      case VbrMode.vbr_rh: {
        this.p.applyPresetFromQuality(gfp, gfp.VBR_q);

        gfc.PSY.mask_adjust = gfp.maskingadjust;
        gfc.PSY.mask_adjust_short = gfp.maskingadjust_short;

        /*
         * sfb21 extra only with MPEG-1 at higher sampling rates
         */
        if (gfp.experimentalY) gfc.sfb21_extra = false;
        else gfc.sfb21_extra = gfp.out_samplerate > 44000;

        /*
         * VBR needs at least the output of GPSYCHO, so we have to garantee
         * that by setting a minimum quality level, actually level 6 does
         * it. down to level 6
         */
        if (gfp.quality > 6) gfp.quality = 6;

        if (gfp.quality < 0) gfp.quality = Lame.LAME_DEFAULT_QUALITY;

        gfc.iteration_loop = new CBRNewIterationLoop(this.qu!);
        break;
      }

      default: /* cbr/abr */ {
        /*
         * no sfb21 extra with CBR code
         */
        gfc.sfb21_extra = false;

        if (gfp.quality < 0) gfp.quality = Lame.LAME_DEFAULT_QUALITY;

        const vbrmode = gfp.VBR;
        if (vbrmode === VbrMode.vbr_off) gfp.VBR_mean_bitrate_kbps = gfp.brate;
        /* second, set parameters depending on bitrate */
        this.p.apply_preset(gfp, gfp.VBR_mean_bitrate_kbps);
        gfp.VBR = vbrmode;

        gfc.PSY.mask_adjust = gfp.maskingadjust;
        gfc.PSY.mask_adjust_short = gfp.maskingadjust_short;

        if (vbrmode === VbrMode.vbr_off) {
          gfc.iteration_loop = new CBRNewIterationLoop(this.qu!);
        } else {
          gfc.iteration_loop = new CBRNewIterationLoop(this.qu!);
        }
        break;
      }
    }
    console.assert(gfp.scale >= 0);
    /* initialize default values common for all modes */

    if (gfp.VBR !== VbrMode.vbr_off) {
      /* choose a min/max bitrate for VBR */
      /* if the user didn't specify VBR_max_bitrate: */
      gfc.VBR_min_bitrate = 1;
      /*
       * default: allow 8 kbps (MPEG-2) or 32 kbps (MPEG-1)
       */
      gfc.VBR_max_bitrate = 14;
      /*
       * default: allow 160 kbps (MPEG-2) or 320 kbps (MPEG-1)
       */
      if (gfp.out_samplerate < 16000) gfc.VBR_max_bitrate = 8;
      /* default: allow 64 kbps (MPEG-2.5) */
      if (gfp.VBR_min_bitrate_kbps !== 0) {
        gfp.VBR_min_bitrate_kbps = findNearestBitrate(
          gfp.VBR_min_bitrate_kbps,
          gfp.version,
          gfp.out_samplerate
        );
        gfc.VBR_min_bitrate = bitrateIndex(
          gfp.VBR_min_bitrate_kbps,
          gfp.version,
          gfp.out_samplerate
        );
        if (gfc.VBR_min_bitrate < 0) return -1;
      }
      if (gfp.VBR_max_bitrate_kbps !== 0) {
        gfp.VBR_max_bitrate_kbps = findNearestBitrate(
          gfp.VBR_max_bitrate_kbps,
          gfp.version,
          gfp.out_samplerate
        );
        gfc.VBR_max_bitrate = bitrateIndex(
          gfp.VBR_max_bitrate_kbps,
          gfp.version,
          gfp.out_samplerate
        );
        if (gfc.VBR_max_bitrate < 0) return -1;
      }
      gfp.VBR_min_bitrate_kbps = getBitrate(gfp.version, gfc.VBR_min_bitrate);
      gfp.VBR_max_bitrate_kbps = getBitrate(gfp.version, gfc.VBR_max_bitrate);
      gfp.VBR_mean_bitrate_kbps = Math.min(
        getBitrate(gfp.version, gfc.VBR_max_bitrate),
        gfp.VBR_mean_bitrate_kbps
      );
      gfp.VBR_mean_bitrate_kbps = Math.max(
        getBitrate(gfp.version, gfc.VBR_min_bitrate),
        gfp.VBR_mean_bitrate_kbps
      );
    }

    /* initialize internal qval settings */
    Lame.lame_init_qval(gfp);
    console.assert(gfp.scale >= 0);
    /*
     * automatic ATH adjustment on
     */
    if (gfp.athaa_type < 0) gfc.ATH.useAdjust = 3;
    else gfc.ATH.useAdjust = gfp.athaa_type;

    /* initialize internal adaptive ATH settings -jd */
    gfc.ATH.aaSensitivityP = Math.pow(10.0, gfp.athaa_sensitivity / -10.0);

    if (gfp.short_blocks === null) {
      gfp.short_blocks = ShortBlock.short_block_allowed;
    }

    /*
     * Note Jan/2003: Many hardware decoders cannot handle short blocks in
     * regular stereo mode unless they are coupled (same type in both
     * channels) it is a rare event (1 frame per min. or so) that LAME would
     * use uncoupled short blocks, so lets turn them off until we decide how
     * to handle this. No other encoders allow uncoupled short blocks, even
     * though it is in the standard.
     */
    /*
     * rh 20040217: coupling makes no sense for mono and dual-mono streams
     */
    if (
      gfp.short_blocks === ShortBlock.short_block_allowed &&
      (gfp.mode === MPEGMode.JOINT_STEREO || gfp.mode === MPEGMode.STEREO)
    ) {
      gfp.short_blocks = ShortBlock.short_block_coupled;
    }

    if (gfp.quant_comp < 0) gfp.quant_comp = 1;
    if (gfp.quant_comp_short < 0) gfp.quant_comp_short = 0;

    if (gfp.msfix < 0) gfp.msfix = 0;

    /* select psychoacoustic model */
    gfp.exp_nspsytune |= 1;

    if (gfp.internal_flags.nsPsy.attackthre < 0)
      gfp.internal_flags.nsPsy.attackthre = PsyModel.NSATTACKTHRE;
    if (gfp.internal_flags.nsPsy.attackthre_s < 0)
      gfp.internal_flags.nsPsy.attackthre_s = PsyModel.NSATTACKTHRE_S;

    console.assert(gfp.scale >= 0);

    if (gfp.scale < 0) gfp.scale = 1;

    if (gfp.ATHtype < 0) gfp.ATHtype = 4;

    if (gfp.ATHcurve < 0) gfp.ATHcurve = 4;

    if (gfp.athaa_loudapprox < 0) gfp.athaa_loudapprox = 2;

    if (gfp.interChRatio < 0) gfp.interChRatio = 0;

    if (gfp.useTemporal === null) gfp.useTemporal = true;
    /* on by default */

    /*
     * padding method as described in
     * "MPEG-Layer3 / Bitstream Syntax and Decoding" by Martin Sieler, Ralph
     * Sperschneider
     *
     * note: there is no padding for the very first frame
     *
     * Robert Hegemann 2000-06-22
     */
    gfc.slot_lag = 0;
    gfc.frac_SpF = 0;
    if (gfp.VBR === VbrMode.vbr_off) {
      gfc.frac_SpF =
        ((gfp.version + 1) * 72000 * gfp.brate) %
        Math.trunc(gfp.out_samplerate);
      gfc.slot_lag = gfc.frac_SpF;
    }

    this.qupvt!.iteration_init(gfp);
    this.psy!.psymodel_init(gfp);
    console.assert(gfp.scale >= 0);
    return 0;
  }

  private static update_inbuffer_size(
    gfc: LameInternalFlags,
    nsamples: number
  ) {
    if (gfc.in_buffer_0 === null || gfc.in_buffer_nsamples < nsamples) {
      gfc.in_buffer_0 = new Float32Array(nsamples);
      gfc.in_buffer_1 = new Float32Array(nsamples);
      gfc.in_buffer_nsamples = nsamples;
    }
  }

  lame_encode_flush(
    gfp: LameGlobalFlags,
    mp3buffer: Uint8Array,
    mp3bufferPos: number,
    mp3buffer_size: number
  ) {
    const gfc = gfp.internal_flags;
    const buffer = Array.from({ length: 2 }, () => new Int16Array(1152));
    let imp3 = 0;
    let mp3count;
    let mp3buffer_size_remaining;

    /*
     * we always add POSTDELAY=288 padding to make sure granule with real
     * data can be complety decoded (because of 50% overlap with next
     * granule
     */
    let end_padding;
    let frames_left;
    let samples_to_encode = gfc.mf_samples_to_encode - POSTDELAY;
    const mf_needed = Lame.calcNeeded(gfp);

    /* Was flush already called? */
    if (gfc.mf_samples_to_encode < 1) {
      return 0;
    }
    mp3count = 0;

    if (gfp.in_samplerate !== gfp.out_samplerate) {
      /*
       * delay due to resampling; needs to be fixed, if resampling code
       * gets changed
       */
      samples_to_encode += (16 * gfp.out_samplerate) / gfp.in_samplerate;
    }
    end_padding = gfp.framesize - (samples_to_encode % gfp.framesize);
    if (end_padding < 576) end_padding += gfp.framesize;
    gfp.encoder_padding = end_padding;

    frames_left = (samples_to_encode + end_padding) / gfp.framesize;

    /*
     * send in a frame of 0 padding until all internal sample buffers are
     * flushed
     */
    while (frames_left > 0 && imp3 >= 0) {
      let bunch = mf_needed - gfc.mf_size;
      const frame_num = gfp.frameNum;

      bunch *= gfp.in_samplerate;
      bunch /= gfp.out_samplerate;
      if (bunch > 1152) bunch = 1152;
      if (bunch < 1) bunch = 1;

      mp3buffer_size_remaining = mp3buffer_size - mp3count;

      /* if user specifed buffer size = 0, dont check size */
      if (mp3buffer_size === 0) mp3buffer_size_remaining = 0;

      imp3 = this.lame_encode_buffer(
        gfp,
        buffer[0],
        buffer[1],
        bunch,
        mp3buffer,
        mp3bufferPos,
        mp3buffer_size_remaining
      );

      mp3bufferPos += imp3;
      mp3count += imp3;
      frames_left -= frame_num !== gfp.frameNum ? 1 : 0;
    }
    /*
     * Set gfc.mf_samples_to_encode to 0, so we may detect and break loops
     * calling it more than once in a row.
     */
    gfc.mf_samples_to_encode = 0;

    if (imp3 < 0) {
      /* some type of fatal error */
      return imp3;
    }

    mp3buffer_size_remaining = mp3buffer_size - mp3count;
    /* if user specifed buffer size = 0, dont check size */
    if (mp3buffer_size === 0) mp3buffer_size_remaining = 0;

    /* mp3 related stuff. bit buffer might still contain some mp3 data */
    this.bs!.flush_bitstream(gfp);
    imp3 = this.bs!.copy_buffer(
      gfc,
      mp3buffer,
      mp3bufferPos,
      mp3buffer_size_remaining,
      1
    );
    if (imp3 < 0) {
      /* some type of fatal error */
      return imp3;
    }
    mp3bufferPos += imp3;
    mp3count += imp3;
    mp3buffer_size_remaining = mp3buffer_size - mp3count;
    /* if user specifed buffer size = 0, dont check size */
    if (mp3buffer_size === 0) mp3buffer_size_remaining = 0;

    return mp3count;
  }

  lame_encode_buffer(
    gfp: LameGlobalFlags,
    buffer_l: Int16Array,
    buffer_r: Int16Array,
    nsamples: number,
    mp3buf: Uint8Array,
    mp3bufPos: number,
    mp3buf_size: number
  ) {
    const gfc = gfp.internal_flags;

    if (gfc.Class_ID !== LAME_ID) return -3;

    if (nsamples === 0) return 0;

    Lame.update_inbuffer_size(gfc, nsamples);

    const in_buffer = [gfc.in_buffer_0!, gfc.in_buffer_1!] as const;

    /* make a copy of input buffer, changing type to sample_t */
    for (let i = 0; i < nsamples; i++) {
      in_buffer[0][i] = buffer_l[i];
      if (gfc.channels_in > 1) in_buffer[1][i] = buffer_r[i];
    }

    return this.lame_encode_buffer_sample(
      gfp,
      in_buffer[0],
      in_buffer[1],
      nsamples,
      mp3buf,
      mp3bufPos,
      mp3buf_size
    );
  }

  private static calcNeeded(gfp: LameGlobalFlags) {
    let mf_needed = BLKSIZE + gfp.framesize - FFTOFFSET;
    /*
     * amount needed for FFT
     */
    mf_needed = Math.max(mf_needed, 512 + gfp.framesize - 32);
    console.assert(MFSIZE >= mf_needed);

    return mf_needed;
  }

  private lame_encode_buffer_sample(
    gfp: LameGlobalFlags,
    buffer_l: Float32Array,
    buffer_r: Float32Array,
    nsamples: number,
    mp3buf: Uint8Array,
    mp3bufPos: number,
    mp3buf_size: number
  ) {
    const gfc = gfp.internal_flags;
    let mp3size = 0;
    let ret;
    let i;
    let ch;
    if (gfc.Class_ID !== LAME_ID) return -3;

    if (nsamples === 0) return 0;

    /* copy out any tags that may have been written into bitstream */
    const mp3out = this.bs!.copy_buffer(gfc, mp3buf, mp3bufPos, mp3buf_size, 0);
    if (mp3out < 0) return mp3out;
    /* not enough buffer space */
    mp3bufPos += mp3out;
    mp3size += mp3out;

    const in_buffer = [buffer_l, buffer_r] as const;

    /* Apply user defined re-scaling */

    /* user selected scaling of the samples */
    if (
      !isCloseToEachOther(gfp.scale, 0) &&
      !isCloseToEachOther(gfp.scale, 1.0)
    ) {
      for (i = 0; i < nsamples; ++i) {
        in_buffer[0][i] *= gfp.scale;
        if (gfc.channels_out === 2) in_buffer[1][i] *= gfp.scale;
      }
    }

    /* Downsample to Mono if 2 channels in and 1 channel out */
    if (gfp.num_channels === 2 && gfc.channels_out === 1) {
      for (i = 0; i < nsamples; ++i) {
        in_buffer[0][i] = 0.5 * (in_buffer[0][i] + in_buffer[1][i]);
        in_buffer[1][i] = 0.0;
      }
    }

    const mf_needed = Lame.calcNeeded(gfp);

    const mfbuf: [Float32Array, Float32Array] = [gfc.mfbuf[0], gfc.mfbuf[1]];

    let in_bufferPos = 0;
    while (nsamples > 0) {
      let n_in = 0;
      /* number of input samples processed with fill_buffer */
      let n_out = 0;
      /* number of samples output with fill_buffer */
      /* n_in <> n_out if we are resampling */

      const in_buffer_ptr: [Float32Array, Float32Array] = [
        in_buffer[0],
        in_buffer[1],
      ];
      /* copy in new samples into mfbuf, with resampling */
      const inOut = new InOut();
      Lame.fill_buffer(
        gfp,
        mfbuf,
        in_buffer_ptr,
        in_bufferPos,
        nsamples,
        inOut
      );
      n_in = inOut.n_in;
      n_out = inOut.n_out;

      /* compute ReplayGain of resampled input if requested */
      if (gfc.findReplayGain)
        if (
          this.ga!.analyzeSamples(
            gfc.rgdata,
            mfbuf[0],
            gfc.mf_size,
            mfbuf[1],
            gfc.mf_size,
            n_out,
            gfc.channels_out
          ) === GainAnalysis.GAIN_ANALYSIS_ERROR
        )
          return -6;

      /* update in_buffer counters */
      nsamples -= n_in;
      in_bufferPos += n_in;
      // if (gfc.channels_out === 2) in_bufferPos += n_in;

      /* update mfbuf[] counters */
      gfc.mf_size += n_out;
      console.assert(gfc.mf_size <= MFSIZE);

      /*
       * lame_encode_flush may have set gfc.mf_sample_to_encode to 0 so we
       * have to reinitialize it here when that happened.
       */
      if (gfc.mf_samples_to_encode < 1) {
        gfc.mf_samples_to_encode = ENCDELAY + POSTDELAY;
      }
      gfc.mf_samples_to_encode += n_out;

      if (gfc.mf_size >= mf_needed) {
        /* encode the frame. */
        /* mp3buf = pointer to current location in buffer */
        /* mp3buf_size = size of original mp3 output buffer */
        /* = 0 if we should not worry about the */
        /* buffer size because calling program is */
        /* to lazy to compute it */
        /* mp3size = size of data written to buffer so far */
        /* mp3buf_size-mp3size = amount of space avalable */

        let buf_size = mp3buf_size - mp3size;
        if (mp3buf_size === 0) buf_size = 0;

        ret = this.lame_encode_frame(
          gfp,
          mfbuf[0],
          mfbuf[1],
          mp3buf,
          mp3bufPos,
          buf_size
        );

        if (ret < 0) return ret;
        mp3bufPos += ret;
        mp3size += ret;

        /* shift out old samples */
        gfc.mf_size -= gfp.framesize;
        gfc.mf_samples_to_encode -= gfp.framesize;
        for (ch = 0; ch < gfc.channels_out; ch++)
          for (i = 0; i < gfc.mf_size; i++)
            mfbuf[ch][i] = mfbuf[ch][i + gfp.framesize];
      }
    }
    console.assert(nsamples === 0);

    return mp3size;
  }

  private lame_encode_frame(
    gfp: LameGlobalFlags,
    inbuf_l: Float32Array,
    inbuf_r: Float32Array,
    mp3buf: Uint8Array,
    mp3bufPos: number,
    mp3buf_size: number
  ) {
    const ret = this.enc!.lame_encode_mp3_frame(
      gfp,
      inbuf_l,
      inbuf_r,
      mp3buf,
      mp3bufPos,
      mp3buf_size
    );
    gfp.frameNum++;
    return ret;
  }

  private static fill_buffer_resample(
    gfp: LameGlobalFlags,
    outbuf: Float32Array,
    outbufPos: number,
    desired_len: number,
    inbuf: Float32Array,
    in_bufferPos: number,
    len: number,
    num_used: NumUsed,
    ch: number
  ) {
    const gfc = gfp.internal_flags;
    let i;
    let j = 0;
    let k;
    /* number of convolution functions to pre-compute */
    let bpc = gfp.out_samplerate / gcd(gfp.out_samplerate, gfp.in_samplerate);
    if (bpc > BPC) bpc = BPC;

    const intratio =
      Math.abs(gfc.resample_ratio - Math.floor(0.5 + gfc.resample_ratio)) <
      0.0001
        ? 1
        : 0;
    let fcn = 1.0 / gfc.resample_ratio;
    if (fcn > 1.0) fcn = 1.0;
    let filter_l = 31;
    if (filter_l % 2 === 0) --filter_l;
    /* must be odd */
    filter_l += intratio;
    /* unless resample_ratio=int, it must be even */

    const BLACKSIZE = filter_l + 1;
    /* size of data needed for FIR */

    if (!gfc.fill_buffer_resample_init) {
      gfc.inbuf_old[0] = new Float32Array(BLACKSIZE);
      gfc.inbuf_old[1] = new Float32Array(BLACKSIZE);
      for (i = 0; i <= 2 * bpc; ++i)
        gfc.blackfilt[i] = new Float32Array(BLACKSIZE);

      gfc.itime[0] = 0;
      gfc.itime[1] = 0;

      /* precompute blackman filter coefficients */
      for (j = 0; j <= 2 * bpc; j++) {
        let sum = 0;
        const offset = (j - bpc) / (2 * bpc);
        for (i = 0; i <= filter_l; i++) {
          gfc.blackfilt[j][i] = blackmanWindow(i - offset, fcn, filter_l);
          sum += gfc.blackfilt[j][i];
        }
        for (i = 0; i <= filter_l; i++) gfc.blackfilt[j][i] /= sum;
      }
      gfc.fill_buffer_resample_init = true;
    }

    const inbuf_old = gfc.inbuf_old[ch];

    /* time of j'th element in inbuf = itime + j/ifreq; */
    /* time of k'th element in outbuf = j/ofreq */
    for (k = 0; k < desired_len; k++) {
      const time0 = k * gfc.resample_ratio;
      /* time of k'th output sample */
      j = Math.floor(time0 - gfc.itime[ch]);

      /* check if we need more input data */
      if (filter_l + j - filter_l / 2 >= len) break;

      /* blackman filter. by default, window centered at j+.5(filter_l%2) */
      /* but we want a window centered at time0. */
      const offset = time0 - gfc.itime[ch] - (j + 0.5 * (filter_l % 2));
      console.assert(Math.abs(offset) <= 0.501);

      /* find the closest precomputed window for this offset: */
      const joff = Math.floor(offset * 2 * bpc + bpc + 0.5);
      let xvalue = 0;
      for (i = 0; i <= filter_l; ++i) {
        /* force integer index */
        const j2 = Math.trunc(i + j - filter_l / 2);
        console.assert(j2 < len);
        console.assert(j2 + BLACKSIZE >= 0);
        const y = j2 < 0 ? inbuf_old[BLACKSIZE + j2] : inbuf[in_bufferPos + j2];
        xvalue += y * gfc.blackfilt[joff][i];
      }
      outbuf[outbufPos + k] = xvalue;
    }

    /* k = number of samples added to outbuf */
    /* last k sample used data from [j-filter_l/2,j+filter_l-filter_l/2] */

    /* how many samples of input data were used: */
    num_used.num_used = Math.min(len, filter_l + j - filter_l / 2);

    /*
     * adjust our input time counter. Incriment by the number of samples
     * used, then normalize so that next output sample is at time 0, next
     * input buffer is at time itime[ch]
     */
    gfc.itime[ch] += num_used.num_used - k * gfc.resample_ratio;

    /* save the last BLACKSIZE samples into the inbuf_old buffer */
    if (num_used.num_used >= BLACKSIZE) {
      for (i = 0; i < BLACKSIZE; i++)
        inbuf_old[i] = inbuf[in_bufferPos + num_used.num_used + i - BLACKSIZE];
    } else {
      /* shift in num_used.num_used samples into inbuf_old */
      const n_shift = BLACKSIZE - num_used.num_used;
      /*
       * number of samples to
       * shift
       */

      /*
       * shift n_shift samples by num_used.num_used, to make room for the
       * num_used new samples
       */
      for (i = 0; i < n_shift; ++i)
        inbuf_old[i] = inbuf_old[i + num_used.num_used];

      /* shift in the num_used.num_used samples */
      for (j = 0; i < BLACKSIZE; ++i, ++j)
        inbuf_old[i] = inbuf[in_bufferPos + j];

      console.assert(j === num_used.num_used);
    }
    return k;
    /* return the number samples created at the new samplerate */
  }

  private static fill_buffer(
    gfp: LameGlobalFlags,
    mfbuf: [Float32Array, Float32Array],
    in_buffer: Float32Array[],
    in_bufferPos: number,
    nsamples: number,
    io: InOut
  ) {
    const gfc = gfp.internal_flags;

    /* copy in new samples into mfbuf, with resampling if necessary */
    if (gfc.resample_ratio < 0.9999 || gfc.resample_ratio > 1.0001) {
      for (let ch = 0; ch < gfc.channels_out; ch++) {
        const numUsed = new NumUsed();
        io.n_out = Lame.fill_buffer_resample(
          gfp,
          mfbuf[ch],
          gfc.mf_size,
          gfp.framesize,
          in_buffer[ch],
          in_bufferPos,
          nsamples,
          numUsed,
          ch
        );
        io.n_in = numUsed.num_used;
      }
    } else {
      io.n_out = Math.min(gfp.framesize, nsamples);
      io.n_in = io.n_out;
      for (let i = 0; i < io.n_out; ++i) {
        mfbuf[0][gfc.mf_size + i] = in_buffer[0][in_bufferPos + i];
        if (gfc.channels_out === 2)
          mfbuf[1][gfc.mf_size + i] = in_buffer[1][in_bufferPos + i];
      }
    }
  }
}
