import type { ArrayOf } from './ArrayOf';
import Encoder from './Encoder';
import type III_psy_ratio from './III_psy_ratio';
import L3Side from './L3Side';
import type LameGlobalFlags from './LameGlobalFlags';
import LameInternalFlags from './LameInternalFlags';
import MeanBits from './MeanBits';
import type Quantize from './Quantize';

class CBRNewIterationLoop {
  constructor(public quantize: Quantize) {}

  iteration_loop(
    gfp: LameGlobalFlags,
    pe: ArrayOf<number>[],
    ms_ener_ratio: ArrayOf<number>,
    ratio: III_psy_ratio[][]
  ) {
    const gfc = gfp.internal_flags!;
    const l3_xmin = new Float32Array(L3Side.SFBMAX);
    const xrpow = new Float32Array(576);
    const targ_bits = new Int32Array(2);
    let mean_bits = 0;
    let max_bits;
    const { l3_side } = gfc;

    const mb = new MeanBits(mean_bits);
    this.quantize.rv!.ResvFrameBegin(gfp, mb);
    mean_bits = mb.bits;

    /* quantize! */
    for (let gr = 0; gr < gfc.mode_gr; gr++) {
      /*
       * calculate needed bits
       */
      max_bits = this.quantize.qupvt!.on_pe(
        gfp,
        pe,
        targ_bits,
        mean_bits,
        gr,
        gr
      );

      if (gfc.mode_ext === Encoder.MPG_MD_MS_LR) {
        this.quantize.ms_convert(gfc.l3_side, gr);
        this.quantize.qupvt!.reduce_side(
          targ_bits,
          ms_ener_ratio[gr],
          mean_bits,
          max_bits
        );
      }

      for (let ch = 0; ch < gfc.channels_out; ch++) {
        let adjust;
        let masking_lower_db;
        const cod_info = l3_side.tt[gr][ch];

        if (cod_info.block_type !== Encoder.SHORT_TYPE) {
          // NORM, START or STOP type
          adjust = 0;
          masking_lower_db = gfc.PSY!.mask_adjust - adjust;
        } else {
          adjust = 0;
          masking_lower_db = gfc.PSY!.mask_adjust_short - adjust;
        }
        gfc.masking_lower = Math.pow(10.0, masking_lower_db * 0.1);

        /*
         * init_outer_loop sets up cod_info, scalefac and xrpow
         */
        this.quantize.init_outer_loop(gfc, cod_info);
        if (this.quantize.init_xrpow(gfc, cod_info, xrpow)) {
          /*
           * xr contains energy we will have to encode calculate the
           * masking abilities find some good quantization in
           * outer_loop
           */
          this.quantize.qupvt!.calc_xmin(gfp, ratio[gr][ch], cod_info, l3_xmin);
          this.quantize.outer_loop(
            gfp,
            cod_info,
            l3_xmin,
            xrpow,
            ch,
            targ_bits[ch]
          );
        }

        this.quantize.iteration_finish_one(gfc, gr, ch);
        console.assert(
          cod_info.part2_3_length <= LameInternalFlags.MAX_BITS_PER_CHANNEL
        );
        console.assert(cod_info.part2_3_length <= targ_bits[ch]);
      } /* for ch */
    } /* for gr */

    this.quantize.rv!.ResvFrameEnd(gfc, mean_bits);
  }
}

export default CBRNewIterationLoop;
