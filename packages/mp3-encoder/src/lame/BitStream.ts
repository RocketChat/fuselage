import { copyArray, fillArray } from './Arrays';
import { GainAnalysis } from './GainAnalysis';
import type { GrInfo } from './GrInfo';
import type { LameGlobalFlags } from './LameGlobalFlags';
import { LameInternalFlags } from './LameInternalFlags';
import type { MPGLib } from './MPGLib';
import { Tables } from './Tables';
import { Takehiro } from './Takehiro';
import { TotalBytes } from './TotalBytes';
import type { VBRTag } from './VBRTag';
import {
  CRC16_POLYNOMIAL,
  LAME_MAXMP3BUFFER,
  NORM_TYPE,
  SHORT_TYPE,
} from './constants';
import { getLameShortVersion } from './getLameShortVersion';
import { isCloseToEachOther } from './isCloseToEachOther';

export class BitStream {
  /*
   * we work with ints, so when doing bit manipulation, we limit ourselves to
   * MAX_LENGTH-2 just to be on the safe side
   */
  private static readonly MAX_LENGTH = 32;

  private ga: GainAnalysis | null = null;

  private mpg: MPGLib | null = null;

  private vbr: VBRTag | null = null;

  setModules(ga: GainAnalysis, mpg: MPGLib, vbr: VBRTag) {
    this.ga = ga;
    this.mpg = mpg;
    this.vbr = vbr;
  }

  /**
   * Bit stream buffer.
   */
  private buf: Uint8Array | null = null;

  /**
   * Bit counter of bit stream.
   */
  private totbit = 0;

  /**
   * Pointer to top byte in buffer.
   */
  private bufByteIdx = 0;

  /**
   * Pointer to top bit of top byte in buffer.
   */
  private bufBitIdx = 0;

  /**
   * compute bitsperframe and mean_bits for a layer III frame
   */
  getframebits(gfp: LameGlobalFlags) {
    const gfc = gfp.internal_flags!;
    let bit_rate;

    /* get bitrate in kbps [?] */
    if (gfc.bitrate_index !== 0)
      bit_rate = Tables.bitrate_table[gfp.version][gfc.bitrate_index];
    else bit_rate = gfp.brate;
    console.assert(bit_rate >= 8 && bit_rate <= 640);

    /* main encoding routine toggles padding on and off */
    /* one Layer3 Slot consists of 8 bits */
    const bytes = Math.trunc(
      ((gfp.version + 1) * 72000 * bit_rate) / gfp.out_samplerate + gfc.padding
    );
    return 8 * bytes;
  }

  private putheader_bits(gfc: LameInternalFlags) {
    copyArray(
      gfc.header[gfc.w_ptr].buf,
      0,
      this.buf!,
      this.bufByteIdx,
      gfc.sideinfo_len
    );
    this.bufByteIdx += gfc.sideinfo_len;
    this.totbit += gfc.sideinfo_len * 8;
    gfc.w_ptr = (gfc.w_ptr + 1) & (LameInternalFlags.MAX_HEADER_BUF - 1);
  }

  /**
   * write j bits into the bit stream
   */
  private putbits2(gfc: LameInternalFlags, val: number, j: number) {
    console.assert(j < BitStream.MAX_LENGTH - 2);

    while (j > 0) {
      if (this.bufBitIdx === 0) {
        this.bufBitIdx = 8;
        this.bufByteIdx++;
        console.assert(this.bufByteIdx < LAME_MAXMP3BUFFER);
        console.assert(gfc.header[gfc.w_ptr].write_timing >= this.totbit);
        if (gfc.header[gfc.w_ptr].write_timing === this.totbit) {
          this.putheader_bits(gfc);
        }
        this.buf![this.bufByteIdx] = 0;
      }

      const k = Math.min(j, this.bufBitIdx);
      j -= k;

      this.bufBitIdx -= k;

      console.assert(j < BitStream.MAX_LENGTH);
      /* 32 too large on 32 bit machines */
      console.assert(this.bufBitIdx < BitStream.MAX_LENGTH);

      this.buf![this.bufByteIdx] |= (val >> j) << this.bufBitIdx;
      this.totbit += k;
    }
  }

  /**
   * write j bits into the bit stream, ignoring frame headers
   */
  private putbits_noheaders(_gfc: LameInternalFlags, val: number, j: number) {
    console.assert(j < BitStream.MAX_LENGTH - 2);

    while (j > 0) {
      if (this.bufBitIdx === 0) {
        this.bufBitIdx = 8;
        this.bufByteIdx++;
        console.assert(this.bufByteIdx < LAME_MAXMP3BUFFER);
        this.buf![this.bufByteIdx] = 0;
      }

      const k = Math.min(j, this.bufBitIdx);
      j -= k;

      this.bufBitIdx -= k;

      console.assert(j < BitStream.MAX_LENGTH);
      /* 32 too large on 32 bit machines */
      console.assert(this.bufBitIdx < BitStream.MAX_LENGTH);

      this.buf![this.bufByteIdx] |= (val >> j) << this.bufBitIdx;
      this.totbit += k;
    }
  }

  /**
   * Some combinations of bitrate, Fs, and stereo make it impossible to stuff
   * out a frame using just main_data, due to the limited number of bits to
   * indicate main_data_length. In these situations, we put stuffing bits into
   * the ancillary data...
   */
  private drain_into_ancillary(gfp: LameGlobalFlags, remainingBits: number) {
    const gfc = gfp.internal_flags!;
    let i;
    console.assert(remainingBits >= 0);

    if (remainingBits >= 8) {
      this.putbits2(gfc, 0x4c, 8);
      remainingBits -= 8;
    }
    if (remainingBits >= 8) {
      this.putbits2(gfc, 0x41, 8);
      remainingBits -= 8;
    }
    if (remainingBits >= 8) {
      this.putbits2(gfc, 0x4d, 8);
      remainingBits -= 8;
    }
    if (remainingBits >= 8) {
      this.putbits2(gfc, 0x45, 8);
      remainingBits -= 8;
    }

    if (remainingBits >= 32) {
      const version = getLameShortVersion();
      if (remainingBits >= 32)
        for (i = 0; i < version.length && remainingBits >= 8; ++i) {
          remainingBits -= 8;
          this.putbits2(gfc, version.charCodeAt(i), 8);
        }
    }

    for (; remainingBits >= 1; remainingBits -= 1) {
      this.putbits2(gfc, gfc.ancillary_flag, 1);
      gfc.ancillary_flag ^= !gfp.disable_reservoir ? 1 : 0;
    }

    console.assert(remainingBits === 0);
  }

  /**
   * write N bits into the header
   */
  private writeheader(gfc: LameInternalFlags, val: number, j: number) {
    let { ptr } = gfc.header[gfc.h_ptr];

    while (j > 0) {
      const k = Math.min(j, 8 - (ptr & 7));
      j -= k;
      console.assert(j < BitStream.MAX_LENGTH);
      /* >> 32 too large for 32 bit machines */

      gfc.header[gfc.h_ptr].buf[ptr >> 3] |= (val >> j) << (8 - (ptr & 7) - k);
      ptr += k;
    }
    gfc.header[gfc.h_ptr].ptr = ptr;
  }

  private CRC_update(value: number, crc: number) {
    value <<= 8;
    for (let i = 0; i < 8; i++) {
      value <<= 1;
      crc <<= 1;

      if (((crc ^ value) & 0x10000) !== 0) crc ^= CRC16_POLYNOMIAL;
    }
    return crc;
  }

  CRC_writeheader(gfc: LameInternalFlags, header: Uint8Array) {
    let crc = 0xffff;
    /* (jo) init crc16 for error_protection */

    crc = this.CRC_update(header[2] & 0xff, crc);
    crc = this.CRC_update(header[3] & 0xff, crc);
    for (let i = 6; i < gfc.sideinfo_len; i++) {
      crc = this.CRC_update(header[i] & 0xff, crc);
    }

    header[4] = Math.trunc(crc >> 8);
    header[5] = Math.trunc(crc & 255);
  }

  private encodeSideInfo2(gfp: LameGlobalFlags, bitsPerFrame: number) {
    const gfc = gfp.internal_flags!;
    let gr;
    let ch;

    const { l3_side } = gfc;
    gfc.header[gfc.h_ptr].ptr = 0;
    fillArray(gfc.header[gfc.h_ptr].buf, 0, gfc.sideinfo_len, 0);
    if (gfp.out_samplerate < 16000) this.writeheader(gfc, 0xffe, 12);
    else this.writeheader(gfc, 0xfff, 12);
    this.writeheader(gfc, gfp.version, 1);
    this.writeheader(gfc, 4 - 3, 2);
    this.writeheader(gfc, !gfp.error_protection ? 1 : 0, 1);
    this.writeheader(gfc, gfc.bitrate_index, 4);
    this.writeheader(gfc, gfc.samplerate_index, 2);
    this.writeheader(gfc, gfc.padding, 1);
    this.writeheader(gfc, gfp.extension, 1);
    this.writeheader(gfc, gfp.mode.ordinal, 2);
    this.writeheader(gfc, gfc.mode_ext, 2);
    this.writeheader(gfc, gfp.copyright, 1);
    this.writeheader(gfc, gfp.original, 1);
    this.writeheader(gfc, gfp.emphasis, 2);
    if (gfp.error_protection) {
      this.writeheader(gfc, 0, 16);
      /* dummy */
    }

    if (gfp.version === 1) {
      /* MPEG1 */
      console.assert(l3_side.main_data_begin >= 0);
      this.writeheader(gfc, l3_side.main_data_begin, 9);

      if (gfc.channels_out === 2)
        this.writeheader(gfc, l3_side.private_bits, 3);
      else this.writeheader(gfc, l3_side.private_bits, 5);

      for (ch = 0; ch < gfc.channels_out; ch++) {
        for (let band = 0; band < 4; band++) {
          this.writeheader(gfc, l3_side.scfsi[ch][band], 1);
        }
      }

      for (gr = 0; gr < 2; gr++) {
        for (ch = 0; ch < gfc.channels_out; ch++) {
          const gi = l3_side.tt[gr][ch];
          this.writeheader(gfc, gi.part2_3_length + gi.part2_length, 12);
          this.writeheader(gfc, gi.big_values / 2, 9);
          this.writeheader(gfc, gi.global_gain, 8);
          this.writeheader(gfc, gi.scalefac_compress, 4);

          if (gi.block_type !== NORM_TYPE) {
            this.writeheader(gfc, 1, 1);
            /* window_switching_flag */
            this.writeheader(gfc, gi.block_type, 2);
            this.writeheader(gfc, gi.mixed_block_flag, 1);

            if (gi.table_select[0] === 14) gi.table_select[0] = 16;
            this.writeheader(gfc, gi.table_select[0], 5);
            if (gi.table_select[1] === 14) gi.table_select[1] = 16;
            this.writeheader(gfc, gi.table_select[1], 5);

            this.writeheader(gfc, gi.subblock_gain[0], 3);
            this.writeheader(gfc, gi.subblock_gain[1], 3);
            this.writeheader(gfc, gi.subblock_gain[2], 3);
          } else {
            this.writeheader(gfc, 0, 1);
            /* window_switching_flag */
            if (gi.table_select[0] === 14) gi.table_select[0] = 16;
            this.writeheader(gfc, gi.table_select[0], 5);
            if (gi.table_select[1] === 14) gi.table_select[1] = 16;
            this.writeheader(gfc, gi.table_select[1], 5);
            if (gi.table_select[2] === 14) gi.table_select[2] = 16;
            this.writeheader(gfc, gi.table_select[2], 5);

            console.assert(gi.region0_count >= 0 && gi.region0_count < 16);
            console.assert(gi.region1_count >= 0 && gi.region1_count < 8);
            this.writeheader(gfc, gi.region0_count, 4);
            this.writeheader(gfc, gi.region1_count, 3);
          }
          this.writeheader(gfc, gi.preflag, 1);
          this.writeheader(gfc, gi.scalefac_scale, 1);
          this.writeheader(gfc, gi.count1table_select, 1);
        }
      }
    } else {
      /* MPEG2 */
      console.assert(l3_side.main_data_begin >= 0);
      this.writeheader(gfc, l3_side.main_data_begin, 8);
      this.writeheader(gfc, l3_side.private_bits, gfc.channels_out);

      gr = 0;
      for (ch = 0; ch < gfc.channels_out; ch++) {
        const gi = l3_side.tt[gr][ch];
        this.writeheader(gfc, gi.part2_3_length + gi.part2_length, 12);
        this.writeheader(gfc, gi.big_values / 2, 9);
        this.writeheader(gfc, gi.global_gain, 8);
        this.writeheader(gfc, gi.scalefac_compress, 9);

        if (gi.block_type !== NORM_TYPE) {
          this.writeheader(gfc, 1, 1);
          /* window_switching_flag */
          this.writeheader(gfc, gi.block_type, 2);
          this.writeheader(gfc, gi.mixed_block_flag, 1);

          if (gi.table_select[0] === 14) gi.table_select[0] = 16;
          this.writeheader(gfc, gi.table_select[0], 5);
          if (gi.table_select[1] === 14) gi.table_select[1] = 16;
          this.writeheader(gfc, gi.table_select[1], 5);

          this.writeheader(gfc, gi.subblock_gain[0], 3);
          this.writeheader(gfc, gi.subblock_gain[1], 3);
          this.writeheader(gfc, gi.subblock_gain[2], 3);
        } else {
          this.writeheader(gfc, 0, 1);
          /* window_switching_flag */
          if (gi.table_select[0] === 14) gi.table_select[0] = 16;
          this.writeheader(gfc, gi.table_select[0], 5);
          if (gi.table_select[1] === 14) gi.table_select[1] = 16;
          this.writeheader(gfc, gi.table_select[1], 5);
          if (gi.table_select[2] === 14) gi.table_select[2] = 16;
          this.writeheader(gfc, gi.table_select[2], 5);

          console.assert(gi.region0_count >= 0 && gi.region0_count < 16);
          console.assert(gi.region1_count >= 0 && gi.region1_count < 8);
          this.writeheader(gfc, gi.region0_count, 4);
          this.writeheader(gfc, gi.region1_count, 3);
        }

        this.writeheader(gfc, gi.scalefac_scale, 1);
        this.writeheader(gfc, gi.count1table_select, 1);
      }
    }

    if (gfp.error_protection) {
      /* (jo) error_protection: add crc16 information to header */
      this.CRC_writeheader(gfc, gfc.header[gfc.h_ptr].buf);
    }

    {
      const old = gfc.h_ptr;
      console.assert(gfc.header[old].ptr === gfc.sideinfo_len * 8);

      gfc.h_ptr = (old + 1) & (LameInternalFlags.MAX_HEADER_BUF - 1);
      gfc.header[gfc.h_ptr].write_timing =
        gfc.header[old].write_timing + bitsPerFrame;

      if (gfc.h_ptr === gfc.w_ptr) {
        /* yikes! we are out of header buffer space */
        console.warn('MAX_HEADER_BUF too small in bitstream.');
      }
    }
  }

  private huffman_coder_count1(gfc: LameInternalFlags, gi: GrInfo) {
    /* Write count1 area */
    const h = Tables.ht[gi.count1table_select + 32];
    let i;
    let bits = 0;

    let ix = gi.big_values;
    let xr = gi.big_values;
    console.assert(gi.count1table_select < 2);

    for (i = (gi.count1 - gi.big_values) / 4; i > 0; --i) {
      let huffbits = 0;
      let p = 0;
      let v;

      v = gi.l3_enc[ix + 0];
      if (v !== 0) {
        p += 8;
        if (gi.xr[xr + 0] < 0) huffbits++;
        console.assert(v <= 1);
      }

      v = gi.l3_enc[ix + 1];
      if (v !== 0) {
        p += 4;
        huffbits *= 2;
        if (gi.xr[xr + 1] < 0) huffbits++;
        console.assert(v <= 1);
      }

      v = gi.l3_enc[ix + 2];
      if (v !== 0) {
        p += 2;
        huffbits *= 2;
        if (gi.xr[xr + 2] < 0) huffbits++;
        console.assert(v <= 1);
      }

      v = gi.l3_enc[ix + 3];
      if (v !== 0) {
        p++;
        huffbits *= 2;
        if (gi.xr[xr + 3] < 0) huffbits++;
        console.assert(v <= 1);
      }

      ix += 4;
      xr += 4;
      this.putbits2(gfc, huffbits + h.table![p], h.hlen![p]);
      bits += h.hlen![p];
    }
    return bits;
  }

  /**
   * Implements the pseudocode of page 98 of the IS
   */
  private Huffmancode(
    gfc: LameInternalFlags,
    tableindex: number,
    start: number,
    end: number,
    gi: GrInfo
  ) {
    const h = Tables.ht[tableindex];
    let bits = 0;

    console.assert(tableindex < 32);
    if (tableindex === 0) return bits;

    for (let i = start; i < end; i += 2) {
      let cbits = 0;
      let xbits = 0;
      const linbits = h.xlen;
      let { xlen } = h;
      let ext = 0;
      let x1 = gi.l3_enc[i];
      let x2 = gi.l3_enc[i + 1];

      if (x1 !== 0) {
        if (gi.xr[i] < 0) ext++;
        cbits--;
      }

      if (tableindex > 15) {
        /* use ESC-words */
        if (x1 > 14) {
          const linbits_x1 = x1 - 15;
          console.assert(linbits_x1 <= h.linmax);
          ext |= linbits_x1 << 1;
          xbits = linbits;
          x1 = 15;
        }

        if (x2 > 14) {
          const linbits_x2 = x2 - 15;
          console.assert(linbits_x2 <= h.linmax);
          ext <<= linbits;
          ext |= linbits_x2;
          xbits += linbits;
          x2 = 15;
        }
        xlen = 16;
      }

      if (x2 !== 0) {
        ext <<= 1;
        if (gi.xr[i + 1] < 0) ext++;
        cbits--;
      }

      console.assert((x1 | x2) < 16);

      x1 = x1 * xlen + x2;
      xbits -= cbits;
      cbits += h.hlen![x1];

      console.assert(cbits <= BitStream.MAX_LENGTH);
      console.assert(xbits <= BitStream.MAX_LENGTH);

      this.putbits2(gfc, h.table![x1], cbits);
      this.putbits2(gfc, ext, xbits);
      bits += cbits + xbits;
    }
    return bits;
  }

  /**
   * Note the discussion of huffmancodebits() on pages 28 and 29 of the IS, as
   * well as the definitions of the side information on pages 26 and 27.
   */
  private ShortHuffmancodebits(gfc: LameInternalFlags, gi: GrInfo) {
    let region1Start = 3 * gfc.scalefac_band.s[3];
    if (region1Start > gi.big_values) region1Start = gi.big_values;

    /* short blocks do not have a region2 */
    let bits = this.Huffmancode(gfc, gi.table_select[0], 0, region1Start, gi);
    bits += this.Huffmancode(
      gfc,
      gi.table_select[1],
      region1Start,
      gi.big_values,
      gi
    );
    return bits;
  }

  private LongHuffmancodebits(gfc: LameInternalFlags, gi: GrInfo) {
    let bits;
    let region1Start;
    let region2Start;

    const bigvalues = gi.big_values;
    console.assert(bigvalues >= 0 && bigvalues <= 576);

    let i = gi.region0_count + 1;
    console.assert(i >= 0);
    console.assert(i < gfc.scalefac_band.l.length);
    region1Start = gfc.scalefac_band.l[i];
    i += gi.region1_count + 1;
    console.assert(i >= 0);
    console.assert(i < gfc.scalefac_band.l.length);
    region2Start = gfc.scalefac_band.l[i];

    if (region1Start > bigvalues) region1Start = bigvalues;

    if (region2Start > bigvalues) region2Start = bigvalues;

    bits = this.Huffmancode(gfc, gi.table_select[0], 0, region1Start, gi);
    bits += this.Huffmancode(
      gfc,
      gi.table_select[1],
      region1Start,
      region2Start,
      gi
    );
    bits += this.Huffmancode(
      gfc,
      gi.table_select[2],
      region2Start,
      bigvalues,
      gi
    );
    return bits;
  }

  private writeMainData(gfp: LameGlobalFlags) {
    let gr;
    let ch;
    let sfb;
    let data_bits;
    let tot_bits = 0;
    const gfc = gfp.internal_flags!;
    const { l3_side } = gfc;

    if (gfp.version === 1) {
      /* MPEG 1 */
      for (gr = 0; gr < 2; gr++) {
        for (ch = 0; ch < gfc.channels_out; ch++) {
          const gi = l3_side.tt[gr][ch];
          const slen1 = Takehiro.slen1_tab[gi.scalefac_compress];
          const slen2 = Takehiro.slen2_tab[gi.scalefac_compress];
          data_bits = 0;
          for (sfb = 0; sfb < gi.sfbdivide; sfb++) {
            if (gi.scalefac[sfb] === -1) continue;
            /* scfsi is used */
            this.putbits2(gfc, gi.scalefac[sfb], slen1);
            data_bits += slen1;
          }
          for (; sfb < gi.sfbmax; sfb++) {
            if (gi.scalefac[sfb] === -1) continue;
            /* scfsi is used */
            this.putbits2(gfc, gi.scalefac[sfb], slen2);
            data_bits += slen2;
          }
          console.assert(data_bits === gi.part2_length);

          if (gi.block_type === SHORT_TYPE) {
            data_bits += this.ShortHuffmancodebits(gfc, gi);
          } else {
            data_bits += this.LongHuffmancodebits(gfc, gi);
          }
          data_bits += this.huffman_coder_count1(gfc, gi);
          /* does bitcount in quantize.c agree with actual bit count? */
          console.assert(data_bits === gi.part2_3_length + gi.part2_length);
          tot_bits += data_bits;
        }
        /* for ch */
      }
      /* for gr */
    } else {
      /* MPEG 2 */
      gr = 0;
      for (ch = 0; ch < gfc.channels_out; ch++) {
        const gi = l3_side.tt[gr][ch];
        let i;
        let sfb_partition;
        let scale_bits = 0;
        console.assert(gi.sfb_partition_table !== null);
        data_bits = 0;
        sfb = 0;
        sfb_partition = 0;

        if (gi.block_type === SHORT_TYPE) {
          for (; sfb_partition < 4; sfb_partition++) {
            const sfbs = gi.sfb_partition_table![sfb_partition] / 3;
            const slen = gi.slen[sfb_partition];
            for (i = 0; i < sfbs; i++, sfb++) {
              this.putbits2(gfc, Math.max(gi.scalefac[sfb * 3 + 0], 0), slen);
              this.putbits2(gfc, Math.max(gi.scalefac[sfb * 3 + 1], 0), slen);
              this.putbits2(gfc, Math.max(gi.scalefac[sfb * 3 + 2], 0), slen);
              scale_bits += 3 * slen;
            }
          }
          data_bits += this.ShortHuffmancodebits(gfc, gi);
        } else {
          for (; sfb_partition < 4; sfb_partition++) {
            const sfbs = gi.sfb_partition_table![sfb_partition];
            const slen = gi.slen[sfb_partition];
            for (i = 0; i < sfbs; i++, sfb++) {
              this.putbits2(gfc, Math.max(gi.scalefac[sfb], 0), slen);
              scale_bits += slen;
            }
          }
          data_bits += this.LongHuffmancodebits(gfc, gi);
        }
        data_bits += this.huffman_coder_count1(gfc, gi);
        /* does bitcount in quantize.c agree with actual bit count? */
        console.assert(data_bits === gi.part2_3_length);
        console.assert(scale_bits === gi.part2_length);
        tot_bits += scale_bits + data_bits;
      }
      /* for ch */
    }
    /* for gf */
    return tot_bits;
  }

  /*
   * compute the number of bits required to flush all mp3 frames currently in
   * the buffer. This should be the same as the reservoir size. Only call this
   * routine between frames - i.e. only after all headers and data have been
   * added to the buffer by format_bitstream().
   *
   * Also compute total_bits_output = size of mp3 buffer (including frame
   * headers which may not have yet been send to the mp3 buffer) + number of
   * bits needed to flush all mp3 frames.
   *
   * total_bytes_output is the size of the mp3 output buffer if
   * lame_encode_flush_nogap() was called right now.
   */
  private compute_flushbits(
    gfp: LameGlobalFlags,
    total_bytes_output: TotalBytes
  ) {
    const gfc = gfp.internal_flags!;
    let flushbits;
    let remaining_headers;
    let last_ptr;
    const first_ptr = gfc.w_ptr;
    /* first header to add to bitstream */
    last_ptr = gfc.h_ptr - 1;
    /* last header to add to bitstream */
    if (last_ptr === -1) last_ptr = LameInternalFlags.MAX_HEADER_BUF - 1;

    /* add this many bits to bitstream so we can flush all headers */
    flushbits = gfc.header[last_ptr].write_timing - this.totbit;
    total_bytes_output.total = flushbits;

    if (flushbits >= 0) {
      /* if flushbits >= 0, some headers have not yet been written */
      /* reduce flushbits by the size of the headers */
      remaining_headers = 1 + last_ptr - first_ptr;
      if (last_ptr < first_ptr)
        remaining_headers =
          1 + last_ptr - first_ptr + LameInternalFlags.MAX_HEADER_BUF;
      flushbits -= remaining_headers * 8 * gfc.sideinfo_len;
    }

    /*
     * finally, add some bits so that the last frame is complete these bits
     * are not necessary to decode the last frame, but some decoders will
     * ignore last frame if these bits are missing
     */
    const bitsPerFrame = this.getframebits(gfp);
    flushbits += bitsPerFrame;
    total_bytes_output.total += bitsPerFrame;
    /* round up: */
    if (total_bytes_output.total % 8 !== 0)
      total_bytes_output.total = 1 + total_bytes_output.total / 8;
    else total_bytes_output.total /= 8;
    total_bytes_output.total += this.bufByteIdx + 1;

    if (flushbits < 0) {
      console.warn('strange error flushing buffer ... ');
    }
    return flushbits;
  }

  flush_bitstream(gfp: LameGlobalFlags) {
    const gfc = gfp.internal_flags!;
    let flushbits;
    let last_ptr = gfc.h_ptr - 1;
    /* last header to add to bitstream */
    if (last_ptr === -1) last_ptr = LameInternalFlags.MAX_HEADER_BUF - 1;
    const { l3_side } = gfc;

    if ((flushbits = this.compute_flushbits(gfp, new TotalBytes())) < 0) return;
    this.drain_into_ancillary(gfp, flushbits);

    /* check that the 100% of the last frame has been written to bitstream */
    console.assert(
      gfc.header[last_ptr].write_timing + this.getframebits(gfp) === this.totbit
    );

    /*
     * we have padded out all frames with ancillary data, which is the same
     * as filling the bitreservoir with ancillary data, so :
     */
    gfc.ResvSize = 0;
    l3_side.main_data_begin = 0;

    /* save the ReplayGain value */
    if (gfc.findReplayGain) {
      const RadioGain = this.ga!.GetTitleGain(gfc.rgdata!);
      console.assert(
        !isCloseToEachOther(RadioGain, GainAnalysis.GAIN_NOT_ENOUGH_SAMPLES)
      );
      gfc.RadioGain = Math.floor(RadioGain * 10.0 + 0.5);
      /* round to nearest */
    }

    /* find the gain and scale change required for no clipping */
    if (gfc.findPeakSample) {
      gfc.noclipGainChange = Math.ceil(
        Math.log10(gfc.PeakSample / 32767.0) * 20.0 * 10.0
      );
      /* round up */

      if (gfc.noclipGainChange > 0) {
        /* clipping occurs */
        if (
          isCloseToEachOther(gfp.scale, 1.0) ||
          isCloseToEachOther(gfp.scale, 0.0)
        )
          gfc.noclipScale =
            Math.floor((32767.0 / gfc.PeakSample) * 100.0) / 100.0;
        /* round down */ else {
          /*
           * the user specified his own scaling factor. We could
           * suggest the scaling factor of
           * (32767.0/gfp.PeakSample)*(gfp.scale) but it's usually
           * very inaccurate. So we'd rather not advice him on the
           * scaling factor.
           */
          gfc.noclipScale = -1;
        }
      } else
      /* no clipping */
        gfc.noclipScale = -1;
    }
  }

  add_dummy_byte(gfp: LameGlobalFlags, val: number, n: number) {
    const gfc = gfp.internal_flags!;
    let i;

    while (n-- > 0) {
      this.putbits_noheaders(gfc, val, 8);

      for (i = 0; i < LameInternalFlags.MAX_HEADER_BUF; ++i)
        gfc.header[i].write_timing += 8;
    }
  }

  /**
   * This is called after a frame of audio has been quantized and coded. It
   * will write the encoded audio to the bitstream. Note that from a layer3
   * encoder's perspective the bit stream is primarily a series of main_data()
   * blocks, with header and side information inserted at the proper locations
   * to maintain framing. (See Figure A.7 in the IS).
   */
  format_bitstream(gfp: LameGlobalFlags) {
    const gfc = gfp.internal_flags!;
    const { l3_side } = gfc;

    const bitsPerFrame = this.getframebits(gfp);
    this.drain_into_ancillary(gfp, l3_side.resvDrain_pre);

    this.encodeSideInfo2(gfp, bitsPerFrame);
    let bits = 8 * gfc.sideinfo_len;
    bits += this.writeMainData(gfp);
    this.drain_into_ancillary(gfp, l3_side.resvDrain_post);
    bits += l3_side.resvDrain_post;

    l3_side.main_data_begin += (bitsPerFrame - bits) / 8;

    /*
     * compare number of bits needed to clear all buffered mp3 frames with
     * what we think the resvsize is:
     */
    if (this.compute_flushbits(gfp, new TotalBytes()) !== gfc.ResvSize) {
      console.warn('Internal buffer inconsistency. flushbits <> ResvSize');
    }

    /*
     * compare main_data_begin for the next frame with what we think the
     * resvsize is:
     */
    if (l3_side.main_data_begin * 8 !== gfc.ResvSize) {
      console.warn(
        `bit reservoir error: \n` +
          `l3_side.main_data_begin: ${8 * l3_side.main_data_begin} \n` +
          `Resvoir size:             ${gfc.ResvSize} \n` +
          `resv drain (post)         ${l3_side.resvDrain_post} \n` +
          `resv drain (pre)          ${l3_side.resvDrain_pre} \n` +
          `header and sideinfo:      ${8 * gfc.sideinfo_len} \n` +
          `data bits:                ${
            bits - l3_side.resvDrain_post - 8 * gfc.sideinfo_len
          } \n` +
          `total bits:               ${bits} (remainder: ${bits % 8}) \n` +
          `bitsperframe:             ${bitsPerFrame}`
      );

      console.warn('This is a fatal error.  It has several possible causes:');
      console.warn(
        '90%%  LAME compiled with buggy version of gcc using advanced optimizations'
      );
      console.warn(' 9%%  Your system is overclocked');
      console.warn(' 1%%  bug in LAME encoding library');

      gfc.ResvSize = l3_side.main_data_begin * 8;
    }
    // ;
    console.assert(this.totbit % 8 === 0);

    if (this.totbit > 1000000000) {
      /*
       * to avoid totbit overflow, (at 8h encoding at 128kbs) lets reset
       * bit counter
       */
      let i;
      for (i = 0; i < LameInternalFlags.MAX_HEADER_BUF; ++i)
        gfc.header[i].write_timing -= this.totbit;
      this.totbit = 0;
    }

    return 0;
  }

  /**
   * <PRE>
   * copy data out of the internal MP3 bit buffer into a user supplied
   *       unsigned char buffer.
   *
   *       mp3data=0      indicates data in buffer is an id3tags and VBR tags
   *       mp3data=1      data is real mp3 frame data.
   * </PRE>
   */
  copy_buffer(
    gfc: LameInternalFlags,
    buffer: Uint8Array,
    bufferPos: number,
    size: number,
    mp3data: number
  ) {
    const minimum = this.bufByteIdx + 1;
    if (minimum <= 0) return 0;
    if (size !== 0 && minimum > size) {
      /* buffer is too small */
      return -1;
    }
    copyArray(this.buf!, 0, buffer, bufferPos, minimum);
    this.bufByteIdx = -1;
    this.bufBitIdx = 0;

    if (mp3data !== 0) {
      const crc = new Int32Array(1);
      crc[0] = gfc.nMusicCRC;
      this.vbr!.updateMusicCRC(crc, buffer, bufferPos, minimum);
      gfc.nMusicCRC = crc[0];

      /**
       * sum number of bytes belonging to the mp3 stream this info will be
       * written into the Xing/LAME header for seeking
       */
      if (minimum > 0) {
        gfc.VBR_seek_table.nBytesWritten += minimum;
      }

      if (gfc.decode_on_the_fly) {
        /* decode the frame */
        const pcm_buf = Array.from({ length: 2 }, () => new Float32Array(1152));
        let mp3_in = minimum;
        let samples_out = -1;
        let i;

        /* re-synthesis to pcm. Repeat until we get a samples_out=0 */
        while (samples_out !== 0) {
          samples_out = this.mpg!.hip_decode1_unclipped(
            gfc.hip,
            buffer,
            bufferPos,
            mp3_in,
            pcm_buf[0],
            pcm_buf[1]
          );
          /*
           * samples_out = 0: need more data to decode samples_out =
           * -1: error. Lets assume 0 pcm output samples_out = number
           * of samples output
           */

          /*
           * set the lenght of the mp3 input buffer to zero, so that
           * in the next iteration of the loop we will be querying
           * mpglib about buffered data
           */
          mp3_in = 0;

          if (samples_out === -1) {
            /*
             * error decoding. Not fatal, but might screw up the
             * ReplayGain tag. What should we do? Ignore for now
             */
            samples_out = 0;
          }
          if (samples_out > 0) {
            /* process the PCM data */

            /*
             * this should not be possible, and indicates we have
             * overflown the pcm_buf buffer
             */
            console.assert(samples_out <= 1152);

            if (gfc.findPeakSample) {
              for (i = 0; i < samples_out; i++) {
                if (pcm_buf[0][i] > gfc.PeakSample)
                  gfc.PeakSample = pcm_buf[0][i];
                else if (-pcm_buf[0][i] > gfc.PeakSample)
                  gfc.PeakSample = -pcm_buf[0][i];
              }
              if (gfc.channels_out > 1)
                for (i = 0; i < samples_out; i++) {
                  if (pcm_buf[1][i] > gfc.PeakSample)
                    gfc.PeakSample = pcm_buf[1][i];
                  else if (-pcm_buf[1][i] > gfc.PeakSample)
                    gfc.PeakSample = -pcm_buf[1][i];
                }
            }

            if (gfc.findReplayGain)
              if (
                this.ga!.analyzeSamples(
                  gfc.rgdata!,
                  pcm_buf[0],
                  0,
                  pcm_buf[1],
                  0,
                  samples_out,
                  gfc.channels_out
                ) === GainAnalysis.GAIN_ANALYSIS_ERROR
              )
                return -6;
          }
          /* if (samples_out>0) */
        }
        /* while (samples_out!=0) */
      }
      /* if (gfc.decode_on_the_fly) */
    }
    /* if (mp3data) */
    return minimum;
  }

  init_bit_stream_w(gfc: LameInternalFlags) {
    this.buf = new Uint8Array(LAME_MAXMP3BUFFER);

    gfc.w_ptr = 0;
    gfc.h_ptr = 0;
    gfc.header[gfc.h_ptr].write_timing = 0;
    this.bufByteIdx = -1;
    this.bufBitIdx = 0;
    this.totbit = 0;
  }
}
