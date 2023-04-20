export class CalcNoiseResult {
  /**
   * sum of quantization noise > masking
   */
  over_noise = 0;

  /**
   * sum of all quantization noise
   */
  tot_noise = 0;

  /**
   * max quantization noise
   */
  max_noise = 0;

  /**
   * number of quantization noise > masking
   */
  over_count = 0;

  /**
   * SSD-like cost of distorted bands
   */
  over_SSD = 0;

  bits = 0;
}
