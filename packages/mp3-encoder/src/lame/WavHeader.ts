export class WavHeader {
  dataOffset = 0;

  dataLen = 0;

  channels = 0;

  sampleRate = 0;

  private static fourccToInt(fourcc: string) {
    return (
      (fourcc.charCodeAt(0) << 24) |
      (fourcc.charCodeAt(1) << 16) |
      (fourcc.charCodeAt(2) << 8) |
      fourcc.charCodeAt(3)
    );
  }

  static RIFF = WavHeader.fourccToInt('RIFF');

  static WAVE = WavHeader.fourccToInt('WAVE');

  static fmt_ = WavHeader.fourccToInt('fmt ');

  static data = WavHeader.fourccToInt('data');

  static readHeader(dataView: DataView) {
    const w = new WavHeader();

    let header = dataView.getUint32(0, false);
    if (WavHeader.RIFF !== header) {
      throw new Error('Invalid WAV file');
    }
    /* const fileLen = */ dataView.getUint32(4, true);
    if (WavHeader.WAVE !== dataView.getUint32(8, false)) {
      throw new Error('Invalid WAV file');
    }
    if (WavHeader.fmt_ !== dataView.getUint32(12, false)) {
      throw new Error('Invalid WAV file');
    }
    const fmtLen = dataView.getUint32(16, true);
    let pos = 16 + 4;
    switch (fmtLen) {
      case 16:
      case 18:
        w.channels = dataView.getUint16(pos + 2, true);
        w.sampleRate = dataView.getUint32(pos + 4, true);
        break;
      default:
        throw new Error('extended fmt chunk not implemented');
    }
    pos += fmtLen;
    const { data } = WavHeader;
    let len = 0;
    while (data !== header) {
      header = dataView.getUint32(pos, false);
      len = dataView.getUint32(pos + 4, true);
      if (data === header) {
        break;
      }
      pos += len + 8;
    }
    w.dataLen = len;
    w.dataOffset = pos + 8;
    return w;
  }
}
