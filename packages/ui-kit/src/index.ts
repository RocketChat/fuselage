import {
  ElementType,
  BlockContext,
  IElement,
  isElement,
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
  SectionAccessoryElement,
  ActionElement,
  ContextElement,
  InputElement,
  IBlock,
} from './blocks';

export const version = process.env.VERSION;

type BlockRenderer<T, B extends IBlock> = (block: B, context: BlockContext.BLOCK, index: number) => T ;

type ElementRenderer<T, E extends IElement> = (
  element: E,
  context: BlockContext,
  index: number,
) => T;

type ElementSetRenderer<T, E extends IElement> = (
  element: E,
  context: BlockContext,
  _: undefined,
  index: number,
) => T;

interface IParser<T> {
  text: ElementRenderer<T, TextObject>;
  plainText: ElementRenderer<T, IPlainText>;
  mrkdwn: ElementRenderer<T, IMarkdown>;
}

interface IParserMessage<T> extends IParser<T> {
  divider: BlockRenderer<T, IDividerBlock>;
  section: BlockRenderer<T, ISectionBlock>;
  image: BlockRenderer<T, IImageBlock> | ElementRenderer<T, IImageElement>;
  actions: BlockRenderer<T, IActionsBlock>;
  context: BlockRenderer<T, IContextBlock>;

  button: ElementRenderer<T, IButtonElement>;
  datePicker: ElementRenderer<T, IDatePickerElement>;
  staticSelect: ElementRenderer<T, IStaticSelectElement>;
  multiStaticSelect: ElementRenderer<T, IMultiStaticSelectElement>;
  overflow: ElementRenderer<T, IOverflowElement>;

  renderAccessories: ElementSetRenderer<T, SectionAccessoryElement>;
  renderActions: ElementSetRenderer<T, ActionElement>;
  renderContext: ElementSetRenderer<T, ContextElement>;
}

interface IParserModal<T> extends IParserMessage<T> {
  input: BlockRenderer<T, IInputBlock>;

  plainInput: ElementRenderer<T, IPlainTextInput>;

  renderInputs: ElementSetRenderer<T, InputElement>;
}

const renderElement = <T>(
  element: IElement,
  context: BlockContext,
  parser: IParser<T>,
  index: number,
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

      return (parser as IParserMessage<T>).divider(element as IDividerBlock, BlockContext.BLOCK, index);

    case ElementType.SECTION:
      if (context !== BlockContext.BLOCK) {
        return null;
      }

      return (parser as IParserMessage<T>).section(element as ISectionBlock, BlockContext.BLOCK, index);

    case ElementType.IMAGE:
      if (context !== BlockContext.BLOCK) {
        return ((parser as IParserMessage<T>).image as ElementRenderer<T, IImageElement>)(element as IImageElement, context, index);
      }

      return (parser as IParserMessage<T>).image(element as IImageBlock, context, index);

    case ElementType.ACTIONS:
      if (context !== BlockContext.BLOCK) {
        return null;
      }

      return (parser as IParserMessage<T>).actions(element as IActionsBlock, BlockContext.BLOCK, index);

    case ElementType.CONTEXT:
      if (context !== BlockContext.BLOCK) {
        return null;
      }

      return (parser as IParserMessage<T>).context(element as IContextBlock, BlockContext.BLOCK, index);

    case ElementType.INPUT:
      if (context !== BlockContext.BLOCK) {
        return null;
      }

      return (parser as IParserModal<T>).input(element as IInputBlock, BlockContext.BLOCK, index);

    case ElementType.OVERFLOW:
      return (parser as IParserMessage<T>).overflow(element as IOverflowElement, context, index);

    case ElementType.BUTTON:
      return (parser as IParserMessage<T>).button(element as IButtonElement, context, index);

    case ElementType.STATIC_SELECT:
      return (parser as IParserMessage<T>).staticSelect(element as IStaticSelectElement, context, index);

    case ElementType.MULTI_STATIC_SELECT:
      return (parser as IParserMessage<T>).multiStaticSelect(element as IMultiStaticSelectElement, context, index);

    case ElementType.DATEPICKER:
      return (parser as IParserMessage<T>).datePicker(element as IDatePickerElement, context, index);

    case ElementType.PLAIN_TEXT_INPUT:
      return (parser as IParserModal<T>).plainInput(element as IPlainTextInput, context, index);
  }

  if (parser[element.type]) {
    return parser[element.type](element, context, index);
  }

  return null;
};

const createElementRenderer = <T>(parser: IParser<T>, allowedItems?: ElementType[]): ElementSetRenderer<T, IElement> =>
  (element: IElement, context: BlockContext, _: undefined, index: number): T => {
    if (allowedItems && !allowedItems.includes(element.type)) {
      return null;
    }

    return renderElement<T>(element, context, parser, index);
  };

const createSurfaceRenderer = <T>(allowedBlockTypes?: ElementType[]) =>
  (parser: IParser<T>) =>
    (blocks: unknown): any => {
      if (!Array.isArray(blocks)) {
        return [];
      }

      return blocks
        .filter<IElement>(isElement)
        .filter((element) => !allowedBlockTypes || allowedBlockTypes.includes(element.type))
        .map((element: IElement, index: number) =>
          renderElement(element, BlockContext.BLOCK, parser, index));
    };

abstract class UiKitParserText implements IParser<unknown> {
  plainText: ElementRenderer<unknown, IPlainText>;

  mrkdwn: ElementRenderer<unknown, IMarkdown>;

  text = (text: TextObject, context: BlockContext, index: number): unknown => {
    if (text.type === ElementType.PLAIN_TEXT) {
      return this.plainText(text as IPlainText, context, index);
    }

    if (text.type === ElementType.MARKDOWN) {
      return this.mrkdwn(text as IMarkdown, context, index);
    }

    return null;
  };
}

abstract class UiKitParserMessage extends UiKitParserText implements IParserMessage<unknown> {
  divider: ElementRenderer<unknown, IDividerBlock>;

  section: ElementRenderer<unknown, ISectionBlock>;

  image: ElementRenderer<unknown, IImageBlock>;

  actions: ElementRenderer<unknown, IActionsBlock>;

  context: ElementRenderer<unknown, IContextBlock>;

  button: (element: IButtonElement, context: BlockContext, index: number) => unknown;

  datePicker: (element: IDatePickerElement, context: BlockContext, index: number) => unknown;

  staticSelect: (element: IStaticSelectElement, context: BlockContext, index: number) => unknown;

  multiStaticSelect: (element: IMultiStaticSelectElement, context: BlockContext, index: number) => unknown;

  overflow: (element: IOverflowElement, context: BlockContext, index: number) => unknown;

  renderAccessories = createElementRenderer(this, [
    ElementType.BUTTON,
    ElementType.IMAGE,
    ElementType.MULTI_STATIC_SELECT,
    ElementType.STATIC_SELECT,
    ElementType.CONVERSATION_SELECT,
    ElementType.USER_SELECT,
    ElementType.CHANNEL_SELECT,
    ElementType.USER_SELECT,
    ElementType.DATEPICKER,
    ElementType.OVERFLOW,
  ]);

  renderActions = createElementRenderer(this, [
    ElementType.BUTTON,
    ElementType.STATIC_SELECT,
    ElementType.MULTI_STATIC_SELECT,
    ElementType.CONVERSATION_SELECT,
    ElementType.CHANNEL_SELECT,
    ElementType.USER_SELECT,
    ElementType.USER_SELECT,
    ElementType.DATEPICKER,
  ]);

  renderContext = createElementRenderer(this, [
    ElementType.IMAGE,
    ElementType.PLAIN_TEXT,
    ElementType.MARKDOWN,
  ])
}

abstract class UiKitParserModal extends UiKitParserMessage implements IParserModal<unknown> {
  input: ElementRenderer<unknown, IInputBlock>;

  plainInput: ElementRenderer<unknown, IElement>;

  renderInputs = createElementRenderer(this, [
    ElementType.STATIC_SELECT,
    ElementType.PLAIN_TEXT_INPUT,
    ElementType.MULTI_STATIC_SELECT,
    ElementType.CONVERSATION_SELECT,
    ElementType.CHANNEL_SELECT,
    ElementType.USER_SELECT,
    ElementType.USER_SELECT,
    ElementType.DATEPICKER,
  ]);
}

const uiKitText = createSurfaceRenderer<unknown>([
  ElementType.PLAIN_TEXT,
  ElementType.MARKDOWN,
]);

const uiKitMessage = createSurfaceRenderer<unknown>([
  ElementType.DIVIDER,
  ElementType.SECTION,
  ElementType.IMAGE,
  ElementType.ACTIONS,
  ElementType.CONTEXT,
]);

const uiKitModal = createSurfaceRenderer<unknown>([
  ElementType.DIVIDER,
  ElementType.SECTION,
  ElementType.IMAGE,
  ElementType.ACTIONS,
  ElementType.CONTEXT,
  ElementType.INPUT,
]);

export {
  ElementType as ELEMENT_TYPES,
  BlockContext as BLOCK_CONTEXT,
  UiKitParserText,
  UiKitParserMessage,
  UiKitParserModal,
  uiKitText,
  uiKitMessage,
  uiKitModal,
};

export * from './blocks';
