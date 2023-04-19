export class ID3Tag {
  private bits: unknown;

  private ver: unknown;

  setModules(bits: unknown, ver: unknown) {
    this.bits = bits;
    this.ver = ver;
  }
}
