import { SBMAX_l, SBMAX_s } from './constants';

/**
 * Variables used for --nspsytune
 *
 * @author Ken
 *
 */
export class NsPsy {
  last_en_subshort = Array.from({ length: 4 }, () => new Float32Array(9));

  lastAttacks = new Int32Array(4);

  pefirbuf = new Float32Array(19);

  longfact = new Float32Array(SBMAX_l);

  shortfact = new Float32Array(SBMAX_s);

  /**
   * short block tuning
   */
  attackthre = 0;

  attackthre_s = 0;
}
