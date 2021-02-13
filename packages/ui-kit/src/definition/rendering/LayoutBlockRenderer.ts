import { BlockContext } from '../../enums';
import { ConditionalBlock, LayoutBlock } from '../blocks';

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
