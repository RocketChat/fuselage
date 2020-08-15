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

type ActionId = string;

interface IElement {
  type: ElementType
}

interface ITextObject extends IElement {
  text: string;
}

interface IPlainText extends ITextObject {
  type: ElementType.PLAIN_TEXT;
  emoji?: boolean;
}

interface IMarkdown extends ITextObject {
  type: ElementType.MARKDOWN;
  verbatim?: boolean;
}

interface IButtonElement extends IElement {
  type: ElementType.BUTTON;
  text: IPlainText;
  action_id: ActionId;
  url?: string;
  value?: string;
  style?: 'primary' | 'danger';
  confirm?: never;
}

interface IImageElement extends IElement {
  type: ElementType.IMAGE;
  image_url: string;
  alt_text: string;
  title?: IPlainText;
}

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
  text: ElementRenderer<T, ITextObject>;
  plainText: ElementRenderer<T, IPlainText>;
  mrkdwn: ElementRenderer<T, IMarkdown>;
}

interface IParserMessage<T> extends IParser<T> {
  button: ElementRenderer<T, IButtonElement>;
  image: ElementRenderer<T, IImageElement>;
  datePicker: ElementRenderer<T, IElement>;
  staticSelect: ElementRenderer<T, IElement>;
  multiStaticSelect: ElementRenderer<T, IElement>;
  context: ElementRenderer<T, IElement>;
  divider: ElementRenderer<T, IElement>;
  actions: ElementRenderer<T, IElement>;
  overflow: ElementRenderer<T, IElement>;
  renderAccessories: RecursiveElementRenderer<T, IParserMessage<T>, IElement>;
  renderActions: RecursiveElementRenderer<T, IParserMessage<T>, IElement>;
  renderContext: RecursiveElementRenderer<T, IParserMessage<T>, IElement>;
}

interface IParserModal<T> extends IParserMessage<T> {
  plainInput: ElementRenderer<T, IElement>;
  renderInputs: RecursiveElementRenderer<T, IParserModal<T>, IElement>;
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
      return parser.button(element as IButtonElement, context, index);
    case ElementType.IMAGE:
      return parser.image(element as IImageElement, context, index);
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
  text: ElementRenderer<unknown, ITextObject>;

  plainText: ElementRenderer<unknown, IPlainText>;

  mrkdwn: ElementRenderer<unknown, IMarkdown>;
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

const isElement = (x: IElement): x is IElement =>
  x !== null
  && typeof x === 'object'
  && 'type' in x
  && Object.values(ElementType).includes(x.type);

const uiKitGeneric = <T, P extends IParser<T>>(allowedItems?: ElementType[]) =>
  (parser : P) =>
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
              return parser.plainText(element as IPlainText, BlockContext.BLOCK, i);

            case ElementType.TEXT:
            case ElementType.MARKDOWN:
              return parser.mrkdwn(element as IMarkdown, BlockContext.BLOCK, i);

            default:
              if (parser[element.type]) {
                return parser[element.type](element, BlockContext.BLOCK, i);
              }
              return null;
          }
        });
    };

const uiKitText = uiKitGeneric<unknown, IParser<unknown>>([
  ElementType.TEXT,
  ElementType.PLAIN_TEXT,
  ElementType.MARKDOWN,
]);

const uiKitMessage = uiKitGeneric<unknown, IParserMessage<unknown>>([
  ElementType.DIVIDER,
  ElementType.SECTION,
  ElementType.IMAGE,
  ElementType.ACTIONS,
  ElementType.CONTEXT,
]);

const uiKitModal = uiKitGeneric<unknown, IParserModal<unknown>>([
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
