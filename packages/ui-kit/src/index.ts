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
  SectionAccessoryElement,
  ActionElement,
  ContextElement,
  InputElement,
} from './blocks';

export const version = 'DEVELOPMENT';

type ElementRenderer<T, E extends IElement> = (
  element: E,
  context: BlockContext,
  index: number,
) => T;

type RecursiveElementRenderer<T, P extends IParser<T>, E extends IElement> = (
  element: E,
  context: BlockContext,
  parser: P,
  index: number,
) => T;

interface IParser<T> {
  text: ElementRenderer<T, TextObject>;
  plainText: ElementRenderer<T, IPlainText>;
  mrkdwn: ElementRenderer<T, IMarkdown>;
}

interface IParserMessage<T> extends IParser<T> {
  divider: ElementRenderer<T, IDividerBlock>;
  section: ElementRenderer<T, ISectionBlock>;
  image: ElementRenderer<T, IImageBlock | IImageElement>;
  actions: ElementRenderer<T, IActionsBlock>;
  context: ElementRenderer<T, IContextBlock>;
  button: ElementRenderer<T, IButtonElement>;
  datePicker: ElementRenderer<T, IDatePickerElement>;
  staticSelect: ElementRenderer<T, IStaticSelectElement>;
  multiStaticSelect: ElementRenderer<T, IMultiStaticSelectElement>;
  overflow: ElementRenderer<T, IOverflowElement>;
  renderAccessories: RecursiveElementRenderer<T, IParserMessage<T>, SectionAccessoryElement>;
  renderActions: RecursiveElementRenderer<T, IParserMessage<T>, ActionElement>;
  renderContext: RecursiveElementRenderer<T, IParserMessage<T>, ContextElement>;
}

interface IParserModal<T> extends IParserMessage<T> {
  input: ElementRenderer<unknown, IInputBlock>;
  plainInput: ElementRenderer<T, IPlainTextInput>;
  renderInputs: RecursiveElementRenderer<T, IParserModal<T>, InputElement>;
}

const renderElement = <T, P extends IParserModal<T>>(
  element: IElement,
  context: BlockContext,
  parser: P,
  index: number,
): T => {
  switch (element.type) {
    case ElementType.OVERFLOW:
      return parser.overflow(element as IOverflowElement, context, index);

    case ElementType.PLAIN_TEXT:
      return parser.plainText(element as IPlainText, context, index);

    case ElementType.MARKDOWN:
      return parser.mrkdwn(element as IMarkdown, context, index);

    case ElementType.BUTTON:
      return parser.button(element as IButtonElement, context, index);

    case ElementType.IMAGE:
      return parser.image(element as IImageBlock | IImageElement, context, index);

    case ElementType.STATIC_SELECT:
      return parser.staticSelect(element as IStaticSelectElement, context, index);

    case ElementType.MULTI_STATIC_SELECT:
      return parser.multiStaticSelect(element as IMultiStaticSelectElement, context, index);

    case ElementType.DATEPICKER:
      return parser.datePicker(element as IDatePickerElement, context, index);

    case ElementType.PLAIN_TEXT_INPUT:
      return parser.plainInput(element as IPlainTextInput, context, index);
  }
};

const createRenderElement = <T, P extends IParserModal<T>>(allowedItems?: ElementType[]) =>
  (element: IElement, context: BlockContext, parser: P, index: number): T => {
    if (allowedItems && !allowedItems.includes(element.type)) {
      return null;
    }

    return renderElement<T, P>(element, context, parser, index);
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

  renderAccessories = createRenderElement([
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

  renderActions = createRenderElement([
    ElementType.BUTTON,
    ElementType.STATIC_SELECT,
    ElementType.MULTI_STATIC_SELECT,
    ElementType.CONVERSATION_SELECT,
    ElementType.CHANNEL_SELECT,
    ElementType.USER_SELECT,
    ElementType.USER_SELECT,
    ElementType.DATEPICKER,
  ]);

  renderContext = createRenderElement([
    ElementType.IMAGE,
    ElementType.PLAIN_TEXT,
    ElementType.MARKDOWN,
  ])
}

abstract class UiKitParserModal extends UiKitParserMessage implements IParserModal<unknown> {
  input: ElementRenderer<unknown, IInputBlock>;

  plainInput: ElementRenderer<unknown, IElement>;

  renderInputs = createRenderElement([
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

const isElement = (x: IElement): x is IElement =>
  x !== null
  && typeof x === 'object'
  && 'type' in x
  && Object.values(ElementType).includes(x.type);

const uiKitGeneric = <T>(allowedItems?: ElementType[]) =>
  (parser: IParser<T>) =>
    (payload: unknown): any => {
      if (!Array.isArray(payload)) {
        return [];
      }

      return payload
        .filter<IElement>(isElement)
        .filter((element) => !allowedItems || allowedItems.includes(element.type))
        .map((element: IElement, i: number) => {
          switch (element.type) {
            case ElementType.PLAIN_TEXT:
              if (typeof parser.text === 'function') {
                return parser.text(element as TextObject, BlockContext.BLOCK, i);
              }
              return parser.plainText(element as IPlainText, BlockContext.BLOCK, i);

            case ElementType.MARKDOWN:
              if (typeof parser.text === 'function') {
                return parser.text(element as TextObject, BlockContext.BLOCK, i);
              }
              return parser.mrkdwn(element as IMarkdown, BlockContext.BLOCK, i);

            case ElementType.DIVIDER:
              return (parser as IParserMessage<T>).divider(element as IDividerBlock, BlockContext.BLOCK, i);

            case ElementType.SECTION:
              return (parser as IParserMessage<T>).section(element as ISectionBlock, BlockContext.BLOCK, i);

            case ElementType.IMAGE:
              return (parser as IParserMessage<T>).image(element as IImageBlock, BlockContext.BLOCK, i);

            case ElementType.ACTIONS:
              return (parser as IParserMessage<T>).actions(element as IActionsBlock, BlockContext.BLOCK, i);

            case ElementType.CONTEXT:
              return (parser as IParserMessage<T>).context(element as IContextBlock, BlockContext.BLOCK, i);

            case ElementType.INPUT:
              return (parser as IParserModal<T>).input(element as IInputBlock, BlockContext.BLOCK, i);

            default:
              if (parser[element.type]) {
                return parser[element.type](element, BlockContext.BLOCK, i);
              }
              return null;
          }
        });
    };

const uiKitText = uiKitGeneric<unknown>([
  ElementType.PLAIN_TEXT,
  ElementType.MARKDOWN,
]);

const uiKitMessage = uiKitGeneric<unknown>([
  ElementType.DIVIDER,
  ElementType.SECTION,
  ElementType.IMAGE,
  ElementType.ACTIONS,
  ElementType.CONTEXT,
]);

const uiKitModal = uiKitGeneric<unknown>([
  ElementType.SECTION,
  ElementType.DIVIDER,
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
