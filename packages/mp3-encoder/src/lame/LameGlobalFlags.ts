import type { LameInternalFlags } from './LameInternalFlags';
import { MPEGMode } from './MPEGMode';
import type { ShortBlock } from './ShortBlock';
import type { VbrMode } from './VbrMode';

export class LameGlobalFlags {
  class_id = 0;

  /* input description */

  /**
   * number of samples. default=-1
   */
  num_samples = 0;

  /**
   * input number of channels. default=2
   */
  num_channels = 0;

  /**
   * input_samp_rate in Hz. default=44.1 kHz
   */
  in_samplerate = 0;

  /**
   * output_samp_rate. default: LAME picks best value at least not used for
   * MP3 decoding: Remember 44.1 kHz MP3s and AC97
   */
  out_samplerate = 0;

  /**
   * scale input by this amount before encoding at least not used for MP3
   * decoding
   */
  scale = 0;

  /**
   * scale input of channel 0 (left) by this amount before encoding
   */
  scale_left = 0;

  /**
   * scale input of channel 1 (right) by this amount before encoding
   */
  scale_right = 0;

  /* general control params */
  /**
   * collect data for a MP3 frame analyzer?
   */
  analysis = false;

  /**
   * add Xing VBR tag?
   */
  bWriteVbrTag = false;

  /**
   * use lame/mpglib to convert mp3 to wav
   */
  decode_only = false;

  /**
   * quality setting 0=best, 9=worst default=5
   */
  quality = 0;

  /**
   * see enum default = LAME picks best value
   */
  mode = MPEGMode.STEREO;

  /**
   * force M/S mode. requires mode=1
   */
  force_ms = false;

  /**
   * use free format? default=0
   */
  free_format = false;

  /**
   * find the RG value? default=0
   */
  findReplayGain = false;

  /**
   * decode on the fly? default=0
   */
  decode_on_the_fly = false;

  /**
   * 1 (default) writes ID3 tags, 0 not
   */
  write_id3tag_automatic = false;

  /*
   * set either brate>0 or compression_ratio>0, LAME will compute the value of
   * the variable not set. Default is compression_ratio = 11.025
   */
  /**
   * bitrate
   */
  brate = 0;

  /**
   * sizeof(wav file)/sizeof(mp3 file)
   */
  compression_ratio = 0;

  /* frame params */
  /**
   * mark as copyright. default=0
   */
  copyright = 0;

  /**
   * mark as original. default=1
   */
  original = 0;

  /**
   * the MP3 'private extension' bit. Meaningless
   */
  extension = 0;

  /**
   * Input PCM is emphased PCM (for instance from one of the rarely emphased
   * CDs), it is STRONGLY not recommended to use this, because psycho does not
   * take it into account, and last but not least many decoders don't care
   * about these bits
   */
  emphasis = 0;

  /**
   * use 2 bytes per frame for a CRC checksum. default=0
   */
  error_protection = 0;

  /**
   * enforce ISO spec as much as possible
   */
  strict_ISO = false;

  /**
   * use bit reservoir?
   */
  disable_reservoir = false;

  /* quantization/noise shaping */
  quant_comp = 0;

  quant_comp_short = 0;

  experimentalY = false;

  experimentalZ = 0;

  exp_nspsytune = 0;

  preset = 0;

  /* VBR control */
  VBR: VbrMode | null = null;

  /**
   * Range [0,...,1[
   */
  VBR_q_frac = 0;

  /**
   * Range [0,...,9]
   */
  VBR_q = 0;

  VBR_mean_bitrate_kbps = 0;

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
  lowpasswidth = 0;

  /**
   * freq width of filter, in Hz (default=15%)
   */
  highpasswidth = 0;

  /*
   * psycho acoustics and other arguments which you should not change unless
   * you know what you are doing
   */

  maskingadjust = 0;

  maskingadjust_short = 0;

  /**
   * only use ATH
   */
  ATHonly = false;

  /**
   * only use ATH for short blocks
   */
  ATHshort = false;

  /**
   * disable ATH
   */
  noATH = false;

  /**
   * select ATH formula
   */
  ATHtype = 0;

  /**
   * change ATH formula 4 shape
   */
  ATHcurve = 0;

  /**
   * lower ATH by this many db
   */
  ATHlower = 0;

  /**
   * select ATH auto-adjust scheme
   */
  athaa_type = 0;

  /**
   * select ATH auto-adjust loudness calc
   */
  athaa_loudapprox = 0;

  /**
   * dB, tune active region of auto-level
   */
  athaa_sensitivity = 0;

  short_blocks: ShortBlock | null = null;

  /**
   * use temporal masking effect
   */
  useTemporal = false;

  interChRatio = 0;

  /**
   * Naoki's adjustment of Mid/Side maskings
   */
  msfix = 0;

  /**
   * 0 off, 1 on
   */
  tune = false;

  /**
   * used to pass values for debugging and stuff
   */
  tune_value_a = 0;

  /** **********************************************************************/
  /* internal variables, do not set... */
  /* provided because they may be of use to calling application */
  /** **********************************************************************/

  /**
   * 0=MPEG-2/2.5 1=MPEG-1
   */
  version = 0;

  encoder_delay = 0;

  /**
   * number of samples of padding appended to input
   */
  encoder_padding = 0;

  framesize = 0;

  /**
   * number of frames encoded
   */
  frameNum = 0;

  /**
   * is this struct owned by calling program or lame?
   */
  lame_allocated_gfp = 0;

  /** ************************************************************************/
  /* more internal variables are stored in this structure: */
  /** ************************************************************************/
  internal_flags: LameInternalFlags | null = null;
}
