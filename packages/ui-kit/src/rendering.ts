import { BaseSurfaceRenderer } from './BaseSurfaceRenderer';
import { Conditions } from './definition/Conditions';
import {
  ActionsBlock,
  Block,
  BlockElement,
  ConditionalBlock,
  ContextBlock,
  InputBlock,
  LayoutBlock,
  SectionBlock,
  TextObject,
} from './definition/blocks';
import { ISurfaceRenderer } from './definition/rendering/ISurfaceRenderer';
import { BlockContext, BlockElementType, TextObjectType } from './enums';
import { LayoutBlockType } from './enums/LayoutBlockType';

type LayoutBlockRenderer<OutputElement> = (
  layoutBlock: Exclude<LayoutBlock, ConditionalBlock>,
  context: BlockContext.BLOCK,
  index: number
) => OutputElement | null;

type BlockElementRenderer<OutputElement> = (
  blockElement: BlockElement,
  context: BlockContext,
  index: number
) => OutputElement | null;

type TextObjectRenderer<OutputElement> = (
  textObject: TextObject,
  context: BlockContext,
  index: number
) => OutputElement | null;

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

const getLayoutBlockRenderer = <OutputElement>(
  renderers: ISurfaceRenderer<OutputElement>,
  type: LayoutBlock['type']
): LayoutBlockRenderer<OutputElement> | undefined => {
  return renderers[type] as LayoutBlockRenderer<OutputElement> | undefined;
};

const getBlockElementRenderer = <OutputElement>(
  renderers: ISurfaceRenderer<OutputElement>,
  type: BlockElement['type']
): BlockElementRenderer<OutputElement> | undefined => {
  const renderer = renderers[type] as
    | BlockElementRenderer<OutputElement>
    | undefined;

  if (renderer) {
    return renderer;
  }

  switch (type) {
    case BlockElementType.DATEPICKER:
      return renderers.datePicker as
        | BlockElementRenderer<OutputElement>
        | undefined;

    case BlockElementType.STATIC_SELECT:
      return renderers.staticSelect as
        | BlockElementRenderer<OutputElement>
        | undefined;

    case BlockElementType.MULTI_STATIC_SELECT:
      return renderers.multiStaticSelect as
        | BlockElementRenderer<OutputElement>
        | undefined;

    case BlockElementType.PLAIN_TEXT_INPUT:
      return renderers.plainInput as
        | BlockElementRenderer<OutputElement>
        | undefined;

    case BlockElementType.LINEAR_SCALE:
      return renderers.linearScale as
        | BlockElementRenderer<OutputElement>
        | undefined;
  }
};

const getTextObjectRenderer = <OutputElement>(
  renderers: ISurfaceRenderer<OutputElement>,
  type: TextObject['type']
): TextObjectRenderer<OutputElement> | undefined => {
  const renderer = renderers[type] as
    | TextObjectRenderer<OutputElement>
    | undefined;

  if (renderer) {
    return renderer;
  }

  switch (type) {
    case TextObjectType.PLAIN_TEXT:
      return (renderers.plainText ?? renderers.text) as
        | TextObjectRenderer<OutputElement>
        | undefined;

    case TextObjectType.MARKDOWN:
      return renderers.text as TextObjectRenderer<OutputElement> | undefined;
  }
};

export const renderLayoutBlock = <OutputElement>(
  renderers: ISurfaceRenderer<OutputElement>
) => (
  layoutBlock: Exclude<LayoutBlock, ConditionalBlock>,
  index: number
): OutputElement | null => {
  const renderer = getLayoutBlockRenderer(renderers, layoutBlock.type);

  if (!renderer) {
    return null;
  }

  return renderer.call(renderers, layoutBlock, BlockContext.BLOCK, index);
};

export const renderBlockElement = <OutputElement>(
  renderers: ISurfaceRenderer<OutputElement>,
  context: BlockContext
) => (blockElement: BlockElement, index: number): OutputElement | null => {
  const renderer = getBlockElementRenderer(renderers, blockElement.type);

  if (!renderer) {
    return null;
  }

  return renderer.call(renderers, blockElement, context, index);
};

export const renderTextObject = <OutputElement>(
  renderers: ISurfaceRenderer<OutputElement>,
  context: BlockContext
) => (textObject: TextObject, index: number): OutputElement | null => {
  const renderer = getTextObjectRenderer(renderers, textObject.type);

  if (!renderer) {
    return null;
  }

  return renderer.call(renderers, textObject, context, index);
};

export const isNotNull = <T>(value: T | null): value is T => value !== null;

type GenericBlock = { type: string };

export const createSurfaceRenderer = <OutputElement>() => (
  surfaceRenderer: BaseSurfaceRenderer<OutputElement>,
  conditions?: Conditions
) => (blocks: readonly GenericBlock[]) =>
  surfaceRenderer.render(blocks as Block[], conditions);

export const isActionsBlockElement = (
  block: BlockElement
): block is ActionsBlock['elements'][number] => {
  switch (block.type as ActionsBlock['elements'][number]['type']) {
    case BlockElementType.BUTTON:
    case BlockElementType.DATEPICKER:
    case BlockElementType.LINEAR_SCALE:
    case BlockElementType.MULTI_STATIC_SELECT:
    case BlockElementType.OVERFLOW:
    case BlockElementType.STATIC_SELECT:
      return true;

    default:
      return false;
  }
};

export const isContextBlockElement = (
  block: TextObject | BlockElement
): block is ContextBlock['elements'][number] => {
  switch (block.type as ContextBlock['elements'][number]['type']) {
    case BlockElementType.IMAGE:
    case TextObjectType.PLAIN_TEXT:
    case TextObjectType.MARKDOWN:
      return true;

    default:
      return false;
  }
};

export const isInputBlockElement = (
  block: BlockElement
): block is InputBlock['element'] => {
  switch (block.type as InputBlock['element']['type']) {
    case BlockElementType.CHANNELS_SELECT:
    case BlockElementType.CONVERSATIONS_SELECT:
    case BlockElementType.DATEPICKER:
    case BlockElementType.LINEAR_SCALE:
    case BlockElementType.MULTI_STATIC_SELECT:
    case BlockElementType.PLAIN_TEXT_INPUT:
    case BlockElementType.STATIC_SELECT:
    case BlockElementType.USERS_SELECT:
      return true;

    default:
      return false;
  }
};

export const isSectionBlockAccessoryElement = (
  block: BlockElement
): block is Exclude<SectionBlock['accessory'], undefined> => {
  switch (block.type as Exclude<SectionBlock['accessory'], undefined>['type']) {
    case BlockElementType.BUTTON:
    case BlockElementType.DATEPICKER:
    case BlockElementType.IMAGE:
    case BlockElementType.MULTI_STATIC_SELECT:
    case BlockElementType.OVERFLOW:
    case BlockElementType.STATIC_SELECT:
      return true;

    default:
      return false;
  }
};

export const isTextObject = (block: Block): block is TextObject => {
  return (Object.values(TextObjectType) as string[]).includes(block.type);
};
