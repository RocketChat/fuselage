import type { BitStream } from './BitStream';
import type { Lame } from './Lame';
import type { LameGlobalFlags } from './LameGlobalFlags';
import { Tables } from './Tables';
import type { VBRSeekInfo } from './VBRSeekInfo';
import { VbrMode } from './VbrMode';
import { NUMTOCENTRIES } from './constants';

/**
 * A Vbr header may be present in the ancillary data field of the first frame of
 * an mp3 bitstream<BR>
 * The Vbr header (optionally) contains
 * <UL>
 * <LI>frames total number of audio frames in the bitstream
 * <LI>bytes total number of bytes in the bitstream
 * <LI>toc table of contents
 * </UL>
 *
 * toc (table of contents) gives seek points for random access.<BR>
 * The ith entry determines the seek point for i-percent duration.<BR>
 * seek point in bytes = (toc[i]/256.0) * total_bitstream_bytes<BR>
 * e.g. half duration seek point = (toc[50]/256.0) * total_bitstream_bytes
 */
export class VBRTag {
  static readonly NUMTOCENTRIES = 100;

  /**
   * (0xB40) the max freeformat 640 32kHz framesize.
   */
  static readonly MAXFRAMESIZE = 2880;

  private lame: Lame | null = null;

  private bs: BitStream | null = null;

  setModules(lame: Lame, bs: BitStream) {
    this.lame = lame;
    this.bs = bs;
  }

  /**
   * <PRE>
   *    4 bytes for Header Tag
   *    4 bytes for Header Flags
   *  100 bytes for entry (toc)
   *    4 bytes for frame size
   *    4 bytes for stream size
   *    4 bytes for VBR scale. a VBR quality indicator: 0=best 100=worst
   *   20 bytes for LAME tag.  for example, "LAME3.12 (beta 6)"
   * ___________
   *  140 bytes
   * </PRE>
   */
  private static readonly VBRHEADERSIZE = NUMTOCENTRIES + 4 + 4 + 4 + 4 + 4;

  private static readonly LAMEHEADERSIZE =
    VBRTag.VBRHEADERSIZE + 9 + 1 + 1 + 8 + 1 + 1 + 3 + 1 + 1 + 2 + 4 + 2 + 2;

  /**
   * The size of the Xing header MPEG-1, bit rate in kbps.
   */
  private static readonly XING_BITRATE1 = 128;

  /**
   * The size of the Xing header MPEG-2, bit rate in kbps.
   */
  private static readonly XING_BITRATE2 = 64;

  /**
   * The size of the Xing header MPEG-2.5, bit rate in kbps.
   */
  private static readonly XING_BITRATE25 = 32;

  /**
   * Lookup table for fast CRC-16 computation. Uses the polynomial
   * x^16+x^15+x^2+1
   */
  private static readonly crc16Lookup = [
    0x0000, 0xc0c1, 0xc181, 0x0140, 0xc301, 0x03c0, 0x0280, 0xc241, 0xc601,
    0x06c0, 0x0780, 0xc741, 0x0500, 0xc5c1, 0xc481, 0x0440, 0xcc01, 0x0cc0,
    0x0d80, 0xcd41, 0x0f00, 0xcfc1, 0xce81, 0x0e40, 0x0a00, 0xcac1, 0xcb81,
    0x0b40, 0xc901, 0x09c0, 0x0880, 0xc841, 0xd801, 0x18c0, 0x1980, 0xd941,
    0x1b00, 0xdbc1, 0xda81, 0x1a40, 0x1e00, 0xdec1, 0xdf81, 0x1f40, 0xdd01,
    0x1dc0, 0x1c80, 0xdc41, 0x1400, 0xd4c1, 0xd581, 0x1540, 0xd701, 0x17c0,
    0x1680, 0xd641, 0xd201, 0x12c0, 0x1380, 0xd341, 0x1100, 0xd1c1, 0xd081,
    0x1040, 0xf001, 0x30c0, 0x3180, 0xf141, 0x3300, 0xf3c1, 0xf281, 0x3240,
    0x3600, 0xf6c1, 0xf781, 0x3740, 0xf501, 0x35c0, 0x3480, 0xf441, 0x3c00,
    0xfcc1, 0xfd81, 0x3d40, 0xff01, 0x3fc0, 0x3e80, 0xfe41, 0xfa01, 0x3ac0,
    0x3b80, 0xfb41, 0x3900, 0xf9c1, 0xf881, 0x3840, 0x2800, 0xe8c1, 0xe981,
    0x2940, 0xeb01, 0x2bc0, 0x2a80, 0xea41, 0xee01, 0x2ec0, 0x2f80, 0xef41,
    0x2d00, 0xedc1, 0xec81, 0x2c40, 0xe401, 0x24c0, 0x2580, 0xe541, 0x2700,
    0xe7c1, 0xe681, 0x2640, 0x2200, 0xe2c1, 0xe381, 0x2340, 0xe101, 0x21c0,
    0x2080, 0xe041, 0xa001, 0x60c0, 0x6180, 0xa141, 0x6300, 0xa3c1, 0xa281,
    0x6240, 0x6600, 0xa6c1, 0xa781, 0x6740, 0xa501, 0x65c0, 0x6480, 0xa441,
    0x6c00, 0xacc1, 0xad81, 0x6d40, 0xaf01, 0x6fc0, 0x6e80, 0xae41, 0xaa01,
    0x6ac0, 0x6b80, 0xab41, 0x6900, 0xa9c1, 0xa881, 0x6840, 0x7800, 0xb8c1,
    0xb981, 0x7940, 0xbb01, 0x7bc0, 0x7a80, 0xba41, 0xbe01, 0x7ec0, 0x7f80,
    0xbf41, 0x7d00, 0xbdc1, 0xbc81, 0x7c40, 0xb401, 0x74c0, 0x7580, 0xb541,
    0x7700, 0xb7c1, 0xb681, 0x7640, 0x7200, 0xb2c1, 0xb381, 0x7340, 0xb101,
    0x71c0, 0x7080, 0xb041, 0x5000, 0x90c1, 0x9181, 0x5140, 0x9301, 0x53c0,
    0x5280, 0x9241, 0x9601, 0x56c0, 0x5780, 0x9741, 0x5500, 0x95c1, 0x9481,
    0x5440, 0x9c01, 0x5cc0, 0x5d80, 0x9d41, 0x5f00, 0x9fc1, 0x9e81, 0x5e40,
    0x5a00, 0x9ac1, 0x9b81, 0x5b40, 0x9901, 0x59c0, 0x5880, 0x9841, 0x8801,
    0x48c0, 0x4980, 0x8941, 0x4b00, 0x8bc1, 0x8a81, 0x4a40, 0x4e00, 0x8ec1,
    0x8f81, 0x4f40, 0x8d01, 0x4dc0, 0x4c80, 0x8c41, 0x4400, 0x84c1, 0x8581,
    0x4540, 0x8701, 0x47c0, 0x4680, 0x8641, 0x8201, 0x42c0, 0x4380, 0x8341,
    0x4100, 0x81c1, 0x8081, 0x4040,
  ] as const;

  private addVbr(v: VBRSeekInfo, bitrate: number) {
    v.nVbrNumFrames++;
    v.sum += bitrate;
    v.seen++;

    if (v.seen < v.want) {
      return;
    }

    if (v.pos < v.size) {
      v.bag[v.pos] = v.sum;
      v.pos++;
      v.seen = 0;
    }
    if (v.pos === v.size) {
      for (let i = 1; i < v.size; i += 2) {
        v.bag[i / 2] = v.bag[i];
      }
      v.want *= 2;
      v.pos /= 2;
    }
  }

  /**
   * Add VBR entry, used to fill the VBR TOC entries.
   *
   * @param gfp
   *            global flags
   */
  addVbrFrame(gfp: LameGlobalFlags) {
    const gfc = gfp.internal_flags!;
    const kbps = Tables.bitrate_table[gfp.version][gfc.bitrate_index];
    this.addVbr(gfc.VBR_seek_table, kbps);
  }

  private shiftInBitsValue(x: number, n: number, v: number) {
    return 0xff & ((x << n) | (v & ~(-1 << n)));
  }

  /**
   * Construct the MP3 header using the settings of the global flags.
   *
   * <img src="1000px-Mp3filestructure.svg.png">
   *
   * @param gfp
   *            global flags
   * @param buffer
   *            header
   */
  private setLameTagFrameHeader(gfp: LameGlobalFlags, buffer: Uint8Array) {
    const gfc = gfp.internal_flags!;

    // MP3 Sync Word
    buffer[0] = this.shiftInBitsValue(buffer[0], 8, 0xff);

    buffer[1] = this.shiftInBitsValue(buffer[1], 3, 7);
    buffer[1] = this.shiftInBitsValue(
      buffer[1],
      1,
      gfp.out_samplerate < 16000 ? 0 : 1
    );
    // Version
    buffer[1] = this.shiftInBitsValue(buffer[1], 1, gfp.version);
    // 01 == Layer 3
    buffer[1] = this.shiftInBitsValue(buffer[1], 2, 4 - 3);
    // Error protection
    buffer[1] = this.shiftInBitsValue(
      buffer[1],
      1,
      !gfp.error_protection ? 1 : 0
    );

    // Bit rate
    buffer[2] = this.shiftInBitsValue(buffer[2], 4, gfc.bitrate_index);
    // Frequency
    buffer[2] = this.shiftInBitsValue(buffer[2], 2, gfc.samplerate_index);
    // Pad. Bit
    buffer[2] = this.shiftInBitsValue(buffer[2], 1, 0);
    // Priv. Bit
    buffer[2] = this.shiftInBitsValue(buffer[2], 1, gfp.extension);

    // Mode
    buffer[3] = this.shiftInBitsValue(buffer[3], 2, gfp.mode.ordinal);
    // Mode extension (Used with Joint Stereo)
    buffer[3] = this.shiftInBitsValue(buffer[3], 2, gfc.mode_ext);
    // Copy
    buffer[3] = this.shiftInBitsValue(buffer[3], 1, gfp.copyright);
    // Original
    buffer[3] = this.shiftInBitsValue(buffer[3], 1, gfp.original);
    // Emphasis
    buffer[3] = this.shiftInBitsValue(buffer[3], 2, gfp.emphasis);

    /* the default VBR header. 48 kbps layer III, no padding, no crc */
    /* but sampling freq, mode and copyright/copy protection taken */
    /* from first valid frame */
    buffer[0] = 0xff;
    let abyte = 0xff & (buffer[1] & 0xf1);
    let bitrate;
    if (gfp.version === 1) {
      bitrate = VBRTag.XING_BITRATE1;
    } else if (gfp.out_samplerate < 16000) bitrate = VBRTag.XING_BITRATE25;
    else bitrate = VBRTag.XING_BITRATE2;

    if (gfp.VBR === VbrMode.vbr_off) bitrate = gfp.brate;

    let bbyte;
    if (gfp.free_format) bbyte = 0x00;
    else
      bbyte =
        0xff &
        (16 *
          this.lame!.bitrateIndex(bitrate, gfp.version, gfp.out_samplerate));

    /*
     * Use as much of the info from the real frames in the Xing header:
     * samplerate, channels, crc, etc...
     */
    if (gfp.version === 1) {
      /* MPEG1 */
      buffer[1] = 0xff & (abyte | 0x0a);
      /* was 0x0b; */
      abyte = 0xff & (buffer[2] & 0x0d);
      /* AF keep also private bit */
      buffer[2] = 0xff & (bbyte | abyte);
      /* 64kbs MPEG1 frame */
    } else {
      /* MPEG2 */
      buffer[1] = 0xff & (abyte | 0x02);
      /* was 0x03; */
      abyte = 0xff & (buffer[2] & 0x0d);
      /* AF keep also private bit */
      buffer[2] = 0xff & (bbyte | abyte);
      /* 64kbs MPEG2 frame */
    }
  }

  /**
   * Initializes the header
   *
   * @param gfp
   *            global flags
   */
  init(gfp: LameGlobalFlags) {
    const gfc = gfp.internal_flags!;

    /**
     * <PRE>
     * Xing VBR pretends to be a 48kbs layer III frame.  (at 44.1kHz).
     * (at 48kHz they use 56kbs since 48kbs frame not big enough for
     * table of contents)
     * let's always embed Xing header inside a 64kbs layer III frame.
     * this gives us enough room for a LAME version string too.
     * size determined by sampling frequency (MPEG1)
     * 32kHz:    216 bytes@48kbs    288bytes@ 64kbs
     * 44.1kHz:  156 bytes          208bytes@64kbs     (+1 if padding = 1)
     * 48kHz:    144 bytes          192
     *
     * MPEG 2 values are the same since the framesize and samplerate
     * are each reduced by a factor of 2.
     * </PRE>
     */
    let kbps_header;
    if (gfp.version === 1) {
      kbps_header = VBRTag.XING_BITRATE1;
    } else if (gfp.out_samplerate < 16000) kbps_header = VBRTag.XING_BITRATE25;
    else kbps_header = VBRTag.XING_BITRATE2;

    if (gfp.VBR === VbrMode.vbr_off) kbps_header = gfp.brate;

    // make sure LAME Header fits into Frame
    const totalFrameSize =
      ((gfp.version + 1) * 72000 * kbps_header) / gfp.out_samplerate;
    const headerSize = gfc.sideinfo_len + VBRTag.LAMEHEADERSIZE;
    gfc.VBR_seek_table.totalFrameSize = totalFrameSize;
    if (totalFrameSize < headerSize || totalFrameSize > VBRTag.MAXFRAMESIZE) {
      /* disable tag, it wont fit */
      gfp.bWriteVbrTag = false;
      return;
    }

    gfc.VBR_seek_table.nVbrNumFrames = 0;
    gfc.VBR_seek_table.nBytesWritten = 0;
    gfc.VBR_seek_table.sum = 0;

    gfc.VBR_seek_table.seen = 0;
    gfc.VBR_seek_table.want = 1;
    gfc.VBR_seek_table.pos = 0;

    // write dummy VBR tag of all 0's into bitstream
    const buffer = new Uint8Array(VBRTag.MAXFRAMESIZE);

    this.setLameTagFrameHeader(gfp, buffer);
    const n = gfc.VBR_seek_table.totalFrameSize;
    for (let i = 0; i < n; ++i) {
      this.bs!.add_dummy_byte(gfp, buffer[i] & 0xff, 1);
    }
  }

  /**
   * Fast CRC-16 computation (uses table crc16Lookup).
   *
   * @param value
   * @param crc
   * @return
   */
  private crcUpdateLookup(value: number, crc: number) {
    const tmp = crc ^ value;
    crc = (crc >> 8) ^ VBRTag.crc16Lookup[tmp & 0xff];
    return crc;
  }

  updateMusicCRC(
    crc: Int32Array,
    buffer: Uint8Array,
    bufferPos: number,
    size: number
  ) {
    for (let i = 0; i < size; ++i)
      crc[0] = this.crcUpdateLookup(buffer[bufferPos + i], crc[0]);
  }
}
