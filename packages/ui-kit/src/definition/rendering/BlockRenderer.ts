import { BlockContext, Block } from '../blocks';

export type BlockRenderer<T, B extends Block> = (
  block: B,
  context: BlockContext.BLOCK,
  index: number
) => T | null;
