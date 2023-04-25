import type { ABRPreset } from './ABRPreset';
import { Lame } from './Lame';
import type { LameGlobalFlags } from './LameGlobalFlags';
import type { Quality } from './Quality';
import type { VBRPreset } from './VBRPreset';
import { VbrMode } from './VbrMode';
import { linearInterpolation } from './math';

const enum Preset {
  V9 = 410,
  V8 = 420,
  V7 = 430,
  V6 = 440,
  V5 = 450,
  V4 = 460,
  V3 = 470,
  V2 = 480,
  V1 = 490,
  V0 = 500,
  R3MIX = 1000,
  STANDARD = 1001,
  EXTREME = 1002,
  INSANE = 1003,
  STANDARD_FAST = 1004,
  EXTREME_FAST = 1005,
  MEDIUM = 1006,
  MEDIUM_FAST = 1007,
}

export class Presets {
  /**
   * Switch mappings for VBR mode VBR_RH
   */
  private readonly vbr_old_switch_map: Readonly<
    Record<Quality, VBRPreset> & {
      10: Omit<VBRPreset, 'vbr_q'> & { vbr_q: 10 };
    }
  > = [
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

  private readonly vbr_psy_switch_map: Readonly<
    Record<Quality, VBRPreset> & {
      10: Omit<VBRPreset, 'vbr_q'> & { vbr_q: 10 };
    }
  > = [
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
  ];

  /**
   * VBR quality level.<BR>
   * 0 = highest<BR>
   * 9 = lowest
   */
  private lame_set_VBR_q(gfp: LameGlobalFlags, VBR_q: Quality) {
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

  private apply_vbr_preset(gfp: LameGlobalFlags, a: Quality) {
    const vbr_presets_map =
      gfp.VBR === VbrMode.vbr_rh
        ? this.vbr_old_switch_map
        : this.vbr_psy_switch_map;

    const x = gfp.VBR_q_frac;
    const p = vbr_presets_map[a];
    const q = vbr_presets_map[(a + 1) as Quality | 10];

    const set: VBRPreset = {
      vbr_q: p.vbr_q,
      quant_comp: p.quant_comp,
      quant_comp_s: p.quant_comp_s,
      expY: p.expY,
      st_lrm: linearInterpolation(p.st_lrm, q.st_lrm, x),
      st_s: linearInterpolation(p.st_s, q.st_s, x),
      masking_adj: linearInterpolation(p.masking_adj, q.masking_adj, x),
      masking_adj_short: linearInterpolation(
        p.masking_adj_short,
        q.masking_adj_short,
        x
      ),
      ath_lower: linearInterpolation(p.ath_lower, q.ath_lower, x),
      ath_curve: linearInterpolation(p.ath_curve, q.ath_curve, x),
      ath_sensitivity: p.ath_sensitivity,
      interch: linearInterpolation(p.ath_sensitivity, q.ath_sensitivity, x),
      safejoint: p.safejoint,
      sfb21mod: p.sfb21mod,
      msfix: linearInterpolation(p.msfix, q.msfix, x),
    };

    this.lame_set_VBR_q(gfp, set.vbr_q);

    if (!(Math.abs(gfp.quant_comp - -1) > 0)) {
      gfp.quant_comp = set.quant_comp;
    }

    if (!(Math.abs(gfp.quant_comp_short - -1) > 0)) {
      gfp.quant_comp_short = set.quant_comp_s;
    }

    if (set.expY !== 0) {
      gfp.experimentalY = true;
    }

    if (!(Math.abs(gfp.internal_flags.nsPsy.attackthre - -1) > 0)) {
      gfp.internal_flags.nsPsy.attackthre = set.st_lrm;
    }

    if (!(Math.abs(gfp.internal_flags.nsPsy.attackthre_s - -1) > 0)) {
      gfp.internal_flags.nsPsy.attackthre_s = set.st_s;
    }

    if (!(Math.abs(gfp.maskingadjust - 0) > 0)) {
      gfp.maskingadjust = set.masking_adj;
    }

    if (!(Math.abs(gfp.maskingadjust_short - 0) > 0)) {
      gfp.maskingadjust_short = set.masking_adj_short;
    }

    if (!(Math.abs(-gfp.ATHlower * 10.0 - 0) > 0)) {
      gfp.ATHlower = -set.ath_lower / 10.0;
    }

    if (!(Math.abs(gfp.ATHcurve - -1) > 0)) {
      gfp.ATHcurve = set.ath_curve;
    }

    if (!(Math.abs(gfp.athaa_sensitivity - -1) > 0)) {
      gfp.athaa_sensitivity = set.ath_sensitivity;
    }

    if (set.interch > 0 && !(Math.abs(gfp.interChRatio - -1) > 0)) {
      gfp.interChRatio = set.interch;
    }

    /* parameters for which there is no proper set/get interface */
    if (set.safejoint > 0) {
      gfp.exp_nspsytune |= set.safejoint;
    }

    if (set.sfb21mod > 0) {
      gfp.exp_nspsytune |= set.sfb21mod << 20;
    }

    if (!(Math.abs(gfp.msfix - -1) > 0)) {
      gfp.msfix = set.msfix;
    }

    gfp.VBR_q = a;
    gfp.VBR_q_frac = x;
  }

  /**
   *  Switch mappings for ABR mode
   */
  private static readonly abr_switch_map: ABRPreset[] = [
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
  ];

  private apply_abr_preset(gfp: LameGlobalFlags, preset: number) {
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

    if (!(Math.abs(gfp.quant_comp - -1) > 0))
      gfp.quant_comp = Presets.abr_switch_map[r].quant_comp;
    // SET_OPTION(quant_comp, abr_switch_map[r].quant_comp, -1);
    if (!(Math.abs(gfp.quant_comp_short - -1) > 0))
      gfp.quant_comp_short = Presets.abr_switch_map[r].quant_comp_s;
    // SET_OPTION(quant_comp_short, abr_switch_map[r].quant_comp_s, -1);

    if (!(Math.abs(gfp.msfix - -1) > 0))
      gfp.msfix = Presets.abr_switch_map[r].nsmsfix;
    // SET_OPTION(msfix, abr_switch_map[r].nsmsfix, -1);

    if (!(Math.abs(gfp.internal_flags.nsPsy.attackthre - -1) > 0))
      gfp.internal_flags.nsPsy.attackthre = Presets.abr_switch_map[r].st_lrm;
    // SET_OPTION(short_threshold_lrm, abr_switch_map[r].st_lrm, -1);
    if (!(Math.abs(gfp.internal_flags.nsPsy.attackthre_s - -1) > 0))
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
    if (!(Math.abs(gfp.scale - -1) > 0))
      gfp.scale = Presets.abr_switch_map[r].scale;
    // SET_OPTION(scale, abr_switch_map[r].scale, -1);

    if (!(Math.abs(gfp.maskingadjust - 0) > 0))
      gfp.maskingadjust = Presets.abr_switch_map[r].masking_adj;
    // SET_OPTION(maskingadjust, abr_switch_map[r].masking_adj, 0);
    if (Presets.abr_switch_map[r].masking_adj > 0) {
      if (!(Math.abs(gfp.maskingadjust_short - 0) > 0))
        gfp.maskingadjust_short = Presets.abr_switch_map[r].masking_adj * 0.9;
      // SET_OPTION(maskingadjust_short, abr_switch_map[r].masking_adj *
      // .9, 0);
    } else if (!(Math.abs(gfp.maskingadjust_short - 0) > 0))
      gfp.maskingadjust_short = Presets.abr_switch_map[r].masking_adj * 1.1;
    // SET_OPTION(maskingadjust_short, abr_switch_map[r].masking_adj *
    // 1.1, 0);

    if (!(Math.abs(-gfp.ATHlower * 10 - 0) > 0))
      gfp.ATHlower = -Presets.abr_switch_map[r].ath_lower / 10;
    // SET_OPTION(ATHlower, abr_switch_map[r].ath_lower, 0);
    if (!(Math.abs(gfp.ATHcurve - -1) > 0))
      gfp.ATHcurve = Presets.abr_switch_map[r].ath_curve;
    // SET_OPTION(ATHcurve, abr_switch_map[r].ath_curve, -1);

    if (!(Math.abs(gfp.interChRatio - -1) > 0))
      gfp.interChRatio = Presets.abr_switch_map[r].interch;
    // SET_OPTION(interChRatio, abr_switch_map[r].interch, -1);

    return preset;
  }

  apply_preset(gfp: LameGlobalFlags, preset: Preset) {
    /* translate legacy presets */
    switch (preset) {
      case Preset.R3MIX: {
        preset = Preset.V3;
        gfp.VBR = VbrMode.vbr_mtrh;
        break;
      }
      case Preset.MEDIUM: {
        preset = Preset.V4;
        gfp.VBR = VbrMode.vbr_rh;
        break;
      }
      case Preset.MEDIUM_FAST: {
        preset = Preset.V4;
        gfp.VBR = VbrMode.vbr_mtrh;
        break;
      }
      case Preset.STANDARD: {
        preset = Preset.V2;
        gfp.VBR = VbrMode.vbr_rh;
        break;
      }
      case Preset.STANDARD_FAST: {
        preset = Preset.V2;
        gfp.VBR = VbrMode.vbr_mtrh;
        break;
      }
      case Preset.EXTREME: {
        preset = Preset.V0;
        gfp.VBR = VbrMode.vbr_rh;
        break;
      }
      case Preset.EXTREME_FAST: {
        preset = Preset.V0;
        gfp.VBR = VbrMode.vbr_mtrh;
        break;
      }
      case Preset.INSANE: {
        gfp.preset = 320;
        gfp.VBR = VbrMode.vbr_off;
        this.apply_abr_preset(gfp, 320);
        return 320;
      }
    }

    gfp.preset = preset;

    switch (preset) {
      case Preset.V9:
        this.apply_vbr_preset(gfp, 9);
        return preset;
      case Preset.V8:
        this.apply_vbr_preset(gfp, 8);
        return preset;
      case Preset.V7:
        this.apply_vbr_preset(gfp, 7);
        return preset;
      case Preset.V6:
        this.apply_vbr_preset(gfp, 6);
        return preset;
      case Preset.V5:
        this.apply_vbr_preset(gfp, 5);
        return preset;
      case Preset.V4:
        this.apply_vbr_preset(gfp, 4);
        return preset;
      case Preset.V3:
        this.apply_vbr_preset(gfp, 3);
        return preset;
      case Preset.V2:
        this.apply_vbr_preset(gfp, 2);
        return preset;
      case Preset.V1:
        this.apply_vbr_preset(gfp, 1);
        return preset;
      case Preset.V0:
        this.apply_vbr_preset(gfp, 0);
        return preset;
      default:
        break;
    }

    if (preset >= 8 && preset <= 320) {
      return this.apply_abr_preset(gfp, preset);
    }

    /* no corresponding preset found */
    gfp.preset = 0;
    return preset;
  }

  applyPresetFromQuality(gfp: LameGlobalFlags, quality: Quality) {
    return this.apply_preset(gfp, 500 - 10 * quality);
  }
}
