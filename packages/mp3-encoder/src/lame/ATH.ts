import Encoder from './Encoder';

/**
 * ATH related stuff, if something new ATH related has to be added, please plug
 * it here into the ATH.
 */
class ATH {
  /**
   * Method for the auto adjustment.
   */
  useAdjust = 0;

  /**
   * factor for tuning the (sample power) point below which adaptive threshold
   * of hearing adjustment occurs
   */
  aaSensitivityP = 0;

  /**
   * Lowering based on peak volume, 1 = no lowering.
   */
  adjust = 0;

  /**
   * Limit for dynamic ATH adjust.
   */
  adjustLimit = 0;

  /**
   * Determined to lower x dB each second.
   */
  decay = 0;

  /**
   * Lowest ATH value.
   */
  floor = 0;

  /**
   * ATH for sfbs in long blocks.
   */
  l = new Float32Array(Encoder.SBMAX_l);

  /**
   * ATH for sfbs in short blocks.
   */
  s = new Float32Array(Encoder.SBMAX_s);

  /**
   * ATH for partitioned sfb21 in long blocks.
   */
  psfb21 = new Float32Array(Encoder.PSFB21);

  /**
   * ATH for partitioned sfb12 in short blocks.
   */
  psfb12 = new Float32Array(Encoder.PSFB12);

  /**
   * ATH for long block convolution bands.
   */
  cb_l = new Float32Array(Encoder.CBANDS);

  /**
   * ATH for short block convolution bands.
   */
  cb_s = new Float32Array(Encoder.CBANDS);

  /**
   * Equal loudness weights (based on ATH).
   */
  eql_w = new Float32Array(Encoder.BLKSIZE / 2);
}

export default ATH;
