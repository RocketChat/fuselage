import { Encoder } from './Encoder';
import { new_float_n } from './common';

/**
 * Variables used for --nspsytune
 *
 * @author Ken
 *
 */
export class NsPsy {
  last_en_subshort = new_float_n([4, 9] as const);

  lastAttacks = new Int32Array(4);

  pefirbuf = new Float32Array(19);

  longfact = new Float32Array(Encoder.SBMAX_l);

  shortfact = new Float32Array(Encoder.SBMAX_s);

  /**
   * short block tuning
   */
  attackthre = 0;

  attackthre_s = 0;
}
