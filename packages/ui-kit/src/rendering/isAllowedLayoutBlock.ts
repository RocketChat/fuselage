import { Block } from '../blocks/Block';
import { LayoutBlock } from '../blocks/LayoutBlock';
import { ConditionalBlock } from '../blocks/layout/ConditionalBlock';

export const isAllowedLayoutBlock =
  (
    allowedLayoutBlockTypes?: Exclude<LayoutBlock, ConditionalBlock>['type'][]
  ) =>
  (block: Block): block is Exclude<LayoutBlock, ConditionalBlock> =>
    (allowedLayoutBlockTypes as string[] | undefined)?.includes(block.type) ??
    true;
