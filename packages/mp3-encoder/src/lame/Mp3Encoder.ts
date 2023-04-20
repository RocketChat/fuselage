import { BitStream } from './BitStream';
import { GainAnalysis } from './GainAnalysis';
import { GetAudio } from './GetAudio';
import { ID3Tag } from './ID3Tag';
import { Lame } from './Lame';
import type { LameGlobalFlags } from './LameGlobalFlags';
import { MPEGMode } from './MPEGMode';
import { MPGLib } from './MPGLib';
import { Parse } from './Parse';
import { Presets } from './Presets';
import { Quantize } from './Quantize';
import { QuantizePVT } from './QuantizePVT';
import { Reservoir } from './Reservoir';
import { Takehiro } from './Takehiro';
import { VBRTag } from './VBRTag';
import { Version } from './Version';

export class Mp3Encoder {
  private readonly lame: Lame;

  private readonly gaud: GetAudio;

  private readonly ga: GainAnalysis;

  private readonly bs: BitStream;

  private readonly p: Presets;

  private readonly qupvt: QuantizePVT;

  private readonly qu: Quantize;

  private readonly vbr: VBRTag;

  private readonly ver: Version;

  private readonly id3: ID3Tag;

  private readonly rv: Reservoir;

  private readonly tak: Takehiro;

  private readonly parse: Parse;

  private readonly mpg: MPGLib;

  private readonly gfp: LameGlobalFlags;

  private mp3buf: Uint8Array;

  private mp3buf_size: number;

  private maxSamples: number;

  constructor(channels = 1, samplerate = 44100, kbps = 128) {
    this.lame = new Lame();
    this.gaud = new GetAudio();
    this.ga = new GainAnalysis();
    this.bs = new BitStream();
    this.p = new Presets();
    this.qupvt = new QuantizePVT();
    this.qu = new Quantize();
    this.vbr = new VBRTag();
    this.ver = new Version();
    this.id3 = new ID3Tag();
    this.rv = new Reservoir();
    this.tak = new Takehiro();
    this.parse = new Parse();
    this.mpg = new MPGLib();

    this.lame.setModules(
      this.ga,
      this.bs,
      this.p,
      this.qupvt,
      this.qu,
      this.vbr,
      this.ver,
      this.id3,
      this.mpg
    );
    this.bs.setModules(this.ga, this.mpg, this.ver, this.vbr);
    this.id3.setModules(this.bs, this.ver);
    this.p.setModules(this.lame);
    this.qu.setModules(this.bs, this.rv, this.qupvt, this.tak);
    this.qupvt.setModules(this.tak, this.rv, this.lame.enc.psy!);
    this.rv.setModules(this.bs);
    this.tak.setModules(this.qupvt);
    this.vbr.setModules(this.lame, this.bs, this.ver);
    this.gaud.setModules(this.parse, this.mpg);
    this.parse.setModules(this.ver, this.id3, this.p);

    this.gfp = this.lame.lame_init();

    this.gfp.num_channels = channels;
    this.gfp.in_samplerate = samplerate;
    this.gfp.brate = kbps;
    this.gfp.mode = MPEGMode.STEREO;
    this.gfp.quality = 3;
    this.gfp.bWriteVbrTag = false;
    this.gfp.disable_reservoir = true;
    this.gfp.write_id3tag_automatic = false;

    const retcode = this.lame.lame_init_params(this.gfp);
    if (retcode !== 0) {
      throw new Error(`lame_init_params() failed: ${retcode}`);
    }
    this.maxSamples = 1152;
    this.mp3buf_size = Math.trunc(1.25 * this.maxSamples + 7200);
    this.mp3buf = new Uint8Array(this.mp3buf_size);
  }

  encodeBuffer(left: Int16Array, right: Int16Array = left) {
    if (left.length !== right.length) {
      throw new Error('left and right channel buffers must be the same length');
    }

    if (left.length > this.maxSamples) {
      this.maxSamples = left.length;
      this.mp3buf_size = Math.trunc(1.25 * this.maxSamples + 7200);
      this.mp3buf = new Uint8Array(this.mp3buf_size);
    }

    const _sz = this.lame.lame_encode_buffer(
      this.gfp,
      left,
      right,
      left.length,
      this.mp3buf,
      0,
      this.mp3buf_size
    );
    return new Uint8Array(this.mp3buf.subarray(0, _sz));
  }

  flush() {
    const _sz = this.lame.lame_encode_flush(
      this.gfp,
      this.mp3buf,
      0,
      this.mp3buf_size
    );
    return new Uint8Array(this.mp3buf.subarray(0, _sz));
  }
}
