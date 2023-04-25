/*
 * MP3 quantization
 *
 *      Copyright (c) 1999-2000 Mark Taylor
 *      Copyright (c) 1999-2003 Takehiro Tominaga
 *      Copyright (c) 2000-2007 Robert Hegemann
 *      Copyright (c) 2001-2005 Gabriel Bouvigne
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.     See the GNU
 * Library General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the
 * Free Software Foundation, Inc., 59 Temple Place - Suite 330,
 * Boston, MA 02111-1307, USA.
 */

import { copyArray, fillArray, sortArray } from './Arrays';
import { BinSearchDirection } from './BinSearchDirection';
import { CalcNoiseData } from './CalcNoiseData';
import { CalcNoiseResult } from './CalcNoiseResult';
import { GrInfo } from './GrInfo';
import type { IIISideInfo } from './IIISideInfo';
import type { LameGlobalFlags } from './LameGlobalFlags';
import type { LameInternalFlags } from './LameInternalFlags';
import type { QuantizePVT } from './QuantizePVT';
import type { Reservoir } from './Reservoir';
import type { Takehiro } from './Takehiro';
import { VbrMode } from './VbrMode';
import {
  PSFB12,
  PSFB21,
  SBMAX_l,
  SBMAX_s,
  SBPSY_l,
  SBPSY_s,
  SFBMAX,
  SHORT_TYPE,
} from './constants';
import { isCloseToEachOther } from './math';

export class Quantize {
  private __rv: Reservoir | null = null;

  rv: Reservoir | null = null;

  qupvt: QuantizePVT | null = null;

  private __qupvt: QuantizePVT | null = null;

  private tk: Takehiro | null = null;

  setModules(rv: Reservoir, qupvt: QuantizePVT, tk: Takehiro) {
    this.__rv = rv;
    this.rv = rv;
    this.__qupvt = qupvt;
    this.qupvt = qupvt;
    this.tk = tk;
  }

  /**
   * convert from L/R <. Mid/Side
   */
  ms_convert(l3_side: IIISideInfo, gr: number) {
    for (let i = 0; i < 576; ++i) {
      const l = l3_side.tt[gr][0].xr[i];
      const r = l3_side.tt[gr][1].xr[i];
      l3_side.tt[gr][0].xr[i] = (l + r) * (Math.SQRT2 * 0.5);
      l3_side.tt[gr][1].xr[i] = (l - r) * (Math.SQRT2 * 0.5);
    }
  }

  /**
   * mt 6/99
   *
   * initializes cod_info, scalefac and xrpow
   *
   * returns 0 if all energies in xr are zero, else 1
   */
  private init_xrpow_core(
    cod_info: GrInfo,
    xrpow: Float32Array,
    upper: number,
    sum: number
  ) {
    sum = 0;
    for (let i = 0; i <= upper; ++i) {
      const tmp = Math.abs(cod_info.xr[i]);
      sum += tmp;
      xrpow[i] = Math.sqrt(tmp * Math.sqrt(tmp));

      if (xrpow[i] > cod_info.xrpow_max) cod_info.xrpow_max = xrpow[i];
    }
    return sum;
  }

  init_xrpow(gfc: LameInternalFlags, cod_info: GrInfo, xrpow: Float32Array) {
    let sum = 0;
    const upper = Math.trunc(cod_info.max_nonzero_coeff);

    console.assert(xrpow !== null);
    cod_info.xrpow_max = 0;

    /*
     * check if there is some energy we have to quantize and calculate xrpow
     * matching our fresh scalefactors
     */
    console.assert(upper >= 0 && upper <= 575);

    fillArray(xrpow, upper, 576, 0);

    sum = this.init_xrpow_core(cod_info, xrpow, upper, sum);

    /*
     * return 1 if we have something to quantize, else 0
     */
    if (sum > 1e-20) {
      let j = 0;
      if ((gfc.substep_shaping & 2) !== 0) j = 1;

      for (let i = 0; i < cod_info.psymax; i++) gfc.pseudohalf[i] = j;

      return true;
    }

    fillArray(cod_info.l3_enc, 0, 576, 0);
    return false;
  }

  /**
   * Gabriel Bouvigne feb/apr 2003<BR>
   * Analog silence detection in partitionned sfb21 or sfb12 for short blocks
   *
   * From top to bottom of sfb, changes to 0 coeffs which are below ath. It
   * stops on the first coeff higher than ath.
   */
  private psfb21_analogsilence(gfc: LameInternalFlags, cod_info: GrInfo) {
    const ath = gfc.ATH!;
    const { xr } = cod_info;

    if (cod_info.block_type !== SHORT_TYPE) {
      /* NORM, START or STOP type, but not SHORT blocks */
      let stop = false;
      for (let gsfb = PSFB21 - 1; gsfb >= 0 && !stop; gsfb--) {
        const start = gfc.scalefac_band.psfb21[gsfb];
        const end = gfc.scalefac_band.psfb21[gsfb + 1];
        let ath21 = this.__qupvt!.athAdjust(
          ath.adjust,
          ath.psfb21[gsfb],
          ath.floor
        );

        if (gfc.nsPsy.longfact[21] > 1e-12) ath21 *= gfc.nsPsy.longfact[21];

        for (let j = end - 1; j >= start; j--) {
          if (Math.abs(xr[j]) < ath21) xr[j] = 0;
          else {
            stop = true;
            break;
          }
        }
      }
    } else {
      /* note: short blocks coeffs are reordered */
      for (let block = 0; block < 3; block++) {
        let stop = false;
        for (let gsfb = PSFB12 - 1; gsfb >= 0 && !stop; gsfb--) {
          const start =
            gfc.scalefac_band.s[12] * 3 +
            (gfc.scalefac_band.s[13] - gfc.scalefac_band.s[12]) * block +
            (gfc.scalefac_band.psfb12[gsfb] - gfc.scalefac_band.psfb12[0]);
          const end =
            start +
            (gfc.scalefac_band.psfb12[gsfb + 1] -
              gfc.scalefac_band.psfb12[gsfb]);
          let ath12 = this.__qupvt!.athAdjust(
            ath.adjust,
            ath.psfb12[gsfb],
            ath.floor
          );

          if (gfc.nsPsy.shortfact[12] > 1e-12) ath12 *= gfc.nsPsy.shortfact[12];

          for (let j = end - 1; j >= start; j--) {
            if (Math.abs(xr[j]) < ath12) xr[j] = 0;
            else {
              stop = true;
              break;
            }
          }
        }
      }
    }
  }

  init_outer_loop(gfc: LameInternalFlags, cod_info: GrInfo) {
    /*
     * initialize fresh cod_info
     */
    cod_info.part2_3_length = 0;
    cod_info.big_values = 0;
    cod_info.count1 = 0;
    cod_info.global_gain = 210;
    cod_info.scalefac_compress = 0;
    /* mixed_block_flag, block_type was set in psymodel.c */
    cod_info.table_select[0] = 0;
    cod_info.table_select[1] = 0;
    cod_info.table_select[2] = 0;
    cod_info.subblock_gain[0] = 0;
    cod_info.subblock_gain[1] = 0;
    cod_info.subblock_gain[2] = 0;
    cod_info.subblock_gain[3] = 0;
    /* this one is always 0 */
    cod_info.region0_count = 0;
    cod_info.region1_count = 0;
    cod_info.preflag = 0;
    cod_info.scalefac_scale = 0;
    cod_info.count1table_select = 0;
    cod_info.part2_length = 0;
    cod_info.sfb_lmax = SBPSY_l;
    cod_info.sfb_smin = SBPSY_s;
    cod_info.psy_lmax = gfc.sfb21_extra ? SBMAX_l : SBPSY_l;
    cod_info.psymax = cod_info.psy_lmax;
    cod_info.sfbmax = cod_info.sfb_lmax;
    cod_info.sfbdivide = 11;
    for (let sfb = 0; sfb < SBMAX_l; sfb++) {
      cod_info.width[sfb] =
        gfc.scalefac_band.l[sfb + 1] - gfc.scalefac_band.l[sfb];
      /* which is always 0. */
      cod_info.window[sfb] = 3;
    }
    if (cod_info.block_type === SHORT_TYPE) {
      const ixwork = new Float32Array(576);

      cod_info.sfb_smin = 0;
      cod_info.sfb_lmax = 0;
      if (cod_info.mixed_block_flag !== 0) {
        /*
         * MPEG-1: sfbs 0-7 long block, 3-12 short blocks MPEG-2(.5):
         * sfbs 0-5 long block, 3-12 short blocks
         */
        cod_info.sfb_smin = 3;
        cod_info.sfb_lmax = gfc.mode_gr * 2 + 4;
      }
      cod_info.psymax =
        cod_info.sfb_lmax +
        3 * ((gfc.sfb21_extra ? SBMAX_s : SBPSY_s) - cod_info.sfb_smin);
      cod_info.sfbmax = cod_info.sfb_lmax + 3 * (SBPSY_s - cod_info.sfb_smin);
      cod_info.sfbdivide = cod_info.sfbmax - 18;
      cod_info.psy_lmax = cod_info.sfb_lmax;
      /* re-order the short blocks, for more efficient encoding below */
      /* By Takehiro TOMINAGA */
      /*
       * Within each scalefactor band, data is given for successive time
       * windows, beginning with window 0 and ending with window 2. Within
       * each window, the quantized values are then arranged in order of
       * increasing frequency...
       */
      let ix = gfc.scalefac_band.l[cod_info.sfb_lmax];
      copyArray(cod_info.xr, 0, ixwork, 0, 576);
      for (let sfb = cod_info.sfb_smin; sfb < SBMAX_s; sfb++) {
        const start = gfc.scalefac_band.s[sfb];
        const end = gfc.scalefac_band.s[sfb + 1];
        for (let window = 0; window < 3; window++) {
          for (let l = start; l < end; l++) {
            cod_info.xr[ix++] = ixwork[3 * l + window];
          }
        }
      }

      let j = cod_info.sfb_lmax;
      for (let sfb = cod_info.sfb_smin; sfb < SBMAX_s; sfb++) {
        const y = gfc.scalefac_band.s[sfb + 1] - gfc.scalefac_band.s[sfb];
        cod_info.width[j] = y;
        cod_info.width[j + 1] = y;
        cod_info.width[j + 2] = y;
        cod_info.window[j] = 0;
        cod_info.window[j + 1] = 1;
        cod_info.window[j + 2] = 2;
        j += 3;
      }
    }

    cod_info.count1bits = 0;
    cod_info.sfb_partition_table = this.__qupvt!.nr_of_sfb_block[0][0];
    cod_info.slen[0] = 0;
    cod_info.slen[1] = 0;
    cod_info.slen[2] = 0;
    cod_info.slen[3] = 0;

    cod_info.max_nonzero_coeff = 575;

    /*
     * fresh scalefactors are all zero
     */
    fillArray(cod_info.scalefac, 0);

    this.psfb21_analogsilence(gfc, cod_info);
  }

  /**
   * author/date??
   *
   * binary step size search used by outer_loop to get a quantizer step size
   * to start with
   */
  private bin_search_StepSize(
    gfc: LameInternalFlags,
    cod_info: GrInfo,
    desired_rate: number,
    ch: number,
    xrpow: Float32Array
  ) {
    let nBits;
    let CurrentStep = gfc.currentStep[ch];
    let flagGoneOver = false;
    const start = gfc.oldValue[ch];
    let Direction = BinSearchDirection.BINSEARCH_NONE;
    cod_info.global_gain = start;
    desired_rate -= cod_info.part2_length;

    console.assert(CurrentStep !== 0);
    for (;;) {
      let step;
      nBits = this.tk!.count_bits(gfc, xrpow, cod_info, null);

      if (CurrentStep === 1 || nBits === desired_rate) break;
      /* nothing to adjust anymore */

      if (nBits > desired_rate) {
        /* increase Quantize_StepSize */
        if (Direction === BinSearchDirection.BINSEARCH_DOWN)
          flagGoneOver = true;

        if (flagGoneOver) CurrentStep /= 2;
        Direction = BinSearchDirection.BINSEARCH_UP;
        step = CurrentStep;
      } else {
        /* decrease Quantize_StepSize */
        if (Direction === BinSearchDirection.BINSEARCH_UP) flagGoneOver = true;

        if (flagGoneOver) CurrentStep /= 2;
        Direction = BinSearchDirection.BINSEARCH_DOWN;
        step = -CurrentStep;
      }
      cod_info.global_gain += step;
      if (cod_info.global_gain < 0) {
        cod_info.global_gain = 0;
        flagGoneOver = true;
      }
      if (cod_info.global_gain > 255) {
        cod_info.global_gain = 255;
        flagGoneOver = true;
      }
    }

    console.assert(cod_info.global_gain >= 0);
    console.assert(cod_info.global_gain < 256);

    while (nBits > desired_rate && cod_info.global_gain < 255) {
      cod_info.global_gain++;
      nBits = this.tk!.count_bits(gfc, xrpow, cod_info, null);
    }
    gfc.currentStep[ch] = start - cod_info.global_gain >= 4 ? 4 : 2;
    gfc.oldValue[ch] = cod_info.global_gain;
    cod_info.part2_3_length = nBits;
    return nBits;
  }

  trancate_smallspectrums(
    gfc: LameInternalFlags,
    gi: GrInfo,
    l3_xmin: Float32Array,
    work: Float32Array
  ) {
    const distort = new Float32Array(SFBMAX);

    if (
      ((gfc.substep_shaping & 4) === 0 && gi.block_type === SHORT_TYPE) ||
      (gfc.substep_shaping & 0x80) !== 0
    )
      return;
    this.__qupvt!.calc_noise(gi, l3_xmin, distort, new CalcNoiseResult(), null);
    for (let j = 0; j < 576; j++) {
      let xr = 0.0;
      if (gi.l3_enc[j] !== 0) xr = Math.abs(gi.xr[j]);
      work[j] = xr;
    }

    let j = 0;
    let sfb = 8;
    if (gi.block_type === SHORT_TYPE) sfb = 6;
    do {
      let allowedNoise;
      let trancateThreshold;
      let nsame;
      let start;

      let width = gi.width[sfb];
      j += width;
      if (distort[sfb] >= 1.0) continue;

      sortArray(work, j - width, width);
      if (isCloseToEachOther(work[j - 1], 0.0)) continue;
      /* all zero sfb */

      allowedNoise = (1.0 - distort[sfb]) * l3_xmin[sfb];
      trancateThreshold = 0.0;
      start = 0;
      do {
        for (nsame = 1; start + nsame < width; nsame++)
          if (
            !isCloseToEachOther(
              work[start + j - width],
              work[start + j + nsame - width]
            )
          )
            break;

        const noise = work[start + j - width] * work[start + j - width] * nsame;
        if (allowedNoise < noise) {
          if (start !== 0) trancateThreshold = work[start + j - width - 1];
          break;
        }
        allowedNoise -= noise;
        start += nsame;
      } while (start < width);
      if (isCloseToEachOther(trancateThreshold, 0.0)) continue;

      do {
        if (Math.abs(gi.xr[j - width]) <= trancateThreshold)
          gi.l3_enc[j - width] = 0;
      } while (--width > 0);
    } while (++sfb < gi.psymax);

    gi.part2_3_length = this.tk!.noquant_count_bits(gfc, gi, null);
  }

  /**
   * author/date??
   *
   * Function: Returns zero if there is a scalefac which has not been
   * amplified. Otherwise it returns one.
   */
  private loop_break(cod_info: GrInfo) {
    for (let sfb = 0; sfb < cod_info.sfbmax; sfb++)
      if (
        cod_info.scalefac[sfb] +
          cod_info.subblock_gain[cod_info.window[sfb]] ===
        0
      )
        return false;

    return true;
  }

  /* mt 5/99: Function: Improved calc_noise for a single channel */

  private penalties(noise: number) {
    return Math.log10(0.368 + 0.632 * noise * noise * noise);
  }

  /**
   * author/date??
   *
   * several different codes to decide which quantization is better
   */
  private get_klemm_noise(distort: Float32Array, gi: GrInfo) {
    let klemm_noise = 1e-37;
    for (let sfb = 0; sfb < gi.psymax; sfb++)
      klemm_noise += this.penalties(distort[sfb]);

    return Math.max(1e-20, klemm_noise);
  }

  // eslint-disable-next-line complexity
  private quant_compare(
    quant_comp: number,
    best: CalcNoiseResult,
    calc: CalcNoiseResult,
    gi: GrInfo,
    distort: Float32Array
  ) {
    /**
     * noise is given in decibels (dB) relative to masking thesholds.<BR>
     *
     * over_noise: ??? (the previous comment is fully wrong)<BR>
     * tot_noise: ??? (the previous comment is fully wrong)<BR>
     * max_noise: max quantization noise
     */
    let better;

    switch (quant_comp) {
      default:
      case 9: {
        if (best.over_count > 0) {
          /* there are distorted sfb */
          better = calc.over_SSD <= best.over_SSD;
          if (calc.over_SSD === best.over_SSD) better = calc.bits < best.bits;
        } else {
          /* no distorted sfb */
          better =
            calc.max_noise < 0 &&
            calc.max_noise * 10 + calc.bits <= best.max_noise * 10 + best.bits;
        }
        break;
      }

      case 0:
        better =
          calc.over_count < best.over_count ||
          (calc.over_count === best.over_count &&
            calc.over_noise < best.over_noise) ||
          (calc.over_count === best.over_count &&
            isCloseToEachOther(calc.over_noise, best.over_noise) &&
            calc.tot_noise < best.tot_noise);
        break;

      case 8:
        calc.max_noise = this.get_klemm_noise(distort, gi);
      // $FALL-THROUGH$
      // eslint-disable-next-line no-fallthrough
      case 1:
        better = calc.max_noise < best.max_noise;
        break;
      case 2:
        better = calc.tot_noise < best.tot_noise;
        break;
      case 3:
        better =
          calc.tot_noise < best.tot_noise && calc.max_noise < best.max_noise;
        break;
      case 4:
        better =
          (calc.max_noise <= 0.0 && best.max_noise > 0.2) ||
          (calc.max_noise <= 0.0 &&
            best.max_noise < 0.0 &&
            best.max_noise > calc.max_noise - 0.2 &&
            calc.tot_noise < best.tot_noise) ||
          (calc.max_noise <= 0.0 &&
            best.max_noise > 0.0 &&
            best.max_noise > calc.max_noise - 0.2 &&
            calc.tot_noise < best.tot_noise + best.over_noise) ||
          (calc.max_noise > 0.0 &&
            best.max_noise > -0.05 &&
            best.max_noise > calc.max_noise - 0.1 &&
            calc.tot_noise + calc.over_noise <
              best.tot_noise + best.over_noise) ||
          (calc.max_noise > 0.0 &&
            best.max_noise > -0.1 &&
            best.max_noise > calc.max_noise - 0.15 &&
            calc.tot_noise + calc.over_noise + calc.over_noise <
              best.tot_noise + best.over_noise + best.over_noise);
        break;
      case 5:
        better =
          calc.over_noise < best.over_noise ||
          (isCloseToEachOther(calc.over_noise, best.over_noise) &&
            calc.tot_noise < best.tot_noise);
        break;
      case 6:
        better =
          calc.over_noise < best.over_noise ||
          (isCloseToEachOther(calc.over_noise, best.over_noise) &&
            (calc.max_noise < best.max_noise ||
              (isCloseToEachOther(calc.max_noise, best.max_noise) &&
                calc.tot_noise <= best.tot_noise)));
        break;
      case 7:
        better =
          calc.over_count < best.over_count ||
          calc.over_noise < best.over_noise;
        break;
    }

    if (best.over_count === 0) {
      /*
       * If no distorted bands, only use this quantization if it is
       * better, and if it uses less bits. Unfortunately, part2_3_length
       * is sometimes a poor estimator of the final size at low bitrates.
       */
      better = better && calc.bits < best.bits;
    }

    return better;
  }

  /**
   * author/date??
   *
   * <PRE>
   *  Amplify the scalefactor bands that violate the masking threshold.
   *  See ISO 11172-3 Section C.1.5.4.3.5
   *
   *  distort[] = noise/masking
   *  distort[] > 1   ==> noise is not masked
   *  distort[] < 1   ==> noise is masked
   *  max_dist = maximum value of distort[]
   *
   *  Three algorithms:
   *  noise_shaping_amp
   *        0             Amplify all bands with distort[]>1.
   *
   *        1             Amplify all bands with distort[] >= max_dist^(.5);
   *                     ( 50% in the db scale)
   *
   *        2             Amplify first band with distort[] >= max_dist;
   *
   *
   *  For algorithms 0 and 1, if max_dist < 1, then amplify all bands
   *  with distort[] >= .95*max_dist.  This is to make sure we always
   *  amplify at least one band.
   * </PRE>
   */
  private amp_scalefac_bands(
    gfp: LameGlobalFlags,
    cod_info: GrInfo,
    distort: Float32Array,
    xrpow: Float32Array,
    bRefine: boolean
  ) {
    const gfc = gfp.internal_flags;
    let ifqstep34;

    if (cod_info.scalefac_scale === 0) {
      ifqstep34 = 1.29683955465100964055;
      /* 2**(.75*.5) */
    } else {
      ifqstep34 = 1.68179283050742922612;
      /* 2**(.75*1) */
    }

    /* compute maximum value of distort[] */
    let trigger = 0;
    for (let sfb = 0; sfb < cod_info.sfbmax; sfb++) {
      if (trigger < distort[sfb]) trigger = distort[sfb];
    }

    let { noise_shaping_amp } = gfc;
    if (noise_shaping_amp === 3) {
      if (bRefine) noise_shaping_amp = 2;
      else noise_shaping_amp = 1;
    }
    switch (noise_shaping_amp) {
      case 2:
        /* amplify exactly 1 band */
        break;

      case 1:
        /* amplify bands within 50% of max (on db scale) */
        if (trigger > 1.0) trigger = Math.pow(trigger, 0.5);
        else trigger *= 0.95;
        break;

      case 0:
      default:
        /* ISO algorithm. amplify all bands with distort>1 */
        if (trigger > 1.0) trigger = 1.0;
        else trigger *= 0.95;
        break;
    }

    let j = 0;
    for (let sfb = 0; sfb < cod_info.sfbmax; sfb++) {
      const width = cod_info.width[sfb];
      let l;
      j += width;
      if (distort[sfb] < trigger) continue;

      if ((gfc.substep_shaping & 2) !== 0) {
        gfc.pseudohalf[sfb] = gfc.pseudohalf[sfb] === 0 ? 1 : 0;
        if (gfc.pseudohalf[sfb] === 0 && gfc.noise_shaping_amp === 2) return;
      }
      cod_info.scalefac[sfb]++;
      for (l = -width; l < 0; l++) {
        xrpow[j + l] *= ifqstep34;
        if (xrpow[j + l] > cod_info.xrpow_max)
          cod_info.xrpow_max = xrpow[j + l];
      }

      if (gfc.noise_shaping_amp === 2) return;
    }
  }

  /**
   * Takehiro Tominaga 2000-xx-xx
   *
   * turns on scalefac scale and adjusts scalefactors
   */
  private inc_scalefac_scale(cod_info: GrInfo, xrpow: Float32Array) {
    const ifqstep34 = 1.29683955465100964055;

    let j = 0;
    for (let sfb = 0; sfb < cod_info.sfbmax; sfb++) {
      const width = cod_info.width[sfb];
      let s = cod_info.scalefac[sfb];
      if (cod_info.preflag !== 0) s += this.__qupvt!.pretab[sfb];
      j += width;
      if ((s & 1) !== 0) {
        s++;
        for (let l = -width; l < 0; l++) {
          xrpow[j + l] *= ifqstep34;
          if (xrpow[j + l] > cod_info.xrpow_max)
            cod_info.xrpow_max = xrpow[j + l];
        }
      }
      cod_info.scalefac[sfb] = s >> 1;
    }
    cod_info.preflag = 0;
    cod_info.scalefac_scale = 1;
  }

  /**
   * Takehiro Tominaga 2000-xx-xx
   *
   * increases the subblock gain and adjusts scalefactors
   */
  private inc_subblock_gain(
    gfc: LameInternalFlags,
    cod_info: GrInfo,
    xrpow: Float32Array
  ) {
    let sfb;
    const { scalefac } = cod_info;

    /* subbloc_gain can't do anything in the long block region */
    for (sfb = 0; sfb < cod_info.sfb_lmax; sfb++) {
      if (scalefac[sfb] >= 16) return true;
    }

    for (let window = 0; window < 3; window++) {
      let s1 = 0;
      let s2 = 0;

      for (
        sfb = cod_info.sfb_lmax + window;
        sfb < cod_info.sfbdivide;
        sfb += 3
      ) {
        if (s1 < scalefac[sfb]) s1 = scalefac[sfb];
      }
      for (; sfb < cod_info.sfbmax; sfb += 3) {
        if (s2 < scalefac[sfb]) s2 = scalefac[sfb];
      }

      if (s1 < 16 && s2 < 8) continue;

      if (cod_info.subblock_gain[window] >= 7) return true;

      /*
       * even though there is no scalefactor for sfb12 subblock gain
       * affects upper frequencies too, that's why we have to go up to
       * SBMAX_s
       */
      cod_info.subblock_gain[window]++;
      let j = gfc.scalefac_band.l[cod_info.sfb_lmax];
      for (sfb = cod_info.sfb_lmax + window; sfb < cod_info.sfbmax; sfb += 3) {
        let amp;
        const width = cod_info.width[sfb];
        let s = scalefac[sfb];
        console.assert(s >= 0);
        s -= 4 >> cod_info.scalefac_scale;
        if (s >= 0) {
          scalefac[sfb] = s;
          j += width * 3;
          continue;
        }

        scalefac[sfb] = 0;
        {
          const gain = 210 + (s << (cod_info.scalefac_scale + 1));
          amp = this.__qupvt!.IPOW20(gain);
        }
        j += width * (window + 1);
        for (let l = -width; l < 0; l++) {
          xrpow[j + l] *= amp;
          if (xrpow[j + l] > cod_info.xrpow_max)
            cod_info.xrpow_max = xrpow[j + l];
        }
        j += width * (3 - window - 1);
      }

      {
        const amp = this.__qupvt!.IPOW20(202);
        j += cod_info.width[sfb] * (window + 1);
        for (let l = -cod_info.width[sfb]; l < 0; l++) {
          xrpow[j + l] *= amp;
          if (xrpow[j + l] > cod_info.xrpow_max)
            cod_info.xrpow_max = xrpow[j + l];
        }
      }
    }
    return false;
  }

  /**
   * <PRE>
   *  Takehiro Tominaga /date??
   *  Robert Hegemann 2000-09-06: made a function of it
   *
   *  amplifies scalefactor bands,
   *   - if all are already amplified returns 0
   *   - if some bands are amplified too much:
   *      * try to increase scalefac_scale
   *      * if already scalefac_scale was set
   *          try on short blocks to increase subblock gain
   * </PRE>
   */
  private balance_noise(
    gfp: LameGlobalFlags,
    cod_info: GrInfo,
    distort: Float32Array,
    xrpow: Float32Array,
    bRefine: boolean
  ) {
    const gfc = gfp.internal_flags;

    this.amp_scalefac_bands(gfp, cod_info, distort, xrpow, bRefine);

    /*
     * check to make sure we have not amplified too much loop_break returns
     * 0 if there is an unamplified scalefac scale_bitcount returns 0 if no
     * scalefactors are too large
     */

    let status = this.loop_break(cod_info);

    if (status) return false;
    /* all bands amplified */

    /*
     * not all scalefactors have been amplified. so these scalefacs are
     * possibly valid. encode them:
     */
    if (gfc.mode_gr === 2) status = this.tk!.scale_bitcount(cod_info);
    else status = this.tk!.scale_bitcount_lsf(gfc, cod_info);

    if (!status) return true;
    /* amplified some bands not exceeding limits */

    /*
     * some scalefactors are too large. lets try setting scalefac_scale=1
     */
    if (gfc.noise_shaping > 1) {
      fillArray(gfc.pseudohalf, 0);
      if (cod_info.scalefac_scale === 0) {
        this.inc_scalefac_scale(cod_info, xrpow);
        status = false;
      } else if (cod_info.block_type === SHORT_TYPE && gfc.subblock_gain > 0) {
        status =
          this.inc_subblock_gain(gfc, cod_info, xrpow) ||
          this.loop_break(cod_info);
      }
    }

    if (!status) {
      if (gfc.mode_gr === 2) status = this.tk!.scale_bitcount(cod_info);
      else status = this.tk!.scale_bitcount_lsf(gfc, cod_info);
    }
    return !status;
  }

  /**
   * <PRE>
   *  Function: The outer iteration loop controls the masking conditions
   *  of all scalefactorbands. It computes the best scalefac and
   *  global gain. This module calls the inner iteration loop
   *
   *  mt 5/99 completely rewritten to allow for bit reservoir control,
   *  mid/side channels with L/R or mid/side masking thresholds,
   *  and chooses best quantization instead of last quantization when
   *  no distortion free quantization can be found.
   *
   *  added VBR support mt 5/99
   *
   *  some code shuffle rh 9/00
   * </PRE>
   *
   * @param l3_xmin
   *            allowed distortion
   * @param xrpow
   *            coloured magnitudes of spectral
   * @param targ_bits
   *            maximum allowed bits
   */
  // eslint-disable-next-line complexity
  outer_loop(
    gfp: LameGlobalFlags,
    cod_info: GrInfo,
    l3_xmin: Float32Array,
    xrpow: Float32Array,
    ch: number,
    targ_bits: number
  ) {
    const gfc = gfp.internal_flags;
    const cod_info_w = new GrInfo();
    const save_xrpow = new Float32Array(576);
    const distort = new Float32Array(SFBMAX);
    let best_noise_info = new CalcNoiseResult();
    let better;
    const prev_noise = new CalcNoiseData();
    let best_part2_3_length = 9999999;
    let bEndOfSearch = false;
    let bRefine = false;
    let best_ggain_pass1 = 0;

    this.bin_search_StepSize(gfc, cod_info, targ_bits, ch, xrpow);

    if (gfc.noise_shaping === 0)
      /* fast mode, no noise shaping, we are ready */
      return 100;
    /* default noise_info.over_count */

    /* compute the distortion in this quantization */
    /* coefficients and thresholds both l/r (or both mid/side) */
    this.__qupvt!.calc_noise(
      cod_info,
      l3_xmin,
      distort,
      best_noise_info,
      prev_noise
    );
    best_noise_info.bits = cod_info.part2_3_length;

    cod_info_w.assign(cod_info);
    let age = 0;
    copyArray(xrpow, 0, save_xrpow, 0, 576);

    while (!bEndOfSearch) {
      /* BEGIN MAIN LOOP */
      do {
        const noise_info = new CalcNoiseResult();
        let search_limit;
        let maxggain = 255;

        /*
         * When quantization with no distorted bands is found, allow up
         * to X new unsuccesful tries in serial. This gives us more
         * possibilities for different quant_compare modes. Much more
         * than 3 makes not a big difference, it is only slower.
         */

        if ((gfc.substep_shaping & 2) !== 0) {
          search_limit = 20;
        } else {
          search_limit = 3;
        }

        /*
         * Check if the last scalefactor band is distorted. in VBR mode
         * we can't get rid of the distortion, so quit now and VBR mode
         * will try again with more bits. (makes a 10% speed increase,
         * the files I tested were binary identical, 2000/05/20 Robert
         * Hegemann) distort[] > 1 means noise > allowed noise
         */
        if (gfc.sfb21_extra) {
          if (distort[cod_info_w.sfbmax] > 1.0) break;
          if (
            cod_info_w.block_type === SHORT_TYPE &&
            (distort[cod_info_w.sfbmax + 1] > 1.0 ||
              distort[cod_info_w.sfbmax + 2] > 1.0)
          )
            break;
        }

        /* try a new scalefactor conbination on cod_info_w */
        if (!this.balance_noise(gfp, cod_info_w, distort, xrpow, bRefine))
          break;
        if (cod_info_w.scalefac_scale !== 0) maxggain = 254;

        /*
         * inner_loop starts with the initial quantization step computed
         * above and slowly increases until the bits < huff_bits. Thus
         * it is important not to start with too large of an inital
         * quantization step. Too small is ok, but inner_loop will take
         * longer
         */
        const huff_bits = targ_bits - cod_info_w.part2_length;
        if (huff_bits <= 0) break;

        /*
         * increase quantizer stepsize until needed bits are below
         * maximum
         */
        while (
          (cod_info_w.part2_3_length = this.tk!.count_bits(
            gfc,
            xrpow,
            cod_info_w,
            prev_noise
          )) > huff_bits &&
          cod_info_w.global_gain <= maxggain
        )
          cod_info_w.global_gain++;

        if (cod_info_w.global_gain > maxggain) break;

        if (best_noise_info.over_count === 0) {
          while (
            (cod_info_w.part2_3_length = this.tk!.count_bits(
              gfc,
              xrpow,
              cod_info_w,
              prev_noise
            )) > best_part2_3_length &&
            cod_info_w.global_gain <= maxggain
          )
            cod_info_w.global_gain++;

          if (cod_info_w.global_gain > maxggain) break;
        }

        /* compute the distortion in this quantization */
        this.__qupvt!.calc_noise(
          cod_info_w,
          l3_xmin,
          distort,
          noise_info,
          prev_noise
        );
        noise_info.bits = cod_info_w.part2_3_length;

        /*
         * check if this quantization is better than our saved
         * quantization
         */
        if (cod_info.block_type !== SHORT_TYPE) {
          // NORM, START or STOP type
          better = gfp.quant_comp;
        } else better = gfp.quant_comp_short;

        better = this.quant_compare(
          better,
          best_noise_info,
          noise_info,
          cod_info_w,
          distort
        )
          ? 1
          : 0;

        /* save data so we can restore this quantization later */
        if (better !== 0) {
          best_part2_3_length = cod_info.part2_3_length;
          best_noise_info = noise_info;
          cod_info.assign(cod_info_w);
          age = 0;
          /* save data so we can restore this quantization later */
          /* store for later reuse */
          copyArray(xrpow, 0, save_xrpow, 0, 576);
        } else if (gfc.full_outer_loop === 0) {
          /* early stop? */
          if (++age > search_limit && best_noise_info.over_count === 0) break;
          if (gfc.noise_shaping_amp === 3 && bRefine && age > 30) break;
          if (
            gfc.noise_shaping_amp === 3 &&
            bRefine &&
            cod_info_w.global_gain - best_ggain_pass1 > 15
          )
            break;
        }
      } while (cod_info_w.global_gain + cod_info_w.scalefac_scale < 255);

      if (gfc.noise_shaping_amp === 3) {
        if (!bRefine) {
          /* refine search */
          cod_info_w.assign(cod_info);
          copyArray(save_xrpow, 0, xrpow, 0, 576);
          age = 0;
          best_ggain_pass1 = cod_info_w.global_gain;

          bRefine = true;
        } else {
          /* search already refined, stop */
          bEndOfSearch = true;
        }
      } else {
        bEndOfSearch = true;
      }
    }

    console.assert(cod_info.global_gain + cod_info.scalefac_scale <= 255);
    /*
     * finish up
     */
    if (gfp.VBR === VbrMode.vbr_rh || gfp.VBR === VbrMode.vbr_mtrh)
      /* restore for reuse on next try */
      copyArray(save_xrpow, 0, xrpow, 0, 576);
    /*
     * do the 'substep shaping'
     */ else if ((gfc.substep_shaping & 1) !== 0)
      this.trancate_smallspectrums(gfc, cod_info, l3_xmin, xrpow);

    return best_noise_info.over_count;
  }

  /**
   * Robert Hegemann 2000-09-06
   *
   * update reservoir status after FINAL quantization/bitrate
   */
  iteration_finish_one(gfc: LameInternalFlags, gr: number, ch: number) {
    const { l3_side } = gfc;
    const cod_info = l3_side.tt[gr][ch];

    /*
     * try some better scalefac storage
     */
    this.tk!.best_scalefac_store(gfc, gr, ch, l3_side);

    /*
     * best huffman_divide may save some bits too
     */
    if (gfc.use_best_huffman === 1) this.tk!.best_huffman_divide(gfc, cod_info);

    /*
     * update reservoir status after FINAL quantization/bitrate
     */
    this.__rv!.ResvAdjust(gfc, cod_info);
  }
}
