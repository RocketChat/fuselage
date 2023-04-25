import { CRC16_POLYNOMIAL } from './constants';

/**
 * Resampling via FIR filter, blackman window.
 */
export function blackmanWindow(x: number, fcn: number, l: number) {
  /*
   * This algorithm from: SIGNAL PROCESSING ALGORITHMS IN FORTRAN AND C
   * S.D. Stearns and R.A. David, Prentice-Hall, 1992
   */
  const wcn = Math.PI * fcn;

  x /= l;
  if (x < 0) x = 0;
  if (x > 1) x = 1;
  const x2 = x - 0.5;

  const bkwn =
    0.42 - 0.5 * Math.cos(2 * x * Math.PI) + 0.08 * Math.cos(4 * x * Math.PI);
  if (Math.abs(x2) < 1e-9) return wcn / Math.PI;
  return (bkwn * Math.sin(l * wcn * x2)) / (Math.PI * l * x2);
}

/**
 * Greatest common divisor.
 * <p>
 * Joint work of Euclid and M. Hendry
 */
export function gcd(i: number, j: number): number {
  return j !== 0 ? gcd(j, i % j) : i;
}

export function linearInterpolation(a: number, b: number, m: number): number {
  return a + m * (b - a);
}

export function CRC_update(value: number, crc: number) {
  value <<= 8;
  for (let i = 0; i < 8; i++) {
    value <<= 1;
    crc <<= 1;

    if (((crc ^ value) & 0x10000) !== 0) crc ^= CRC16_POLYNOMIAL;
  }
  return crc;
}

export function isCloseToEachOther(a: number, b: number) {
  return Math.abs(a) > Math.abs(b)
    ? Math.abs(a - b) <= Math.abs(a) * 1e-6
    : Math.abs(a - b) <= Math.abs(b) * 1e-6;
}
