import { BitStream } from './BitStream';
import { Encoder } from './Encoder';
import { GainAnalysis } from './GainAnalysis';
import { Lame } from './Lame';
import type { LameGlobalFlags } from './LameGlobalFlags';
import { MPGLib } from './MPGLib';
import { Presets } from './Presets';
import { PsyModel } from './PsyModel';
import { Quantize } from './Quantize';
import { QuantizePVT } from './QuantizePVT';
import { Reservoir } from './Reservoir';
import { Takehiro } from './Takehiro';
import { VBRTag } from './VBRTag';

export class Mp3Encoder {
  private readonly lame: Lame;

  private readonly gfp: LameGlobalFlags;

  private mp3buf: Uint8Array;

  private mp3buf_size: number;

  private maxSamples: number;

  constructor(channels = 1, samplerate = 44100, kbps = 128) {
    const ga = new GainAnalysis();
    const bs = new BitStream();
    const qupvt = new QuantizePVT();
    const qu = new Quantize();
    const vbr = new VBRTag();
    const rv = new Reservoir();
    const tak = new Takehiro(qupvt);
    const mpg = new MPGLib();
    const psy = new PsyModel();
    const enc = new Encoder();

    this.lame = new Lame();

    this.lame.setModules(ga, bs, new Presets(), qupvt, qu, psy, enc);
    bs.setModules(ga, mpg, vbr);
    qu.setModules(rv, qupvt, tak);
    qupvt.setModules(tak, rv, psy);
    rv.setModules(bs);
    enc.setModules(bs, psy);

    this.gfp = this.lame.lame_init(channels, samplerate, kbps);

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

    const size = this.lame.lame_encode_buffer(
      this.gfp,
      left,
      right,
      left.length,
      this.mp3buf,
      0,
      this.mp3buf_size
    );
    return new Uint8Array(this.mp3buf.subarray(0, size));
  }

  flush() {
    const size = this.lame.lame_encode_flush(
      this.gfp,
      this.mp3buf,
      0,
      this.mp3buf_size
    );
    return new Uint8Array(this.mp3buf.subarray(0, size));
  }
}
