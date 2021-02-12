import { BaseSurfaceRenderer } from './BaseSurfaceRenderer';
import { Conditions } from './definition/Conditions';
import { Block, ConditionalBlock, LayoutBlock } from './definition/blocks';
import { ISurfaceRenderer } from './definition/rendering/ISurfaceRenderer';
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

export const resolveConditionalBlocks = (conditions?: Conditions) => (
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

export const isAllowedLayoutBlock = (
  allowedLayoutBlockTypes?: Exclude<LayoutBlock, ConditionalBlock>['type'][]
) => (block: Block): block is Exclude<LayoutBlock, ConditionalBlock> => {
  return (
    (allowedLayoutBlockTypes as string[] | undefined)?.includes(block.type) ??
    true
  );
};

export const renderLayoutBlock = <OutputElement>(
  renderers: ISurfaceRenderer<OutputElement>
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

export const isNotNull = <T>(value: T | null): value is T => value !== null;

type GenericBlock = { type: string };

export const createSurfaceRenderer = <OutputElement>() => (
  surfaceRenderer: BaseSurfaceRenderer<OutputElement>,
  conditions?: Conditions
) => (blocks: readonly GenericBlock[]) =>
  surfaceRenderer.render(blocks as Block[], conditions);
