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
  MARKDOWN = 'mrkdwn'
}

enum BlockContext {
  BLOCK,
  SECTION,
  ACTION,
  FORM,
  CONTEXT
}

interface IElement {
  type: ElementType
}

interface ITextObject extends IElement {
  text: string;
}

type IParser = {
};

interface IParserText<T> extends IParser {
  text: (text: ITextObject, context: BlockContext, index: number) => T;
  plainText: (text: ITextObject, context: BlockContext, index: number) => T;
  mrkdwn: (text: ITextObject, context: BlockContext, index: number) => T;
}

interface IParserButtons<T> extends IParser {
  button: (element: IElement, context: BlockContext, index: number) => T;
}

interface IParserMessage<T> extends IParser, IParserButtons<T>, IParserText<T> {
  image: (element: IElement, context: BlockContext, index: number) => T;
  datePicker: (element: IElement, context: BlockContext, index: number) => T;
  staticSelect: (element: IElement, context: BlockContext, index: number) => T;
  multiStaticSelect: (element: IElement, context: BlockContext, index: number) => T;
  context: (element: IElement, context: BlockContext, index: number) => T;
  divider: (element: IElement, context: BlockContext, index: number) => T;
  actions: (element: IElement, context: BlockContext, index: number) => T;
  overflow: (element: IElement, context: BlockContext, index: number) => T;
  renderAccessories: (element: IElement, context: BlockContext, parser: IParserMessage<T>, index: number) => T;
  renderActions: (element: IElement, context: BlockContext, parser: IParserMessage<T>, index: number) => T;
  renderContext: (element: IElement, context: BlockContext, parser: IParserMessage<T>, index: number) => T;
}

interface IParserModal<T> extends IParser, IParserMessage<T> {
  plainInput: (element: IElement, context: BlockContext, index: number) => T
  renderInputs: (element: IElement, context: BlockContext, parser: IParserModal<T>, index: number) => T;
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

abstract class UiKitParserText implements IParserText<unknown> {
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

const uiKitGeneric = <P extends IParser>(allowedItems?: ElementType[]) =>
  (parser : P) =>
    (blocks: any[]): any =>
      blocks
        .filter(({ type }) => (!allowedItems || allowedItems.includes(type)) && parser[type])
        .map(({ type, ...block }: IElement, i: number) => parser[type](block, BlockContext.BLOCK, i));

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
  uiKitGeneric,
  uiKitMessage,
  uiKitModal,
};

export * from './blocks';
