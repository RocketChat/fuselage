export interface ABRPreset {
  readonly kbps: number;
  readonly quant_comp: number;
  readonly quant_comp_s: number;
  readonly safejoint: number;
  readonly nsmsfix: number;
  readonly st_lrm: number;
  readonly st_s: number;
  readonly nsbass: number;
  readonly scale: number;
  readonly masking_adj: number;
  readonly ath_lower: number;
  readonly ath_curve: number;
  readonly interch: number;
  readonly sfscale: number;
}
