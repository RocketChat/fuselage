import type QuantizePVT from './QuantizePVT';
import type Takehiro from './Takehiro';

class VBRQuantize {
  private qupvt: QuantizePVT = null as unknown as QuantizePVT;

  private tak: Takehiro = null as unknown as Takehiro;

  setModules(qupvt: QuantizePVT, tk: Takehiro) {
    this.qupvt = qupvt;
    this.tak = tk;
  }
}

export default VBRQuantize;
