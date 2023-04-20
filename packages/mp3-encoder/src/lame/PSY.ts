import Encoder from './Encoder';

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
  bo_l_weight = new Float32Array(Encoder.SBMAX_l);

  /**
   * Band weight short scalefactor bands.
   */
  bo_s_weight = new Float32Array(Encoder.SBMAX_s);
}
