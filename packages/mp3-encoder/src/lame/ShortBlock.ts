export class ShortBlock {
  private constructor(public ordinal: number) {}

  /**
   * LAME may use them, even different block types for L/R.
   */
  static readonly short_block_allowed = new ShortBlock(0);

  /**
   * LAME may use them, but always same block types in L/R.
   */
  static readonly short_block_coupled = new ShortBlock(1);

  /**
   * LAME will not use short blocks, long blocks only.
   */
  static readonly short_block_dispensed = new ShortBlock(2);

  /**
   * LAME will not use long blocks, short blocks only.
   */
  static readonly short_block_forced = new ShortBlock(3);
}
