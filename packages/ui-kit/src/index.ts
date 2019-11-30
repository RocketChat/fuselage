export const version = "DEVELOPMENT";

enum ELEMENT_TYPES {
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
  TEXT='text',
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
  text: (text: UiKitText, context) => Component;
  button: (element: UiKitElement, context: BLOCK_CONTEXT) => Component;
  image: (element: UiKitElement, context: BLOCK_CONTEXT) => Component;
  staticSelect: (element: UiKitElement, context: BLOCK_CONTEXT) => Component;
  multiStaticSelect: (element: UiKitElement, context: BLOCK_CONTEXT) => Component;
  selectInput: (element: UiKitElement, context: BLOCK_CONTEXT) => Component;
  context: (element: UiKitElement, context: BLOCK_CONTEXT) => Component;
  divider: (element: UiKitElement, context: BLOCK_CONTEXT) => Component;
  actions: (element: UiKitElement, context: BLOCK_CONTEXT) => Component;

  renderAccessories = createRenderElement([
    ELEMENT_TYPES.IMAGE,
    ELEMENT_TYPES.BUTTON,
    ELEMENT_TYPES.STATIC_SELECT,
    ELEMENT_TYPES.MULTI_STATIC_SELECT,
    ELEMENT_TYPES.CONVERSATION_SELECT,
    ELEMENT_TYPES.CHANNEL_SELECT,
    ELEMENT_TYPES.USER_SELECT,
    ELEMENT_TYPES.USER_SELECT,
    ELEMENT_TYPES.DATEPICKER,
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
  plainInput: (element: UiKitElement, context: BLOCK_CONTEXT) => Component
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
    .map(({ type, ...block }: UiKitElement) => parser[type] ? parser[type](block, BLOCK_CONTEXT.BLOCK, parser) : type );


const renderElement = ({ type, ...element }: UiKitElement, context: BLOCK_CONTEXT, parser: UiKitParser) =>  {
  switch (type as ELEMENT_TYPES) {
    case ELEMENT_TYPES.MARKDOWN:
    case ELEMENT_TYPES.TEXT:
      return parser.text({ type, ...element } as UiKitText, context);
    case ELEMENT_TYPES.BUTTON:
      return parser.button(element as UiKitElement, context);
    case ELEMENT_TYPES.IMAGE:
      return parser.image(element as UiKitElement, context);
    case ELEMENT_TYPES.STATIC_SELECT:
      return parser.staticSelect(element as UiKitElement, context);
    case ELEMENT_TYPES.MULTI_STATIC_SELECT:
      return parser.multiStaticSelect(element as UiKitElement, context);
    case ELEMENT_TYPES.DATEPICKER:
    case ELEMENT_TYPES.PLAIN_TEXT_INPUT:
      return parser.plainInput(element as UiKitElement, context);
    case ELEMENT_TYPES.CONVERSATION_SELECT:
    case ELEMENT_TYPES.CHANNEL_SELECT:
    case ELEMENT_TYPES.USER_SELECT:
      return parser.selectInput({ type, ...element }, context);
  }
};

export const createRenderElement = (allowedItems?: Array<ELEMENT_TYPES>) => (element: UiKitElement, context: BLOCK_CONTEXT, parser) => {
  if (allowedItems && !allowedItems.includes(element.type)) {
    return null;
  }
  return renderElement(element, context, parser);
};

export const uiKitMessage = uiKitGeneric<UiKitParserMessage>([
  ELEMENT_TYPES.SECTION,
  ELEMENT_TYPES.DIVIDER,
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
