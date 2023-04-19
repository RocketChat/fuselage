export class VbrMode {
  private constructor(public readonly ordinal: number) {}

  static readonly vbr_off = new VbrMode(0);

  static readonly vbr_mt = new VbrMode(1);

  static readonly vbr_rh = new VbrMode(2);

  static readonly vbr_abr = new VbrMode(3);

  static readonly vbr_mtrh = new VbrMode(4);

  static readonly vbr_default = VbrMode.vbr_mtrh;
}
