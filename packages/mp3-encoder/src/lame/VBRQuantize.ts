class VBRQuantize {
  private qupvt: unknown;

  private tak: unknown;

  setModules(_qupvt: unknown, _tk: unknown) {
    this.qupvt = _qupvt;
    this.tak = _tk;
  }
}

export default VBRQuantize;
