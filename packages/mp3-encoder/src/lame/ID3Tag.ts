import type { BitStream } from './BitStream';
import type { LameGlobalFlags } from './LameGlobalFlags';
import type { Version } from './Version';

export class ID3Tag {
  id3tag_write_v1(_gfp: LameGlobalFlags) {
    throw new Error('Method not implemented.');
  }

  id3tag_write_v2(_gfp: LameGlobalFlags) {
    throw new Error('Method not implemented.');
  }

  // private bits: BitStream | null = null;

  // private ver: Version | null = null;

  setModules(_bits: BitStream, _ver: Version) {
    // this.bits = bits;
    // this.ver = ver;
  }
}
