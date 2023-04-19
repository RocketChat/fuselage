export class ABRPresets {
  constructor(
    _kbps: number,
    public quant_comp: number,
    public quant_comp_s: number,
    public safejoint: number,
    public nsmsfix: number,
    public st_lrm: number,
    public st_s: number,
    public nsbass: number,
    public scale: number,
    public masking_adj: number,
    public ath_lower: number,
    public ath_curve: number,
    public interch: number,
    public sfscale: number
  ) {}
}
