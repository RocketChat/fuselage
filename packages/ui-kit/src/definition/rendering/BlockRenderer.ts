import { BlockContext, LayoutBlock } from '../blocks';

export type BlockRenderer<T, B extends LayoutBlock> = (
  block: B,
  context: BlockContext.BLOCK,
  index: number
) => T | null;
