export class BinSearchDirection {
  constructor(public readonly ordinal: number) {}

  static readonly BINSEARCH_NONE = new BinSearchDirection(0);

  static readonly BINSEARCH_UP = new BinSearchDirection(1);

  static readonly BINSEARCH_DOWN = new BinSearchDirection(2);
}
