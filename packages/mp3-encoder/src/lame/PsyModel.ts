/*
 *      psymodel.c
 *
 *      Copyright (c) 1999-2000 Mark Taylor
 *      Copyright (c) 2001-2002 Naoki Shibata
 *      Copyright (c) 2000-2003 Takehiro Tominaga
 *      Copyright (c) 2000-2008 Robert Hegemann
 *      Copyright (c) 2000-2005 Gabriel Bouvigne
 *      Copyright (c) 2000-2005 Alexander Leidinger
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Library General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the
 * Free Software Foundation, Inc., 59 Temple Place - Suite 330,
 * Boston, MA 02111-1307, USA.
 */

/*
 PSYCHO ACOUSTICS


 This routine computes the psycho acoustics, delayed by one granule.

 Input: buffer of PCM data (1024 samples).

 This window should be centered over the 576 sample granule window.
 The routine will compute the psycho acoustics for
 this granule, but return the psycho acoustics computed
 for the *previous* granule.  This is because the block
 type of the previous granule can only be determined
 after we have computed the psycho acoustics for the following
 granule.

 Output:  maskings and energies for each scalefactor band.
 block type, PE, and some correlation measures.
 The PE is used by CBR modes to determine if extra bits
 from the bit reservoir should be used.  The correlation
 measures are used to determine mid/side or regular stereo.
 */
/*
 Notation:

 barks:  a non-linear frequency scale.  Mapping from frequency to
 barks is given by freq2bark()

 scalefactor bands: The spectrum (frequencies) are broken into
 SBMAX "scalefactor bands".  Thes bands
 are determined by the MPEG ISO spec.  In
 the noise shaping/quantization code, we allocate
 bits among the partition bands to achieve the
 best possible quality

 partition bands:   The spectrum is also broken into about
 64 "partition bands".  Each partition
 band is about .34 barks wide.  There are about 2-5
 partition bands for each scalefactor band.

 LAME computes all psycho acoustic information for each partition
 band.  Then at the end of the computations, this information
 is mapped to scalefactor bands.  The energy in each scalefactor
 band is taken as the sum of the energy in all partition bands
 which overlap the scalefactor band.  The maskings can be computed
 in the same way (and thus represent the average masking in that band)
 or by taking the minmum value multiplied by the number of
 partition bands used (which represents a minimum masking in that band).
 */
/*
 The general outline is as follows:

 1. compute the energy in each partition band
 2. compute the tonality in each partition band
 3. compute the strength of each partion band "masker"
 4. compute the masking (via the spreading function applied to each masker)
 5. Modifications for mid/side masking.

 Each partition band is considiered a "masker".  The strength
 of the i'th masker in band j is given by:

 s3(bark(i)-bark(j))*strength(i)

 The strength of the masker is a function of the energy and tonality.
 The more tonal, the less masking.  LAME uses a simple linear formula
 (controlled by NMT and TMN) which says the strength is given by the
 energy divided by a linear function of the tonality.
 */
/*
 s3() is the "spreading function".  It is given by a formula
 determined via listening tests.

 The total masking in the j'th partition band is the sum over
 all maskings i.  It is thus given by the convolution of
 the strength with s3(), the "spreading function."

 masking(j) = sum_over_i  s3(i-j)*strength(i)  = s3 o strength

 where "o" = convolution operator.  s3 is given by a formula determined
 via listening tests.  It is normalized so that s3 o 1 = 1.

 Note: instead of a simple convolution, LAME also has the
 option of using "additive masking"

 The most critical part is step 2, computing the tonality of each
 partition band.  LAME has two tonality estimators.  The first
 is based on the ISO spec, and measures how predictiable the
 signal is over time.  The more predictable, the more tonal.
 The second measure is based on looking at the spectrum of
 a single granule.  The more peaky the spectrum, the more
 tonal.  By most indications, the latter approach is better.

 Finally, in step 5, the maskings for the mid and side
 channel are possibly increased.  Under certain circumstances,
 noise in the mid & side channels is assumed to also
 be masked by strong maskers in the L or R channels.


 Other data computed by the psy-model:

 ms_ratio        side-channel / mid-channel masking ratio (for previous granule)
 ms_ratio_next   side-channel / mid-channel masking ratio for this granule

 percep_entropy[2]     L and R values (prev granule) of PE - A measure of how
 much pre-echo is in the previous granule
 percep_entropy_MS[2]  mid and side channel values (prev granule) of percep_entropy
 energy[4]             L,R,M,S energy in each channel, prev granule
 blocktype_d[2]        block type to use for previous granule
 */

import type { ArrayOf } from './ArrayOf';
import { Arrays } from './Arrays';
import { Encoder } from './Encoder';
import { FFT } from './FFT';
import { Float } from './Float';
import type { III_psy_ratio } from './III_psy_ratio';
import type { LameGlobalFlags } from './LameGlobalFlags';
import type { LameInternalFlags } from './LameInternalFlags';
import { MPEGMode } from './MPEGMode';
import { ShortBlock } from './ShortBlock';
import { Util } from './Util';
import { VbrMode } from './VbrMode';
import { new_float_n } from './common';

export class PsyModel {
  private readonly fft = new FFT();

  private static readonly LOG10 = 2.302585092994046;

  private readonly rpelev = 2;

  private readonly rpelev2 = 16;

  private readonly rpelev_s = 2;

  private readonly rpelev2_s = 16;

  /* size of each partition band, in barks: */
  private static readonly DELBARK = 0.34;

  /* tuned for output level (sensitive to energy scale) */
  private static readonly VO_SCALE =
    1 / (14752 * 14752) / (Encoder.BLKSIZE / 2);

  private readonly temporalmask_sustain_sec = 0.01;

  private static readonly NS_PREECHO_ATT0 = 0.8;

  private static readonly NS_PREECHO_ATT1 = 0.6;

  private static readonly NS_PREECHO_ATT2 = 0.3;

  private static readonly NS_MSFIX = 3.5;

  static readonly NSATTACKTHRE = 4.4;

  static readonly NSATTACKTHRE_S = 25;

  private static readonly NSFIRLEN = 21;

  /* size of each partition band, in barks: */
  private static readonly LN_TO_LOG10 = 0.2302585093;

  /**
   * <PRE>
   *       L3psycho_anal.  Compute psycho acoustics.
   *
   *       Data returned to the calling program must be delayed by one
   *       granule.
   *
   *       This is done in two places.
   *       If we do not need to know the blocktype, the copying
   *       can be done here at the top of the program: we copy the data for
   *       the last granule (computed during the last call) before it is
   *       overwritten with the new data.  It looks like this:
   *
   *       0. static psymodel_data
   *       1. calling_program_data = psymodel_data
   *       2. compute psymodel_data
   *
   *       For data which needs to know the blocktype, the copying must be
   *       done at the end of this loop, and the old values must be saved:
   *
   *       0. static psymodel_data_old
   *       1. compute psymodel_data
   *       2. compute possible block type of this granule
   *       3. compute final block type of previous granule based on #2.
   *       4. calling_program_data = psymodel_data_old
   *       5. psymodel_data_old = psymodel_data
   *     psycho_loudness_approx
   *       jd - 2001 mar 12
   *    in:  energy   - BLKSIZE/2 elements of frequency magnitudes ^ 2
   *         gfp      - uses out_samplerate, ATHtype (also needed for ATHformula)
   *    returns: loudness^2 approximation, a positive value roughly tuned for a value
   *             of 1.0 for signals near clipping.
   *    notes:   When calibrated, feeding this function binary white noise at sample
   *             values +32767 or -32768 should return values that approach 3.
   *             ATHformula is used to approximate an equal loudness curve.
   *    future:  Data indicates that the shape of the equal loudness curve varies
   *             with intensity.  This function might be improved by using an equal
   *             loudness curve shaped for typical playback levels (instead of the
   *             ATH, that is shaped for the threshold).  A flexible realization might
   *             simply bend the existing ATH curve to achieve the desired shape.
   *             However, the potential gain may not be enough to justify an effort.
   * </PRE>
   */
  private psycho_loudness_approx(
    energy: ArrayOf<number>,
    gfc: LameInternalFlags
  ) {
    let loudness_power = 0.0;
    /* apply weights to power in freq. bands */
    for (let i = 0; i < Encoder.BLKSIZE / 2; ++i)
      loudness_power += energy[i] * gfc.ATH!.eql_w[i];
    loudness_power *= PsyModel.VO_SCALE;

    return loudness_power;
  }

  private compute_ffts(
    gfp: LameGlobalFlags,
    fftenergy: ArrayOf<number>,
    fftenergy_s: ArrayOf<number>[],
    wsamp_l: ArrayOf<number>[],
    wsamp_lPos: number,
    wsamp_s: ArrayOf<number>[][],
    wsamp_sPos: number,
    gr_out: number,
    chn: number,
    buffer: ArrayOf<number>[],
    bufPos: number
  ) {
    const gfc = gfp.internal_flags!;
    if (chn < 2) {
      this.fft.fft_long(gfc, wsamp_l[wsamp_lPos], chn, buffer, bufPos);
      this.fft.fft_short(gfc, wsamp_s[wsamp_sPos], chn, buffer, bufPos);
    } else if (chn === 2) {
      /* FFT data for mid and side channel is derived from L & R */
      for (let j = Encoder.BLKSIZE - 1; j >= 0; --j) {
        const l = wsamp_l[wsamp_lPos + 0][j];
        const r = wsamp_l[wsamp_lPos + 1][j];
        wsamp_l[wsamp_lPos + 0][j] = (l + r) * Util.SQRT2 * 0.5;
        wsamp_l[wsamp_lPos + 1][j] = (l - r) * Util.SQRT2 * 0.5;
      }
      for (let b = 2; b >= 0; --b) {
        for (let j = Encoder.BLKSIZE_s - 1; j >= 0; --j) {
          const l = wsamp_s[wsamp_sPos + 0][b][j];
          const r = wsamp_s[wsamp_sPos + 1][b][j];
          wsamp_s[wsamp_sPos + 0][b][j] = (l + r) * Util.SQRT2 * 0.5;
          wsamp_s[wsamp_sPos + 1][b][j] = (l - r) * Util.SQRT2 * 0.5;
        }
      }
    }

    /** *******************************************************************
     * compute energies
     *********************************************************************/
    fftenergy[0] = wsamp_l[wsamp_lPos + 0][0];
    fftenergy[0] *= fftenergy[0];

    for (let j = Encoder.BLKSIZE / 2 - 1; j >= 0; --j) {
      const re = wsamp_l[wsamp_lPos + 0][Encoder.BLKSIZE / 2 - j];
      const im = wsamp_l[wsamp_lPos + 0][Encoder.BLKSIZE / 2 + j];
      fftenergy[Encoder.BLKSIZE / 2 - j] = (re * re + im * im) * 0.5;
    }
    for (let b = 2; b >= 0; --b) {
      fftenergy_s[b][0] = wsamp_s[wsamp_sPos + 0][b][0];
      fftenergy_s[b][0] *= fftenergy_s[b][0];
      for (let j = Encoder.BLKSIZE_s / 2 - 1; j >= 0; --j) {
        const re = wsamp_s[wsamp_sPos + 0][b][Encoder.BLKSIZE_s / 2 - j];
        const im = wsamp_s[wsamp_sPos + 0][b][Encoder.BLKSIZE_s / 2 + j];
        fftenergy_s[b][Encoder.BLKSIZE_s / 2 - j] = (re * re + im * im) * 0.5;
      }
    }
    /* total energy */
    {
      let totalenergy = 0.0;
      for (let j = 11; j < Encoder.HBLKSIZE; j++) totalenergy += fftenergy[j];

      gfc.tot_ener[chn] = totalenergy;
    }

    if (gfp.analysis) {
      for (let j = 0; j < Encoder.HBLKSIZE; j++) {
        gfc.pinfo!.energy[gr_out][chn][j] = gfc.pinfo!.energy_save[chn][j];
        gfc.pinfo!.energy_save[chn][j] = fftenergy[j];
      }
      gfc.pinfo!.pe[gr_out][chn] = gfc.pe[chn];
    }

    /** *******************************************************************
     * compute loudness approximation (used for ATH auto-level adjustment)
     *********************************************************************/
    if (gfp.athaa_loudapprox === 2 && chn < 2) {
      // no loudness for mid/side ch
      gfc.loudness_sq[gr_out][chn] = gfc.loudness_sq_save[chn];
      gfc.loudness_sq_save[chn] = this.psycho_loudness_approx(fftenergy, gfc);
    }
  }

  /* mask_add optimization */
  /* init the limit values used to avoid computing log in mask_add when it is not necessary */

  /**
   * <PRE>
   *  For example, with i = 10*log10(m2/m1)/10*16         (= log10(m2/m1)*16)
   *
   * abs(i)>8 is equivalent (as i is an integer) to
   * abs(i)>=9
   * i>=9 || i<=-9
   * equivalent to (as i is the biggest integer smaller than log10(m2/m1)*16
   * or the smallest integer bigger than log10(m2/m1)*16 depending on the sign of log10(m2/m1)*16)
   * log10(m2/m1)>=9/16 || log10(m2/m1)<=-9/16
   * exp10 is strictly increasing thus this is equivalent to
   * m2/m1 >= 10^(9/16) || m2/m1<=10^(-9/16) which are comparisons to constants
   * </PRE>
   */

  /**
   * as in if(i>8)
   */
  private static readonly I1LIMIT = 8;

  /**
   * as in if(i>24) . changed 23
   */
  private static readonly I2LIMIT = 23;

  /**
   * as in if(m<15)
   */
  private static readonly MLIMIT = 15;

  private ma_max_i1 = 0;

  private ma_max_i2 = 0;

  private ma_max_m = 0;

  /**
   * This is the masking table:<BR>
   * According to tonality, values are going from 0dB (TMN) to 9.3dB (NMT).<BR>
   * After additive masking computation, 8dB are added, so final values are
   * going from 8dB to 17.3dB
   *
   * pow(10, -0.0..-0.6)
   */
  private readonly tab = [
    1.0, 0.79433, 0.63096, 0.63096, 0.63096, 0.63096, 0.63096, 0.25119, 0.11749,
  ] as const;

  private init_mask_add_max_values() {
    this.ma_max_i1 = Math.pow(10, (PsyModel.I1LIMIT + 1) / 16.0);
    this.ma_max_i2 = Math.pow(10, (PsyModel.I2LIMIT + 1) / 16.0);
    this.ma_max_m = Math.pow(10, PsyModel.MLIMIT / 10.0);
  }

  private readonly table1 = [
    3.3246 * 3.3246,
    3.23837 * 3.23837,
    3.15437 * 3.15437,
    3.00412 * 3.00412,
    2.86103 * 2.86103,
    2.65407 * 2.65407,
    2.46209 * 2.46209,
    2.284 * 2.284,
    2.11879 * 2.11879,
    1.96552 * 1.96552,
    1.82335 * 1.82335,
    1.69146 * 1.69146,
    1.56911 * 1.56911,
    1.46658 * 1.46658,
    1.37074 * 1.37074,
    1.31036 * 1.31036,
    1.25264 * 1.25264,
    1.20648 * 1.20648,
    1.16203 * 1.16203,
    1.12765 * 1.12765,
    1.09428 * 1.09428,
    1.0659 * 1.0659,
    1.03826 * 1.03826,
    1.01895 * 1.01895,
    1,
  ] as const;

  private readonly table2 = [
    1.33352 * 1.33352,
    1.35879 * 1.35879,
    1.38454 * 1.38454,
    1.39497 * 1.39497,
    1.40548 * 1.40548,
    1.3537 * 1.3537,
    1.30382 * 1.30382,
    1.22321 * 1.22321,
    1.14758 * 1.14758,
    1,
  ] as const;

  private readonly table3 = [
    2.35364 * 2.35364,
    2.29259 * 2.29259,
    2.23313 * 2.23313,
    2.12675 * 2.12675,
    2.02545 * 2.02545,
    1.87894 * 1.87894,
    1.74303 * 1.74303,
    1.61695 * 1.61695,
    1.49999 * 1.49999,
    1.39148 * 1.39148,
    1.29083 * 1.29083,
    1.19746 * 1.19746,
    1.11084 * 1.11084,
    1.03826 * 1.03826,
  ] as const;

  /**
   * addition of simultaneous masking Naoki Shibata 2000/7
   */
  private mask_add(
    m1: number,
    m2: number,
    kk: number,
    b: number,
    gfc: LameInternalFlags,
    shortblock: number
  ) {
    let ratio;

    if (m2 > m1) {
      if (m2 < m1 * this.ma_max_i2) ratio = m2 / m1;
      else return m1 + m2;
    } else {
      if (m1 >= m2 * this.ma_max_i2) return m1 + m2;
      ratio = m1 / m2;
    }

    /* Should always be true, just checking */
    console.assert(m1 >= 0);
    console.assert(m2 >= 0);

    m1 += m2;
    // if (((long)(b + 3) & 0xffffffff) <= 3 + 3) {
    if (b + 3 <= 3 + 3) {
      /* approximately, 1 bark = 3 partitions */
      /* 65% of the cases */
      /* originally 'if(i > 8)' */
      if (ratio >= this.ma_max_i1) {
        /* 43% of the total */
        return m1;
      }

      /* 22% of the total */
      const i = 0 | Util.log10_X(ratio, 16.0);
      return m1 * this.table2[i];
    }

    /**
     * <PRE>
     * m<15 equ log10((m1+m2)/gfc.ATH!.cb[k])<1.5
     * equ (m1+m2)/gfc.ATH!.cb[k]<10^1.5
     * equ (m1+m2)<10^1.5 * gfc.ATH!.cb[k]
     * </PRE>
     */
    const i = 0 | Util.log10_X(ratio, 16.0);
    if (shortblock !== 0) {
      m2 = gfc.ATH!.cb_s[kk] * gfc.ATH!.adjust;
    } else {
      m2 = gfc.ATH!.cb_l[kk] * gfc.ATH!.adjust;
    }
    console.assert(m2 >= 0);
    if (m1 < this.ma_max_m * m2) {
      /* 3% of the total */
      /* Originally if (m > 0) { */
      if (m1 > m2) {
        let f;
        f = 1.0;
        if (i <= 13) f = this.table3[i];

        const r = Util.log10_X(m1 / m2, 10.0 / 15.0);
        return m1 * ((this.table1[i] - f) * r + f);
      }

      if (i > 13) return m1;

      return m1 * this.table3[i];
    }

    /* 10% of total */
    return m1 * this.table1[i];
  }

  private readonly table2_ = [
    1.33352 * 1.33352,
    1.35879 * 1.35879,
    1.38454 * 1.38454,
    1.39497 * 1.39497,
    1.40548 * 1.40548,
    1.3537 * 1.3537,
    1.30382 * 1.30382,
    1.22321 * 1.22321,
    1.14758 * 1.14758,
    1,
  ] as const;

  /**
   * addition of simultaneous masking Naoki Shibata 2000/7
   */
  private vbrpsy_mask_add(m1: number, m2: number, b: number) {
    let ratio;

    if (m1 < 0) {
      m1 = 0;
    }
    if (m2 < 0) {
      m2 = 0;
    }
    if (m1 <= 0) {
      return m2;
    }
    if (m2 <= 0) {
      return m1;
    }
    if (m2 > m1) {
      ratio = m2 / m1;
    } else {
      ratio = m1 / m2;
    }
    if (b >= -2 && b <= 2) {
      /* approximately, 1 bark = 3 partitions */
      /* originally 'if(i > 8)' */
      if (ratio >= this.ma_max_i1) {
        return m1 + m2;
      }
      const i = 0 | Util.log10_X(ratio, 16.0);
      return (m1 + m2) * this.table2_[i];
    }
    if (ratio < this.ma_max_i2) {
      return m1 + m2;
    }
    if (m1 < m2) {
      m1 = m2;
    }
    return m1;
  }

  /**
   * compute interchannel masking effects
   */
  private calc_interchannel_masking(gfp: LameGlobalFlags, ratio: number) {
    const gfc = gfp.internal_flags!;
    if (gfc.channels_out > 1) {
      for (let sb = 0; sb < Encoder.SBMAX_l; sb++) {
        const l = gfc.thm[0].l[sb];
        const r = gfc.thm[1].l[sb];
        gfc.thm[0].l[sb] += r * ratio;
        gfc.thm[1].l[sb] += l * ratio;
      }
      for (let sb = 0; sb < Encoder.SBMAX_s; sb++) {
        for (let sblock = 0; sblock < 3; sblock++) {
          const l = gfc.thm[0].s[sb][sblock];
          const r = gfc.thm[1].s[sb][sblock];
          gfc.thm[0].s[sb][sblock] += r * ratio;
          gfc.thm[1].s[sb][sblock] += l * ratio;
        }
      }
    }
  }

  /**
   * compute M/S thresholds from Johnston & Ferreira 1992 ICASSP paper
   */
  private msfix1(gfc: LameInternalFlags) {
    for (let sb = 0; sb < Encoder.SBMAX_l; sb++) {
      /* use this fix if L & R masking differs by 2db or less */
      /* if db = 10*log10(x2/x1) < 2 */
      /* if (x2 < 1.58*x1) { */
      if (
        gfc.thm[0].l[sb] > 1.58 * gfc.thm[1].l[sb] ||
        gfc.thm[1].l[sb] > 1.58 * gfc.thm[0].l[sb]
      )
        continue;
      let mld = gfc.mld_l[sb] * gfc.en[3].l[sb];
      const rmid = Math.max(gfc.thm[2].l[sb], Math.min(gfc.thm[3].l[sb], mld));

      mld = gfc.mld_l[sb] * gfc.en[2].l[sb];
      const rside = Math.max(gfc.thm[3].l[sb], Math.min(gfc.thm[2].l[sb], mld));
      gfc.thm[2].l[sb] = rmid;
      gfc.thm[3].l[sb] = rside;
    }

    for (let sb = 0; sb < Encoder.SBMAX_s; sb++) {
      for (let sblock = 0; sblock < 3; sblock++) {
        if (
          gfc.thm[0].s[sb][sblock] > 1.58 * gfc.thm[1].s[sb][sblock] ||
          gfc.thm[1].s[sb][sblock] > 1.58 * gfc.thm[0].s[sb][sblock]
        )
          continue;
        let mld = gfc.mld_s[sb] * gfc.en[3].s[sb][sblock];
        const rmid = Math.max(
          gfc.thm[2].s[sb][sblock],
          Math.min(gfc.thm[3].s[sb][sblock], mld)
        );

        mld = gfc.mld_s[sb] * gfc.en[2].s[sb][sblock];
        const rside = Math.max(
          gfc.thm[3].s[sb][sblock],
          Math.min(gfc.thm[2].s[sb][sblock], mld)
        );

        gfc.thm[2].s[sb][sblock] = rmid;
        gfc.thm[3].s[sb][sblock] = rside;
      }
    }
  }

  /**
   * Adjust M/S maskings if user set "msfix"
   *
   * Naoki Shibata 2000
   */
  private ns_msfix(gfc: LameInternalFlags, msfix: number, athadjust: number) {
    let msfix2 = msfix;
    let athlower = Math.pow(10, athadjust);

    msfix *= 2.0;
    msfix2 *= 2.0;
    for (let sb = 0; sb < Encoder.SBMAX_l; sb++) {
      let thmM;
      let thmS;
      const ath = gfc.ATH!.cb_l[gfc.bm_l[sb]] * athlower;
      const thmLR = Math.min(
        Math.max(gfc.thm[0].l[sb], ath),
        Math.max(gfc.thm[1].l[sb], ath)
      );
      thmM = Math.max(gfc.thm[2].l[sb], ath);
      thmS = Math.max(gfc.thm[3].l[sb], ath);
      if (thmLR * msfix < thmM + thmS) {
        const f = (thmLR * msfix2) / (thmM + thmS);
        thmM *= f;
        thmS *= f;
        console.assert(thmM + thmS > 0);
      }
      gfc.thm[2].l[sb] = Math.min(thmM, gfc.thm[2].l[sb]);
      gfc.thm[3].l[sb] = Math.min(thmS, gfc.thm[3].l[sb]);
    }

    athlower *= Encoder.BLKSIZE_s / Encoder.BLKSIZE;
    for (let sb = 0; sb < Encoder.SBMAX_s; sb++) {
      for (let sblock = 0; sblock < 3; sblock++) {
        let thmM;
        let thmS;
        const ath = gfc.ATH!.cb_s[gfc.bm_s[sb]] * athlower;
        const thmLR = Math.min(
          Math.max(gfc.thm[0].s[sb][sblock], ath),
          Math.max(gfc.thm[1].s[sb][sblock], ath)
        );
        thmM = Math.max(gfc.thm[2].s[sb][sblock], ath);
        thmS = Math.max(gfc.thm[3].s[sb][sblock], ath);

        if (thmLR * msfix < thmM + thmS) {
          const f = (thmLR * msfix) / (thmM + thmS);
          thmM *= f;
          thmS *= f;
          console.assert(thmM + thmS > 0);
        }
        gfc.thm[2].s[sb][sblock] = Math.min(gfc.thm[2].s[sb][sblock], thmM);
        gfc.thm[3].s[sb][sblock] = Math.min(gfc.thm[3].s[sb][sblock], thmS);
      }
    }
  }

  /**
   * short block threshold calculation (part 2)
   *
   * partition band bo_s[sfb] is at the transition from scalefactor band sfb
   * to the next one sfb+1; enn and thmm have to be split between them
   */
  private convert_partition2scalefac_s(
    gfc: LameInternalFlags,
    eb: ArrayOf<number>,
    thr: ArrayOf<number>,
    chn: number,
    sblock: number
  ) {
    let sb = 0;
    let b = 0;
    let enn = 0.0;
    let thmm = 0.0;
    for (; sb < Encoder.SBMAX_s; ++b, ++sb) {
      const bo_s_sb = gfc.bo_s[sb];
      const { npart_s } = gfc;
      const b_lim = bo_s_sb < npart_s ? bo_s_sb : npart_s;
      while (b < b_lim) {
        console.assert(eb[b] >= 0);
        // iff failed, it may indicate some index error elsewhere
        console.assert(thr[b] >= 0);
        enn += eb[b];
        thmm += thr[b];
        b++;
      }
      gfc.en[chn].s[sb][sblock] = enn;
      gfc.thm[chn].s[sb][sblock] = thmm;

      if (b >= npart_s) {
        ++sb;
        break;
      }
      console.assert(eb[b] >= 0);
      // iff failed, it may indicate some index error elsewhere
      console.assert(thr[b] >= 0);
      {
        /* at transition sfb . sfb+1 */
        const w_curr = gfc.PSY!.bo_s_weight[sb];
        const w_next = 1.0 - w_curr;
        enn = w_curr * eb[b];
        thmm = w_curr * thr[b];
        gfc.en[chn].s[sb][sblock] += enn;
        gfc.thm[chn].s[sb][sblock] += thmm;
        enn = w_next * eb[b];
        thmm = w_next * thr[b];
      }
    }
    /* zero initialize the rest */
    for (; sb < Encoder.SBMAX_s; ++sb) {
      gfc.en[chn].s[sb][sblock] = 0;
      gfc.thm[chn].s[sb][sblock] = 0;
    }
  }

  /**
   * longblock threshold calculation (part 2)
   */
  private convert_partition2scalefac_l(
    gfc: LameInternalFlags,
    eb: ArrayOf<number>,
    thr: ArrayOf<number>,
    chn: number
  ) {
    let sb = 0;
    let b = 0;
    let enn = 0.0;
    let thmm = 0.0;
    for (; sb < Encoder.SBMAX_l; ++b, ++sb) {
      const bo_l_sb = gfc.bo_l[sb];
      const { npart_l } = gfc;
      const b_lim = bo_l_sb < npart_l ? bo_l_sb : npart_l;
      while (b < b_lim) {
        console.assert(eb[b] >= 0);
        // iff failed, it may indicate some index error elsewhere
        console.assert(thr[b] >= 0);
        enn += eb[b];
        thmm += thr[b];
        b++;
      }
      gfc.en[chn].l[sb] = enn;
      gfc.thm[chn].l[sb] = thmm;

      if (b >= npart_l) {
        ++sb;
        break;
      }
      console.assert(eb[b] >= 0);
      console.assert(thr[b] >= 0);
      {
        /* at transition sfb . sfb+1 */
        const w_curr = gfc.PSY!.bo_l_weight[sb];
        const w_next = 1.0 - w_curr;
        enn = w_curr * eb[b];
        thmm = w_curr * thr[b];
        gfc.en[chn].l[sb] += enn;
        gfc.thm[chn].l[sb] += thmm;
        enn = w_next * eb[b];
        thmm = w_next * thr[b];
      }
    }
    /* zero initialize the rest */
    for (; sb < Encoder.SBMAX_l; ++sb) {
      gfc.en[chn].l[sb] = 0;
      gfc.thm[chn].l[sb] = 0;
    }
  }

  private compute_masking_s(
    gfp: LameGlobalFlags,
    fftenergy_s: ArrayOf<number>[],
    eb: ArrayOf<number>,
    thr: ArrayOf<number>,
    chn: number,
    sblock: number
  ) {
    const gfc = gfp.internal_flags!;
    let j = 0;
    let b = 0;

    for (; b < gfc.npart_s; ++b) {
      let ebb = 0;
      let m = 0;
      const n = gfc.numlines_s[b];
      for (let i = 0; i < n; ++i, ++j) {
        const el = fftenergy_s[sblock][j];
        ebb += el;
        if (m < el) m = el;
      }
      eb[b] = ebb;
    }
    console.assert(b === gfc.npart_s);
    console.assert(j === 129);
    j = 0;
    b = 0;
    for (; b < gfc.npart_s; b++) {
      let kk = gfc.s3ind_s[b][0];
      let ecb = gfc.s3_ss![j++] * eb[kk];
      ++kk;
      while (kk <= gfc.s3ind_s[b][1]) {
        ecb += gfc.s3_ss![j] * eb[kk];
        ++j;
        ++kk;
      }

      /* limit calculated threshold by previous granule */
      const x = this.rpelev_s * gfc.nb_s1[chn][b];
      thr[b] = Math.min(ecb, x);

      if (gfc.blocktype_old[chn & 1] === Encoder.SHORT_TYPE) {
        /* limit calculated threshold by even older granule */
        const x = this.rpelev2_s * gfc.nb_s2[chn][b];
        const y = thr[b];
        thr[b] = Math.min(x, y);
      }

      gfc.nb_s2[chn][b] = gfc.nb_s1[chn][b];
      gfc.nb_s1[chn][b] = ecb;
      console.assert(thr[b] >= 0);
    }
    for (; b <= Encoder.CBANDS; ++b) {
      eb[b] = 0;
      thr[b] = 0;
    }
  }

  private block_type_set(
    gfp: LameGlobalFlags,
    uselongblock: ArrayOf<number>,
    blocktype_d: ArrayOf<number>,
    blocktype: ArrayOf<number>
  ) {
    const gfc = gfp.internal_flags!;

    if (
      gfp.short_blocks === ShortBlock.short_block_coupled &&
      /* force both channels to use the same block type */
      /* this is necessary if the frame is to be encoded in ms_stereo. */
      /* But even without ms_stereo, FhG does this */
      !(uselongblock[0] !== 0 && uselongblock[1] !== 0)
    ) {
      uselongblock[0] = 0;
      uselongblock[1] = 0;
    }

    /*
     * update the blocktype of the previous granule, since it depends on
     * what happend in this granule
     */
    for (let chn = 0; chn < gfc.channels_out; chn++) {
      blocktype[chn] = Encoder.NORM_TYPE;
      /* disable short blocks */
      if (gfp.short_blocks === ShortBlock.short_block_dispensed)
        uselongblock[chn] = 1;
      if (gfp.short_blocks === ShortBlock.short_block_forced)
        uselongblock[chn] = 0;

      if (uselongblock[chn] !== 0) {
        /* no attack : use long blocks */
        console.assert(gfc.blocktype_old[chn] !== Encoder.START_TYPE);
        if (gfc.blocktype_old[chn] === Encoder.SHORT_TYPE)
          blocktype[chn] = Encoder.STOP_TYPE;
      } else {
        /* attack : use short blocks */
        blocktype[chn] = Encoder.SHORT_TYPE;
        if (gfc.blocktype_old[chn] === Encoder.NORM_TYPE) {
          gfc.blocktype_old[chn] = Encoder.START_TYPE;
        }
        if (gfc.blocktype_old[chn] === Encoder.STOP_TYPE)
          gfc.blocktype_old[chn] = Encoder.SHORT_TYPE;
      }

      blocktype_d[chn] = gfc.blocktype_old[chn];
      // value returned to calling program
      gfc.blocktype_old[chn] = blocktype[chn];
      // save for next call to l3psy_anal
    }
  }

  private nsInterp(x: number, y: number, r: number) {
    /* was pow((x),(r))*pow((y),1-(r)) */
    if (r >= 1.0) {
      /* 99.7% of the time */
      return x;
    }
    if (r <= 0.0) return y;
    if (y > 0.0) {
      /* rest of the time */
      return Math.pow(x / y, r) * y;
    }
    /* never happens */
    return 0.0;
  }

  /**
   * these values are tuned only for 44.1kHz...
   */
  private readonly regcoef_s = [
    11.8, 13.6, 17.2, 32, 46.5, 51.3, 57.5, 67.1, 71.5, 84.6, 97.6, 130,
    /* 255.8 */
  ] as const;

  private pecalc_s(mr: III_psy_ratio, masking_lower: number) {
    let pe_s = 1236.28 / 4;
    for (let sb = 0; sb < Encoder.SBMAX_s - 1; sb++) {
      for (let sblock = 0; sblock < 3; sblock++) {
        const thm = mr.thm.s[sb][sblock];
        console.assert(sb < this.regcoef_s.length);
        if (thm > 0.0) {
          const x = thm * masking_lower;
          const en = mr.en.s[sb][sblock];
          if (en > x) {
            if (en > x * 1e10) {
              pe_s += this.regcoef_s[sb] * (10.0 * PsyModel.LOG10);
            } else {
              console.assert(x > 0);
              pe_s += this.regcoef_s[sb] * Util.log10(en / x);
            }
          }
        }
      }
    }

    return pe_s;
  }

  /**
   * these values are tuned only for 44.1kHz...
   */
  private readonly regcoef_l = [
    6.8, 5.8, 5.8, 6.4, 6.5, 9.9, 12.1, 14.4, 15, 18.9, 21.6, 26.9, 34.2, 40.2,
    46.8, 56.5, 60.7, 73.9, 85.7, 93.4, 126.1,
    /* 241.3 */
  ] as const;

  private pecalc_l(mr: III_psy_ratio, masking_lower: number) {
    let pe_l = 1124.23 / 4;
    for (let sb = 0; sb < Encoder.SBMAX_l - 1; sb++) {
      const thm = mr.thm.l[sb];
      console.assert(sb < this.regcoef_l.length);
      if (thm > 0.0) {
        const x = thm * masking_lower;
        const en = mr.en.l[sb];
        if (en > x) {
          if (en > x * 1e10) {
            pe_l += this.regcoef_l[sb] * (10.0 * PsyModel.LOG10);
          } else {
            console.assert(x > 0);
            pe_l += this.regcoef_l[sb] * Util.log10(en / x);
          }
        }
      }
    }
    return pe_l;
  }

  private calc_energy(
    gfc: LameInternalFlags,
    fftenergy: ArrayOf<number>,
    eb: ArrayOf<number>,
    max: ArrayOf<number>,
    avg: ArrayOf<number>
  ) {
    let b = 0;
    let j = 0;

    for (; b < gfc.npart_l; ++b) {
      let ebb = 0;
      let m = 0;
      let i;
      for (i = 0; i < gfc.numlines_l[b]; ++i, ++j) {
        const el = fftenergy[j];
        console.assert(el >= 0);
        ebb += el;
        if (m < el) m = el;
      }
      eb[b] = ebb;
      max[b] = m;
      avg[b] = ebb * gfc.rnumlines_l[b];
      console.assert(gfc.rnumlines_l[b] >= 0);
      console.assert(ebb >= 0);
      console.assert(eb[b] >= 0);
      console.assert(max[b] >= 0);
      console.assert(avg[b] >= 0);
    }
  }

  private calc_mask_index_l(
    gfc: LameInternalFlags,
    max: ArrayOf<number>,
    avg: ArrayOf<number>,
    mask_idx: ArrayOf<number>
  ) {
    const last_tab_entry = this.tab.length - 1;
    let b = 0;
    let a = avg[b] + avg[b + 1];
    console.assert(a >= 0);
    if (a > 0.0) {
      let m = max[b];
      if (m < max[b + 1]) m = max[b + 1];
      console.assert(gfc.numlines_l[b] + gfc.numlines_l[b + 1] - 1 > 0);
      a =
        (20.0 * (m * 2.0 - a)) /
        (a * (gfc.numlines_l[b] + gfc.numlines_l[b + 1] - 1));
      let k = 0 | a;
      if (k > last_tab_entry) k = last_tab_entry;
      mask_idx[b] = k;
    } else {
      mask_idx[b] = 0;
    }

    for (b = 1; b < gfc.npart_l - 1; b++) {
      a = avg[b - 1] + avg[b] + avg[b + 1];
      console.assert(a >= 0);
      if (a > 0.0) {
        let m = max[b - 1];
        if (m < max[b]) m = max[b];
        if (m < max[b + 1]) m = max[b + 1];
        console.assert(
          gfc.numlines_l[b - 1] +
            gfc.numlines_l[b] +
            gfc.numlines_l[b + 1] -
            1 >
            0
        );
        a =
          (20.0 * (m * 3.0 - a)) /
          (a *
            (gfc.numlines_l[b - 1] +
              gfc.numlines_l[b] +
              gfc.numlines_l[b + 1] -
              1));
        let k = 0 | a;
        if (k > last_tab_entry) k = last_tab_entry;
        mask_idx[b] = k;
      } else {
        mask_idx[b] = 0;
      }
    }
    console.assert(b > 0);
    console.assert(b === gfc.npart_l - 1);

    a = avg[b - 1] + avg[b];
    console.assert(a >= 0);
    if (a > 0.0) {
      let m = max[b - 1];
      if (m < max[b]) m = max[b];
      console.assert(gfc.numlines_l[b - 1] + gfc.numlines_l[b] - 1 > 0);
      a =
        (20.0 * (m * 2.0 - a)) /
        (a * (gfc.numlines_l[b - 1] + gfc.numlines_l[b] - 1));
      let k = 0 | a;
      if (k > last_tab_entry) k = last_tab_entry;
      mask_idx[b] = k;
    } else {
      mask_idx[b] = 0;
    }
    console.assert(b === gfc.npart_l - 1);
  }

  private readonly fircoef = [
    -8.65163e-18 * 2,
    -0.00851586 * 2,
    -6.74764e-18 * 2,
    0.0209036 * 2,
    -3.36639e-17 * 2,
    -0.0438162 * 2,
    -1.54175e-17 * 2,
    0.0931738 * 2,
    -5.52212e-17 * 2,
    -0.313819 * 2,
  ] as const;

  // eslint-disable-next-line complexity
  L3psycho_anal_ns(
    gfp: LameGlobalFlags,
    buffer: ArrayOf<number>[],
    bufPos: number,
    gr_out: number,
    masking_ratio: III_psy_ratio[][],
    masking_MS_ratio: III_psy_ratio[][],
    percep_entropy: ArrayOf<number>,
    percep_MS_entropy: ArrayOf<number>,
    energy: ArrayOf<number>,
    blocktype_d: ArrayOf<number>
  ) {
    /*
     * to get a good cache performance, one has to think about the sequence,
     * in which the variables are used.
     */
    const gfc = gfp.internal_flags!;

    /* fft and energy calculation */
    const wsamp_L = new_float_n([2, Encoder.BLKSIZE] as const);
    const wsamp_S = new_float_n([2, 3, Encoder.BLKSIZE_s] as const);

    /* convolution */
    const eb_l = new Float32Array(Encoder.CBANDS + 1);
    const eb_s = new Float32Array(Encoder.CBANDS + 1);
    const thr = new Float32Array(Encoder.CBANDS + 2);

    /* block type */
    const blocktype = new Int32Array(2);
    const uselongblock = new Int32Array(2);

    /* usual variables like loop indices, etc.. */
    let numchn;
    let chn;
    let b;
    let i;
    let j;
    let k;
    let sb;
    let sblock;

    /* variables used for --nspsytune */
    const ns_hpfsmpl = new_float_n([2, 576] as const);
    let pcfact;
    const mask_idx_l = new Int32Array(Encoder.CBANDS + 2);
    const mask_idx_s = new Int32Array(Encoder.CBANDS + 2);

    Arrays.fill(mask_idx_s, 0);

    numchn = gfc.channels_out;
    /* chn=2 and 3 = Mid and Side channels */
    if (gfp.mode === MPEGMode.JOINT_STEREO) numchn = 4;

    if (gfp.VBR === VbrMode.vbr_off)
      pcfact = gfc.ResvMax === 0 ? 0 : (gfc.ResvSize / gfc.ResvMax) * 0.5;
    else if (
      gfp.VBR === VbrMode.vbr_rh ||
      gfp.VBR === VbrMode.vbr_mtrh ||
      gfp.VBR === VbrMode.vbr_mt
    ) {
      pcfact = 0.6;
    } else pcfact = 1.0;

    /** ********************************************************************
     * Apply HPF of fs/4 to the input signal. This is used for attack
     * detection / handling.
     **********************************************************************/
    /* Don't copy the input buffer into a temporary buffer */
    /* unroll the loop 2 times */
    for (chn = 0; chn < gfc.channels_out; chn++) {
      /* apply high pass filter of fs/4 */
      const firbuf = buffer[chn];
      const firbufPos = bufPos + 576 - 350 - PsyModel.NSFIRLEN + 192;
      console.assert(this.fircoef.length === (PsyModel.NSFIRLEN - 1) / 2);
      for (i = 0; i < 576; i++) {
        let sum1;
        let sum2;
        sum1 = firbuf[firbufPos + i + 10];
        sum2 = 0.0;
        for (j = 0; j < (PsyModel.NSFIRLEN - 1) / 2 - 1; j += 2) {
          sum1 +=
            this.fircoef[j] *
            (firbuf[firbufPos + i + j] +
              firbuf[firbufPos + i + PsyModel.NSFIRLEN - j]);
          sum2 +=
            this.fircoef[j + 1] *
            (firbuf[firbufPos + i + j + 1] +
              firbuf[firbufPos + i + PsyModel.NSFIRLEN - j - 1]);
        }
        ns_hpfsmpl[chn][i] = sum1 + sum2;
      }
      masking_ratio[gr_out][chn].en.assign(gfc.en[chn]);
      masking_ratio[gr_out][chn].thm.assign(gfc.thm[chn]);
      if (numchn > 2) {
        /* MS maskings */
        /* percep_MS_entropy [chn-2] = gfc . pe [chn]; */
        masking_MS_ratio[gr_out][chn].en.assign(gfc.en[chn + 2]);
        masking_MS_ratio[gr_out][chn].thm.assign(gfc.thm[chn + 2]);
      }
    }

    for (chn = 0; chn < numchn; chn++) {
      const en_subshort = new Float32Array(12);
      const en_short = [0, 0, 0, 0];
      const attack_intensity = new Float32Array(12);
      let ns_uselongblock = 1;
      const max = new Float32Array(Encoder.CBANDS);
      const avg = new Float32Array(Encoder.CBANDS);
      const ns_attacks = [0, 0, 0, 0];
      const fftenergy = new Float32Array(Encoder.HBLKSIZE);
      const fftenergy_s = new_float_n([3, Encoder.HBLKSIZE_s]);

      /*
       * rh 20040301: the following loops do access one off the limits so
       * I increase the array dimensions by one and initialize the
       * accessed values to zero
       */
      console.assert(gfc.npart_s <= Encoder.CBANDS);
      console.assert(gfc.npart_l <= Encoder.CBANDS);

      /** *************************************************************
       * determine the block type (window type)
       ***************************************************************/
      /* calculate energies of each sub-shortblocks */
      for (i = 0; i < 3; i++) {
        en_subshort[i] = gfc.nsPsy.last_en_subshort[chn][i + 6];
        console.assert(gfc.nsPsy.last_en_subshort[chn][i + 4] > 0);
        attack_intensity[i] =
          en_subshort[i] / gfc.nsPsy.last_en_subshort[chn][i + 4];
        en_short[0] += en_subshort[i];
      }

      if (chn === 2) {
        for (i = 0; i < 576; i++) {
          const l = ns_hpfsmpl[0][i];
          const r = ns_hpfsmpl[1][i];
          ns_hpfsmpl[0][i] = l + r;
          ns_hpfsmpl[1][i] = l - r;
        }
      }
      {
        const pf = ns_hpfsmpl[chn & 1];
        let pfPos = 0;
        for (i = 0; i < 9; i++) {
          const pfe = pfPos + 576 / 9;
          let p = 1;
          for (; pfPos < pfe; pfPos++)
            if (p < Math.abs(pf[pfPos])) p = Math.abs(pf[pfPos]);

          gfc.nsPsy.last_en_subshort[chn][i] = p;
          en_subshort[i + 3] = p;
          en_short[1 + i / 3] += p;
          if (p > en_subshort[i + 3 - 2]) {
            console.assert(en_subshort[i + 3 - 2] > 0);
            p /= en_subshort[i + 3 - 2];
          } else if (en_subshort[i + 3 - 2] > p * 10.0) {
            console.assert(p > 0);
            p = en_subshort[i + 3 - 2] / (p * 10.0);
          } else p = 0.0;
          attack_intensity[i + 3] = p;
        }
      }

      if (gfp.analysis) {
        let x = attack_intensity[0];
        for (i = 1; i < 12; i++)
          if (x < attack_intensity[i]) x = attack_intensity[i];
        gfc.pinfo!.ers[gr_out][chn] = gfc.pinfo!.ers_save[chn];
        gfc.pinfo!.ers_save[chn] = x;
      }

      /* compare energies between sub-shortblocks */
      const attackThreshold =
        chn === 3 ? gfc.nsPsy.attackthre_s : gfc.nsPsy.attackthre;
      for (i = 0; i < 12; i++)
        if (ns_attacks[i / 3] === 0 && attack_intensity[i] > attackThreshold)
          ns_attacks[i / 3] = (i % 3) + 1;

      /*
       * should have energy change between short blocks, in order to avoid
       * periodic signals
       */
      for (i = 1; i < 4; i++) {
        let ratio;
        if (en_short[i - 1] > en_short[i]) {
          console.assert(en_short[i] > 0);
          ratio = en_short[i - 1] / en_short[i];
        } else {
          console.assert(en_short[i - 1] > 0);
          ratio = en_short[i] / en_short[i - 1];
        }
        if (ratio < 1.7) {
          ns_attacks[i] = 0;
          if (i === 1) ns_attacks[0] = 0;
        }
      }

      if (ns_attacks[0] !== 0 && gfc.nsPsy.lastAttacks[chn] !== 0)
        ns_attacks[0] = 0;

      if (
        gfc.nsPsy.lastAttacks[chn] === 3 ||
        ns_attacks[0] + ns_attacks[1] + ns_attacks[2] + ns_attacks[3] !== 0
      ) {
        ns_uselongblock = 0;

        if (ns_attacks[1] !== 0 && ns_attacks[0] !== 0) ns_attacks[1] = 0;
        if (ns_attacks[2] !== 0 && ns_attacks[1] !== 0) ns_attacks[2] = 0;
        if (ns_attacks[3] !== 0 && ns_attacks[2] !== 0) ns_attacks[3] = 0;
      }

      if (chn < 2) {
        uselongblock[chn] = ns_uselongblock;
      } else if (ns_uselongblock === 0) {
        uselongblock[0] = 0;
        uselongblock[1] = 0;
      }

      /*
       * there is a one granule delay. Copy maskings computed last call
       * into masking_ratio to return to calling program.
       */
      energy[chn] = gfc.tot_ener[chn];

      /** *******************************************************************
       * compute FFTs
       *********************************************************************/
      const wsamp_s = wsamp_S;
      const wsamp_l = wsamp_L;
      this.compute_ffts(
        gfp,
        fftenergy,
        fftenergy_s,
        wsamp_l,
        chn & 1,
        wsamp_s,
        chn & 1,
        gr_out,
        chn,
        buffer,
        bufPos
      );

      /** *******************************************************************
       * Calculate the energy and the tonality of each partition.
       *********************************************************************/
      this.calc_energy(gfc, fftenergy, eb_l, max, avg);
      this.calc_mask_index_l(gfc, max, avg, mask_idx_l);
      /* compute masking thresholds for short blocks */
      for (sblock = 0; sblock < 3; sblock++) {
        let enn;
        let thmm;
        this.compute_masking_s(gfp, fftenergy_s, eb_s, thr, chn, sblock);
        this.convert_partition2scalefac_s(gfc, eb_s, thr, chn, sblock);
        /** ** short block pre-echo control ****/
        for (sb = 0; sb < Encoder.SBMAX_s; sb++) {
          thmm = gfc.thm[chn].s[sb][sblock];

          thmm *= PsyModel.NS_PREECHO_ATT0;
          if (ns_attacks[sblock] >= 2 || ns_attacks[sblock + 1] === 1) {
            const idx = sblock !== 0 ? sblock - 1 : 2;
            const p = this.nsInterp(
              gfc.thm[chn].s[sb][idx],
              thmm,
              PsyModel.NS_PREECHO_ATT1 * pcfact
            );
            thmm = Math.min(thmm, p);
          }

          if (ns_attacks[sblock] === 1) {
            const idx = sblock !== 0 ? sblock - 1 : 2;
            const p = this.nsInterp(
              gfc.thm[chn].s[sb][idx],
              thmm,
              PsyModel.NS_PREECHO_ATT2 * pcfact
            );
            thmm = Math.min(thmm, p);
          } else if (
            (sblock !== 0 && ns_attacks[sblock - 1] === 3) ||
            (sblock === 0 && gfc.nsPsy.lastAttacks[chn] === 3)
          ) {
            const idx = sblock !== 2 ? sblock + 1 : 0;
            const p = this.nsInterp(
              gfc.thm[chn].s[sb][idx],
              thmm,
              PsyModel.NS_PREECHO_ATT2 * pcfact
            );
            thmm = Math.min(thmm, p);
          }

          /* pulse like signal detection for fatboy.wav and so on */
          enn =
            en_subshort[sblock * 3 + 3] +
            en_subshort[sblock * 3 + 4] +
            en_subshort[sblock * 3 + 5];
          if (en_subshort[sblock * 3 + 5] * 6 < enn) {
            thmm *= 0.5;
            if (en_subshort[sblock * 3 + 4] * 6 < enn) thmm *= 0.5;
          }

          gfc.thm[chn].s[sb][sblock] = thmm;
        }
      }
      gfc.nsPsy.lastAttacks[chn] = ns_attacks[2];

      /** *******************************************************************
       * convolve the partitioned energy and unpredictability with the
       * spreading function, s3_l[b][k]
       ********************************************************************/
      k = 0;

      for (b = 0; b < gfc.npart_l; b++) {
        /*
         * convolve the partitioned energy with the spreading
         * function
         */
        let kk = gfc.s3ind[b][0];
        let eb2 = eb_l[kk] * this.tab[mask_idx_l[kk]];
        let ecb = gfc.s3_ll![k++] * eb2;
        while (++kk <= gfc.s3ind[b][1]) {
          eb2 = eb_l[kk] * this.tab[mask_idx_l[kk]];
          ecb = this.mask_add(ecb, gfc.s3_ll![k++] * eb2, kk, kk - b, gfc, 0);
        }
        ecb *= 0.158489319246111;
        /* pow(10,-0.8) */

        /** ** long block pre-echo control ****/
        /**
         * <PRE>
         * dont use long block pre-echo control if previous granule was
         * a short block.  This is to avoid the situation:
         * frame0:  quiet (very low masking)
         * frame1:  surge  (triggers short blocks)
         * frame2:  regular frame.  looks like pre-echo when compared to
         *          frame0, but all pre-echo was in frame1.
         * </PRE>
         */
        /*
         * chn=0,1 L and R channels
         *
         * chn=2,3 S and M channels.
         */

        if (gfc.blocktype_old[chn & 1] === Encoder.SHORT_TYPE) thr[b] = ecb;
        else
          thr[b] = this.nsInterp(
            Math.min(
              ecb,
              Math.min(
                this.rpelev * gfc.nb_1[chn][b],
                this.rpelev2 * gfc.nb_2[chn][b]
              )
            ),
            ecb,
            pcfact
          );

        gfc.nb_2[chn][b] = gfc.nb_1[chn][b];
        gfc.nb_1[chn][b] = ecb;
      }

      for (; b <= Encoder.CBANDS; ++b) {
        eb_l[b] = 0;
        thr[b] = 0;
      }
      /* compute masking thresholds for long blocks */
      this.convert_partition2scalefac_l(gfc, eb_l, thr, chn);
    }
    /* end loop over chn */

    if (gfp.mode === MPEGMode.STEREO || gfp.mode === MPEGMode.JOINT_STEREO) {
      if (gfp.interChRatio > 0.0) {
        this.calc_interchannel_masking(gfp, gfp.interChRatio);
      }
    }

    if (gfp.mode === MPEGMode.JOINT_STEREO) {
      this.msfix1(gfc);
      const { msfix } = gfp;
      if (Math.abs(msfix) > 0.0)
        this.ns_msfix(gfc, msfix, gfp.ATHlower * gfc.ATH!.adjust);
    }

    /** *************************************************************
     * determine final block type
     ***************************************************************/
    this.block_type_set(gfp, uselongblock, blocktype_d, blocktype);

    /** *******************************************************************
     * compute the value of PE to return ... no delay and advance
     *********************************************************************/
    for (chn = 0; chn < numchn; chn++) {
      let ppe;
      let ppePos = 0;
      let type;
      let mr;

      if (chn > 1) {
        ppe = percep_MS_entropy;
        ppePos = -2;
        type = Encoder.NORM_TYPE;
        if (
          blocktype_d[0] === Encoder.SHORT_TYPE ||
          blocktype_d[1] === Encoder.SHORT_TYPE
        )
          type = Encoder.SHORT_TYPE;
        mr = masking_MS_ratio[gr_out][chn - 2];
      } else {
        ppe = percep_entropy;
        ppePos = 0;
        type = blocktype_d[chn];
        mr = masking_ratio[gr_out][chn];
      }

      if (type === Encoder.SHORT_TYPE)
        ppe[ppePos + chn] = this.pecalc_s(mr, gfc.masking_lower);
      else ppe[ppePos + chn] = this.pecalc_l(mr, gfc.masking_lower);

      if (gfp.analysis) gfc.pinfo!.pe[gr_out][chn] = ppe[ppePos + chn];
    }
    return 0;
  }

  private vbrpsy_compute_fft_l(
    gfp: LameGlobalFlags,
    buffer: ArrayOf<number>[],
    bufPos: number,
    chn: number,
    gr_out: number,
    fftenergy: ArrayOf<number>,
    wsamp_l: ArrayOf<number>[],
    wsamp_lPos: number
  ) {
    const gfc = gfp.internal_flags!;
    if (chn < 2) {
      this.fft.fft_long(gfc, wsamp_l[wsamp_lPos], chn, buffer, bufPos);
    } else if (chn === 2) {
      /* FFT data for mid and side channel is derived from L & R */
      for (let j = Encoder.BLKSIZE - 1; j >= 0; --j) {
        const l = wsamp_l[wsamp_lPos + 0][j];
        const r = wsamp_l[wsamp_lPos + 1][j];
        wsamp_l[wsamp_lPos + 0][j] = (l + r) * Util.SQRT2 * 0.5;
        wsamp_l[wsamp_lPos + 1][j] = (l - r) * Util.SQRT2 * 0.5;
      }
    }

    /** *******************************************************************
     * compute energies
     *********************************************************************/
    fftenergy[0] = wsamp_l[wsamp_lPos + 0][0];
    fftenergy[0] *= fftenergy[0];

    for (let j = Encoder.BLKSIZE / 2 - 1; j >= 0; --j) {
      const re = wsamp_l[wsamp_lPos + 0][Encoder.BLKSIZE / 2 - j];
      const im = wsamp_l[wsamp_lPos + 0][Encoder.BLKSIZE / 2 + j];
      fftenergy[Encoder.BLKSIZE / 2 - j] = (re * re + im * im) * 0.5;
    }
    /* total energy */
    {
      let totalenergy = 0.0;
      for (let j = 11; j < Encoder.HBLKSIZE; j++) totalenergy += fftenergy[j];

      gfc.tot_ener[chn] = totalenergy;
    }

    if (gfp.analysis) {
      for (let j = 0; j < Encoder.HBLKSIZE; j++) {
        gfc.pinfo!.energy[gr_out][chn][j] = gfc.pinfo!.energy_save[chn][j];
        gfc.pinfo!.energy_save[chn][j] = fftenergy[j];
      }
      gfc.pinfo!.pe[gr_out][chn] = gfc.pe[chn];
    }
  }

  private vbrpsy_compute_fft_s(
    gfp: LameGlobalFlags,
    buffer: ArrayOf<number>[],
    bufPos: number,
    chn: number,
    sblock: number,
    fftenergy_s: ArrayOf<number>[],
    wsamp_s: ArrayOf<number>[][],
    wsamp_sPos: number
  ) {
    const gfc = gfp.internal_flags!;

    if (sblock === 0 && chn < 2) {
      this.fft.fft_short(gfc, wsamp_s[wsamp_sPos], chn, buffer, bufPos);
    }
    if (chn === 2) {
      /* FFT data for mid and side channel is derived from L & R */
      for (let j = Encoder.BLKSIZE_s - 1; j >= 0; --j) {
        const l = wsamp_s[wsamp_sPos + 0][sblock][j];
        const r = wsamp_s[wsamp_sPos + 1][sblock][j];
        wsamp_s[wsamp_sPos + 0][sblock][j] = (l + r) * Util.SQRT2 * 0.5;
        wsamp_s[wsamp_sPos + 1][sblock][j] = (l - r) * Util.SQRT2 * 0.5;
      }
    }

    /** *******************************************************************
     * compute energies
     *********************************************************************/
    fftenergy_s[sblock][0] = wsamp_s[wsamp_sPos + 0][sblock][0];
    fftenergy_s[sblock][0] *= fftenergy_s[sblock][0];
    for (let j = Encoder.BLKSIZE_s / 2 - 1; j >= 0; --j) {
      const re = wsamp_s[wsamp_sPos + 0][sblock][Encoder.BLKSIZE_s / 2 - j];
      const im = wsamp_s[wsamp_sPos + 0][sblock][Encoder.BLKSIZE_s / 2 + j];
      fftenergy_s[sblock][Encoder.BLKSIZE_s / 2 - j] =
        (re * re + im * im) * 0.5;
    }
  }

  /**
   * compute loudness approximation (used for ATH auto-level adjustment)
   */
  private vbrpsy_compute_loudness_approximation_l(
    gfp: LameGlobalFlags,
    gr_out: number,
    chn: number,
    fftenergy: ArrayOf<number>
  ) {
    const gfc = gfp.internal_flags!;
    if (gfp.athaa_loudapprox === 2 && chn < 2) {
      // no loudness for mid/side ch
      gfc.loudness_sq[gr_out][chn] = gfc.loudness_sq_save[chn];
      gfc.loudness_sq_save[chn] = this.psycho_loudness_approx(fftenergy, gfc);
    }
  }

  private readonly fircoef_ = [
    -8.65163e-18 * 2,
    -0.00851586 * 2,
    -6.74764e-18 * 2,
    0.0209036 * 2,
    -3.36639e-17 * 2,
    -0.0438162 * 2,
    -1.54175e-17 * 2,
    0.0931738 * 2,
    -5.52212e-17 * 2,
    -0.313819 * 2,
  ] as const;

  /**
   * Apply HPF of fs/4 to the input signal. This is used for attack detection
   * / handling.
   */
  // eslint-disable-next-line complexity
  private vbrpsy_attack_detection(
    gfp: LameGlobalFlags,
    buffer: ArrayOf<number>[],
    bufPos: number,
    gr_out: number,
    masking_ratio: III_psy_ratio[][],
    masking_MS_ratio: III_psy_ratio[][],
    energy: ArrayOf<number>,
    sub_short_factor: ArrayOf<number>[],
    ns_attacks: ArrayOf<number>[],
    uselongblock: ArrayOf<number>
  ) {
    const ns_hpfsmpl = new_float_n([2, 576] as const);
    const gfc = gfp.internal_flags!;
    const n_chn_out = gfc.channels_out;
    /* chn=2 and 3 = Mid and Side channels */
    const n_chn_psy = gfp.mode === MPEGMode.JOINT_STEREO ? 4 : n_chn_out;
    /* Don't copy the input buffer into a temporary buffer */
    /* unroll the loop 2 times */
    for (let chn = 0; chn < n_chn_out; chn++) {
      /* apply high pass filter of fs/4 */
      const firbuf = buffer[chn];
      const firbufPos = bufPos + 576 - 350 - PsyModel.NSFIRLEN + 192;
      console.assert(this.fircoef_.length === (PsyModel.NSFIRLEN - 1) / 2);
      for (let i = 0; i < 576; i++) {
        let sum1;
        let sum2;
        sum1 = firbuf[firbufPos + i + 10];
        sum2 = 0.0;
        for (let j = 0; j < (PsyModel.NSFIRLEN - 1) / 2 - 1; j += 2) {
          sum1 +=
            this.fircoef_[j] *
            (firbuf[firbufPos + i + j] +
              firbuf[firbufPos + i + PsyModel.NSFIRLEN - j]);
          sum2 +=
            this.fircoef_[j + 1] *
            (firbuf[firbufPos + i + j + 1] +
              firbuf[firbufPos + i + PsyModel.NSFIRLEN - j - 1]);
        }
        ns_hpfsmpl[chn][i] = sum1 + sum2;
      }
      masking_ratio[gr_out][chn].en.assign(gfc.en[chn]);
      masking_ratio[gr_out][chn].thm.assign(gfc.thm[chn]);
      if (n_chn_psy > 2) {
        /* MS maskings */
        /* percep_MS_entropy [chn-2] = gfc . pe [chn]; */
        masking_MS_ratio[gr_out][chn].en.assign(gfc.en[chn + 2]);
        masking_MS_ratio[gr_out][chn].thm.assign(gfc.thm[chn + 2]);
      }
    }
    for (let chn = 0; chn < n_chn_psy; chn++) {
      const attack_intensity = new Float32Array(12);
      const en_subshort = new Float32Array(12);
      const en_short = [0, 0, 0, 0];
      const pf = ns_hpfsmpl[chn & 1];
      let pfPos = 0;
      const attackThreshold =
        chn === 3 ? gfc.nsPsy.attackthre_s : gfc.nsPsy.attackthre;
      let ns_uselongblock = 1;

      if (chn === 2) {
        for (let i = 0, j = 576; j > 0; ++i, --j) {
          const l = ns_hpfsmpl[0][i];
          const r = ns_hpfsmpl[1][i];
          ns_hpfsmpl[0][i] = l + r;
          ns_hpfsmpl[1][i] = l - r;
        }
      }
      /** *************************************************************
       * determine the block type (window type)
       ***************************************************************/
      /* calculate energies of each sub-shortblocks */
      for (let i = 0; i < 3; i++) {
        en_subshort[i] = gfc.nsPsy.last_en_subshort[chn][i + 6];
        console.assert(gfc.nsPsy.last_en_subshort[chn][i + 4] > 0);
        attack_intensity[i] =
          en_subshort[i] / gfc.nsPsy.last_en_subshort[chn][i + 4];
        en_short[0] += en_subshort[i];
      }

      for (let i = 0; i < 9; i++) {
        const pfe = pfPos + 576 / 9;
        let p = 1;
        for (; pfPos < pfe; pfPos++)
          if (p < Math.abs(pf[pfPos])) p = Math.abs(pf[pfPos]);

        gfc.nsPsy.last_en_subshort[chn][i] = p;
        en_subshort[i + 3] = p;
        en_short[1 + i / 3] += p;
        if (p > en_subshort[i + 3 - 2]) {
          console.assert(en_subshort[i + 3 - 2] > 0);
          p /= en_subshort[i + 3 - 2];
        } else if (en_subshort[i + 3 - 2] > p * 10.0) {
          console.assert(p > 0);
          p = en_subshort[i + 3 - 2] / (p * 10.0);
        } else {
          p = 0.0;
        }
        attack_intensity[i + 3] = p;
      }
      /* pulse like signal detection for fatboy.wav and so on */
      for (let i = 0; i < 3; ++i) {
        const enn =
          en_subshort[i * 3 + 3] +
          en_subshort[i * 3 + 4] +
          en_subshort[i * 3 + 5];
        let factor = 1;
        if (en_subshort[i * 3 + 5] * 6 < enn) {
          factor *= 0.5;
          if (en_subshort[i * 3 + 4] * 6 < enn) {
            factor *= 0.5;
          }
        }
        sub_short_factor[chn][i] = factor;
      }

      if (gfp.analysis) {
        let x = attack_intensity[0];
        for (let i = 1; i < 12; i++) {
          if (x < attack_intensity[i]) {
            x = attack_intensity[i];
          }
        }
        gfc.pinfo!.ers[gr_out][chn] = gfc.pinfo!.ers_save[chn];
        gfc.pinfo!.ers_save[chn] = x;
      }

      /* compare energies between sub-shortblocks */
      for (let i = 0; i < 12; i++) {
        if (
          ns_attacks[chn][i / 3] === 0 &&
          attack_intensity[i] > attackThreshold
        ) {
          ns_attacks[chn][i / 3] = (i % 3) + 1;
        }
      }

      /*
       * should have energy change between short blocks, in order to avoid
       * periodic signals
       */
      /* Good samples to show the effect are Trumpet test songs */
      /*
       * GB: tuned (1) to avoid too many short blocks for test sample
       * TRUMPET
       */
      /*
       * RH: tuned (2) to let enough short blocks through for test sample
       * FSOL and SNAPS
       */
      for (let i = 1; i < 4; i++) {
        const u = en_short[i - 1];
        const v = en_short[i];
        const m = Math.max(u, v);
        if (m < 40000) {
          /* (2) */
          if (u < 1.7 * v && v < 1.7 * u) {
            /* (1) */
            if (i === 1 && ns_attacks[chn][0] <= ns_attacks[chn][i]) {
              ns_attacks[chn][0] = 0;
            }
            ns_attacks[chn][i] = 0;
          }
        }
      }

      if (ns_attacks[chn][0] <= gfc.nsPsy.lastAttacks[chn]) {
        ns_attacks[chn][0] = 0;
      }

      if (
        gfc.nsPsy.lastAttacks[chn] === 3 ||
        ns_attacks[chn][0] +
          ns_attacks[chn][1] +
          ns_attacks[chn][2] +
          ns_attacks[chn][3] !==
          0
      ) {
        ns_uselongblock = 0;

        if (ns_attacks[chn][1] !== 0 && ns_attacks[chn][0] !== 0) {
          ns_attacks[chn][1] = 0;
        }
        if (ns_attacks[chn][2] !== 0 && ns_attacks[chn][1] !== 0) {
          ns_attacks[chn][2] = 0;
        }
        if (ns_attacks[chn][3] !== 0 && ns_attacks[chn][2] !== 0) {
          ns_attacks[chn][3] = 0;
        }
      }
      if (chn < 2) {
        uselongblock[chn] = ns_uselongblock;
      } else if (ns_uselongblock === 0) {
        uselongblock[0] = 0;
        uselongblock[1] = 0;
      }

      /*
       * there is a one granule delay. Copy maskings computed last call
       * into masking_ratio to return to calling program.
       */
      energy[chn] = gfc.tot_ener[chn];
    }
  }

  private vbrpsy_skip_masking_s(
    gfc: LameInternalFlags,
    chn: number,
    sblock: number
  ) {
    if (sblock === 0) {
      for (let b = 0; b < gfc.npart_s; b++) {
        gfc.nb_s2[chn][b] = gfc.nb_s1[chn][b];
        gfc.nb_s1[chn][b] = 0;
      }
    }
  }

  private vbrpsy_skip_masking_l(gfc: LameInternalFlags, chn: number) {
    for (let b = 0; b < gfc.npart_l; b++) {
      gfc.nb_2[chn][b] = gfc.nb_1[chn][b];
      gfc.nb_1[chn][b] = 0;
    }
  }

  private psyvbr_calc_mask_index_s(
    gfc: LameInternalFlags,
    max: ArrayOf<number>,
    avg: ArrayOf<number>,
    mask_idx: ArrayOf<number>
  ) {
    const last_tab_entry = this.tab.length - 1;
    let b = 0;
    let a = avg[b] + avg[b + 1];
    console.assert(a >= 0);
    if (a > 0.0) {
      let m = max[b];
      if (m < max[b + 1]) m = max[b + 1];
      console.assert(gfc.numlines_s[b] + gfc.numlines_s[b + 1] - 1 > 0);
      a =
        (20.0 * (m * 2.0 - a)) /
        (a * (gfc.numlines_s[b] + gfc.numlines_s[b + 1] - 1));
      let k = 0 | a;
      if (k > last_tab_entry) k = last_tab_entry;
      mask_idx[b] = k;
    } else {
      mask_idx[b] = 0;
    }

    for (b = 1; b < gfc.npart_s - 1; b++) {
      a = avg[b - 1] + avg[b] + avg[b + 1];
      console.assert(b + 1 < gfc.npart_s);
      console.assert(a >= 0);
      if (a > 0.0) {
        let m = max[b - 1];
        if (m < max[b]) m = max[b];
        if (m < max[b + 1]) m = max[b + 1];
        console.assert(
          gfc.numlines_s[b - 1] +
            gfc.numlines_s[b] +
            gfc.numlines_s[b + 1] -
            1 >
            0
        );
        a =
          (20.0 * (m * 3.0 - a)) /
          (a *
            (gfc.numlines_s[b - 1] +
              gfc.numlines_s[b] +
              gfc.numlines_s[b + 1] -
              1));
        let k = 0 | a;
        if (k > last_tab_entry) k = last_tab_entry;
        mask_idx[b] = k;
      } else {
        mask_idx[b] = 0;
      }
    }
    console.assert(b > 0);
    console.assert(b === gfc.npart_s - 1);

    a = avg[b - 1] + avg[b];
    console.assert(a >= 0);
    if (a > 0.0) {
      let m = max[b - 1];
      if (m < max[b]) m = max[b];
      console.assert(gfc.numlines_s[b - 1] + gfc.numlines_s[b] - 1 > 0);
      a =
        (20.0 * (m * 2.0 - a)) /
        (a * (gfc.numlines_s[b - 1] + gfc.numlines_s[b] - 1));
      let k = 0 | a;
      if (k > last_tab_entry) k = last_tab_entry;
      mask_idx[b] = k;
    } else {
      mask_idx[b] = 0;
    }
    console.assert(b === gfc.npart_s - 1);
  }

  private vbrpsy_compute_masking_s(
    gfp: LameGlobalFlags,
    fftenergy_s: ArrayOf<number>[],
    eb: ArrayOf<number>,
    thr: ArrayOf<number>,
    chn: number,
    sblock: number
  ) {
    const gfc = gfp.internal_flags!;
    const max = new Array(Encoder.CBANDS);
    const avg = new Float32Array(Encoder.CBANDS);
    let i;
    let j = 0;
    let b = 0;
    const mask_idx_s = new Array(Encoder.CBANDS);

    for (; b < gfc.npart_s; ++b) {
      let ebb = 0;
      let m = 0;
      const n = gfc.numlines_s[b];
      for (i = 0; i < n; ++i, ++j) {
        const el = fftenergy_s[sblock][j];
        ebb += el;
        if (m < el) m = el;
      }
      eb[b] = ebb;
      console.assert(ebb >= 0);
      max[b] = m;
      console.assert(n > 0);
      avg[b] = ebb / n;
      console.assert(avg[b] >= 0);
    }
    console.assert(b === gfc.npart_s);
    console.assert(j === 129);
    for (; b < Encoder.CBANDS; ++b) {
      max[b] = 0;
      avg[b] = 0;
    }
    j = 0;
    b = 0;
    this.psyvbr_calc_mask_index_s(gfc, max, avg, mask_idx_s);
    for (; b < gfc.npart_s; b++) {
      let kk = gfc.s3ind_s[b][0];
      const last = gfc.s3ind_s[b][1];
      let dd;
      let dd_n;
      let x;
      let ecb;
      dd = mask_idx_s[kk];
      dd_n = 1;
      ecb = gfc.s3_ss![j] * eb[kk] * this.tab[mask_idx_s[kk]];
      ++j;
      ++kk;
      while (kk <= last) {
        dd += mask_idx_s[kk];
        dd_n += 1;
        x = gfc.s3_ss![j] * eb[kk] * this.tab[mask_idx_s[kk]];
        ecb = this.vbrpsy_mask_add(ecb, x, kk - b);
        ++j;
        ++kk;
      }
      dd = (1 + 2 * dd) / (2 * dd_n);
      const avg_mask = this.tab[dd] * 0.5;
      ecb *= avg_mask;
      thr[b] = ecb;
      gfc.nb_s2[chn][b] = gfc.nb_s1[chn][b];
      gfc.nb_s1[chn][b] = ecb;

      /*
       * if THR exceeds EB, the quantization routines will take the
       * difference from other bands. in case of strong tonal samples
       * (tonaltest.wav) this leads to heavy distortions. that's why
       * we limit THR here.
       */
      x = max[b];
      x *= gfc.minval_s[b];
      x *= avg_mask;
      if (thr[b] > x) {
        thr[b] = x;
      }

      if (gfc.masking_lower > 1) {
        thr[b] *= gfc.masking_lower;
      }
      if (thr[b] > eb[b]) {
        thr[b] = eb[b];
      }
      if (gfc.masking_lower < 1) {
        thr[b] *= gfc.masking_lower;
      }

      console.assert(thr[b] >= 0);
    }
    for (; b < Encoder.CBANDS; ++b) {
      eb[b] = 0;
      thr[b] = 0;
    }
  }

  private vbrpsy_compute_masking_l(
    gfc: LameInternalFlags,
    fftenergy: ArrayOf<number>,
    eb_l: ArrayOf<number>,
    thr: ArrayOf<number>,
    chn: number
  ) {
    const max = new Float32Array(Encoder.CBANDS);
    const avg = new Float32Array(Encoder.CBANDS);
    const mask_idx_l = new Int32Array(Encoder.CBANDS + 2);
    let b;

    /** *******************************************************************
     * Calculate the energy and the tonality of each partition.
     *********************************************************************/
    this.calc_energy(gfc, fftenergy, eb_l, max, avg);
    this.calc_mask_index_l(gfc, max, avg, mask_idx_l);

    /** *******************************************************************
     * convolve the partitioned energy and unpredictability with the
     * spreading function, s3_l[b][k]
     ********************************************************************/
    let k = 0;
    for (b = 0; b < gfc.npart_l; b++) {
      let x;
      let ecb;
      let t;
      /* convolve the partitioned energy with the spreading function */
      let kk = gfc.s3ind[b][0];
      const last = gfc.s3ind[b][1];
      let dd = 0;
      let dd_n = 0;
      dd = mask_idx_l[kk];
      dd_n += 1;
      ecb = gfc.s3_ll![k] * eb_l[kk] * this.tab[mask_idx_l[kk]];
      ++k;
      ++kk;
      while (kk <= last) {
        dd += mask_idx_l[kk];
        dd_n += 1;
        x = gfc.s3_ll![k] * eb_l[kk] * this.tab[mask_idx_l[kk]];
        t = this.vbrpsy_mask_add(ecb, x, kk - b);
        ecb = t;
        ++k;
        ++kk;
      }
      dd = (1 + 2 * dd) / (2 * dd_n);
      const avg_mask = this.tab[dd] * 0.5;
      ecb *= avg_mask;

      /** ** long block pre-echo control ****/
      /**
       * <PRE>
       * dont use long block pre-echo control if previous granule was
       * a short block.  This is to avoid the situation:
       * frame0:  quiet (very low masking)
       * frame1:  surge  (triggers short blocks)
       * frame2:  regular frame.  looks like pre-echo when compared to
       *          frame0, but all pre-echo was in frame1.
       * </PRE>
       */
      /*
       * chn=0,1 L and R channels chn=2,3 S and M channels.
       */
      if (gfc.blocktype_old[chn & 0x01] === Encoder.SHORT_TYPE) {
        const ecb_limit = this.rpelev * gfc.nb_1[chn][b];
        if (ecb_limit > 0) {
          thr[b] = Math.min(ecb, ecb_limit);
        } else {
          /**
           * <PRE>
           * Robert 071209:
           * Because we don't calculate long block psy when we know a granule
           * should be of short blocks, we don't have any clue how the granule
           * before would have looked like as a long block. So we have to guess
           * a little bit for this END_TYPE block.
           * Most of the time we get away with this sloppyness. (fingers crossed :)
           * The speed increase is worth it.
           * </PRE>
           */
          thr[b] = Math.min(ecb, eb_l[b] * PsyModel.NS_PREECHO_ATT2);
        }
      } else {
        let ecb_limit_2 = this.rpelev2 * gfc.nb_2[chn][b];
        let ecb_limit_1 = this.rpelev * gfc.nb_1[chn][b];
        let ecb_limit;
        if (ecb_limit_2 <= 0) {
          ecb_limit_2 = ecb;
        }
        if (ecb_limit_1 <= 0) {
          ecb_limit_1 = ecb;
        }
        if (gfc.blocktype_old[chn & 0x01] === Encoder.NORM_TYPE) {
          ecb_limit = Math.min(ecb_limit_1, ecb_limit_2);
        } else {
          ecb_limit = ecb_limit_1;
        }
        thr[b] = Math.min(ecb, ecb_limit);
      }
      gfc.nb_2[chn][b] = gfc.nb_1[chn][b];
      gfc.nb_1[chn][b] = ecb;

      /*
       * if THR exceeds EB, the quantization routines will take the
       * difference from other bands. in case of strong tonal samples
       * (tonaltest.wav) this leads to heavy distortions. that's why
       * we limit THR here.
       */
      x = max[b];
      x *= gfc.minval_l[b];
      x *= avg_mask;
      if (thr[b] > x) {
        thr[b] = x;
      }

      if (gfc.masking_lower > 1) {
        thr[b] *= gfc.masking_lower;
      }
      if (thr[b] > eb_l[b]) {
        thr[b] = eb_l[b];
      }
      if (gfc.masking_lower < 1) {
        thr[b] *= gfc.masking_lower;
      }
      console.assert(thr[b] >= 0);
    }
    for (; b < Encoder.CBANDS; ++b) {
      eb_l[b] = 0;
      thr[b] = 0;
    }
  }

  private vbrpsy_compute_block_type(
    gfp: LameGlobalFlags,
    uselongblock: ArrayOf<number>
  ) {
    const gfc = gfp.internal_flags!;

    if (
      gfp.short_blocks === ShortBlock.short_block_coupled &&
      /* force both channels to use the same block type */
      /* this is necessary if the frame is to be encoded in ms_stereo. */
      /* But even without ms_stereo, FhG does this */
      !(uselongblock[0] !== 0 && uselongblock[1] !== 0)
    ) {
      uselongblock[0] = 0;
      uselongblock[1] = 0;
    }

    for (let chn = 0; chn < gfc.channels_out; chn++) {
      /* disable short blocks */
      if (gfp.short_blocks === ShortBlock.short_block_dispensed) {
        uselongblock[chn] = 1;
      }
      if (gfp.short_blocks === ShortBlock.short_block_forced) {
        uselongblock[chn] = 0;
      }
    }
  }

  private vbrpsy_apply_block_type(
    gfp: LameGlobalFlags,
    uselongblock: ArrayOf<number>,
    blocktype_d: ArrayOf<number>
  ) {
    const gfc = gfp.internal_flags!;

    /*
     * update the blocktype of the previous granule, since it depends on
     * what happend in this granule
     */
    for (let chn = 0; chn < gfc.channels_out; chn++) {
      let blocktype = Encoder.NORM_TYPE;
      /* disable short blocks */

      if (uselongblock[chn] !== 0) {
        /* no attack : use long blocks */
        console.assert(gfc.blocktype_old[chn] !== Encoder.START_TYPE);
        if (gfc.blocktype_old[chn] === Encoder.SHORT_TYPE)
          blocktype = Encoder.STOP_TYPE;
      } else {
        /* attack : use short blocks */
        blocktype = Encoder.SHORT_TYPE;
        if (gfc.blocktype_old[chn] === Encoder.NORM_TYPE) {
          gfc.blocktype_old[chn] = Encoder.START_TYPE;
        }
        if (gfc.blocktype_old[chn] === Encoder.STOP_TYPE)
          gfc.blocktype_old[chn] = Encoder.SHORT_TYPE;
      }

      blocktype_d[chn] = gfc.blocktype_old[chn];
      // value returned to calling program
      gfc.blocktype_old[chn] = blocktype;
      // save for next call to l3psy_anal
    }
  }

  /**
   * compute M/S thresholds from Johnston & Ferreira 1992 ICASSP paper
   */
  private vbrpsy_compute_MS_thresholds(
    eb: ArrayOf<number>[],
    thr: ArrayOf<number>[],
    cb_mld: ArrayOf<number>,
    ath_cb: ArrayOf<number>,
    athadjust: number,
    msfix: number,
    n: number
  ) {
    const msfix2 = msfix * 2;
    const athlower = msfix > 0 ? Math.pow(10, athadjust) : 1;
    let rside;
    let rmid;
    for (let b = 0; b < n; ++b) {
      const ebM = eb[2][b];
      const ebS = eb[3][b];
      const thmL = thr[0][b];
      const thmR = thr[1][b];
      let thmM = thr[2][b];
      let thmS = thr[3][b];

      /* use this fix if L & R masking differs by 2db or less */
      if (thmL <= 1.58 * thmR && thmR <= 1.58 * thmL) {
        const mld_m = cb_mld[b] * ebS;
        const mld_s = cb_mld[b] * ebM;
        rmid = Math.max(thmM, Math.min(thmS, mld_m));
        rside = Math.max(thmS, Math.min(thmM, mld_s));
      } else {
        rmid = thmM;
        rside = thmS;
      }
      if (msfix > 0) {
        /** *************************************************************/
        /* Adjust M/S maskings if user set "msfix" */
        /** *************************************************************/
        /* Naoki Shibata 2000 */
        const ath = ath_cb[b] * athlower;
        const thmLR = Math.min(Math.max(thmL, ath), Math.max(thmR, ath));
        thmM = Math.max(rmid, ath);
        thmS = Math.max(rside, ath);
        const thmMS = thmM + thmS;
        if (thmMS > 0 && thmLR * msfix2 < thmMS) {
          const f = (thmLR * msfix2) / thmMS;
          thmM *= f;
          thmS *= f;
          console.assert(thmMS > 0);
        }
        rmid = Math.min(thmM, rmid);
        rside = Math.min(thmS, rside);
      }
      if (rmid > ebM) {
        rmid = ebM;
      }
      if (rside > ebS) {
        rside = ebS;
      }
      thr[2][b] = rmid;
      thr[3][b] = rside;
    }
  }

  // eslint-disable-next-line complexity
  L3psycho_anal_vbr(
    gfp: LameGlobalFlags,
    buffer: ArrayOf<number>[],
    bufPos: number,
    gr_out: number,
    masking_ratio: III_psy_ratio[][],
    masking_MS_ratio: III_psy_ratio[][],
    percep_entropy: ArrayOf<number>,
    percep_MS_entropy: ArrayOf<number>,
    energy: never,
    blocktype_d: ArrayOf<number>
  ) {
    const gfc = gfp.internal_flags!;

    /* fft and energy calculation */
    let wsamp_l;
    let wsamp_s;
    const fftenergy = new Float32Array(Encoder.HBLKSIZE);
    const fftenergy_s = new_float_n([3, Encoder.HBLKSIZE_s]);
    const wsamp_L = new_float_n([2, Encoder.BLKSIZE]);
    const wsamp_S = new_float_n([2, 3, Encoder.BLKSIZE_s]);
    const eb = new_float_n([4, Encoder.CBANDS]);
    const thr = new_float_n([4, Encoder.CBANDS]);
    const sub_short_factor = new_float_n([4, 3]);
    const pcfact = 0.6;

    /* block type */
    const ns_attacks = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    const uselongblock = new Int32Array(2);

    /* usual variables like loop indices, etc.. */

    /* chn=2 and 3 = Mid and Side channels */
    const n_chn_psy = gfp.mode === MPEGMode.JOINT_STEREO ? 4 : gfc.channels_out;

    this.vbrpsy_attack_detection(
      gfp,
      buffer,
      bufPos,
      gr_out,
      masking_ratio,
      masking_MS_ratio,
      energy,
      sub_short_factor,
      ns_attacks,
      uselongblock
    );

    this.vbrpsy_compute_block_type(gfp, uselongblock);

    /* LONG BLOCK CASE */

    for (let chn = 0; chn < n_chn_psy; chn++) {
      const ch01 = chn & 0x01;
      wsamp_l = wsamp_L;
      this.vbrpsy_compute_fft_l(
        gfp,
        buffer,
        bufPos,
        chn,
        gr_out,
        fftenergy,
        wsamp_l,
        ch01
      );

      this.vbrpsy_compute_loudness_approximation_l(gfp, gr_out, chn, fftenergy);

      if (uselongblock[ch01] !== 0) {
        this.vbrpsy_compute_masking_l(gfc, fftenergy, eb[chn], thr[chn], chn);
      } else {
        this.vbrpsy_skip_masking_l(gfc, chn);
      }
    }
    if (uselongblock[0] + uselongblock[1] === 2) {
      /* M/S channel */
      if (gfp.mode === MPEGMode.JOINT_STEREO) {
        this.vbrpsy_compute_MS_thresholds(
          eb,
          thr,
          gfc.mld_cb_l,
          gfc.ATH!.cb_l,
          gfp.ATHlower * gfc.ATH!.adjust,
          gfp.msfix,
          gfc.npart_l
        );
      }
    }
    /* TODO: apply adaptive ATH masking here ?? */
    for (let chn = 0; chn < n_chn_psy; chn++) {
      const ch01 = chn & 0x01;
      if (uselongblock[ch01] !== 0) {
        this.convert_partition2scalefac_l(gfc, eb[chn], thr[chn], chn);
      }
    }

    /* SHORT BLOCKS CASE */

    for (let sblock = 0; sblock < 3; sblock++) {
      for (let chn = 0; chn < n_chn_psy; ++chn) {
        const ch01 = chn & 0x01;

        if (uselongblock[ch01] !== 0) {
          this.vbrpsy_skip_masking_s(gfc, chn, sblock);
        } else {
          /* compute masking thresholds for short blocks */
          wsamp_s = wsamp_S;
          this.vbrpsy_compute_fft_s(
            gfp,
            buffer,
            bufPos,
            chn,
            sblock,
            fftenergy_s,
            wsamp_s,
            ch01
          );
          this.vbrpsy_compute_masking_s(
            gfp,
            fftenergy_s,
            eb[chn],
            thr[chn],
            chn,
            sblock
          );
        }
      }
      if (uselongblock[0] + uselongblock[1] === 0) {
        /* M/S channel */
        if (gfp.mode === MPEGMode.JOINT_STEREO) {
          this.vbrpsy_compute_MS_thresholds(
            eb,
            thr,
            gfc.mld_cb_s,
            gfc.ATH!.cb_s,
            gfp.ATHlower * gfc.ATH!.adjust,
            gfp.msfix,
            gfc.npart_s
          );
        }
        /* L/R channel */
      }
      /* TODO: apply adaptive ATH masking here ?? */
      for (let chn = 0; chn < n_chn_psy; ++chn) {
        const ch01 = chn & 0x01;
        if (uselongblock[ch01] === 0) {
          this.convert_partition2scalefac_s(
            gfc,
            eb[chn],
            thr[chn],
            chn,
            sblock
          );
        }
      }
    }

    /** ** short block pre-echo control ****/
    for (let chn = 0; chn < n_chn_psy; chn++) {
      const ch01 = chn & 0x01;

      if (uselongblock[ch01] !== 0) {
        continue;
      }
      for (let sb = 0; sb < Encoder.SBMAX_s; sb++) {
        const new_thmm = new Float32Array(3);
        for (let sblock = 0; sblock < 3; sblock++) {
          let thmm = gfc.thm[chn].s[sb][sblock];
          thmm *= PsyModel.NS_PREECHO_ATT0;

          if (
            ns_attacks[chn][sblock] >= 2 ||
            ns_attacks[chn][sblock + 1] === 1
          ) {
            const idx = sblock !== 0 ? sblock - 1 : 2;
            const p = this.nsInterp(
              gfc.thm[chn].s[sb][idx],
              thmm,
              PsyModel.NS_PREECHO_ATT1 * pcfact
            );
            thmm = Math.min(thmm, p);
          } else if (ns_attacks[chn][sblock] === 1) {
            const idx = sblock !== 0 ? sblock - 1 : 2;
            const p = this.nsInterp(
              gfc.thm[chn].s[sb][idx],
              thmm,
              PsyModel.NS_PREECHO_ATT2 * pcfact
            );
            thmm = Math.min(thmm, p);
          } else if (
            (sblock !== 0 && ns_attacks[chn][sblock - 1] === 3) ||
            (sblock === 0 && gfc.nsPsy.lastAttacks[chn] === 3)
          ) {
            const idx = sblock !== 2 ? sblock + 1 : 0;
            const p = this.nsInterp(
              gfc.thm[chn].s[sb][idx],
              thmm,
              PsyModel.NS_PREECHO_ATT2 * pcfact
            );
            thmm = Math.min(thmm, p);
          }

          /* pulse like signal detection for fatboy.wav and so on */
          thmm *= sub_short_factor[chn][sblock];

          new_thmm[sblock] = thmm;
        }
        for (let sblock = 0; sblock < 3; sblock++) {
          gfc.thm[chn].s[sb][sblock] = new_thmm[sblock];
        }
      }
    }

    for (let chn = 0; chn < n_chn_psy; chn++) {
      gfc.nsPsy.lastAttacks[chn] = ns_attacks[chn][2];
    }

    /** *************************************************************
     * determine final block type
     ***************************************************************/
    this.vbrpsy_apply_block_type(gfp, uselongblock, blocktype_d);

    /** *******************************************************************
     * compute the value of PE to return ... no delay and advance
     *********************************************************************/
    for (let chn = 0; chn < n_chn_psy; chn++) {
      let ppe;
      let ppePos;
      let type;
      let mr;

      if (chn > 1) {
        ppe = percep_MS_entropy;
        ppePos = -2;
        type = Encoder.NORM_TYPE;
        if (
          blocktype_d[0] === Encoder.SHORT_TYPE ||
          blocktype_d[1] === Encoder.SHORT_TYPE
        )
          type = Encoder.SHORT_TYPE;
        mr = masking_MS_ratio[gr_out][chn - 2];
      } else {
        ppe = percep_entropy;
        ppePos = 0;
        type = blocktype_d[chn];
        mr = masking_ratio[gr_out][chn];
      }

      if (type === Encoder.SHORT_TYPE) {
        ppe[ppePos + chn] = this.pecalc_s(mr, gfc.masking_lower);
      } else {
        ppe[ppePos + chn] = this.pecalc_l(mr, gfc.masking_lower);
      }

      if (gfp.analysis) {
        gfc.pinfo!.pe[gr_out][chn] = ppe[ppePos + chn];
      }
    }
    return 0;
  }

  private s3_func_x(bark: number, hf_slope: number) {
    const tempx = bark;
    let tempy;

    if (tempx >= 0) {
      tempy = -tempx * 27;
    } else {
      tempy = tempx * hf_slope;
    }
    if (tempy <= -72.0) {
      return 0;
    }
    return Math.exp(tempy * PsyModel.LN_TO_LOG10);
  }

  private norm_s3_func_x(hf_slope: number) {
    let lim_a = 0;
    let lim_b = 0;

    let x = 0;
    let l;
    let h;
    for (x = 0; this.s3_func_x(x, hf_slope) > 1e-20; x -= 1);
    l = x;
    h = 0;
    while (Math.abs(h - l) > 1e-12) {
      x = (h + l) / 2;
      if (this.s3_func_x(x, hf_slope) > 0) {
        h = x;
      } else {
        l = x;
      }
    }
    lim_a = l;

    for (x = 0; this.s3_func_x(x, hf_slope) > 1e-20; x += 1);
    l = 0;
    h = x;
    while (Math.abs(h - l) > 1e-12) {
      x = (h + l) / 2;
      if (this.s3_func_x(x, hf_slope) > 0) {
        l = x;
      } else {
        h = x;
      }
    }
    lim_b = h;

    let sum = 0;
    const m = 1000;
    let i;
    for (i = 0; i <= m; ++i) {
      const x = lim_a + (i * (lim_b - lim_a)) / m;
      const y = this.s3_func_x(x, hf_slope);
      sum += y;
    }

    const norm = (m + 1) / (sum * (lim_b - lim_a));
    /* printf( "norm = %lf\n",norm); */
    return norm;
  }

  /**
   *   The spreading function.  Values returned in units of energy
   */
  private s3_func(bark: number) {
    let tempx;
    let x;
    let temp;
    tempx = bark;
    if (tempx >= 0) tempx *= 3;
    else tempx *= 1.5;

    if (tempx >= 0.5 && tempx <= 2.5) {
      temp = tempx - 0.5;
      x = 8.0 * (temp * temp - 2.0 * temp);
    } else x = 0.0;
    tempx += 0.474;
    const tempy =
      15.811389 + 7.5 * tempx - 17.5 * Math.sqrt(1.0 + tempx * tempx);

    if (tempy <= -60.0) return 0.0;

    tempx = Math.exp((x + tempy) * PsyModel.LN_TO_LOG10);

    /**
     * <PRE>
     * Normalization.  The spreading function should be normalized so that:
     * +inf
     * /
     * |  s3 [ bark ]  d(bark)   =  1
     * /
     * -inf
     * </PRE>
     */
    tempx /= 0.6609193;
    return tempx;
  }

  /**
   * see for example "Zwicker: Psychoakustik, 1982; ISBN 3-540-11401-7
   */
  private freq2bark(freq: number) {
    /* input: freq in hz output: barks */
    if (freq < 0) freq = 0;
    freq *= 0.001;
    return (
      13.0 * Math.atan(0.76 * freq) +
      3.5 * Math.atan((freq * freq) / (7.5 * 7.5))
    );
  }

  private init_numline(
    numlines: ArrayOf<number>,
    bo: ArrayOf<number>,
    bm: ArrayOf<number>,
    bval: ArrayOf<number>,
    bval_width: ArrayOf<number>,
    mld: ArrayOf<number>,
    bo_w: ArrayOf<number>,
    sfreq: number,
    blksize: number,
    scalepos: ArrayOf<number>,
    deltafreq: number,
    sbmax: number
  ) {
    const b_frq = new Float32Array(Encoder.CBANDS + 1);
    const sample_freq_frac = sfreq / (sbmax > 15 ? 2 * 576 : 2 * 192);
    const partition = new Int32Array(Encoder.HBLKSIZE);
    let i;
    sfreq /= blksize;
    let j = 0;
    let ni = 0;
    /* compute numlines, the number of spectral lines in each partition band */
    /* each partition band should be about DELBARK wide. */
    for (i = 0; i < Encoder.CBANDS; i++) {
      let j2;
      const bark1 = this.freq2bark(sfreq * j);

      b_frq[i] = sfreq * j;

      for (
        j2 = j;
        this.freq2bark(sfreq * j2) - bark1 < PsyModel.DELBARK &&
        j2 <= blksize / 2;
        j2++
      );

      numlines[i] = j2 - j;
      ni = i + 1;

      while (j < j2) {
        console.assert(j < Encoder.HBLKSIZE);
        partition[j++] = i;
      }
      if (j > blksize / 2) {
        j = blksize / 2;
        ++i;
        break;
      }
    }
    console.assert(i < Encoder.CBANDS);
    b_frq[i] = sfreq * j;

    for (let sfb = 0; sfb < sbmax; sfb++) {
      let i1;
      let i2;
      let arg;
      const start = scalepos[sfb];
      const end = scalepos[sfb + 1];

      i1 = 0 | Math.floor(0.5 + deltafreq * (start - 0.5));
      if (i1 < 0) i1 = 0;
      i2 = 0 | Math.floor(0.5 + deltafreq * (end - 0.5));

      if (i2 > blksize / 2) i2 = blksize / 2;

      bm[sfb] = (partition[i1] + partition[i2]) / 2;
      bo[sfb] = partition[i2];
      const f_tmp = sample_freq_frac * end;
      /*
       * calculate how much of this band belongs to current scalefactor
       * band
       */
      bo_w[sfb] =
        (f_tmp - b_frq[bo[sfb]]) / (b_frq[bo[sfb] + 1] - b_frq[bo[sfb]]);
      if (bo_w[sfb] < 0) {
        bo_w[sfb] = 0;
      } else if (bo_w[sfb] > 1) {
        bo_w[sfb] = 1;
      }
      /* setup stereo demasking thresholds */
      /* formula reverse enginerred from plot in paper */
      arg = this.freq2bark(sfreq * scalepos[sfb] * deltafreq);
      arg = Math.min(arg, 15.5) / 15.5;

      mld[sfb] = Math.pow(10.0, 1.25 * (1 - Math.cos(Math.PI * arg)) - 2.5);
    }

    /* compute bark values of each critical band */
    j = 0;
    for (let k = 0; k < ni; k++) {
      const w = numlines[k];
      let bark1;
      let bark2;

      bark1 = this.freq2bark(sfreq * j);
      bark2 = this.freq2bark(sfreq * (j + w - 1));
      bval[k] = 0.5 * (bark1 + bark2);

      bark1 = this.freq2bark(sfreq * (j - 0.5));
      bark2 = this.freq2bark(sfreq * (j + w - 0.5));
      bval_width[k] = bark2 - bark1;
      j += w;
    }

    return ni;
  }

  private init_s3_values(
    s3ind: ArrayOf<number>[],
    npart: number,
    bval: ArrayOf<number>,
    bval_width: ArrayOf<number>,
    norm: ArrayOf<any>,
    use_old_s3: boolean
  ) {
    const s3 = new_float_n([Encoder.CBANDS, Encoder.CBANDS] as const);
    /*
     * The s3 array is not linear in the bark scale.
     *
     * bval[x] should be used to get the bark value.
     */
    let j;
    let numberOfNoneZero = 0;

    /**
     * <PRE>
     * s[i][j], the value of the spreading function,
     * centered at band j (masker), for band i (maskee)
     *
     * i.e.: sum over j to spread into signal barkval=i
     * NOTE: i and j are used opposite as in the ISO docs
     * </PRE>
     */
    if (use_old_s3) {
      for (let i = 0; i < npart; i++) {
        for (j = 0; j < npart; j++) {
          const v = this.s3_func(bval[i] - bval[j]) * bval_width[j];
          s3[i][j] = v * norm[i];
        }
      }
    } else {
      for (j = 0; j < npart; j++) {
        const hf_slope = 15 + Math.min(21 / bval[j], 12);
        const s3_x_norm = this.norm_s3_func_x(hf_slope);
        for (let i = 0; i < npart; i++) {
          const v =
            s3_x_norm *
            this.s3_func_x(bval[i] - bval[j], hf_slope) *
            bval_width[j];
          s3[i][j] = v * norm[i];
        }
      }
    }
    for (let i = 0; i < npart; i++) {
      for (j = 0; j < npart; j++) {
        if (s3[i][j] > 0.0) break;
      }
      s3ind[i][0] = j;

      for (j = npart - 1; j > 0; j--) {
        if (s3[i][j] > 0.0) break;
      }
      s3ind[i][1] = j;
      numberOfNoneZero += s3ind[i][1] - s3ind[i][0] + 1;
    }

    const p = new Float32Array(numberOfNoneZero);
    let k = 0;
    for (let i = 0; i < npart; i++)
      for (j = s3ind[i][0]; j <= s3ind[i][1]; j++) p[k++] = s3[i][j];

    return p;
  }

  private stereo_demask(f: number) {
    /* setup stereo demasking thresholds */
    /* formula reverse enginerred from plot in paper */
    let arg = this.freq2bark(f);
    arg = Math.min(arg, 15.5) / 15.5;

    return Math.pow(10.0, 1.25 * (1 - Math.cos(Math.PI * arg)) - 2.5);
  }

  /**
   * NOTE: the bitrate reduction from the inter-channel masking effect is low
   * compared to the chance of getting annyoing artefacts. L3psycho_anal_vbr
   * does not use this feature. (Robert 071216)
   */
  // eslint-disable-next-line complexity
  psymodel_init(gfp: LameGlobalFlags) {
    const gfc = gfp.internal_flags!;
    let i;
    let useOldS3 = true;
    let bvl_a = 13;
    const bvl_b = 24;
    let snr_l_a = 0;
    let snr_l_b = 0;
    let snr_s_a = -8.25;
    let snr_s_b = -4.5;
    const bval = new Float32Array(Encoder.CBANDS);
    const bval_width = new Float32Array(Encoder.CBANDS);
    const norm = new Float32Array(Encoder.CBANDS);
    const sfreq = gfp.out_samplerate;

    switch (gfp.experimentalZ) {
      default:
      case 0:
        useOldS3 = true;
        break;
      case 1:
        useOldS3 = !(
          gfp.VBR === VbrMode.vbr_mtrh || gfp.VBR === VbrMode.vbr_mt
        );
        break;
      case 2:
        useOldS3 = false;
        break;
      case 3:
        bvl_a = 8;
        snr_l_a = -1.75;
        snr_l_b = -0.0125;
        snr_s_a = -8.25;
        snr_s_b = -2.25;
        break;
    }
    gfc.ms_ener_ratio_old = 0.25;
    gfc.blocktype_old[0] = Encoder.NORM_TYPE;
    gfc.blocktype_old[1] = Encoder.NORM_TYPE;
    // the vbr header is long blocks

    for (i = 0; i < 4; ++i) {
      for (let j = 0; j < Encoder.CBANDS; ++j) {
        gfc.nb_1[i][j] = 1e20;
        gfc.nb_2[i][j] = 1e20;
        gfc.nb_s1[i][j] = 1.0;
        gfc.nb_s2[i][j] = 1.0;
      }
      for (let sb = 0; sb < Encoder.SBMAX_l; sb++) {
        gfc.en[i].l[sb] = 1e20;
        gfc.thm[i].l[sb] = 1e20;
      }
      for (let j = 0; j < 3; ++j) {
        for (let sb = 0; sb < Encoder.SBMAX_s; sb++) {
          gfc.en[i].s[sb][j] = 1e20;
          gfc.thm[i].s[sb][j] = 1e20;
        }
        gfc.nsPsy.lastAttacks[i] = 0;
      }
      for (let j = 0; j < 9; j++) gfc.nsPsy.last_en_subshort[i][j] = 10;
    }

    /* init. for loudness approx. -jd 2001 mar 27 */
    gfc.loudness_sq_save[0] = 0.0;
    gfc.loudness_sq_save[1] = 0.0;

    /** ***********************************************************************
     * now compute the psychoacoustic model specific constants
     ************************************************************************/
    /* compute numlines, bo, bm, bval, bval_width, mld */

    gfc.npart_l = this.init_numline(
      gfc.numlines_l,
      gfc.bo_l,
      gfc.bm_l,
      bval,
      bval_width,
      gfc.mld_l,
      gfc.PSY!.bo_l_weight,
      sfreq,
      Encoder.BLKSIZE,
      gfc.scalefac_band.l,
      Encoder.BLKSIZE / (2.0 * 576),
      Encoder.SBMAX_l
    );
    console.assert(gfc.npart_l < Encoder.CBANDS);
    /* compute the spreading function */
    for (i = 0; i < gfc.npart_l; i++) {
      let snr = snr_l_a;
      if (bval[i] >= bvl_a) {
        snr =
          (snr_l_b * (bval[i] - bvl_a)) / (bvl_b - bvl_a) +
          (snr_l_a * (bvl_b - bval[i])) / (bvl_b - bvl_a);
      }
      norm[i] = Math.pow(10.0, snr / 10.0);
      if (gfc.numlines_l[i] > 0) {
        gfc.rnumlines_l[i] = 1.0 / gfc.numlines_l[i];
      } else {
        gfc.rnumlines_l[i] = 0;
      }
    }
    gfc.s3_ll = this.init_s3_values(
      gfc.s3ind,
      gfc.npart_l,
      bval,
      bval_width,
      norm,
      useOldS3
    );

    /* compute long block specific values, ATH and MINVAL */
    let j = 0;
    for (i = 0; i < gfc.npart_l; i++) {
      let x;

      /* ATH */
      x = Float.MAX_VALUE;
      for (let k = 0; k < gfc.numlines_l[i]; k++, j++) {
        const freq = (sfreq * j) / (1000.0 * Encoder.BLKSIZE);
        let level;
        /*
         * ATH below 100 Hz constant, not further climbing
         */
        level = this.ATHformula(freq * 1000, gfp) - 20;
        // scale to FFT units; returned value is in dB
        level = Math.pow(10, 0.1 * level);
        // convert from dB . energy
        level *= gfc.numlines_l[i];
        if (x > level) x = level;
      }
      gfc.ATH!.cb_l[i] = x;

      /*
       * MINVAL. For low freq, the strength of the masking is limited by
       * minval this is an ISO MPEG1 thing, dont know if it is really
       * needed
       */
      /*
       * FIXME: it does work to reduce low-freq problems in S53-Wind-Sax
       * and lead-voice samples, but introduces some 3 kbps bit bloat too.
       * TODO: Further refinement of the shape of this hack.
       */
      x = -20 + (bval[i] * 20) / 10;
      if (x > 6) {
        x = 100;
      }
      if (x < -15) {
        x = -15;
      }
      x -= 8;
      gfc.minval_l[i] = Math.pow(10.0, x / 10) * gfc.numlines_l[i];
    }

    /** **********************************************************************
     * do the same things for short blocks
     ************************************************************************/
    gfc.npart_s = this.init_numline(
      gfc.numlines_s,
      gfc.bo_s,
      gfc.bm_s,
      bval,
      bval_width,
      gfc.mld_s,
      gfc.PSY!.bo_s_weight,
      sfreq,
      Encoder.BLKSIZE_s,
      gfc.scalefac_band.s,
      Encoder.BLKSIZE_s / (2.0 * 192),
      Encoder.SBMAX_s
    );
    console.assert(gfc.npart_s < Encoder.CBANDS);

    /* SNR formula. short block is normalized by SNR. is it still right ? */
    j = 0;
    for (i = 0; i < gfc.npart_s; i++) {
      let x;
      let snr = snr_s_a;
      if (bval[i] >= bvl_a) {
        snr =
          (snr_s_b * (bval[i] - bvl_a)) / (bvl_b - bvl_a) +
          (snr_s_a * (bvl_b - bval[i])) / (bvl_b - bvl_a);
      }
      norm[i] = Math.pow(10.0, snr / 10.0);

      /* ATH */
      x = Float.MAX_VALUE;
      for (let k = 0; k < gfc.numlines_s[i]; k++, j++) {
        const freq = (sfreq * j) / (1000.0 * Encoder.BLKSIZE_s);
        let level;
        /* freq = Min(.1,freq); */
        /*
         * ATH below 100 Hz constant, not
         * further climbing
         */
        level = this.ATHformula(freq * 1000, gfp) - 20;
        // scale to FFT units; returned value is in dB
        level = Math.pow(10, 0.1 * level);
        // convert from dB . energy
        level *= gfc.numlines_s[i];
        if (x > level) x = level;
      }
      gfc.ATH!.cb_s[i] = x;

      /*
       * MINVAL. For low freq, the strength of the masking is limited by
       * minval this is an ISO MPEG1 thing, dont know if it is really
       * needed
       */
      x = -7.0 + (bval[i] * 7.0) / 12.0;
      if (bval[i] > 12) {
        x *= 1 + Math.log(1 + x) * 3.1;
      }
      if (bval[i] < 12) {
        x *= 1 + Math.log(1 - x) * 2.3;
      }
      if (x < -15) {
        x = -15;
      }
      x -= 8;
      gfc.minval_s[i] = Math.pow(10.0, x / 10) * gfc.numlines_s[i];
    }

    gfc.s3_ss = this.init_s3_values(
      gfc.s3ind_s,
      gfc.npart_s,
      bval,
      bval_width,
      norm,
      useOldS3
    );

    this.init_mask_add_max_values();
    this.fft.init_fft(gfc);

    /* setup temporal masking */
    gfc.decay = Math.exp(
      (-1.0 * PsyModel.LOG10) /
        ((this.temporalmask_sustain_sec * sfreq) / 192.0)
    );

    {
      let msfix;
      msfix = PsyModel.NS_MSFIX;
      if ((gfp.exp_nspsytune & 2) !== 0) msfix = 1.0;
      if (Math.abs(gfp.msfix) > 0.0) msfix = gfp.msfix;
      gfp.msfix = msfix;

      /*
       * spread only from npart_l bands. Normally, we use the spreading
       * function to convolve from npart_l down to npart_l bands
       */
      for (let b = 0; b < gfc.npart_l; b++)
        if (gfc.s3ind[b][1] > gfc.npart_l - 1)
          gfc.s3ind[b][1] = gfc.npart_l - 1;
    }

    /*
     * prepare for ATH auto adjustment: we want to decrease the ATH by 12 dB
     * per second
     */
    const frame_duration = (576 * gfc.mode_gr) / sfreq;
    gfc.ATH!.decay = Math.pow(10, (-12 / 10) * frame_duration);
    gfc.ATH!.adjust = 0.01;
    /* minimum, for leading low loudness */
    gfc.ATH!.adjustLimit = 1.0;
    /* on lead, allow adjust up to maximum */

    console.assert(gfc.bo_l[Encoder.SBMAX_l - 1] <= gfc.npart_l);
    console.assert(gfc.bo_s[Encoder.SBMAX_s - 1] <= gfc.npart_s);

    if (gfp.ATHtype !== -1) {
      /* compute equal loudness weights (eql_w) */
      let freq;
      const freq_inc = gfp.out_samplerate / Encoder.BLKSIZE;
      let eql_balance = 0.0;
      freq = 0.0;
      for (i = 0; i < Encoder.BLKSIZE / 2; ++i) {
        /* convert ATH dB to relative power (not dB) */
        /* to determine eql_w */
        freq += freq_inc;
        gfc.ATH!.eql_w[i] = 1 / Math.pow(10, this.ATHformula(freq, gfp) / 10);
        eql_balance += gfc.ATH!.eql_w[i];
      }
      eql_balance = 1.0 / eql_balance;
      for (i = Encoder.BLKSIZE / 2; --i >= 0; ) {
        /* scale weights */
        gfc.ATH!.eql_w[i] *= eql_balance;
      }
    }
    {
      let b = 0;
      let j = 0;
      for (; b < gfc.npart_s; ++b) {
        for (i = 0; i < gfc.numlines_s[b]; ++i) {
          ++j;
        }
      }
      console.assert(j === 129);
      b = 0;
      j = 0;
      for (; b < gfc.npart_l; ++b) {
        for (i = 0; i < gfc.numlines_l[b]; ++i) {
          ++j;
        }
      }
      console.assert(j === 513);
    }
    j = 0;
    for (i = 0; i < gfc.npart_l; i++) {
      const freq =
        (sfreq * (j + gfc.numlines_l[i] / 2)) / (1.0 * Encoder.BLKSIZE);
      gfc.mld_cb_l[i] = this.stereo_demask(freq);
      j += gfc.numlines_l[i];
    }
    for (; i < Encoder.CBANDS; ++i) {
      gfc.mld_cb_l[i] = 1;
    }
    j = 0;
    for (i = 0; i < gfc.npart_s; i++) {
      const freq =
        (sfreq * (j + gfc.numlines_s[i] / 2)) / (1.0 * Encoder.BLKSIZE_s);
      gfc.mld_cb_s[i] = this.stereo_demask(freq);
      j += gfc.numlines_s[i];
    }
    for (; i < Encoder.CBANDS; ++i) {
      gfc.mld_cb_s[i] = 1;
    }
    return 0;
  }

  /**
   * Those ATH formulas are returning their minimum value for input = -1
   */
  private ATHformula_GB(f: number, value: number) {
    /**
     * <PRE>
     *  from Painter & Spanias
     *           modified by Gabriel Bouvigne to better fit the reality
     *           ath =    3.640 * pow(f,-0.8)
     *           - 6.800 * exp(-0.6*pow(f-3.4,2.0))
     *           + 6.000 * exp(-0.15*pow(f-8.7,2.0))
     *           + 0.6* 0.001 * pow(f,4.0);
     *
     *
     *           In the past LAME was using the Painter &Spanias formula.
     *           But we had some recurrent problems with HF content.
     *           We measured real ATH values, and found the older formula
     *           to be inaccurate in the higher part. So we made this new
     *           formula and this solved most of HF problematic test cases.
     *           The tradeoff is that in VBR mode it increases a lot the
     *           bitrate.
     * </PRE>
     */

    /*
     * This curve can be adjusted according to the VBR scale: it adjusts
     * from something close to Painter & Spanias on V9 up to Bouvigne's
     * formula for V0. This way the VBR bitrate is more balanced according
     * to the -V value.
     */

    // the following Hack allows to ask for the lowest value
    if (f < -0.3) f = 3410;

    // convert to khz
    f /= 1000;
    f = Math.max(0.1, f);
    const ath =
      3.64 * Math.pow(f, -0.8) -
      6.8 * Math.exp(-0.6 * Math.pow(f - 3.4, 2.0)) +
      6.0 * Math.exp(-0.15 * Math.pow(f - 8.7, 2.0)) +
      (0.6 + 0.04 * value) * 0.001 * Math.pow(f, 4.0);
    return ath;
  }

  ATHformula(f: number, gfp: LameGlobalFlags) {
    let ath;
    switch (gfp.ATHtype) {
      case 0:
        ath = this.ATHformula_GB(f, 9);
        break;
      case 1:
        // over sensitive, should probably be removed
        ath = this.ATHformula_GB(f, -1);
        break;
      case 2:
        ath = this.ATHformula_GB(f, 0);
        break;
      case 3:
        // modification of GB formula by Roel
        ath = this.ATHformula_GB(f, 1) + 6;
        break;
      case 4:
        ath = this.ATHformula_GB(f, gfp.ATHcurve);
        break;
      default:
        ath = this.ATHformula_GB(f, 0);
        break;
    }
    return ath;
  }
}
