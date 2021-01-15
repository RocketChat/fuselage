import {
  ElementType,
  BlockContext,
  IElement,
  TextObject,
  IPlainText,
  IMarkdown,
  IDividerBlock,
  ISectionBlock,
  IImageBlock,
  IActionsBlock,
  IContextBlock,
  IInputBlock,
  IButtonElement,
  IImageElement,
  IDatePickerElement,
  IStaticSelectElement,
  IMultiStaticSelectElement,
  IOverflowElement,
  IPlainTextInput,
  ConditionalBlockFilters,
  IConditionalBlock,
  Conditions,
} from './blocks';
import { IParser } from './parsers/IParser';
import { ElementRenderer } from './renderers/ElementRenderer';
import { ElementSetRenderer } from './renderers/ElementSetRenderer';

const isElement = (x: IElement): x is IElement =>
  x !== null &&
  typeof x === 'object' &&
  'type' in x &&
  Object.values(ElementType).includes(x.type);

const renderElement = <T>(
  element: IElement,
  context: BlockContext,
  parser: IParser<T>,
  index: number
): T => {
  switch (element.type) {
    case ElementType.PLAIN_TEXT:
      if (typeof parser.text === 'function') {
        return parser.text(element as TextObject, context, index);
      }

      return parser.plainText(element as IPlainText, context, index);

    case ElementType.MARKDOWN:
      if (typeof parser.text === 'function') {
        return parser.text(element as TextObject, context, index);
      }

      return parser.mrkdwn(element as IMarkdown, context, index);

    case ElementType.DIVIDER:
      if (context !== BlockContext.BLOCK) {
        return null;
      }

      return parser.divider?.(
        element as IDividerBlock,
        BlockContext.BLOCK,
        index
      );

    case ElementType.SECTION:
      if (context !== BlockContext.BLOCK) {
        return null;
      }

      return parser.section?.(
        element as ISectionBlock,
        BlockContext.BLOCK,
        index
      );

    case ElementType.IMAGE:
      if (context !== BlockContext.BLOCK) {
        return (parser.image as ElementRenderer<T, IImageElement>)?.(
          element as IImageElement,
          context,
          index
        );
      }

      return parser.image?.(element as IImageBlock, context, index);

    case ElementType.ACTIONS:
      if (context !== BlockContext.BLOCK) {
        return null;
      }

      return parser.actions?.(
        element as IActionsBlock,
        BlockContext.BLOCK,
        index
      );

    case ElementType.CONTEXT:
      if (context !== BlockContext.BLOCK) {
        return null;
      }

      return parser.context?.(
        element as IContextBlock,
        BlockContext.BLOCK,
        index
      );

    case ElementType.INPUT:
      if (context !== BlockContext.BLOCK) {
        return null;
      }

      return parser.input?.(element as IInputBlock, BlockContext.BLOCK, index);

    case ElementType.OVERFLOW:
      return parser.overflow?.(element as IOverflowElement, context, index);

    case ElementType.BUTTON:
      return parser.button?.(element as IButtonElement, context, index);

    case ElementType.STATIC_SELECT:
      return parser.staticSelect?.(
        element as IStaticSelectElement,
        context,
        index
      );

    case ElementType.MULTI_STATIC_SELECT:
      return parser.multiStaticSelect?.(
        element as IMultiStaticSelectElement,
        context,
        index
      );

    case ElementType.DATEPICKER:
      return parser.datePicker?.(element as IDatePickerElement, context, index);

    case ElementType.PLAIN_TEXT_INPUT:
      return parser.plainInput?.(element as IPlainTextInput, context, index);
  }

  if (parser[element.type]) {
    return parser[element.type](element, context, index);
  }

  return null;
};

export const createElementRenderer = <T>(
  parser: IParser<T>,
  allowedItems?: ElementType[]
): ElementSetRenderer<T, IElement> => (
  element: IElement,
  context: BlockContext,
  _: undefined,
  index: number
): T => {
  if (allowedItems && !allowedItems.includes(element.type)) {
    return null;
  }

  return renderElement<T>(element, context, parser, index);
};

const conditionsMatch = (
  conditions: Conditions = undefined,
  filters: ConditionalBlockFilters
): boolean => {
  if (!conditions) {
    return false;
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
      ...blocks.filter<IElement>(isElement).map((element) => {
        if (element.type === ElementType.CONDITIONAL) {
          const conditionalBlock = element as IConditionalBlock;
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
    .map((element: IElement, index: number) =>
      renderElement(element, BlockContext.BLOCK, parser, index)
    );
};
