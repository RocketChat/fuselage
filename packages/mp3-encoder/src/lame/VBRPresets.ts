export class VBRPresets {
  constructor(
    public vbr_q: number,
    public quant_comp: number,
    public quant_comp_s: number,
    public expY: number,
    public st_lrm: number,
    public st_s: number,
    public masking_adj: number,
    public masking_adj_short: number,
    public ath_lower: number,
    public ath_curve: number,
    public ath_sensitivity: number,
    public interch: number,
    public safejoint: number,
    public sfb21mod: number,
    public msfix: number
  ) {}
}
