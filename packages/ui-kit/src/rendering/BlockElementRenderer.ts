import type { BlockContext } from './BlockContext';
import type { BlockElement } from '..';

export type BlockElementRenderer<
  OutputElement,
  Block extends BlockElement = BlockElement,
> = (
  blockElement: Block,
  context: BlockContext,
  index: number
) => OutputElement | null;
