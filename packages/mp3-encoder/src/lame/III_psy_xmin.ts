import Encoder from './Encoder';
import { System } from './System';
import { new_float_n } from './common';

class III_psy_xmin {
  l = new Float32Array(Encoder.SBMAX_l);

  s = new_float_n([Encoder.SBMAX_s, 3] as const);

  assign(iii_psy_xmin: Readonly<III_psy_xmin>) {
    System.arraycopy(iii_psy_xmin.l, 0, this.l, 0, Encoder.SBMAX_l);
    for (let i = 0; i < Encoder.SBMAX_s; i++) {
      for (let j = 0; j < 3; j++) {
        this.s[i][j] = iii_psy_xmin.s[i][j];
      }
    }
  }
}

export default III_psy_xmin;
