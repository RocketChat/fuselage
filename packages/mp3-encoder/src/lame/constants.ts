export const MAX_FLOAT32_VALUE = 3.4028235e38;

export const LOG10 = 2.302585092994046;

/**
 * total number of scalefactor bands encoded
 */
export const SBMAX_l = 22;

export const SBMAX_s = 13;

export const PSFB21 = 6;

export const PSFB12 = 6;

/**
 * parition bands bands
 */
export const CBANDS = 64;

export const NORM_TYPE = 0;

export const START_TYPE = 1;

export const SHORT_TYPE = 2;

export const STOP_TYPE = 3;

export const CRC16_POLYNOMIAL = 0x8005;

export const LAME_MAXALBUMART = 128 * 1024;

/**
 * maximum size of mp3buffer needed if you encode at most 1152 samples for
 * each call to lame_encode_buffer. see lame_encode_buffer() below
 * (LAME_MAXMP3BUFFER is now obsolete)
 */
export const LAME_MAXMP3BUFFER = 16384 + LAME_MAXALBUMART;

/**
 * FFT sizes
 */
export const BLKSIZE = 1024;

export const HBLKSIZE = BLKSIZE / 2 + 1;

export const BLKSIZE_s = 256;

export const HBLKSIZE_s = BLKSIZE_s / 2 + 1;

/**
 * max scalefactor band, max(SBMAX_l, SBMAX_s*3, (SBMAX_s-3)*3+8)
 */
export const SFBMAX = SBMAX_s * 3;

/**
 * <PRE>
 * Mode Extention:
 * When we are in stereo mode, there are 4 possible methods to store these
 * two channels. The stereo modes -m? are using a subset of them.
 *
 *  -ms: MPG_MD_LR_LR
 *  -mj: MPG_MD_LR_LR and MPG_MD_MS_LR
 *  -mf: MPG_MD_MS_LR
 *  -mi: all
 * </PRE>
 */
export const MPG_MD_LR_LR = 0;

export const MPG_MD_MS_LR = 2;

/**
 * number of critical bands/scale factor bands where masking is computed
 */
export const SBPSY_l = 21;

export const SBPSY_s = 12;

/**
 * number of subbands
 */
export const SBLIMIT = 32;

/**
 * ENCDELAY The encoder delay.
 *
 * Minimum allowed is MDCTDELAY (see below)
 *
 * The first 96 samples will be attenuated, so using a value less than 96
 * will result in corrupt data for the first 96-ENCDELAY samples.
 *
 * suggested: 576 set to 1160 to sync with FhG.
 */
export const ENCDELAY = 576;

/**
 * make sure there is at least one complete frame after the last frame
 * containing real data
 *
 * Using a value of 288 would be sufficient for a a very sophisticated
 * decoder that can decode granule-by-granule instead of frame by frame. But
 * lets not assume this, and assume the decoder will not decode frame N
 * unless it also has data for frame N+1
 */
export const POSTDELAY = 1152;

/**
 * delay of the MDCT used in mdct.c original ISO routines had a delay of
 * 528! Takehiro's routines:
 */
export const MDCTDELAY = 48;

export const FFTOFFSET = 224 + MDCTDELAY;

export const NUMTOCENTRIES = 100;

export const LAME_ID = 0xfff88e3b;
