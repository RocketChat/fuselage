import { Conditions } from './definition/Conditions';
import { Block, ConditionalBlock, LayoutBlock } from './definition/blocks';
import { IParser } from './definition/rendering/IParser';
import { BlockContext } from './enums';
import { LayoutBlockType } from './enums/LayoutBlockType';

const conditionsMatch = (
  conditions: Conditions | undefined = undefined,
  filters: ConditionalBlock['when'] = {}
): boolean => {
  if (!conditions) {
    return true;
  }

  if (
    Array.isArray(filters.engine) &&
    !filters.engine.includes(conditions.engine)
  ) {
    return false;
  }

  return true;
};

const resolveConditionalBlocks = (conditions?: Conditions) => (
  block: Block
): Block[] => {
  if (block.type !== LayoutBlockType.CONDITIONAL) {
    return [block];
  }

  if (conditionsMatch(conditions, block.when)) {
    return block.render;
  }

  return [];
};

const isAllowedLayoutBlock = (
  allowedLayoutBlockTypes?: Exclude<LayoutBlock, ConditionalBlock>['type'][]
) => (block: Block): block is Exclude<LayoutBlock, ConditionalBlock> => {
  return (
    (allowedLayoutBlockTypes as string[] | undefined)?.includes(block.type) ??
    true
  );
};

const renderLayoutBlock = <OutputElement>(
  renderers: IParser<OutputElement>
) => (
  layoutBlock: Exclude<LayoutBlock, ConditionalBlock>,
  index: number
): OutputElement | null => {
  const renderer = renderers[layoutBlock.type] as (
    block: Exclude<LayoutBlock, ConditionalBlock>,
    context: BlockContext,
    index: number
  ) => OutputElement | null;

  if (!renderer) {
    return null;
  }

  return renderer(layoutBlock, BlockContext.BLOCK, index);
};

const isNotNull = <T>(value: T | null): value is T => value !== null;

export const createSurfaceRenderer = <OutputElement>(
  allowedLayoutBlockTypes?: Exclude<LayoutBlock, ConditionalBlock>['type'][]
) => (parser: IParser<OutputElement>, conditions?: Conditions) => (
  blocks: Block[]
): OutputElement[] => {
  if (!Array.isArray(blocks)) {
    return [];
  }

  return blocks
    .flatMap(resolveConditionalBlocks(conditions))
    .filter(isAllowedLayoutBlock(allowedLayoutBlockTypes))
    .map(renderLayoutBlock(parser))
    .filter(isNotNull);
};
