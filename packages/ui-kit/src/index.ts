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

type BlockId = string;

type Option = {
  text: ITextObject;
  value: string;
  description?: IPlainText;
  url?: string;
};

type OptionGroup = {
  label: IPlainText;
  options: Option[];
};

interface IElement {
  type: ElementType
}

interface IInteractiveElement extends IElement {
  actionId: ActionId;
  confirm?: never; // TODO
}

interface IBlock extends IElement {
  blockId?: BlockId;
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

interface IButtonElement extends IInteractiveElement {
  type: ElementType.BUTTON;
  text: IPlainText;
  url?: string;
  value?: string;
  style?: 'primary' | 'danger';
}

interface IImageElement extends IElement {
  type: ElementType.IMAGE;
  imageUrl: string;
  altText: string;
}

interface IDatePickerElement extends IInteractiveElement {
  type: ElementType.DATEPICKER;
  placeholder?: ITextObject;
  initialDate?: string;
}

interface IStaticSelectElement extends IInteractiveElement {
  type: ElementType.STATIC_SELECT;
  placeholder: ITextObject;
  options: Option[];
  optionGroups?: OptionGroup[];
  initialOption?: Option;
}

interface IMultiStaticSelectElement extends IInteractiveElement {
  type: ElementType.MULTI_STATIC_SELECT;
  placeholder: ITextObject;
  options: Option[];
  optionGroups?: OptionGroup[];
  initialOption?: never;
  confirm?: never;
  maxSelectItems?: number;
}

interface IOverflowElement extends IInteractiveElement {
  type: ElementType.OVERFLOW;
  options: Option[];
}

interface IDividerBlock extends IBlock {
  type: ElementType.DIVIDER;
}

interface ISectionBlock extends IBlock {
  type: ElementType.SECTION;
  text?: ITextObject;
  fields?: ITextObject[];
  accessory?: (
    IImageElement
    | IButtonElement
    | IDatePickerElement
    | IStaticSelectElement
    | IMultiStaticSelectElement
    | IOverflowElement
  );
}

interface IImageBlock extends IBlock {
  type: ElementType.IMAGE;
  imageUrl: string;
  altText: string;
  title?: IPlainText;
}

interface IActionsBlock extends IBlock {
  type: ElementType.ACTIONS;
  elements: IInteractiveElement[];
}

interface IContextBlock extends IBlock {
  type: ElementType.CONTEXT;
  elements: (ITextObject | IImageElement)[];
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
  // blocks
  divider: ElementRenderer<T, IDividerBlock>;
  section: ElementRenderer<T, ISectionBlock>;
  image: ElementRenderer<T, IImageElement>;
  actions: ElementRenderer<T, IElement>;
  context: ElementRenderer<T, IElement>;
  // elements
  button: ElementRenderer<T, IButtonElement>;
  datePicker: ElementRenderer<T, IElement>;
  staticSelect: ElementRenderer<T, IElement>;
  multiStaticSelect: ElementRenderer<T, IElement>;
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
    case ElementType.PLAIN_TEXT:
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
  plainText: ElementRenderer<unknown, IPlainText>;

  mrkdwn: ElementRenderer<unknown, IMarkdown>;

  text = (text: ITextObject, context: BlockContext, index: number): unknown => {
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
  divider: ElementRenderer<unknown, IElement>;

  section: ElementRenderer<unknown, IElement>;

  image: ElementRenderer<unknown, IImageElement>;

  actions: ElementRenderer<unknown, IElement>;

  context: ElementRenderer<unknown, IElement>;

  button: (element: IElement, context: BlockContext, index: number) => unknown;

  datePicker: (element: IElement, context: BlockContext, index: number) => unknown;

  staticSelect: (element: IElement, context: BlockContext, index: number) => unknown;

  multiStaticSelect: (element: IElement, context: BlockContext, index: number) => unknown;

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
    ElementType.PLAIN_TEXT,
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
              return parser.plainText(element as IPlainText, BlockContext.BLOCK, i);

            case ElementType.TEXT:
            case ElementType.MARKDOWN:
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

            default:
              if (parser[element.type]) {
                return parser[element.type](element, BlockContext.BLOCK, i);
              }
              return null;
          }
        });
    };

const uiKitText = uiKitGeneric<unknown>([
  ElementType.TEXT,
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
