import { version } from '../package.json';

console.log(`ui-kit version: ${ version }`);

export enum PrimitiveElementType {
  IMAGE = 'image',
  BUTTON = 'button',
  STATIC_SELECT = 'static_select',
  MULTI_STATIC_SELECT = 'multi_static_select',
  CONVERSATION_SELECT = 'conversations_select',
  CHANNEL_SELECT = 'channels_select',
  USER_SELECT = 'users_select',
  OVERFLOW = 'overflow',
  DATEPICKER = 'datepicker',
  PLAIN_TEXT_INPUT = 'plain_text_input',
  SECTION = 'section',
  DIVIDER = 'divider',
  ACTIONS = 'actions',
  CONTEXT = 'context',
  FIELDS = 'fields',
  INPUT = 'input',
  PLAIN_TEXT = 'plain_text',
  TEXT = 'text',
  MARKDOWN = 'mrkdwn'
}

export enum ChatType {
  ANY = '*',
  ROCKETCHAT = 'rocketchat',
  LIVECHAT = 'livechat',
}

export type ElementTypeOverChatType = string;

const isElementTypeOverChatType = (x: string): x is ElementTypeOverChatType => {
  const [elementType, chatType] = x.split('/');
  return elementType in PrimitiveElementType && chatType in ChatType;
};

type ElementType = PrimitiveElementType | ElementTypeOverChatType;

export enum BlockContext {
  BLOCK,
  SECTION,
  ACTION,
  FORM,
  CONTEXT
}

export type Component = any;

type UiKitParser = UiKitParserModal;

export interface UiKitElement {
  type: PrimitiveElementType
}

export interface UiKitText extends UiKitElement {
  text: string;
}

export abstract class UiKitParserButtons {
  button: (element: UiKitElement, context: BlockContext, index: number) => Component;
}

export abstract class UiKitParserText {
  text: (text: UiKitText, context: BlockContext, index: number) => Component;

  plaintText: (text: UiKitText, context: BlockContext, index: number) => Component;

  mrkdwn: (text: UiKitText, context: BlockContext, index: number) => Component;
}

const renderElement = ({ type, ...element }: UiKitElement, context: BlockContext, parser: UiKitParser, index: number) => {
  switch (type as PrimitiveElementType) {
    case PrimitiveElementType.OVERFLOW:
      return parser.overflow({ type, ...element } as UiKitText, context, index);
    case PrimitiveElementType.MARKDOWN:
    case PrimitiveElementType.TEXT:
      return parser.text({ type, ...element } as UiKitText, context, index);
    case PrimitiveElementType.BUTTON:
      return parser.button(element as UiKitElement, context, index);
    case PrimitiveElementType.IMAGE:
      return parser.image(element as UiKitElement, context, index);
    case PrimitiveElementType.STATIC_SELECT:
      return parser.staticSelect(element as UiKitElement, context, index);
    case PrimitiveElementType.MULTI_STATIC_SELECT:
      return parser.multiStaticSelect(element as UiKitElement, context, index);
    case PrimitiveElementType.DATEPICKER:
      return parser.datePicker(element as UiKitElement, context, index);
    case PrimitiveElementType.PLAIN_TEXT_INPUT:
      return parser.plainInput(element as UiKitElement, context, index);
    // case ElementType.CONVERSATION_SELECT:
    // case ElementType.CHANNEL_SELECT:
    // case ElementType.USER_SELECT:
    //   return parser.selectInput({ type, ...element }, context, index);
  }
};

export const createRenderElement = (allowedItems?: Array<PrimitiveElementType>) => (element: UiKitElement, context: BlockContext, parser, index) => {
  if (allowedItems && !allowedItems.includes(element.type)) {
    return null;
  }
  return renderElement(element, context, parser, index);
};

export abstract class UiKitParserMessage extends UiKitParserText {
  button: (element: UiKitElement, context: BlockContext, index: number) => Component;

  image: (element: UiKitElement, context: BlockContext, index: number) => Component;

  datePicker: (element: UiKitElement, context: BlockContext, index: number) => Component;

  staticSelect: (element: UiKitElement, context: BlockContext, index: number) => Component;

  multiStaticSelect: (element: UiKitElement, context: BlockContext, index: number) => Component;

  // selectInput: (element: UiKitElement, context: BLOCK_CONTEXT, index: Number) => Component;
  context: (element: UiKitElement, context: BlockContext, index: number) => Component;

  divider: (element: UiKitElement, context: BlockContext, index: number) => Component;

  actions: (element: UiKitElement, context: BlockContext, index: number) => Component;

  overflow: (element: UiKitElement, context: BlockContext, index: number) => Component;

  renderAccessories = createRenderElement([
    PrimitiveElementType.BUTTON,
    PrimitiveElementType.IMAGE,
    PrimitiveElementType.MULTI_STATIC_SELECT,
    PrimitiveElementType.STATIC_SELECT,
    PrimitiveElementType.CONVERSATION_SELECT,
    PrimitiveElementType.USER_SELECT,
    PrimitiveElementType.CHANNEL_SELECT,
    PrimitiveElementType.USER_SELECT,
    PrimitiveElementType.DATEPICKER,
    PrimitiveElementType.OVERFLOW,
  ]);

  renderActions = createRenderElement([
    PrimitiveElementType.BUTTON,
    PrimitiveElementType.STATIC_SELECT,
    PrimitiveElementType.MULTI_STATIC_SELECT,
    PrimitiveElementType.CONVERSATION_SELECT,
    PrimitiveElementType.CHANNEL_SELECT,
    PrimitiveElementType.USER_SELECT,
    PrimitiveElementType.USER_SELECT,
    PrimitiveElementType.DATEPICKER,
  ]);

  renderContext = createRenderElement([
    PrimitiveElementType.IMAGE,
    PrimitiveElementType.TEXT,
    PrimitiveElementType.MARKDOWN,
  ])
}

export abstract class UiKitParserModal extends UiKitParserMessage {
  plainInput: (element: UiKitElement, context: BlockContext, index: number) => Component

  renderInputs = createRenderElement([
    PrimitiveElementType.STATIC_SELECT,
    PrimitiveElementType.PLAIN_TEXT_INPUT,
    PrimitiveElementType.MULTI_STATIC_SELECT,
    PrimitiveElementType.CONVERSATION_SELECT,
    PrimitiveElementType.CHANNEL_SELECT,
    PrimitiveElementType.USER_SELECT,
    PrimitiveElementType.USER_SELECT,
    PrimitiveElementType.DATEPICKER,
  ]);
}

export const uiKitGeneric = <T> (allowedItems?: Array<PrimitiveElementType>) => (parser : T) => (blocks) =>
  blocks
    .filter(({ type }) => !allowedItems || allowedItems.includes(type))
    .map(({ type, ...block }: UiKitElement, i) => (parser[type] ? parser[type](block, BlockContext.BLOCK, i) : type));


export const uiKitButtons = uiKitGeneric<UiKitParserButtons>([
  PrimitiveElementType.BUTTON,
]);

export const uiKitText = uiKitGeneric<UiKitParserText>([
  PrimitiveElementType.TEXT,
  PrimitiveElementType.PLAIN_TEXT,
  PrimitiveElementType.MARKDOWN,
]);

export const uiKitMessage = uiKitGeneric<UiKitParserMessage>([
  PrimitiveElementType.DIVIDER,
  PrimitiveElementType.SECTION,
  PrimitiveElementType.IMAGE,
  PrimitiveElementType.ACTIONS,
  PrimitiveElementType.CONTEXT,
]);

export const uiKitModal = uiKitGeneric<UiKitParserModal>([
  PrimitiveElementType.SECTION,
  PrimitiveElementType.DIVIDER,
  PrimitiveElementType.IMAGE,
  PrimitiveElementType.ACTIONS,
  PrimitiveElementType.CONTEXT,
  PrimitiveElementType.INPUT,
]);

export {
  version,
  PrimitiveElementType as ELEMENT_TYPES,
  BlockContext as BLOCK_CONTEXT,
};
