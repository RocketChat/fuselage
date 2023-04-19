import Encoder from './Encoder';

class L3Side {
  /**
   * max scalefactor band, max(SBMAX_l, SBMAX_s*3, (SBMAX_s-3)*3+8)
   */
  static readonly SFBMAX = Encoder.SBMAX_s * 3;
}

export default L3Side;
