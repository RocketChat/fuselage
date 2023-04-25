import type { ABRPresets } from './ABRPresets';
import { Lame } from './Lame';
import type { LameGlobalFlags } from './LameGlobalFlags';
import type { VBRPresets } from './VBRPresets';
import { VbrMode } from './VbrMode';

export class Presets {
  /**
   * <PRE>
   * Switch mappings for VBR mode VBR_RH
   *             vbr_q  qcomp_l  qcomp_s  expY  st_lrm   st_s  mask adj_l  adj_s  ath_lower  ath_curve  ath_sens  interChR  safejoint sfb21mod  msfix
   * </PRE>
   */
  private static readonly vbr_old_switch_map: VBRPresets[] = [
    {
      vbr_q: 0,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 0,
      st_lrm: 5.2,
      st_s: 125,
      masking_adj: -4.2,
      masking_adj_short: -6.3,
      ath_lower: 4.8,
      ath_curve: 1,
      ath_sensitivity: 0,
      interch: 0,
      safejoint: 2,
      sfb21mod: 21,
      msfix: 0.97,
    },
    {
      vbr_q: 1,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 0,
      st_lrm: 5.3,
      st_s: 125,
      masking_adj: -3.6,
      masking_adj_short: -5.6,
      ath_lower: 4.5,
      ath_curve: 1.5,
      ath_sensitivity: 0,
      interch: 0,
      safejoint: 2,
      sfb21mod: 21,
      msfix: 1.35,
    },
    {
      vbr_q: 2,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 0,
      st_lrm: 5.6,
      st_s: 125,
      masking_adj: -2.2,
      masking_adj_short: -3.5,
      ath_lower: 2.8,
      ath_curve: 2,
      ath_sensitivity: 0,
      interch: 0,
      safejoint: 2,
      sfb21mod: 21,
      msfix: 1.49,
    },
    {
      vbr_q: 3,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 1,
      st_lrm: 5.8,
      st_s: 130,
      masking_adj: -1.8,
      masking_adj_short: -2.8,
      ath_lower: 2.6,
      ath_curve: 3,
      ath_sensitivity: -4,
      interch: 0,
      safejoint: 2,
      sfb21mod: 20,
      msfix: 1.64,
    },
    {
      vbr_q: 4,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 1,
      st_lrm: 6,
      st_s: 135,
      masking_adj: -0.7,
      masking_adj_short: -1.1,
      ath_lower: 1.1,
      ath_curve: 3.5,
      ath_sensitivity: -8,
      interch: 0,
      safejoint: 2,
      sfb21mod: 0,
      msfix: 1.79,
    },
    {
      vbr_q: 5,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 1,
      st_lrm: 6.4,
      st_s: 140,
      masking_adj: 0.5,
      masking_adj_short: 0.4,
      ath_lower: -7.5,
      ath_curve: 4,
      ath_sensitivity: -12,
      interch: 0.0002,
      safejoint: 0,
      sfb21mod: 0,
      msfix: 1.95,
    },
    {
      vbr_q: 6,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 1,
      st_lrm: 6.6,
      st_s: 145,
      masking_adj: 0.67,
      masking_adj_short: 0.65,
      ath_lower: -14.7,
      ath_curve: 6.5,
      ath_sensitivity: -19,
      interch: 0.0004,
      safejoint: 0,
      sfb21mod: 0,
      msfix: 2.3,
    },
    {
      vbr_q: 7,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 1,
      st_lrm: 6.6,
      st_s: 145,
      masking_adj: 0.8,
      masking_adj_short: 0.75,
      ath_lower: -19.7,
      ath_curve: 8,
      ath_sensitivity: -22,
      interch: 0.0006,
      safejoint: 0,
      sfb21mod: 0,
      msfix: 2.7,
    },
    {
      vbr_q: 8,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 1,
      st_lrm: 6.6,
      st_s: 145,
      masking_adj: 1.2,
      masking_adj_short: 1.15,
      ath_lower: -27.5,
      ath_curve: 10,
      ath_sensitivity: -23,
      interch: 0.0007,
      safejoint: 0,
      sfb21mod: 0,
      msfix: 0,
    },
    {
      vbr_q: 9,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 1,
      st_lrm: 6.6,
      st_s: 145,
      masking_adj: 1.6,
      masking_adj_short: 1.6,
      ath_lower: -36,
      ath_curve: 11,
      ath_sensitivity: -25,
      interch: 0.0008,
      safejoint: 0,
      sfb21mod: 0,
      msfix: 0,
    },
    {
      vbr_q: 10,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 1,
      st_lrm: 6.6,
      st_s: 145,
      masking_adj: 2,
      masking_adj_short: 2,
      ath_lower: -36,
      ath_curve: 12,
      ath_sensitivity: -25,
      interch: 0.0008,
      safejoint: 0,
      sfb21mod: 0,
      msfix: 0,
    },
  ];

  /**
   * <PRE>
   *                 vbr_q  qcomp_l  qcomp_s  expY  st_lrm   st_s  mask adj_l  adj_s  ath_lower  ath_curve  ath_sens  interChR  safejoint sfb21mod  msfix
   * </PRE>
   */
  private static readonly vbr_psy_switch_map = [
    {
      vbr_q: 0,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 0,
      st_lrm: 4.2,
      st_s: 25,
      masking_adj: -7,
      masking_adj_short: -4,
      ath_lower: 7.5,
      ath_curve: 1,
      ath_sensitivity: 0,
      interch: 0,
      safejoint: 2,
      sfb21mod: 26,
      msfix: 0.97,
    },
    {
      vbr_q: 1,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 0,
      st_lrm: 4.2,
      st_s: 25,
      masking_adj: -5.6,
      masking_adj_short: -3.6,
      ath_lower: 4.5,
      ath_curve: 1.5,
      ath_sensitivity: 0,
      interch: 0,
      safejoint: 2,
      sfb21mod: 21,
      msfix: 1.35,
    },
    {
      vbr_q: 2,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 0,
      st_lrm: 4.2,
      st_s: 25,
      masking_adj: -4.4,
      masking_adj_short: -1.8,
      ath_lower: 2,
      ath_curve: 2,
      ath_sensitivity: 0,
      interch: 0,
      safejoint: 2,
      sfb21mod: 18,
      msfix: 1.49,
    },
    {
      vbr_q: 3,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 1,
      st_lrm: 4.2,
      st_s: 25,
      masking_adj: -3.4,
      masking_adj_short: -1.25,
      ath_lower: 1.1,
      ath_curve: 3,
      ath_sensitivity: -4,
      interch: 0,
      safejoint: 2,
      sfb21mod: 15,
      msfix: 1.64,
    },
    {
      vbr_q: 4,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 1,
      st_lrm: 4.2,
      st_s: 25,
      masking_adj: -2.2,
      masking_adj_short: 0.1,
      ath_lower: 0,
      ath_curve: 3.5,
      ath_sensitivity: -8,
      interch: 0,
      safejoint: 2,
      sfb21mod: 0,
      msfix: 1.79,
    },
    {
      vbr_q: 5,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 1,
      st_lrm: 4.2,
      st_s: 25,
      masking_adj: -1,
      masking_adj_short: 1.65,
      ath_lower: -7.7,
      ath_curve: 4,
      ath_sensitivity: -12,
      interch: 0.0002,
      safejoint: 0,
      sfb21mod: 0,
      msfix: 1.95,
    },
    {
      vbr_q: 6,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 1,
      st_lrm: 4.2,
      st_s: 25,
      masking_adj: -0,
      masking_adj_short: 2.47,
      ath_lower: -7.7,
      ath_curve: 6.5,
      ath_sensitivity: -19,
      interch: 0.0004,
      safejoint: 0,
      sfb21mod: 0,
      msfix: 2,
    },
    {
      vbr_q: 7,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 1,
      st_lrm: 4.2,
      st_s: 25,
      masking_adj: 0.5,
      masking_adj_short: 2,
      ath_lower: -14.5,
      ath_curve: 8,
      ath_sensitivity: -22,
      interch: 0.0006,
      safejoint: 0,
      sfb21mod: 0,
      msfix: 2,
    },
    {
      vbr_q: 8,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 1,
      st_lrm: 4.2,
      st_s: 25,
      masking_adj: 1,
      masking_adj_short: 2.4,
      ath_lower: -22,
      ath_curve: 10,
      ath_sensitivity: -23,
      interch: 0.0007,
      safejoint: 0,
      sfb21mod: 0,
      msfix: 2,
    },
    {
      vbr_q: 9,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 1,
      st_lrm: 4.2,
      st_s: 25,
      masking_adj: 1.5,
      masking_adj_short: 2.95,
      ath_lower: -30,
      ath_curve: 11,
      ath_sensitivity: -25,
      interch: 0.0008,
      safejoint: 0,
      sfb21mod: 0,
      msfix: 2,
    },
    {
      vbr_q: 10,
      quant_comp: 9,
      quant_comp_s: 9,
      expY: 1,
      st_lrm: 4.2,
      st_s: 25,
      masking_adj: 2,
      masking_adj_short: 2.95,
      ath_lower: -36,
      ath_curve: 12,
      ath_sensitivity: -30,
      interch: 0.0008,
      safejoint: 0,
      sfb21mod: 0,
      msfix: 2,
    },
  ] satisfies VBRPresets[];

  // Rest from getset.c:

  /**
   * VBR quality level.<BR>
   * 0 = highest<BR>
   * 9 = lowest
   */
  private lame_set_VBR_q(gfp: LameGlobalFlags, VBR_q: number) {
    let ret = 0;

    if (VBR_q < 0) {
      /* Unknown VBR quality level! */
      ret = -1;
      VBR_q = 0;
    }
    if (VBR_q > 9) {
      ret = -1;
      VBR_q = 9;
    }

    gfp.VBR_q = VBR_q;
    gfp.VBR_q_frac = 0;
    return ret;
  }

  private apply_vbr_preset(gfp: LameGlobalFlags, a: number, enforce: number) {
    const vbr_preset =
      gfp.VBR === VbrMode.vbr_rh
        ? Presets.vbr_old_switch_map
        : Presets.vbr_psy_switch_map;

    const x = gfp.VBR_q_frac;
    const p = vbr_preset[a];
    const q = vbr_preset[a + 1];
    const set = p;

    // NOOP(vbr_q);
    // NOOP(quant_comp);
    // NOOP(quant_comp_s);
    // NOOP(expY);
    p.st_lrm += x * (q.st_lrm - p.st_lrm);
    // LERP(st_lrm);
    p.st_s += x * (q.st_s - p.st_s);
    // LERP(st_s);
    p.masking_adj += x * (q.masking_adj - p.masking_adj);
    // LERP(masking_adj);
    p.masking_adj_short += x * (q.masking_adj_short - p.masking_adj_short);
    // LERP(masking_adj_short);
    p.ath_lower += x * (q.ath_lower - p.ath_lower);
    // LERP(ath_lower);
    p.ath_curve += x * (q.ath_curve - p.ath_curve);
    // LERP(ath_curve);
    p.ath_sensitivity += x * (q.ath_sensitivity - p.ath_sensitivity);
    // LERP(ath_sensitivity);
    p.interch += x * (q.interch - p.interch);
    // LERP(interch);
    // NOOP(safejoint);
    // NOOP(sfb21mod);
    p.msfix += x * (q.msfix - p.msfix);
    // LERP(msfix);

    this.lame_set_VBR_q(gfp, set.vbr_q);

    if (enforce !== 0) gfp.quant_comp = set.quant_comp;
    else if (!(Math.abs(gfp.quant_comp - -1) > 0))
      gfp.quant_comp = set.quant_comp;
    // SET_OPTION(quant_comp, set.quant_comp, -1);
    if (enforce !== 0) gfp.quant_comp_short = set.quant_comp_s;
    else if (!(Math.abs(gfp.quant_comp_short - -1) > 0))
      gfp.quant_comp_short = set.quant_comp_s;
    // SET_OPTION(quant_comp_short, set.quant_comp_s, -1);
    if (set.expY !== 0) {
      gfp.experimentalY = set.expY !== 0;
    }
    if (enforce !== 0) gfp.internal_flags.nsPsy.attackthre = set.st_lrm;
    else if (!(Math.abs(gfp.internal_flags.nsPsy.attackthre - -1) > 0))
      gfp.internal_flags.nsPsy.attackthre = set.st_lrm;
    // SET_OPTION(short_threshold_lrm, set.st_lrm, -1);
    if (enforce !== 0) gfp.internal_flags.nsPsy.attackthre_s = set.st_s;
    else if (!(Math.abs(gfp.internal_flags.nsPsy.attackthre_s - -1) > 0))
      gfp.internal_flags.nsPsy.attackthre_s = set.st_s;
    // SET_OPTION(short_threshold_s, set.st_s, -1);
    if (enforce !== 0) gfp.maskingadjust = set.masking_adj;
    else if (!(Math.abs(gfp.maskingadjust - 0) > 0))
      gfp.maskingadjust = set.masking_adj;
    // SET_OPTION(maskingadjust, set.masking_adj, 0);
    if (enforce !== 0) gfp.maskingadjust_short = set.masking_adj_short;
    else if (!(Math.abs(gfp.maskingadjust_short - 0) > 0))
      gfp.maskingadjust_short = set.masking_adj_short;
    // SET_OPTION(maskingadjust_short, set.masking_adj_short, 0);
    if (enforce !== 0) gfp.ATHlower = -set.ath_lower / 10.0;
    else if (!(Math.abs(-gfp.ATHlower * 10.0 - 0) > 0))
      gfp.ATHlower = -set.ath_lower / 10.0;
    // SET_OPTION(ATHlower, set.ath_lower, 0);
    if (enforce !== 0) gfp.ATHcurve = set.ath_curve;
    else if (!(Math.abs(gfp.ATHcurve - -1) > 0)) gfp.ATHcurve = set.ath_curve;
    // SET_OPTION(ATHcurve, set.ath_curve, -1);
    if (enforce !== 0) gfp.athaa_sensitivity = set.ath_sensitivity;
    else if (!(Math.abs(gfp.athaa_sensitivity - -1) > 0))
      gfp.athaa_sensitivity = set.ath_sensitivity;
    // SET_OPTION(athaa_sensitivity, set.ath_sensitivity, 0);
    if (set.interch > 0) {
      if (enforce !== 0) gfp.interChRatio = set.interch;
      else if (!(Math.abs(gfp.interChRatio - -1) > 0))
        gfp.interChRatio = set.interch;
      // SET_OPTION(interChRatio, set.interch, -1);
    }

    /* parameters for which there is no proper set/get interface */
    if (set.safejoint > 0) {
      gfp.exp_nspsytune |= set.safejoint;
    }
    if (set.sfb21mod > 0) {
      gfp.exp_nspsytune |= set.sfb21mod << 20;
    }
    if (enforce !== 0) gfp.msfix = set.msfix;
    else if (!(Math.abs(gfp.msfix - -1) > 0)) gfp.msfix = set.msfix;
    // SET_OPTION(msfix, set.msfix, -1);

    if (enforce === 0) {
      gfp.VBR_q = a;
      gfp.VBR_q_frac = x;
    }
  }

  /**
   * <PRE>
   *  Switch mappings for ABR mode
   *
   *              kbps  quant q_s safejoint nsmsfix st_lrm  st_s  ns-bass scale   msk ath_lwr ath_curve  interch , sfscale
   * </PRE>
   */
  private static readonly abr_switch_map: ABRPresets[] = [
    {
      kbps: 8,
      quant_comp: 9,
      quant_comp_s: 9,
      safejoint: 0,
      nsmsfix: 0,
      st_lrm: 6.6,
      st_s: 145,
      nsbass: 0,
      scale: 0.95,
      masking_adj: 0,
      ath_lower: -30,
      ath_curve: 11,
      interch: 0.0012,
      sfscale: 1,
    } /*   8, impossible to use in stereo */,
    {
      kbps: 16,
      quant_comp: 9,
      quant_comp_s: 9,
      safejoint: 0,
      nsmsfix: 0,
      st_lrm: 6.6,
      st_s: 145,
      nsbass: 0,
      scale: 0.95,
      masking_adj: 0,
      ath_lower: -25,
      ath_curve: 11,
      interch: 0.001,
      sfscale: 1,
    } /*  16 */,
    {
      kbps: 24,
      quant_comp: 9,
      quant_comp_s: 9,
      safejoint: 0,
      nsmsfix: 0,
      st_lrm: 6.6,
      st_s: 145,
      nsbass: 0,
      scale: 0.95,
      masking_adj: 0,
      ath_lower: -20,
      ath_curve: 11,
      interch: 0.001,
      sfscale: 1,
    } /*  24 */,
    {
      kbps: 32,
      quant_comp: 9,
      quant_comp_s: 9,
      safejoint: 0,
      nsmsfix: 0,
      st_lrm: 6.6,
      st_s: 145,
      nsbass: 0,
      scale: 0.95,
      masking_adj: 0,
      ath_lower: -15,
      ath_curve: 11,
      interch: 0.001,
      sfscale: 1,
    } /*  32 */,
    {
      kbps: 40,
      quant_comp: 9,
      quant_comp_s: 9,
      safejoint: 0,
      nsmsfix: 0,
      st_lrm: 6.6,
      st_s: 145,
      nsbass: 0,
      scale: 0.95,
      masking_adj: 0,
      ath_lower: -10,
      ath_curve: 11,
      interch: 0.0009,
      sfscale: 1,
    } /*  40 */,
    {
      kbps: 48,
      quant_comp: 9,
      quant_comp_s: 9,
      safejoint: 0,
      nsmsfix: 0,
      st_lrm: 6.6,
      st_s: 145,
      nsbass: 0,
      scale: 0.95,
      masking_adj: 0,
      ath_lower: -10,
      ath_curve: 11,
      interch: 0.0009,
      sfscale: 1,
    } /*  48 */,
    {
      kbps: 56,
      quant_comp: 9,
      quant_comp_s: 9,
      safejoint: 0,
      nsmsfix: 0,
      st_lrm: 6.6,
      st_s: 145,
      nsbass: 0,
      scale: 0.95,
      masking_adj: 0,
      ath_lower: -6,
      ath_curve: 11,
      interch: 0.0008,
      sfscale: 1,
    } /*  56 */,
    {
      kbps: 64,
      quant_comp: 9,
      quant_comp_s: 9,
      safejoint: 0,
      nsmsfix: 0,
      st_lrm: 6.6,
      st_s: 145,
      nsbass: 0,
      scale: 0.95,
      masking_adj: 0,
      ath_lower: -2,
      ath_curve: 11,
      interch: 0.0008,
      sfscale: 1,
    } /*  64 */,
    {
      kbps: 80,
      quant_comp: 9,
      quant_comp_s: 9,
      safejoint: 0,
      nsmsfix: 0,
      st_lrm: 6.6,
      st_s: 145,
      nsbass: 0,
      scale: 0.95,
      masking_adj: 0,
      ath_lower: 0,
      ath_curve: 8,
      interch: 0.0007,
      sfscale: 1,
    } /*  80 */,
    {
      kbps: 96,
      quant_comp: 9,
      quant_comp_s: 9,
      safejoint: 0,
      nsmsfix: 2.5,
      st_lrm: 6.6,
      st_s: 145,
      nsbass: 0,
      scale: 0.95,
      masking_adj: 0,
      ath_lower: 1,
      ath_curve: 5.5,
      interch: 0.0006,
      sfscale: 1,
    } /*  96 */,
    {
      kbps: 112,
      quant_comp: 9,
      quant_comp_s: 9,
      safejoint: 0,
      nsmsfix: 2.25,
      st_lrm: 6.6,
      st_s: 145,
      nsbass: 0,
      scale: 0.95,
      masking_adj: 0,
      ath_lower: 2,
      ath_curve: 4.5,
      interch: 0.0005,
      sfscale: 1,
    } /* 112 */,
    {
      kbps: 128,
      quant_comp: 9,
      quant_comp_s: 9,
      safejoint: 0,
      nsmsfix: 1.95,
      st_lrm: 6.4,
      st_s: 140,
      nsbass: 0,
      scale: 0.95,
      masking_adj: 0,
      ath_lower: 3,
      ath_curve: 4,
      interch: 0.0002,
      sfscale: 1,
    } /* 128 */,
    {
      kbps: 160,
      quant_comp: 9,
      quant_comp_s: 9,
      safejoint: 1,
      nsmsfix: 1.79,
      st_lrm: 6,
      st_s: 135,
      nsbass: 0,
      scale: 0.95,
      masking_adj: -2,
      ath_lower: 5,
      ath_curve: 3.5,
      interch: 0,
      sfscale: 1,
    } /* 160 */,
    {
      kbps: 192,
      quant_comp: 9,
      quant_comp_s: 9,
      safejoint: 1,
      nsmsfix: 1.49,
      st_lrm: 5.6,
      st_s: 125,
      nsbass: 0,
      scale: 0.97,
      masking_adj: -4,
      ath_lower: 7,
      ath_curve: 3,
      interch: 0,
      sfscale: 0,
    } /* 192 */,
    {
      kbps: 224,
      quant_comp: 9,
      quant_comp_s: 9,
      safejoint: 1,
      nsmsfix: 1.25,
      st_lrm: 5.2,
      st_s: 125,
      nsbass: 0,
      scale: 0.98,
      masking_adj: -6,
      ath_lower: 9,
      ath_curve: 2,
      interch: 0,
      sfscale: 0,
    } /* 224 */,
    {
      kbps: 256,
      quant_comp: 9,
      quant_comp_s: 9,
      safejoint: 1,
      nsmsfix: 0.97,
      st_lrm: 5.2,
      st_s: 125,
      nsbass: 0,
      scale: 1,
      masking_adj: -8,
      ath_lower: 10,
      ath_curve: 1,
      interch: 0,
      sfscale: 0,
    } /* 256 */,
    {
      kbps: 320,
      quant_comp: 9,
      quant_comp_s: 9,
      safejoint: 1,
      nsmsfix: 0.9,
      st_lrm: 5.2,
      st_s: 125,
      nsbass: 0,
      scale: 1,
      masking_adj: -10,
      ath_lower: 12,
      ath_curve: 0,
      interch: 0,
      sfscale: 0,
    } /* 320 */,
  ] satisfies ABRPresets[];

  private apply_abr_preset(
    gfp: LameGlobalFlags,
    preset: number,
    enforce: number
  ) {
    /* Variables for the ABR stuff */
    const actual_bitrate = preset;

    const r = Lame.nearestBitrateFullIndex(preset);

    gfp.VBR = VbrMode.vbr_abr;
    gfp.VBR_mean_bitrate_kbps = actual_bitrate;
    gfp.VBR_mean_bitrate_kbps = Math.min(gfp.VBR_mean_bitrate_kbps, 320);
    gfp.VBR_mean_bitrate_kbps = Math.max(gfp.VBR_mean_bitrate_kbps, 8);
    gfp.brate = gfp.VBR_mean_bitrate_kbps;

    /* parameters for which there is no proper set/get interface */
    if (Presets.abr_switch_map[r].safejoint > 0) gfp.exp_nspsytune |= 2;
    /* safejoint */

    if (Presets.abr_switch_map[r].sfscale > 0) {
      gfp.internal_flags.noise_shaping = 2;
    }
    /* ns-bass tweaks */
    if (Math.abs(Presets.abr_switch_map[r].nsbass) > 0) {
      let k = Math.trunc(Presets.abr_switch_map[r].nsbass * 4);
      if (k < 0) k += 64;
      gfp.exp_nspsytune |= k << 2;
    }

    if (enforce !== 0) gfp.quant_comp = Presets.abr_switch_map[r].quant_comp;
    else if (!(Math.abs(gfp.quant_comp - -1) > 0))
      gfp.quant_comp = Presets.abr_switch_map[r].quant_comp;
    // SET_OPTION(quant_comp, abr_switch_map[r].quant_comp, -1);
    if (enforce !== 0)
      gfp.quant_comp_short = Presets.abr_switch_map[r].quant_comp_s;
    else if (!(Math.abs(gfp.quant_comp_short - -1) > 0))
      gfp.quant_comp_short = Presets.abr_switch_map[r].quant_comp_s;
    // SET_OPTION(quant_comp_short, abr_switch_map[r].quant_comp_s, -1);

    if (enforce !== 0) gfp.msfix = Presets.abr_switch_map[r].nsmsfix;
    else if (!(Math.abs(gfp.msfix - -1) > 0))
      gfp.msfix = Presets.abr_switch_map[r].nsmsfix;
    // SET_OPTION(msfix, abr_switch_map[r].nsmsfix, -1);

    if (enforce !== 0)
      gfp.internal_flags.nsPsy.attackthre = Presets.abr_switch_map[r].st_lrm;
    else if (!(Math.abs(gfp.internal_flags.nsPsy.attackthre - -1) > 0))
      gfp.internal_flags.nsPsy.attackthre = Presets.abr_switch_map[r].st_lrm;
    // SET_OPTION(short_threshold_lrm, abr_switch_map[r].st_lrm, -1);
    if (enforce !== 0)
      gfp.internal_flags.nsPsy.attackthre_s = Presets.abr_switch_map[r].st_s;
    else if (!(Math.abs(gfp.internal_flags.nsPsy.attackthre_s - -1) > 0))
      gfp.internal_flags.nsPsy.attackthre_s = Presets.abr_switch_map[r].st_s;
    // SET_OPTION(short_threshold_s, abr_switch_map[r].st_s, -1);

    /*
     * ABR seems to have big problems with clipping, especially at low
     * bitrates
     */
    /*
     * so we compensate for that here by using a scale value depending on
     * bitrate
     */
    if (enforce !== 0) gfp.scale = Presets.abr_switch_map[r].scale;
    else if (!(Math.abs(gfp.scale - -1) > 0))
      gfp.scale = Presets.abr_switch_map[r].scale;
    // SET_OPTION(scale, abr_switch_map[r].scale, -1);

    if (enforce !== 0)
      gfp.maskingadjust = Presets.abr_switch_map[r].masking_adj;
    else if (!(Math.abs(gfp.maskingadjust - 0) > 0))
      gfp.maskingadjust = Presets.abr_switch_map[r].masking_adj;
    // SET_OPTION(maskingadjust, abr_switch_map[r].masking_adj, 0);
    if (Presets.abr_switch_map[r].masking_adj > 0) {
      if (enforce !== 0)
        gfp.maskingadjust_short = Presets.abr_switch_map[r].masking_adj * 0.9;
      else if (!(Math.abs(gfp.maskingadjust_short - 0) > 0))
        gfp.maskingadjust_short = Presets.abr_switch_map[r].masking_adj * 0.9;
      // SET_OPTION(maskingadjust_short, abr_switch_map[r].masking_adj *
      // .9, 0);
    } else if (enforce !== 0)
      gfp.maskingadjust_short = Presets.abr_switch_map[r].masking_adj * 1.1;
    else if (!(Math.abs(gfp.maskingadjust_short - 0) > 0))
      gfp.maskingadjust_short = Presets.abr_switch_map[r].masking_adj * 1.1;
    // SET_OPTION(maskingadjust_short, abr_switch_map[r].masking_adj *
    // 1.1, 0);

    if (enforce !== 0) gfp.ATHlower = -Presets.abr_switch_map[r].ath_lower / 10;
    else if (!(Math.abs(-gfp.ATHlower * 10 - 0) > 0))
      gfp.ATHlower = -Presets.abr_switch_map[r].ath_lower / 10;
    // SET_OPTION(ATHlower, abr_switch_map[r].ath_lower, 0);
    if (enforce !== 0) gfp.ATHcurve = Presets.abr_switch_map[r].ath_curve;
    else if (!(Math.abs(gfp.ATHcurve - -1) > 0))
      gfp.ATHcurve = Presets.abr_switch_map[r].ath_curve;
    // SET_OPTION(ATHcurve, abr_switch_map[r].ath_curve, -1);

    if (enforce !== 0) gfp.interChRatio = Presets.abr_switch_map[r].interch;
    else if (!(Math.abs(gfp.interChRatio - -1) > 0))
      gfp.interChRatio = Presets.abr_switch_map[r].interch;
    // SET_OPTION(interChRatio, abr_switch_map[r].interch, -1);

    return preset;
  }

  apply_preset(gfp: LameGlobalFlags, preset: number, enforce: number) {
    /* translate legacy presets */
    switch (preset) {
      case Lame.R3MIX: {
        preset = Lame.V3;
        gfp.VBR = VbrMode.vbr_mtrh;
        break;
      }
      case Lame.MEDIUM: {
        preset = Lame.V4;
        gfp.VBR = VbrMode.vbr_rh;
        break;
      }
      case Lame.MEDIUM_FAST: {
        preset = Lame.V4;
        gfp.VBR = VbrMode.vbr_mtrh;
        break;
      }
      case Lame.STANDARD: {
        preset = Lame.V2;
        gfp.VBR = VbrMode.vbr_rh;
        break;
      }
      case Lame.STANDARD_FAST: {
        preset = Lame.V2;
        gfp.VBR = VbrMode.vbr_mtrh;
        break;
      }
      case Lame.EXTREME: {
        preset = Lame.V0;
        gfp.VBR = VbrMode.vbr_rh;
        break;
      }
      case Lame.EXTREME_FAST: {
        preset = Lame.V0;
        gfp.VBR = VbrMode.vbr_mtrh;
        break;
      }
      case Lame.INSANE: {
        preset = 320;
        gfp.preset = preset;
        this.apply_abr_preset(gfp, preset, enforce);
        gfp.VBR = VbrMode.vbr_off;
        return preset;
      }
    }

    gfp.preset = preset;

    switch (preset) {
      case Lame.V9:
        this.apply_vbr_preset(gfp, 9, enforce);
        return preset;
      case Lame.V8:
        this.apply_vbr_preset(gfp, 8, enforce);
        return preset;
      case Lame.V7:
        this.apply_vbr_preset(gfp, 7, enforce);
        return preset;
      case Lame.V6:
        this.apply_vbr_preset(gfp, 6, enforce);
        return preset;
      case Lame.V5:
        this.apply_vbr_preset(gfp, 5, enforce);
        return preset;
      case Lame.V4:
        this.apply_vbr_preset(gfp, 4, enforce);
        return preset;
      case Lame.V3:
        this.apply_vbr_preset(gfp, 3, enforce);
        return preset;
      case Lame.V2:
        this.apply_vbr_preset(gfp, 2, enforce);
        return preset;
      case Lame.V1:
        this.apply_vbr_preset(gfp, 1, enforce);
        return preset;
      case Lame.V0:
        this.apply_vbr_preset(gfp, 0, enforce);
        return preset;
      default:
        break;
    }

    if (preset >= 8 && preset <= 320) {
      return this.apply_abr_preset(gfp, preset, enforce);
    }

    /* no corresponding preset found */
    gfp.preset = 0;
    return preset;
  }
}
