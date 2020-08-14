export const version = 'DEVELOPMENT';

enum ElementType {
  BUTTON = 'button',
  IMAGE = 'image',
  OVERFLOW = 'overflow',
  PLAIN_TEXT_INPUT = 'plain_text_input',
  STATIC_SELECT = 'static_select',
  MULTI_STATIC_SELECT = 'multi_static_select',
  SECTION = 'section',
  DIVIDER = 'divider',
  ACTIONS = 'actions',
  CONTEXT = 'context',
  INPUT = 'input',
  CONVERSATION_SELECT = 'conversations_select',
  CHANNEL_SELECT = 'channels_select',
  USER_SELECT = 'users_select',
  DATEPICKER = 'datepicker',
  FIELDS = 'fields',
  PLAIN_TEXT = 'plain_text',
  TEXT = 'text',
  MARKDOWN = 'mrkdwn',
}

enum BlockContext {
  BLOCK,
  SECTION,
  ACTION,
  FORM,
  CONTEXT,
}

interface IElement {
  type: ElementType
}

interface ITextObject extends IElement {
  text: string;
}

type ElementParser<T, E extends IElement> = (element: E, context: BlockContext, index: number) => T;
type RecursiveElementParser<T, P, E extends IElement> = (element: E, context: BlockContext, parser: P, index: number) => T;

interface IParser<T> {
  text: ElementParser<T, ITextObject>;
  plainText: ElementParser<T, ITextObject>;
  mrkdwn: ElementParser<T, ITextObject>;
}

interface IParserMessage<T> extends IParser<T> {
  button: ElementParser<T, IElement>;
  image: ElementParser<T, IElement>;
  datePicker: ElementParser<T, IElement>;
  staticSelect: ElementParser<T, IElement>;
  multiStaticSelect: ElementParser<T, IElement>;
  context: ElementParser<T, IElement>;
  divider: ElementParser<T, IElement>;
  actions: ElementParser<T, IElement>;
  overflow: ElementParser<T, IElement>;
  renderAccessories: RecursiveElementParser<T, IParserMessage<T>, IElement>;
  renderActions: RecursiveElementParser<T, IParserMessage<T>, IElement>;
  renderContext: RecursiveElementParser<T, IParserMessage<T>, IElement>;
}

interface IParserModal<T> extends IParserMessage<T> {
  plainInput: ElementParser<T, IElement>;
  renderInputs: RecursiveElementParser<T, IParserModal<T>, IElement>;
}

const renderElement = <T, P extends IParserModal<T>>(
  { type, ...element }: IElement,
  context: BlockContext,
  parser: P,
  index: number,
): T => {
  switch (type) {
    case ElementType.OVERFLOW:
      return parser.overflow({ type, ...element } as ITextObject, context, index);
    case ElementType.MARKDOWN:
    case ElementType.TEXT:
      return parser.text({ type, ...element } as ITextObject, context, index);
    case ElementType.BUTTON:
      return parser.button(element as IElement, context, index);
    case ElementType.IMAGE:
      return parser.image(element as IElement, context, index);
    case ElementType.STATIC_SELECT:
      return parser.staticSelect(element as IElement, context, index);
    case ElementType.MULTI_STATIC_SELECT:
      return parser.multiStaticSelect(element as IElement, context, index);
    case ElementType.DATEPICKER:
      return parser.datePicker(element as IElement, context, index);
    case ElementType.PLAIN_TEXT_INPUT:
      return parser.plainInput(element as IElement, context, index);
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
  text: (text: ITextObject, context: BlockContext, index: number) => unknown;

  plainText: (text: ITextObject, context: BlockContext, index: number) => unknown;

  mrkdwn: (text: ITextObject, context: BlockContext, index: number) => unknown;
}

abstract class UiKitParserMessage implements IParserMessage<unknown> {
  button: (element: IElement, context: BlockContext, index: number) => unknown;

  text: (text: ITextObject, context: BlockContext, index: number) => unknown;

  plainText: (text: ITextObject, context: BlockContext, index: number) => unknown;

  mrkdwn: (text: ITextObject, context: BlockContext, index: number) => unknown;

  image: (element: IElement, context: BlockContext, index: number) => unknown;

  datePicker: (element: IElement, context: BlockContext, index: number) => unknown;

  staticSelect: (element: IElement, context: BlockContext, index: number) => unknown;

  multiStaticSelect: (element: IElement, context: BlockContext, index: number) => unknown;

  context: (element: IElement, context: BlockContext, index: number) => unknown;

  divider: (element: IElement, context: BlockContext, index: number) => unknown;

  actions: (element: IElement, context: BlockContext, index: number) => unknown;

  overflow: (element: IElement, context: BlockContext, index: number) => unknown;

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
    ElementType.TEXT,
    ElementType.MARKDOWN,
  ])
}

abstract class UiKitParserModal extends UiKitParserMessage implements IParserModal<unknown> {
  plainInput: (element: IElement, context: BlockContext, index: number) => unknown

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

const uiKitGeneric = <P extends IParser<unknown>>(allowedItems?: ElementType[]) =>
  (parser : P) =>
    (payload: unknown): any => {
      if (!Array.isArray(payload)) {
        return [];
      }

      return payload
        .filter((element) => (!allowedItems || allowedItems.includes(element.type)) && parser[element.type])
        .map((element: IElement, i: number) => parser[element.type](element, BlockContext.BLOCK, i));
    };

const uiKitText = uiKitGeneric<IParser<unknown>>([
  ElementType.TEXT,
  ElementType.PLAIN_TEXT,
  ElementType.MARKDOWN,
]);

const uiKitMessage = uiKitGeneric<IParserMessage<unknown>>([
  ElementType.DIVIDER,
  ElementType.SECTION,
  ElementType.IMAGE,
  ElementType.ACTIONS,
  ElementType.CONTEXT,
]);

const uiKitModal = uiKitGeneric<IParserModal<unknown>>([
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
