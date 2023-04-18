/* MPEG modes */
class MPEGMode {
  private constructor(private _ordinal: number) {}

  ordinal() {
    return this._ordinal;
  }

  static readonly STEREO = new MPEGMode(0);

  static readonly JOINT_STEREO = new MPEGMode(1);

  static readonly DUAL_CHANNEL = new MPEGMode(2);

  static readonly MONO = new MPEGMode(3);

  static readonly NOT_SET = new MPEGMode(4);
}

export default MPEGMode;
