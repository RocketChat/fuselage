import type { ArrayOf } from './ArrayOf';
import BitStream from './BitStream';
import GainAnalysis from './GainAnalysis';
import { GetAudio } from './GetAudio';
import { ID3Tag } from './ID3Tag';
import Lame from './Lame';
import type LameGlobalFlags from './LameGlobalFlags';
import MPEGMode from './MPEGMode';
import { MPGLib } from './MPGLib';
import { Parse } from './Parse';
import Presets from './Presets';
import Quantize from './Quantize';
import QuantizePVT from './QuantizePVT';
import Reservoir from './Reservoir';
import Takehiro from './Takehiro';
import VBRTag from './VBRTag';
import Version from './Version';

export class Mp3Encoder {
  private readonly lame = new Lame();

  private readonly gaud = new GetAudio();

  private readonly ga = new GainAnalysis();

  private readonly bs = new BitStream();

  private readonly p = new Presets();

  private readonly qupvt = new QuantizePVT();

  private readonly qu = new Quantize();

  private readonly vbr = new VBRTag();

  private readonly ver = new Version();

  private readonly id3 = new ID3Tag();

  private readonly rv = new Reservoir();

  private readonly tak = new Takehiro();

  private readonly parse = new Parse();

  private readonly mpg = new MPGLib();

  private readonly gfp: LameGlobalFlags;

  private mp3buf: Int8Array;

  private mp3buf_size: number;

  private maxSamples: number;

  constructor(
    private readonly channels = 1,
    private readonly samplerate = 44100,
    private readonly kbps = 128
  ) {
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

    this.gfp = this.lame.lame_init()!;

    this.gfp.num_channels = channels;
    this.gfp.in_samplerate = samplerate;
    this.gfp.brate = kbps;
    this.gfp.mode = MPEGMode.STEREO;
    this.gfp.quality = 3;
    this.gfp.bWriteVbrTag = false;
    this.gfp.disable_reservoir = true;
    this.gfp.write_id3tag_automatic = false;

    const retcode = this.lame.lame_init_params(this.gfp);
    console.assert(retcode === 0);
    this.maxSamples = 1152;
    this.mp3buf_size = 0 | (1.25 * this.maxSamples + 7200);
    this.mp3buf = new Int8Array(this.mp3buf_size);
  }

  encodeBuffer(left: ArrayOf<number>, right: ArrayOf<number> = left) {
    console.assert(left.length === right.length);
    if (left.length > this.maxSamples) {
      this.maxSamples = left.length;
      this.mp3buf_size = 0 | (1.25 * this.maxSamples + 7200);
      this.mp3buf = new Int8Array(this.mp3buf_size);
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
    return new Int8Array(this.mp3buf.subarray(0, _sz));
  }

  flush() {
    const _sz = this.lame.lame_encode_flush(
      this.gfp,
      this.mp3buf,
      0,
      this.mp3buf_size
    );
    return new Int8Array(this.mp3buf.subarray(0, _sz));
  }
}
