import type { ATH } from './ATH';
import type { ArrayOf } from './ArrayOf';
import type { CBRNewIterationLoop } from './CBRNewIterationLoop';
import { Header } from './Header';
import { IIISideInfo } from './IIISideInfo';
import { III_psy_xmin } from './III_psy_xmin';
import { NsPsy } from './NsPsy';
import type { PSY } from './PSY';
import type { PlottingData } from './PlottingData';
import type { ReplayGain } from './ReplayGain';
import { ScaleFac } from './ScaleFac';
import { VBRSeekInfo } from './VBRSeekInfo';
import {
  CBANDS,
  ENCDELAY,
  MDCTDELAY,
  SBLIMIT,
  SBMAX_l,
  SBMAX_s,
  SFBMAX,
} from './constants';

export class LameInternalFlags {
  /** ******************************************************************
   * internal variables NOT set by calling program, and should not be *
   * modified by the calling program *
   ********************************************************************/

  /**
   * Some remarks to the Class_ID field: The Class ID is an Identifier for a
   * pointer to this struct. It is very unlikely that a pointer to
   * lame_global_flags has the same 32 bits in it's structure (large and other
   * special properties, for instance prime).
   *
   * To test that the structure is right and initialized, use: if ( gfc .
   * Class_ID == LAME_ID ) ... Other remark: If you set a flag to 0 for uninit
   * data and 1 for init data, the right test should be "if (flag == 1)" and
   * NOT "if (flag)". Unintended modification of this element will be
   * otherwise misinterpreted as an init.
   */
  Class_ID = 0;

  lame_encode_frame_init = 0;

  iteration_init_init = 0;

  fill_buffer_resample_init = 0;

  // public float mfbuf[][] = new float[2][MFSIZE];
  mfbuf = Array.from(
    { length: 2 },
    () => new Float32Array(LameInternalFlags.MFSIZE)
  );

  /**
   * granules per frame
   */
  mode_gr = 0;

  /**
   * number of channels in the input data stream (PCM or decoded PCM)
   */
  channels_in = 0;

  /**
   * number of channels in the output data stream (not used for decoding)
   */
  channels_out = 0;

  /**
   * input_samp_rate/output_samp_rate
   */
  // public double resample_ratio;
  resample_ratio = 0;

  mf_samples_to_encode = 0;

  mf_size = 0;

  /**
   * min bitrate index
   */
  VBR_min_bitrate = 0;

  /**
   * max bitrate index
   */
  VBR_max_bitrate = 0;

  bitrate_index = 0;

  samplerate_index = 0;

  mode_ext = 0;

  /* lowpass and highpass filter control */
  /**
   * normalized frequency bounds of passband
   */
  lowpass1 = 0;

  lowpass2 = 0;

  /**
   * normalized frequency bounds of passband
   */
  highpass1 = 0;

  highpass2 = 0;

  /**
   * 0 = none 1 = ISO AAC model 2 = allow scalefac_select=1
   */
  noise_shaping = 0;

  /**
   * 0 = ISO model: amplify all distorted bands<BR>
   * 1 = amplify within 50% of max (on db scale)<BR>
   * 2 = amplify only most distorted band<BR>
   * 3 = method 1 and refine with method 2<BR>
   */
  noise_shaping_amp = 0;

  /**
   * 0 = no substep<BR>
   * 1 = use substep shaping at last step(VBR only)<BR>
   * (not implemented yet)<BR>
   * 2 = use substep inside loop<BR>
   * 3 = use substep inside loop and last step<BR>
   */
  substep_shaping = 0;

  /**
   * 1 = gpsycho. 0 = none
   */
  psymodel = 0;

  /**
   * 0 = stop at over=0, all scalefacs amplified or<BR>
   * a scalefac has reached max value<BR>
   * 1 = stop when all scalefacs amplified or a scalefac has reached max value<BR>
   * 2 = stop when all scalefacs amplified
   */
  noise_shaping_stop = 0;

  /**
   * 0 = no, 1 = yes
   */
  subblock_gain = 0;

  /**
   * 0 = no. 1=outside loop 2=inside loop(slow)
   */
  use_best_huffman = 0;

  /**
   * 0 = stop early after 0 distortion found. 1 = full search
   */
  full_outer_loop = 0;

  // public IIISideInfo l3_side = new IIISideInfo();
  l3_side = new IIISideInfo();

  ms_ratio = new Float32Array(2);

  /* used for padding */
  /**
   * padding for the current frame?
   */
  padding = 0;

  frac_SpF = 0;

  slot_lag = 0;

  /**
   * optional ID3 tags
   */
  // public ID3TagSpec tag_spec;
  tag_spec = null;

  nMusicCRC = 0;

  /* variables used by Quantize */
  // public int OldValue[] = new int[2];
  OldValue = new Int32Array(2);

  // public int CurrentStep[] = new int[2];
  CurrentStep = new Int32Array(2);

  masking_lower = 0;

  // public int bv_scf[] = new int[576];
  bv_scf = new Int32Array(576);

  // public int pseudohalf[] = new int[L3Side.SFBMAX];
  pseudohalf = new Int32Array(SFBMAX);

  /**
   * will be set in lame_init_params
   */
  sfb21_extra = false;

  /* BPC = maximum number of filter convolution windows to precompute */
  // public float[][] inbuf_old = new float[2][];
  inbuf_old = new Array(2);

  // public float[][] blackfilt = new float[2 * BPC + 1][];
  blackfilt = new Array(2 * LameInternalFlags.BPC + 1);

  // public double itime[] = new double[2];
  itime = new Float64Array(2);

  sideinfo_len = 0;

  /* variables for newmdct.c */
  // public float sb_sample[][][][] = new float[2][2][18][Encoder.SBLIMIT];
  sb_sample = Array.from({ length: 2 }, () =>
    Array.from({ length: 2 }, () =>
      Array.from({ length: 18 }, () => new Float32Array(SBLIMIT))
    )
  );

  amp_filter = new Float32Array(32);

  /* variables for BitStream */

  /**
   * <PRE>
   * mpeg1: buffer=511 bytes  smallest frame: 96-38(sideinfo)=58
   * max number of frames in reservoir:  8
   * mpeg2: buffer=255 bytes.  smallest frame: 24-23bytes=1
   * with VBR, if you are encoding all silence, it is possible to
   * have 8kbs/24khz frames with 1byte of data each, which means we need
   * to buffer up to 255 headers!
   * </PRE>
   */
  /**
   * also, max_header_buf has to be a power of two
   */
  /**
   * max size of header is 38
   */
  header = new Array(LameInternalFlags.MAX_HEADER_BUF);

  h_ptr = 0;

  w_ptr = 0;

  ancillary_flag = 0;

  /* variables for Reservoir */
  /**
   * in bits
   */
  ResvSize = 0;

  /**
   * in bits
   */
  ResvMax = 0;

  // public ScaleFac scalefac_band = new ScaleFac();
  scalefac_band = new ScaleFac();

  /* daa from PsyModel */
  /* The static variables "r", "phi_sav", "new", "old" and "oldest" have */
  /* to be remembered for the unpredictability measure. For "r" and */
  /* "phi_sav", the first index from the left is the channel select and */
  /* the second index is the "age" of the data. */
  minval_l = new Float32Array(CBANDS);

  minval_s = new Float32Array(CBANDS);

  nb_1 = Array.from({ length: 4 }, () => new Float32Array(CBANDS));

  nb_2 = Array.from({ length: 4 }, () => new Float32Array(CBANDS));

  nb_s1 = Array.from({ length: 4 }, () => new Float32Array(CBANDS));

  nb_s2 = Array.from({ length: 4 }, () => new Float32Array(CBANDS));

  s3_ss: Float32Array | null = null;

  s3_ll: Float32Array | null = null;

  decay = 0;

  // public III_psy_xmin[] thm = new III_psy_xmin[4];
  // public III_psy_xmin[] en = new III_psy_xmin[4];
  thm = new Array(4);

  en = new Array(4);

  /**
   * fft and energy calculation
   */
  tot_ener = new Float32Array(4);

  /* loudness calculation (for adaptive threshold of hearing) */
  /**
   * loudness^2 approx. per granule and channel
   */
  loudness_sq = Array.from({ length: 2 }, () => new Float32Array(2));

  /**
   * account for granule delay of L3psycho_anal
   */
  loudness_sq_save = new Float32Array(2);

  /**
   * Scale Factor Bands
   */
  mld_l = new Float32Array(SBMAX_l);

  mld_s = new Float32Array(SBMAX_s);

  bm_l = new Int32Array(SBMAX_l);

  bo_l = new Int32Array(SBMAX_l);

  bm_s = new Int32Array(SBMAX_s);

  bo_s = new Int32Array(SBMAX_s);

  npart_l = 0;

  npart_s = 0;

  s3ind = Array.from({ length: CBANDS }, () => new Int32Array(2));

  s3ind_s = Array.from({ length: CBANDS }, () => new Int32Array(2));

  numlines_s = new Int32Array(CBANDS);

  numlines_l = new Int32Array(CBANDS);

  rnumlines_l = new Float32Array(CBANDS);

  mld_cb_l = new Float32Array(CBANDS);

  mld_cb_s = new Float32Array(CBANDS);

  numlines_s_num1 = 0;

  numlines_l_num1 = 0;

  /* ratios */
  pe = new Float32Array(4);

  ms_ratio_s_old = 0;

  ms_ratio_l_old = 0;

  ms_ener_ratio_old = 0;

  /**
   * block type
   */
  blocktype_old = new Int32Array(2);

  /**
   * variables used for --nspsytune
   */
  nsPsy = new NsPsy();

  /**
   * used for Xing VBR header
   */
  VBR_seek_table = new VBRSeekInfo();

  /**
   * all ATH related stuff
   */
  // public ATH ATH;
  ATH: ATH | null = null;

  PSY: PSY | null = null;

  nogap_total = 0;

  nogap_current = 0;

  /* ReplayGain */
  decode_on_the_fly = true;

  findReplayGain = true;

  findPeakSample = true;

  PeakSample = 0;

  RadioGain = 0;

  AudiophileGain = 0;

  // public ReplayGain rgdata;
  rgdata: ReplayGain | null = null;

  /**
   * gain change required for preventing clipping
   */
  noclipGainChange = 0;

  /**
   * user-specified scale factor required for preventing clipping
   */
  noclipScale = 0;

  /* simple statistics */
  bitrate_stereoMode_Hist = Array.from(
    { length: 16 },
    () => new Int32Array(4 + 1)
  );

  /**
   * norm/start/short/stop/mixed(short)/sum
   */
  bitrate_blockType_Hist = Array.from(
    { length: 16 },
    () => new Int32Array(4 + 1 + 1)
  );

  // public PlottingData pinfo;
  // public MPGLib.mpstr_tag hip;
  pinfo: PlottingData | null = null;

  hip = null;

  in_buffer_nsamples = 0;

  in_buffer_0: ArrayOf<number> | null = null;

  in_buffer_1: ArrayOf<number> | null = null;

  // public IIterationLoop iteration_loop;
  iteration_loop: CBRNewIterationLoop | null = null;

  constructor() {
    for (let i = 0; i < this.en.length; i++) {
      this.en[i] = new III_psy_xmin();
    }
    for (let i = 0; i < this.thm.length; i++) {
      this.thm[i] = new III_psy_xmin();
    }
    for (let i = 0; i < this.header.length; i++) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      this.header[i] = new Header();
    }
  }

  static MFSIZE = 3 * 1152 + ENCDELAY - MDCTDELAY;

  static MAX_HEADER_BUF = 256;

  static MAX_BITS_PER_CHANNEL = 4095;

  static MAX_BITS_PER_GRANULE = 7680;

  static BPC = 320;
}