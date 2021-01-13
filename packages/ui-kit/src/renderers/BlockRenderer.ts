import { BlockContext, IBlock } from '../blocks';

export type BlockRenderer<T, B extends IBlock> = (
  block: B,
  context: BlockContext.BLOCK,
  index: number
) => T;
