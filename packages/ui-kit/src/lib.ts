export const version  = '';

enum ELEMENT_TYPES {
  IMAGE= 'image',
  BUTTON= 'button',
  STATIC_SELECT=  'static_select',
  MULTI_STATIC_SELECT= 'multi_static_select',
  CONVERSATION_SELECT= 'conversations_select',
  CHANNEL_SELECT= 'channels_select',
  USER_SELECT = 'users_select',
  OVERFLOW = 'overflow',
  DATEPICKER =  'datepicker',
  PLAIN_TEXT_INPUT= 'plain_text_input',
  SECTION='section',
  DIVIDER='divider',
  ACTIONS='actions',
  CONTEXT='context',
  INPUT='input'
};

export enum BLOCK_CONTEXT {
  BLOCK,
  SECTION,
  ACTION,
  FORM
};

export type Component = any;

type UiKitParser = UiKitParserModal;

export interface UiKitText {
  text: string
}

export interface UiKitParserMessage {
  renderText: (text: UiKitText) => Component;
  button: (element, context: BLOCK_CONTEXT) => Component;
  image: (element, context: BLOCK_CONTEXT) => Component;
  staticSelect: (element, context: BLOCK_CONTEXT) => Component;
  multiStaticSelect: (element, context: BLOCK_CONTEXT) => Component;
  selectInput: (element, context: BLOCK_CONTEXT) => Component;
  context: (element, context: BLOCK_CONTEXT) => Component;
  divider: (element, context: BLOCK_CONTEXT) => Component;
  actions: (element, context: BLOCK_CONTEXT) => Component;
}

export interface UiKitParserModal extends UiKitParserMessage {
  plainInput: (element, context: BLOCK_CONTEXT) => Component
}

export const uiKitGeneric = (allowedItems?: Array<ELEMENT_TYPES>) => (parser : UiKitParser) => ({ blocks = [] }) =>
  blocks
    .filter(({ type }) => !allowedItems || allowedItems.includes(type))
    .map(({ type, ...block }) => parser[type] ? parser[type](block, BLOCK_CONTEXT.BLOCK, parser) : type );


const renderElement = ({ type, ...element }, context: BLOCK_CONTEXT, parser: UiKitParser) =>  {
  switch (type as ELEMENT_TYPES) {
    case ELEMENT_TYPES.BUTTON:
      return parser.button(element, context);
    case ELEMENT_TYPES.IMAGE:
      return parser.image(element, context);
    case ELEMENT_TYPES.STATIC_SELECT:
      return parser.staticSelect(element, context);
    case ELEMENT_TYPES.MULTI_STATIC_SELECT:
      return parser.multiStaticSelect(element, context);
    case ELEMENT_TYPES.PLAIN_TEXT_INPUT:
      return parser.plainInput(element, context);
    case ELEMENT_TYPES.CONVERSATION_SELECT:
    case ELEMENT_TYPES.CHANNEL_SELECT:
    case ELEMENT_TYPES.USER_SELECT:
      return parser.selectInput({ type, ...element }, context);
  }
};

export const createRenderElement = (allowedItems?: Array<ELEMENT_TYPES>) => (element, context: BLOCK_CONTEXT, parser) => {
  if (allowedItems && !allowedItems.includes(element.type)) {
    return null;
  }
  return renderElement(element, context, parser);
};

export const uiKitMessage = uiKitGeneric([
  ELEMENT_TYPES.SECTION,
  ELEMENT_TYPES.DIVIDER,
  ELEMENT_TYPES.IMAGE,
  ELEMENT_TYPES.ACTIONS,
  ELEMENT_TYPES.CONTEXT
]);

export const uiKitModal = uiKitGeneric([
  ELEMENT_TYPES.SECTION,
  ELEMENT_TYPES.DIVIDER,
  ELEMENT_TYPES.IMAGE,
  ELEMENT_TYPES.ACTIONS,
  ELEMENT_TYPES.CONTEXT,
  ELEMENT_TYPES.INPUT
]);
