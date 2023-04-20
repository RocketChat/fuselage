/**
 * Layer III side information.
 *
 * @author Ken
 *
 */
import { copyArray } from './Arrays';
import { PSFB12, PSFB21, SBMAX_l, SBMAX_s } from './constants';

export class ScaleFac {
  private arrL: number[] | undefined;

  private arrS: number[] | undefined;

  private arr21: number[] | undefined;

  private arr12: number[] | undefined;

  l: Int32Array;

  s: Int32Array;

  psfb21: Int32Array;

  psfb12: Int32Array;

  constructor();

  constructor(arrL: number[], arrS: number[], arr21: number[], arr12: number[]);

  constructor(
    ...args:
      | []
      | [arrL: number[], arrS: number[], arr21: number[], arr12: number[]]
  ) {
    this.l = new Int32Array(1 + SBMAX_l);
    this.s = new Int32Array(1 + SBMAX_s);
    this.psfb21 = new Int32Array(1 + PSFB21);
    this.psfb12 = new Int32Array(1 + PSFB12);
    const { l } = this;
    const { s } = this;

    if (args.length === 4) {
      // public ScaleFac(final int[] arrL, final int[] arrS, final int[] arr21,
      //    final int[] arr12) {
      [this.arrL, this.arrS, this.arr21, this.arr12] = args;

      copyArray(this.arrL, 0, l, 0, Math.min(this.arrL.length, this.l.length));
      copyArray(this.arrS, 0, s, 0, Math.min(this.arrS.length, this.s.length));
      copyArray(
        this.arr21,
        0,
        this.psfb21,
        0,
        Math.min(this.arr21.length, this.psfb21.length)
      );
      copyArray(
        this.arr12,
        0,
        this.psfb12,
        0,
        Math.min(this.arr12.length, this.psfb12.length)
      );
    }
  }
}
