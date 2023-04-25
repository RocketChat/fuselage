import type { Quality } from './Quality';

export interface VBRPreset {
  readonly vbr_q: Quality;
  readonly quant_comp: 9;
  readonly quant_comp_s: 9;
  readonly expY: 0 | 1;
  readonly st_lrm: number;
  readonly st_s: number;
  readonly masking_adj: number;
  readonly masking_adj_short: number;
  readonly ath_lower: number;
  readonly ath_curve: number;
  readonly ath_sensitivity: number;
  readonly interch: number;
  readonly safejoint: number;
  readonly sfb21mod: number;
  readonly msfix: number;
}
