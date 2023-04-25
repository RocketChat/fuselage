export type Bitrate =
  | 8
  | 16
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 80
  | 96
  | 112
  | 128
  | 144
  | 160
  | 192
  | 224
  | 256
  | 320;

const bitrate_table = [
  [
    0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, -1,
  ] /* MPEG 2 */,
  [
    0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1,
  ] /* MPEG 1 */,
  [0, 8, 16, 24, 32, 40, 48, 56, 64, -1, -1, -1, -1, -1, -1, -1] /* MPEG 2.5 */,
] as const;

/**
 * @param bRate
 *            legal rates from 8 to 320
 */
export function findNearestBitrate(
  bRate: number,
  version: 0 | 1,
  samplerate: number
): Bitrate {
  const bitrates = bitrate_table[samplerate < 16000 ? 2 : version];

  let matchingBitrate: Bitrate = bitrates[1];

  for (let i = 2; i <= 14; i++) {
    const bitrate = bitrates[i];
    if (bitrate !== 0 && bitrate !== -1) {
      if (Math.abs(bitrate - bRate) < Math.abs(matchingBitrate - bRate)) {
        matchingBitrate = bitrate;
      }
    }
  }
  return matchingBitrate;
}

/**
 * @param bRate
 *            legal rates from 32 to 448 kbps
 * @param version
 *            MPEG-1 or MPEG-2/2.5 LSF
 */
export function bitrateIndex(
  bRate: number,
  version: 0 | 1,
  samplerate: number
) {
  const bitrates = bitrate_table[samplerate < 16000 ? 2 : version];

  for (let i = 1; i <= 14; i++) {
    const bitrate = bitrates[i];
    if (bitrate > 0) {
      if (bitrate === bRate) {
        return i;
      }
    }
  }
  return -1;
}

export function getBitrate(version: 0 | 1, index: number) {
  return bitrate_table[version][index];
}
