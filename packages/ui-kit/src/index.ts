export const version = "DEVELOPMENT";

export enum ELEMENT_TYPES {
  IMAGE= 'image',
  BUTTON= 'button',
  STATIC_SELECT= 'static_select',
  MULTI_STATIC_SELECT= 'multi_static_select',
  CONVERSATION_SELECT= 'conversations_select',
  CHANNEL_SELECT= 'channels_select',
  USER_SELECT = 'users_select',
  OVERFLOW = 'overflow',
  DATEPICKER = 'datepicker',
  PLAIN_TEXT_INPUT= 'plain_text_input',
  SECTION= 'section',
  DIVIDER= 'divider',
  ACTIONS= 'actions',
  CONTEXT= 'context',
  FIELDS= 'fields',
  INPUT= 'input',
  TEXT='plain_text',
  MARKDOWN='mrkdwn'
};

export enum BLOCK_CONTEXT {
  BLOCK,
  SECTION,
  ACTION,
  FORM,
  CONTEXT
};

export type Component = any;

type UiKitParser = UiKitParserModal;


export interface UiKitElement {
  type: ELEMENT_TYPES
}

export interface UiKitText extends UiKitElement {
  text: string;
}

export abstract class UiKitParserMessage {
  text: (text: UiKitText, context: BLOCK_CONTEXT, index: Number) => Component;
  button: (element: UiKitElement, context: BLOCK_CONTEXT, index: Number) => Component;
  image: (element: UiKitElement, context: BLOCK_CONTEXT, index: Number) => Component;
  datePicker: (element: UiKitElement, context: BLOCK_CONTEXT, index: Number) => Component;
  staticSelect: (element: UiKitElement, context: BLOCK_CONTEXT, index: Number) => Component;
  multiStaticSelect: (element: UiKitElement, context: BLOCK_CONTEXT, index: Number) => Component;
  selectInput: (element: UiKitElement, context: BLOCK_CONTEXT, index: Number) => Component;
  context: (element: UiKitElement, context: BLOCK_CONTEXT, index: Number) => Component;
  divider: (element: UiKitElement, context: BLOCK_CONTEXT, index: Number) => Component;
  actions: (element: UiKitElement, context: BLOCK_CONTEXT, index: Number) => Component;
  overflow: (element: UiKitElement, context: BLOCK_CONTEXT, index: Number) => Component;

  renderAccessories = createRenderElement([
    ELEMENT_TYPES.BUTTON,
    ELEMENT_TYPES.IMAGE,
    ELEMENT_TYPES.MULTI_STATIC_SELECT,
    ELEMENT_TYPES.STATIC_SELECT,
    ELEMENT_TYPES.CONVERSATION_SELECT,
    ELEMENT_TYPES.USER_SELECT,
    ELEMENT_TYPES.CHANNEL_SELECT,
    ELEMENT_TYPES.USER_SELECT,
    ELEMENT_TYPES.DATEPICKER,
    ELEMENT_TYPES.OVERFLOW,
  ]);

  renderActions = createRenderElement([
    ELEMENT_TYPES.BUTTON,
    ELEMENT_TYPES.STATIC_SELECT,
    ELEMENT_TYPES.MULTI_STATIC_SELECT,
    ELEMENT_TYPES.CONVERSATION_SELECT,
    ELEMENT_TYPES.CHANNEL_SELECT,
    ELEMENT_TYPES.USER_SELECT,
    ELEMENT_TYPES.USER_SELECT,
    ELEMENT_TYPES.DATEPICKER,
  ]);

  renderContext = createRenderElement([
    ELEMENT_TYPES.IMAGE,
    ELEMENT_TYPES.TEXT,
    ELEMENT_TYPES.MARKDOWN,
  ])
}

export abstract class UiKitParserModal extends UiKitParserMessage {
  plainInput: (element: UiKitElement, context: BLOCK_CONTEXT, index: Number) => Component
  renderInputs = createRenderElement([
    ELEMENT_TYPES.STATIC_SELECT,
    ELEMENT_TYPES.PLAIN_TEXT_INPUT,
    ELEMENT_TYPES.MULTI_STATIC_SELECT,
    ELEMENT_TYPES.CONVERSATION_SELECT,
    ELEMENT_TYPES.CHANNEL_SELECT,
    ELEMENT_TYPES.USER_SELECT,
    ELEMENT_TYPES.USER_SELECT,
    ELEMENT_TYPES.DATEPICKER,
  ]);
}

export const uiKitGeneric = <T> (allowedItems?: Array<ELEMENT_TYPES>)  => (parser : T) => ({ blocks = [] }) =>
  blocks
    .filter(({ type }) => !allowedItems || allowedItems.includes(type))
    .map(({ type, ...block }: UiKitElement, i) => parser[type] ? parser[type](block, BLOCK_CONTEXT.BLOCK, i) : type );


const renderElement = ({ type, ...element }: UiKitElement, context: BLOCK_CONTEXT, parser: UiKitParser, index: Number) =>  {
  switch (type as ELEMENT_TYPES) {
    case ELEMENT_TYPES.OVERFLOW:
      return parser.overflow({ type, ...element } as UiKitText, context, index);
    case ELEMENT_TYPES.MARKDOWN:
    case ELEMENT_TYPES.TEXT:
      return parser.text({ type, ...element } as UiKitText, context, index);
    case ELEMENT_TYPES.BUTTON:
      return parser.button(element as UiKitElement, context, index);
    case ELEMENT_TYPES.IMAGE:
      return parser.image(element as UiKitElement, context, index);
    case ELEMENT_TYPES.STATIC_SELECT:
      return parser.staticSelect(element as UiKitElement, context, index);
    case ELEMENT_TYPES.MULTI_STATIC_SELECT:
      return parser.multiStaticSelect(element as UiKitElement, context, index);
    case ELEMENT_TYPES.DATEPICKER:
      return parser.datePicker(element as UiKitElement, context, index);
    case ELEMENT_TYPES.PLAIN_TEXT_INPUT:
      return parser.plainInput(element as UiKitElement, context, index);
    case ELEMENT_TYPES.CONVERSATION_SELECT:
    case ELEMENT_TYPES.CHANNEL_SELECT:
    case ELEMENT_TYPES.USER_SELECT:
      return parser.selectInput({ type, ...element }, context, index);
  }
};

export const createRenderElement = (allowedItems?: Array<ELEMENT_TYPES>) => (element: UiKitElement, context: BLOCK_CONTEXT, parser, index) => {
  if (allowedItems && !allowedItems.includes(element.type)) {
    return null;
  }
  return renderElement(element, context, parser, index);
};

export const uiKitText = uiKitGeneric<UiKitParserMessage>([
  ELEMENT_TYPES.TEXT,
  ELEMENT_TYPES.MARKDOWN,
]);

export const uiKitMessage = uiKitGeneric<UiKitParserMessage>([
  ELEMENT_TYPES.DIVIDER,
  ELEMENT_TYPES.SECTION,
  ELEMENT_TYPES.IMAGE,
  ELEMENT_TYPES.ACTIONS,
  ELEMENT_TYPES.CONTEXT
]);

export const uiKitModal = uiKitGeneric<UiKitParserModal>([
  ELEMENT_TYPES.SECTION,
  ELEMENT_TYPES.DIVIDER,
  ELEMENT_TYPES.IMAGE,
  ELEMENT_TYPES.ACTIONS,
  ELEMENT_TYPES.CONTEXT,
  ELEMENT_TYPES.INPUT
]);
