import { Conditions } from './definition/Conditions';
import {
  ElementType,
  BlockContext,
  RenderableBlock,
  TextObject,
  PlainText,
  Markdown,
  DividerBlock,
  SectionBlock,
  ImageBlock,
  ActionsBlock,
  ContextBlock,
  InputBlock,
  ButtonElement,
  ImageElement,
  DatePickerElement,
  StaticSelectElement,
  MultiStaticSelectElement,
  OverflowElement,
  PlainTextInputElement,
  ConditionalBlock,
  LinearScaleElement,
} from './definition/blocks';
import { ElementRenderer } from './definition/rendering/ElementRenderer';
import { ElementSetRenderer } from './definition/rendering/ElementSetRenderer';
import { IParser } from './definition/rendering/IParser';

const isElement = (x: RenderableBlock): x is RenderableBlock =>
  x !== null &&
  typeof x === 'object' &&
  'type' in x &&
  Object.values(ElementType).includes(x.type);

// eslint-disable-next-line complexity
const renderElement = <T>(
  element: RenderableBlock,
  context: BlockContext,
  parser: IParser<T>,
  index: number
): T | null => {
  switch (element.type) {
    case ElementType.PLAIN_TEXT:
      if (typeof parser.text === 'function') {
        return parser.text(element as TextObject, context, index);
      }

      return parser.plainText(element as PlainText, context, index);

    case ElementType.MARKDOWN:
      if (typeof parser.text === 'function') {
        return parser.text(element as TextObject, context, index);
      }

      return parser.mrkdwn(element as Markdown, context, index);

    case ElementType.DIVIDER:
      if (context !== BlockContext.BLOCK) {
        return null;
      }

      return (
        parser.divider?.(element as DividerBlock, BlockContext.BLOCK, index) ??
        null
      );

    case ElementType.SECTION:
      if (context !== BlockContext.BLOCK) {
        return null;
      }

      return (
        parser.section?.(element as SectionBlock, BlockContext.BLOCK, index) ??
        null
      );

    case ElementType.IMAGE:
      if (context !== BlockContext.BLOCK) {
        return (
          (parser.image as ElementRenderer<T, ImageElement>)?.(
            element as ImageElement,
            context,
            index
          ) ?? null
        );
      }

      return parser.image?.(element as ImageBlock, context, index) ?? null;

    case ElementType.ACTIONS:
      if (context !== BlockContext.BLOCK) {
        return null;
      }

      return (
        parser.actions?.(element as ActionsBlock, BlockContext.BLOCK, index) ??
        null
      );

    case ElementType.CONTEXT:
      if (context !== BlockContext.BLOCK) {
        return null;
      }

      return (
        parser.context?.(element as ContextBlock, BlockContext.BLOCK, index) ??
        null
      );

    case ElementType.INPUT:
      if (context !== BlockContext.BLOCK) {
        return null;
      }

      return (
        parser.input?.(element as InputBlock, BlockContext.BLOCK, index) ?? null
      );

    case ElementType.OVERFLOW:
      return (
        parser.overflow?.(element as OverflowElement, context, index) ?? null
      );

    case ElementType.BUTTON:
      return parser.button?.(element as ButtonElement, context, index) ?? null;

    case ElementType.STATIC_SELECT:
      return (
        parser.staticSelect?.(element as StaticSelectElement, context, index) ??
        null
      );

    case ElementType.MULTI_STATIC_SELECT:
      return (
        parser.multiStaticSelect?.(
          element as MultiStaticSelectElement,
          context,
          index
        ) ?? null
      );

    case ElementType.DATEPICKER:
      return (
        parser.datePicker?.(element as DatePickerElement, context, index) ??
        null
      );

    case ElementType.PLAIN_TEXT_INPUT:
      return (
        parser.plainInput?.(element as PlainTextInputElement, context, index) ??
        null
      );

    case ElementType.LINEAR_SCALE:
      return (
        parser.linearScale?.(element as LinearScaleElement, context, index) ??
        null
      );
  }

  return null;
};

export const createElementRenderer = <T>(
  parser: IParser<T>,
  allowedItems?: ElementType[]
): ElementSetRenderer<T, RenderableBlock> => (
  element: RenderableBlock,
  context: BlockContext,
  _: undefined,
  index: number
): T | null => {
  if (allowedItems && !allowedItems.includes(element.type)) {
    return null;
  }

  return renderElement<T>(element, context, parser, index);
};

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

export const createSurfaceRenderer = <T>(allowedBlockTypes?: ElementType[]) => (
  parser: IParser<T>,
  conditions?: Conditions
) => (blocks: unknown): unknown => {
  if (!Array.isArray(blocks)) {
    return [];
  }

  return Array.prototype
    .concat(
      ...blocks.filter<RenderableBlock>(isElement).map((element) => {
        if (element.type === ElementType.CONDITIONAL) {
          const conditionalBlock = element as ConditionalBlock;
          if (conditionsMatch(conditions, conditionalBlock.when)) {
            return conditionalBlock.render;
          }

          return [];
        }

        return [element];
      })
    )
    .filter(
      (element) =>
        !allowedBlockTypes || allowedBlockTypes.includes(element.type)
    )
    .map((element: RenderableBlock, index: number) =>
      renderElement(element, BlockContext.BLOCK, parser, index)
    );
};
