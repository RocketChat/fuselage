import type { BitStream } from './BitStream';
import type { GrInfo } from './GrInfo';
import type { LameGlobalFlags } from './LameGlobalFlags';
import type { LameInternalFlags } from './LameInternalFlags';
import type { MeanBits } from './MeanBits';

export class Reservoir {
  private bs: BitStream | undefined;

  setModules(bs: BitStream) {
    this.bs = bs;
  }

  /**
   * ResvFrameBegin:<BR>
   * Called (repeatedly) at the beginning of a frame. Updates the maximum size of
   * the reservoir, and checks to make sure main_data_begin was set properly by
   * the formatter<BR>
   * Background information:
   *
   * This is the original text from the ISO standard. Because of sooo many bugs
   * and irritations correcting comments are added in brackets []. A '^W' means
   * you should remove the last word.
   *
   * <PRE>
   *  1. The following rule can be used to calculate the maximum
   *     number of bits used for one granule [^W frame]:<BR>
   *     At the highest possible bitrate of Layer III (320 kbps
   *     per stereo signal [^W^W^W], 48 kHz) the frames must be of
   *     [^W^W^W are designed to have] constant length, i.e.
   *     one buffer [^W^W the frame] length is:<BR>
   *
   *         320 kbps * 1152/48 kHz = 7680 bit = 960 byte
   *
   *     This value is used as the maximum buffer per channel [^W^W] at
   *     lower bitrates [than 320 kbps]. At 64 kbps mono or 128 kbps
   *     stereo the main granule length is 64 kbps * 576/48 kHz = 768 bit
   *     [per granule and channel] at 48 kHz sampling frequency.
   *     This means that there is a maximum deviation (short time buffer
   *     [= reservoir]) of 7680 - 2*2*768 = 4608 bits is allowed at 64 kbps.
   *     The actual deviation is equal to the number of bytes [with the
   *     meaning of octets] denoted by the main_data_end offset pointer.
   *     The actual maximum deviation is (2^9-1)*8 bit = 4088 bits
   *     [for MPEG-1 and (2^8-1)*8 bit for MPEG-2, both are hard limits].
   *     ... The xchange of buffer bits between the left and right channel
   *     is allowed without restrictions [exception: dual channel].
   *     Because of the [constructed] constraint on the buffer size
   *     main_data_end is always set to 0 in the case of bit_rate_index==14,
   *     i.e. data rate 320 kbps per stereo signal [^W^W^W]. In this case
   *     all data are allocated between adjacent header [^W sync] words
   *     [, i.e. there is no buffering at all].
   * </PRE>
   */
  ResvFrameBegin(gfp: LameGlobalFlags, mean_bits: MeanBits) {
    const gfc = gfp.internal_flags;
    let maxmp3buf;
    const { l3_side } = gfc;

    const frameLength = this.bs?.getframebits(gfp) ?? 0;
    mean_bits.bits = (frameLength - gfc.sideinfo_len * 8) / gfc.mode_gr;

    /**
     * <PRE>
     *  Meaning of the variables:
     *      resvLimit: (0, 8, ..., 8*255 (MPEG-2), 8*511 (MPEG-1))
     *          Number of bits can be stored in previous frame(s) due to
     *          counter size constaints
     *      maxmp3buf: ( ??? ... 8*1951 (MPEG-1 and 2), 8*2047 (MPEG-2.5))
     *          Number of bits allowed to encode one frame (you can take 8*511 bit
     *          from the bit reservoir and at most 8*1440 bit from the current
     *          frame (320 kbps, 32 kHz), so 8*1951 bit is the largest possible
     *          value for MPEG-1 and -2)
     *
     *          maximum allowed granule/channel size times 4 = 8*2047 bits.,
     *          so this is the absolute maximum supported by the format.
     *
     *
     *      fullFrameBits:  maximum number of bits available for encoding
     *                      the current frame.
     *
     *      mean_bits:      target number of bits per granule.
     *
     *      frameLength:
     *
     *      gfc.ResvMax:   maximum allowed reservoir
     *
     *      gfc.ResvSize:  current reservoir size
     *
     *      l3_side.resvDrain_pre:
     *         ancillary data to be added to previous frame:
     *         (only usefull in VBR modes if it is possible to have
     *         maxmp3buf < fullFrameBits)).  Currently disabled,
     *         see #define NEW_DRAIN
     *         2010-02-13: RH now enabled, it seems to be needed for CBR too,
     *                     as there exists one example, where the FhG decoder
     *                     can't decode a -b320 CBR file anymore.
     *
     *      l3_side.resvDrain_post:
     *         ancillary data to be added to this frame:
     *
     * </PRE>
     */

    /* main_data_begin has 9 bits in MPEG-1, 8 bits MPEG-2 */
    const resvLimit = 8 * 256 * gfc.mode_gr - 8;

    /*
     * maximum allowed frame size. dont use more than this number of bits,
     * even if the frame has the space for them:
     */
    if (gfp.brate > 320) {
      /* in freeformat the buffer is constant */
      maxmp3buf =
        8 *
        Math.trunc((gfp.brate * 1000) / (gfp.out_samplerate / 1152) / 8 + 0.5);
    } else {
      /*
       * all mp3 decoders should have enough buffer to handle this value:
       * size of a 320kbps 32kHz frame
       */
      maxmp3buf = 8 * 1440;
    }

    gfc.ResvMax = maxmp3buf - frameLength;
    if (gfc.ResvMax > resvLimit) gfc.ResvMax = resvLimit;
    gfc.ResvMax = 0;

    let fullFrameBits =
      mean_bits.bits * gfc.mode_gr + Math.min(gfc.ResvSize, gfc.ResvMax);

    if (fullFrameBits > maxmp3buf) fullFrameBits = maxmp3buf;

    console.assert(gfc.ResvMax % 8 === 0);
    console.assert(gfc.ResvMax >= 0);

    l3_side.resvDrain_pre = 0;

    return fullFrameBits;
  }

  /**
   * returns targ_bits: target number of bits to use for 1 granule<BR>
   * extra_bits: amount extra available from reservoir<BR>
   * Mark Taylor 4/99
   */
  ResvMaxBits(
    gfp: LameGlobalFlags,
    mean_bits: number,
    targ_bits: MeanBits,
    cbr: number
  ) {
    const gfc = gfp.internal_flags;
    let add_bits;
    let { ResvSize } = gfc;
    let { ResvMax } = gfc;

    /* compensate the saved bits used in the 1st granule */
    if (cbr !== 0) ResvSize += mean_bits;

    if ((gfc.substep_shaping & 1) !== 0) ResvMax *= 0.9;

    targ_bits.bits = mean_bits;

    /* extra bits if the reservoir is almost full */
    if (ResvSize * 10 > ResvMax * 9) {
      add_bits = ResvSize - (ResvMax * 9) / 10;
      targ_bits.bits += add_bits;
      gfc.substep_shaping |= 0x80;
    } else {
      add_bits = 0;
      gfc.substep_shaping &= 0x7f;
    }

    /* amount from the reservoir we are allowed to use. ISO says 6/10 */
    let extra_bits =
      ResvSize < (gfc.ResvMax * 6) / 10 ? ResvSize : (gfc.ResvMax * 6) / 10;
    extra_bits -= add_bits;

    if (extra_bits < 0) extra_bits = 0;
    return extra_bits;
  }

  /**
   * Called after a granule's bit allocation. Readjusts the size of the
   * reservoir to reflect the granule's usage.
   */
  ResvAdjust(gfc: LameInternalFlags, gi: GrInfo) {
    gfc.ResvSize -= gi.part2_3_length + gi.part2_length;
  }

  /**
   * Called after all granules in a frame have been allocated. Makes sure that
   * the reservoir size is within limits, possibly by adding stuffing bits.
   */
  ResvFrameEnd(gfc: LameInternalFlags, mean_bits: number) {
    let over_bits;
    const { l3_side } = gfc;

    gfc.ResvSize += mean_bits * gfc.mode_gr;
    let stuffingBits = 0;
    l3_side.resvDrain_post = 0;
    l3_side.resvDrain_pre = 0;

    /* we must be byte aligned */
    if ((over_bits = gfc.ResvSize % 8) !== 0) stuffingBits += over_bits;

    over_bits = gfc.ResvSize - stuffingBits - gfc.ResvMax;
    if (over_bits > 0) {
      console.assert(over_bits % 8 === 0);
      console.assert(over_bits >= 0);
      stuffingBits += over_bits;
    }

    /*
     * NOTE: enabling the NEW_DRAIN code fixes some problems with FhG
     * decoder shipped with MS Windows operating systems. Using this, it is
     * even possible to use Gabriel's lax buffer consideration again, which
     * assumes, any decoder should have a buffer large enough for a 320 kbps
     * frame at 32 kHz sample rate.
     *
     * old drain code: lame -b320 BlackBird.wav --. does not play with
     * GraphEdit.exe using FhG decoder V1.5 Build 50
     *
     * new drain code: lame -b320 BlackBird.wav --. plays fine with
     * GraphEdit.exe using FhG decoder V1.5 Build 50
     *
     * Robert Hegemann, 2010-02-13.
     */

    /*
     * drain as many bits as possible into previous frame ancillary data In
     * particular, in VBR mode ResvMax may have changed, and we have to make
     * sure main_data_begin does not create a reservoir bigger than ResvMax
     * mt 4/00
     */
    {
      const mdb_bytes = Math.min(l3_side.main_data_begin * 8, stuffingBits) / 8;
      l3_side.resvDrain_pre += 8 * mdb_bytes;
      stuffingBits -= 8 * mdb_bytes;
      gfc.ResvSize -= 8 * mdb_bytes;
      l3_side.main_data_begin -= mdb_bytes;
    }
    /* drain the rest into this frames ancillary data */
    l3_side.resvDrain_post += stuffingBits;
    gfc.ResvSize -= stuffingBits;
  }
}
