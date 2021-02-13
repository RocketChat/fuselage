import { BlockElement } from '../..';
import { BlockContext } from '../../enums';

export type BlockElementRenderer<
  OutputElement,
  Block extends BlockElement = BlockElement
> = (
  blockElement: Block,
  context: BlockContext,
  index: number
) => OutputElement | null;
