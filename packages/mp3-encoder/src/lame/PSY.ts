import { SBMAX_l, SBMAX_s } from './constants';

/**
 * PSY Model related stuff
 */
export class PSY {
  /**
   * The dbQ stuff.
   */
  mask_adjust = 0;

  /**
   * The dbQ stuff.
   */
  mask_adjust_short = 0;

  /* at transition from one scalefactor band to next */
  /**
   * Band weight long scalefactor bands.
   */
  readonly bo_l_weight = new Float32Array(SBMAX_l);

  /**
   * Band weight short scalefactor bands.
   */
  readonly bo_s_weight = new Float32Array(SBMAX_s);
}
