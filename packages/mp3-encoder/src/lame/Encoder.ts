import type { BitStream } from './BitStream';
import { III_psy_ratio } from './III_psy_ratio';
import type { LameGlobalFlags } from './LameGlobalFlags';
import type { LameInternalFlags } from './LameInternalFlags';
import { MPEGMode } from './MPEGMode';
import { NewMDCT } from './NewMDCT';
import type { PsyModel } from './PsyModel';
import type { VBRTag } from './VBRTag';
import { VbrMode } from './VbrMode';
import {
  BLKSIZE,
  FFTOFFSET,
  MPG_MD_LR_LR,
  MPG_MD_MS_LR,
  NORM_TYPE,
  SHORT_TYPE,
} from './constants';

export class Encoder {
  private bs: BitStream | null = null;

  psy: PsyModel | null = null;

  private __psy: PsyModel | null = null;

  private vbr: VBRTag | null = null;

  setModules(bs: BitStream, psy: PsyModel, vbr: VBRTag) {
    this.bs = bs;
    this.psy = psy;
    this.__psy = psy;
    this.vbr = vbr;
  }

  private newMDCT = new NewMDCT();

  /** *********************************************************************
   *
   * encoder and decoder delays
   *
   ***********************************************************************/

  /**
   * <PRE>
   * layer III enc->dec delay:  1056 (1057?)   (observed)
   * layer  II enc->dec delay:   480  (481?)   (observed)
   *
   * polyphase 256-16             (dec or enc)        = 240
   * mdct      256+32  (9*32)     (dec or enc)        = 288
   * total:    512+16
   *
   * My guess is that delay of polyphase filterbank is actualy 240.5
   * (there are technical reasons for this, see postings in mp3encoder).
   * So total Encode+Decode delay = ENCDELAY + 528 + 1
   * </PRE>
   */

  /**
   * auto-adjust of ATH, useful for low volume Gabriel Bouvigne 3 feb 2001
   *
   * modifies some values in gfp.internal_flags!.ATH (gfc.ATH)
   */
  // private void adjust_ATH(final LameInternalFlags gfc) {
  private adjust_ATH(gfc: LameInternalFlags) {
    if (gfc.ATH!.useAdjust === 0) {
      gfc.ATH!.adjust = 1.0;
      /* no adjustment */
      return;
    }

    /* jd - 2001 mar 12, 27, jun 30 */
    /* loudness based on equal loudness curve; */
    /* use granule with maximum combined loudness */
    let max_pow = gfc.loudness_sq[0][0];
    let gr2_max = gfc.loudness_sq[1][0];
    if (gfc.channels_out === 2) {
      max_pow += gfc.loudness_sq[0][1];
      gr2_max += gfc.loudness_sq[1][1];
    } else {
      max_pow += max_pow;
      gr2_max += gr2_max;
    }
    if (gfc.mode_gr === 2) {
      max_pow = Math.max(max_pow, gr2_max);
    }
    max_pow *= 0.5;
    /* max_pow approaches 1.0 for full band noise */

    /* jd - 2001 mar 31, jun 30 */
    /* user tuning of ATH adjustment region */
    max_pow *= gfc.ATH!.aaSensitivityP;

    /*
     * adjust ATH depending on range of maximum value
     */

    /* jd - 2001 feb27, mar12,20, jun30, jul22 */
    /* continuous curves based on approximation */
    /* to GB's original values. */
    /* For an increase in approximate loudness, */
    /* set ATH adjust to adjust_limit immediately */
    /* after a delay of one frame. */
    /* For a loudness decrease, reduce ATH adjust */
    /* towards adjust_limit gradually. */
    /* max_pow is a loudness squared or a power. */
    if (max_pow > 0.03125) {
      /* ((1 - 0.000625)/ 31.98) from curve below */
      if (gfc.ATH!.adjust >= 1.0) {
        gfc.ATH!.adjust = 1.0;
      } else if (gfc.ATH!.adjust < gfc.ATH!.adjustLimit) {
        /* preceding frame has lower ATH adjust; */
        /* ascend only to the preceding adjust_limit */
        /* in case there is leading low volume */
        gfc.ATH!.adjust = gfc.ATH!.adjustLimit;
      }

      gfc.ATH!.adjustLimit = 1.0;
    } else {
      /* adjustment curve */
      /* about 32 dB maximum adjust (0.000625) */
      const adj_lim_new = 31.98 * max_pow + 0.000625;
      if (gfc.ATH!.adjust >= adj_lim_new) {
        /* descend gradually */
        gfc.ATH!.adjust *= adj_lim_new * 0.075 + 0.925;
        if (gfc.ATH!.adjust < adj_lim_new) {
          /* stop descent */
          gfc.ATH!.adjust = adj_lim_new;
        }
      } else if (gfc.ATH!.adjustLimit >= adj_lim_new) {
        /* ascend */
        gfc.ATH!.adjust = adj_lim_new;
      } else if (gfc.ATH!.adjust < gfc.ATH!.adjustLimit) {
        /* preceding frame has lower ATH adjust; */
        /* ascend only to the preceding adjust_limit */
        gfc.ATH!.adjust = gfc.ATH!.adjustLimit;
      }

      gfc.ATH!.adjustLimit = adj_lim_new;
    }
  }

  /**
   * <PRE>
   *  some simple statistics
   *
   *  bitrate index 0: free bitrate . not allowed in VBR mode
   *  : bitrates, kbps depending on MPEG version
   *  bitrate index 15: forbidden
   *
   *  mode_ext:
   *  0:  LR
   *  1:  LR-i
   *  2:  MS
   *  3:  MS-i
   * </PRE>
   */
  private updateStats(gfc: LameInternalFlags) {
    let gr;
    let ch;
    console.assert(gfc.bitrate_index >= 0 && gfc.bitrate_index < 16);
    console.assert(gfc.mode_ext >= 0 && gfc.mode_ext < 4);

    /* count bitrate indices */
    gfc.bitrate_stereoMode_Hist[gfc.bitrate_index][4]++;
    gfc.bitrate_stereoMode_Hist[15][4]++;

    /* count 'em for every mode extension in case of 2 channel encoding */
    if (gfc.channels_out === 2) {
      gfc.bitrate_stereoMode_Hist[gfc.bitrate_index][gfc.mode_ext]++;
      gfc.bitrate_stereoMode_Hist[15][gfc.mode_ext]++;
    }
    for (gr = 0; gr < gfc.mode_gr; ++gr) {
      for (ch = 0; ch < gfc.channels_out; ++ch) {
        let bt = Math.trunc(gfc.l3_side.tt[gr][ch].block_type);
        if (gfc.l3_side.tt[gr][ch].mixed_block_flag !== 0) bt = 4;
        gfc.bitrate_blockType_Hist[gfc.bitrate_index][bt]++;
        gfc.bitrate_blockType_Hist[gfc.bitrate_index][5]++;
        gfc.bitrate_blockType_Hist[15][bt]++;
        gfc.bitrate_blockType_Hist[15][5]++;
      }
    }
  }

  private lame_encode_frame_init(
    gfp: LameGlobalFlags,
    inbuf: [Float32Array, Float32Array]
  ) {
    const gfc = gfp.internal_flags!;

    let ch;
    let gr;

    if (gfc.lame_encode_frame_init === 0) {
      /* prime the MDCT/polyphase filterbank with a short block */
      let i;
      let j;
      const primebuff0 = new Float32Array(286 + 1152 + 576);
      const primebuff1 = new Float32Array(286 + 1152 + 576);
      gfc.lame_encode_frame_init = 1;
      for (i = 0, j = 0; i < 286 + 576 * (1 + gfc.mode_gr); ++i) {
        if (i < 576 * gfc.mode_gr) {
          primebuff0[i] = 0;
          if (gfc.channels_out === 2) primebuff1[i] = 0;
        } else {
          primebuff0[i] = inbuf[0][j];
          if (gfc.channels_out === 2) primebuff1[i] = inbuf[1][j];
          ++j;
        }
      }
      /* polyphase filtering / mdct */
      for (gr = 0; gr < gfc.mode_gr; gr++) {
        for (ch = 0; ch < gfc.channels_out; ch++) {
          gfc.l3_side.tt[gr][ch].block_type = SHORT_TYPE;
        }
      }
      this.newMDCT.mdct_sub48(gfc, primebuff0, primebuff1);

      /* check FFT will not use a negative starting offset */
      console.assert(FFTOFFSET <= 576);
      /* check if we have enough data for FFT */
      console.assert(gfc.mf_size >= BLKSIZE + gfp.framesize - FFTOFFSET);
      /* check if we have enough data for polyphase filterbank */
      console.assert(gfc.mf_size >= 512 + gfp.framesize - 32);
    }
  }

  /**
   * <PRE>
   * encodeframe()           Layer 3
   *
   * encode a single frame
   *
   *
   *    lame_encode_frame()
   *
   *
   *                           gr 0            gr 1
   *    inbuf:           |--------------|--------------|--------------|
   *
   *
   *    Polyphase (18 windows, each shifted 32)
   *    gr 0:
   *    window1          <----512---.
   *    window18                 <----512---.
   *
   *    gr 1:
   *    window1                         <----512---.
   *    window18                                <----512---.
   *
   *
   *
   *    MDCT output:  |--------------|--------------|--------------|
   *
   *    FFT's                    <---------1024---------.
   *                                             <---------1024-------.
   *
   *
   *
   *        inbuf = buffer of PCM data size=MP3 framesize
   *        encoder acts on inbuf[ch][0], but output is delayed by MDCTDELAY
   *        so the MDCT coefficints are from inbuf[ch][-MDCTDELAY]
   *
   *        psy-model FFT has a 1 granule delay, so we feed it data for the
   *        next granule.
   *        FFT is centered over granule:  224+576+224
   *        So FFT starts at:   576-224-MDCTDELAY
   *
   *        MPEG2:  FFT ends at:  BLKSIZE+576-224-MDCTDELAY      (1328)
   *        MPEG1:  FFT ends at:  BLKSIZE+2*576-224-MDCTDELAY    (1904)
   *
   *        MPEG2:  polyphase first window:  [0..511]
   *                          18th window:   [544..1055]          (1056)
   *        MPEG1:            36th window:   [1120..1631]         (1632)
   *                data needed:  512+framesize-32
   *
   *        A close look newmdct.c shows that the polyphase filterbank
   *        only uses data from [0..510] for each window.  Perhaps because the window
   *        used by the filterbank is zero for the last point, so Takehiro's
   *        code doesn't bother to compute with it.
   *
   *        FFT starts at 576-224-MDCTDELAY (304)  = 576-FFTOFFSET
   *
   * </PRE>
   */

  // eslint-disable-next-line complexity
  lame_encode_mp3_frame(
    gfp: LameGlobalFlags,
    inbuf_l: Float32Array,
    inbuf_r: Float32Array,
    mp3buf: Uint8Array,
    mp3bufPos: number,
    mp3buf_size: number
  ) {
    const masking_LR = Array.from({ length: 2 }, () =>
      Array.from({ length: 2 }, () => new III_psy_ratio())
    );

    /*
     * LR masking &
     * energy
     */
    const masking_MS = Array.from({ length: 2 }, () =>
      Array.from({ length: 2 }, () => new III_psy_ratio())
    );
    /* MS masking & energy */
    masking_MS[0][0] = new III_psy_ratio();
    masking_MS[0][1] = new III_psy_ratio();
    masking_MS[1][0] = new III_psy_ratio();
    masking_MS[1][1] = new III_psy_ratio();
    // III_psy_ratio masking[][];
    let masking;
    /* pointer to selected maskings */
    const gfc = gfp.internal_flags!;

    const tot_ener = Array.from({ length: 2 }, () => new Float32Array(4));
    const ms_ener_ratio = [0.5, 0.5];
    const pe = [
      [0, 0],
      [0, 0],
    ];
    const pe_MS = [
      [0, 0],
      [0, 0],
    ];

    // float[][] pe_use;
    let pe_use;

    let ch;
    let gr;

    const inbuf: [Float32Array, Float32Array] = [inbuf_l, inbuf_r];

    if (gfc.lame_encode_frame_init === 0) {
      /* first run? */
      this.lame_encode_frame_init(gfp, inbuf);
    }

    /** ******************** padding *****************************/
    /**
     * <PRE>
     * padding method as described in
     * "MPEG-Layer3 / Bitstream Syntax and Decoding"
     * by Martin Sieler, Ralph Sperschneider
     *
     * note: there is no padding for the very first frame
     *
     * Robert Hegemann 2000-06-22
     * </PRE>
     */
    gfc.padding = 0;
    if ((gfc.slot_lag -= gfc.frac_SpF) < 0) {
      gfc.slot_lag += gfp.out_samplerate;
      gfc.padding = 1;
    }

    /** **************************************
     * Stage 1: psychoacoustic model *
     ****************************************/

    if (gfc.psymodel !== 0) {
      /*
       * psychoacoustic model psy model has a 1 granule (576) delay that
       * we must compensate for (mt 6/99).
       */
      let ret;
      /* address of beginning of left & right granule */
      let bufpPos = 0;
      /* address of beginning of left & right granule */
      const blocktype = new Int32Array(2);

      const bufp: Float32Array[] = [];

      for (gr = 0; gr < gfc.mode_gr; gr++) {
        for (ch = 0; ch < gfc.channels_out; ch++) {
          bufp[ch] = inbuf[ch];
          bufpPos = 576 + gr * 576 - FFTOFFSET;
        }
        if (gfp.VBR === VbrMode.vbr_mtrh || gfp.VBR === VbrMode.vbr_mt) {
          ret = this.__psy!.L3psycho_anal_vbr(
            gfp,
            bufp,
            bufpPos,
            gr,
            masking_LR,
            masking_MS,
            pe[gr],
            pe_MS[gr],
            tot_ener[gr],
            blocktype
          );
        } else {
          ret = this.__psy!.L3psycho_anal_ns(
            gfp,
            bufp,
            bufpPos,
            gr,
            masking_LR,
            masking_MS,
            pe[gr],
            pe_MS[gr],
            tot_ener[gr],
            blocktype
          );
        }
        if (ret !== 0) return -4;

        if (gfp.mode === MPEGMode.JOINT_STEREO) {
          ms_ener_ratio[gr] = tot_ener[gr][2] + tot_ener[gr][3];
          if (ms_ener_ratio[gr] > 0)
            ms_ener_ratio[gr] = tot_ener[gr][3] / ms_ener_ratio[gr];
        }

        /* block type flags */
        for (ch = 0; ch < gfc.channels_out; ch++) {
          const cod_info = gfc.l3_side.tt[gr][ch];
          cod_info.block_type = blocktype[ch];
          cod_info.mixed_block_flag = 0;
        }
      }
    } else {
      /* no psy model */
      for (gr = 0; gr < gfc.mode_gr; gr++)
        for (ch = 0; ch < gfc.channels_out; ch++) {
          gfc.l3_side.tt[gr][ch].block_type = NORM_TYPE;
          gfc.l3_side.tt[gr][ch].mixed_block_flag = 0;
          pe_MS[gr][ch] = 700;
          pe[gr][ch] = 700;
        }
    }

    /* auto-adjust of ATH, useful for low volume */
    this.adjust_ATH(gfc);

    /** **************************************
     * Stage 2: MDCT *
     ****************************************/

    /* polyphase filtering / mdct */
    this.newMDCT.mdct_sub48(gfc, inbuf[0], inbuf[1]);

    /** **************************************
     * Stage 3: MS/LR decision *
     ****************************************/

    /* Here will be selected MS or LR coding of the 2 stereo channels */
    gfc.mode_ext = MPG_MD_LR_LR;

    if (gfp.force_ms) {
      gfc.mode_ext = MPG_MD_MS_LR;
    } else if (gfp.mode === MPEGMode.JOINT_STEREO) {
      /*
       * ms_ratio = is scaled, for historical reasons, to look like a
       * ratio of side_channel / total. 0 = signal is 100% mono .5 = L & R
       * uncorrelated
       */

      /**
       * <PRE>
       * [0] and [1] are the results for the two granules in MPEG-1,
       * in MPEG-2 it's only a faked averaging of the same value
       * _prev is the value of the last granule of the previous frame
       * _next is the value of the first granule of the next frame
       * </PRE>
       */

      let sum_pe_MS = 0;
      let sum_pe_LR = 0;
      for (gr = 0; gr < gfc.mode_gr; gr++) {
        for (ch = 0; ch < gfc.channels_out; ch++) {
          sum_pe_MS += pe_MS[gr][ch];
          sum_pe_LR += pe[gr][ch];
        }
      }

      /* based on PE: M/S coding would not use much more bits than L/R */
      if (sum_pe_MS <= 1.0 * sum_pe_LR) {
        const gi0 = gfc.l3_side.tt[0];
        const gi1 = gfc.l3_side.tt[gfc.mode_gr - 1];

        if (
          gi0[0].block_type === gi0[1].block_type &&
          gi1[0].block_type === gi1[1].block_type
        ) {
          gfc.mode_ext = MPG_MD_MS_LR;
        }
      }
    }

    /* bit and noise allocation */
    if (gfc.mode_ext === MPG_MD_MS_LR) {
      masking = masking_MS;
      /* use MS masking */
      pe_use = pe_MS;
    } else {
      masking = masking_LR;
      /* use LR masking */
      pe_use = pe;
    }

    /** **************************************
     * Stage 4: quantization loop *
     ****************************************/

    if (gfp.VBR === VbrMode.vbr_off || gfp.VBR === VbrMode.vbr_abr) {
      let i;
      let f;

      for (i = 0; i < 18; i++)
        gfc.nsPsy.pefirbuf[i] = gfc.nsPsy.pefirbuf[i + 1];

      f = 0.0;
      for (gr = 0; gr < gfc.mode_gr; gr++)
        for (ch = 0; ch < gfc.channels_out; ch++) f += pe_use[gr][ch];
      gfc.nsPsy.pefirbuf[18] = f;

      f = gfc.nsPsy.pefirbuf[9];
      for (i = 0; i < 9; i++)
        f +=
          (gfc.nsPsy.pefirbuf[i] + gfc.nsPsy.pefirbuf[18 - i]) *
          Encoder.fircoef[i];

      f = (670 * 5 * gfc.mode_gr * gfc.channels_out) / f;
      for (gr = 0; gr < gfc.mode_gr; gr++) {
        for (ch = 0; ch < gfc.channels_out; ch++) {
          pe_use[gr][ch] *= f;
        }
      }
    }
    gfc.iteration_loop!.iteration_loop(gfp, pe_use, ms_ener_ratio, masking);

    /** **************************************
     * Stage 5: bitstream formatting *
     ****************************************/

    /* write the frame to the bitstream */
    this.bs!.format_bitstream(gfp);

    /* copy mp3 bit buffer into array */
    const mp3count = this.bs!.copy_buffer(
      gfc,
      mp3buf,
      mp3bufPos,
      mp3buf_size,
      1
    );

    if (gfp.bWriteVbrTag) this.vbr!.addVbrFrame(gfp);

    this.updateStats(gfc);

    return mp3count;
  }

  static fircoef = [
    -0.0207887 * 5,
    -0.0378413 * 5,
    -0.0432472 * 5,
    -0.031183 * 5,
    7.79609e-18 * 5,
    0.0467745 * 5,
    0.10091 * 5,
    0.151365 * 5,
    0.187098 * 5,
  ] as const;
}
