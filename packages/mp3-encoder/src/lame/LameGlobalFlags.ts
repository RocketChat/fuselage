import { LameInternalFlags } from './LameInternalFlags';
import { MPEGMode } from './MPEGMode';
import type { Quality } from './Quality';
import type { ShortBlock } from './ShortBlock';
import { VbrMode } from './VbrMode';
import type { SampleRate } from './sampleRates';

export class LameGlobalFlags {
  /**
   * input number of channels. default=2
   */
  num_channels: number;

  /**
   * input_samp_rate in Hz. default=44.1 kHz
   */
  in_samplerate: number;

  /**
   * output_samp_rate. default: LAME picks best value at least not used for
   * MP3 decoding: Remember 44.1 kHz MP3s and AC97
   */
  out_samplerate: SampleRate | 0 = 0;

  /**
   * scale input by this amount before encoding at least not used for MP3
   * decoding
   */
  scale = -1;

  /**
   * quality setting 0=best, 9=worst default=5
   */
  quality: Quality = 3;

  /**
   * see enum default = LAME picks best value
   */
  mode = MPEGMode.STEREO;

  /*
   * set either brate>0 or compression_ratio>0, LAME will compute the value of
   * the variable not set. Default is compression_ratio = 11.025
   */
  /**
   * bitrate
   */
  brate: number;

  /**
   * sizeof(wav file)/sizeof(mp3 file)
   */
  compression_ratio = 0;

  /* quantization/noise shaping */
  quant_comp = -1;

  quant_comp_short = -1;

  experimentalY = false;

  exp_nspsytune = 0;

  preset = 0;

  /* VBR control */
  VBR = VbrMode.vbr_off;

  /**
   * Range [0,...,9]
   */
  VBR_q: Quality = 4;

  VBR_mean_bitrate_kbps = 128;

  VBR_min_bitrate_kbps = 0;

  VBR_max_bitrate_kbps = 0;

  /**
   * strictly enforce VBR_min_bitrate normaly, it will be violated for analog
   * silence
   */
  VBR_hard_min = 0;

  /* resampling and filtering */

  /**
   * freq in Hz. 0=lame choses. -1=no filter
   */
  lowpassfreq = 0;

  /**
   * freq in Hz. 0=lame choses. -1=no filter
   */
  highpassfreq = 0;

  /**
   * freq width of filter, in Hz (default=15%)
   */
  lowpasswidth = -1;

  /**
   * freq width of filter, in Hz (default=15%)
   */
  highpasswidth = -1;

  /*
   * psycho acoustics and other arguments which you should not change unless
   * you know what you are doing
   */

  maskingadjust = 0;

  maskingadjust_short = 0;

  /**
   * select ATH formula
   */
  ATHtype = -1;

  /**
   * change ATH formula 4 shape
   */
  ATHcurve = -1;

  /**
   * lower ATH by this many db
   */
  ATHlower = 0;

  /**
   * select ATH auto-adjust scheme
   */
  athaa_type = -1;

  /**
   * select ATH auto-adjust loudness calc
   */
  athaa_loudapprox = -1;

  /**
   * dB, tune active region of auto-level
   */
  athaa_sensitivity = 0;

  short_blocks: ShortBlock | null = null;

  /**
   * use temporal masking effect
   */
  useTemporal = false;

  interChRatio = -1;

  /**
   * Naoki's adjustment of Mid/Side maskings
   */
  msfix = -1;

  /** **********************************************************************/
  /* internal variables, do not set... */
  /* provided because they may be of use to calling application */
  /** **********************************************************************/

  /**
   * 0=MPEG-2/2.5 1=MPEG-1
   */
  version: 0 | 1 = 0;

  framesize = 0;

  /**
   * number of frames encoded
   */
  frameNum = 0;

  /** ************************************************************************/
  /* more internal variables are stored in this structure: */
  /** ************************************************************************/
  readonly internal_flags = new LameInternalFlags();

  constructor(channels: number, samplerate: number, kbps: number) {
    this.num_channels = channels;
    this.in_samplerate = samplerate;
    this.brate = kbps;
  }
}
