import { GainAnalysis } from './GainAnalysis';

export class ReplayGain {
  linprebuf = new Float32Array(GainAnalysis.MAX_ORDER * 2);

  /**
   * left input samples, with pre-buffer
   */
  linpre = 0;

  lstepbuf = new Float32Array(
    GainAnalysis.MAX_SAMPLES_PER_WINDOW + GainAnalysis.MAX_ORDER
  );

  /**
   * left "first step" (i.e. post first filter) samples
   */
  lstep = 0;

  loutbuf = new Float32Array(
    GainAnalysis.MAX_SAMPLES_PER_WINDOW + GainAnalysis.MAX_ORDER
  );

  /**
   * left "out" (i.e. post second filter) samples
   */
  lout = 0;

  rinprebuf = new Float32Array(GainAnalysis.MAX_ORDER * 2);

  /**
   * right input samples ...
   */
  rinpre = 0;

  rstepbuf = new Float32Array(
    GainAnalysis.MAX_SAMPLES_PER_WINDOW + GainAnalysis.MAX_ORDER
  );

  rstep = 0;

  routbuf = new Float32Array(
    GainAnalysis.MAX_SAMPLES_PER_WINDOW + GainAnalysis.MAX_ORDER
  );

  rout = 0;

  /**
   * number of samples required to reach number of milliseconds required
   * for RMS window
   */
  sampleWindow = 0;

  totsamp = 0;

  lsum = 0;

  rsum = 0;

  freqindex = 0;

  first = 0;

  A = new Int32Array(GainAnalysis.STEPS_per_dB * GainAnalysis.MAX_dB);

  B = new Int32Array(GainAnalysis.STEPS_per_dB * GainAnalysis.MAX_dB);

  reqindex = 0;
}
