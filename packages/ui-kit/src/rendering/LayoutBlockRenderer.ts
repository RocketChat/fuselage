import { LayoutBlock } from '../blocks/LayoutBlock';
import { ConditionalBlock } from '../blocks/layout/ConditionalBlock';
import { BlockContext } from './BlockContext';

export type LayoutBlockRenderer<
  OutputElement,
  Block extends Exclude<LayoutBlock, ConditionalBlock> = Exclude<
    LayoutBlock,
    ConditionalBlock
  >
> = (
  layoutBlock: Block,
  context: BlockContext.BLOCK,
  index: number
) => OutputElement | null;
