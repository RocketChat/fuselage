export class Parse {
  private ver: unknown;

  private id3: unknown;

  private pre: unknown;

  setModules(ver: unknown, id3: unknown, pre: unknown) {
    this.ver = ver;
    this.id3 = id3;
    this.pre = pre;
  }
}
