export const MAX_FLOAT32_VALUE = 3.4028235e38;

/**
 * total number of scalefactor bands encoded
 */
export const SBMAX_l = 22;

export const SBMAX_s = 13;

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
