export enum ElementType {
  PLAIN_TEXT = 'plain_text', // TextObjectType.PLAIN_TEXT
  MARKDOWN = 'mrkdwn', // TextObjectType.MARKDOWN
  DIVIDER = 'divider', // BlockType.DIVIDER
  SECTION = 'section', // BlockType.SECTION
  INPUT = 'input', // BlockType.INPUT
  CONDITIONAL = 'conditional', // BlockType.CONDITIONAL
  IMAGE = 'image', // BlockType.IMAGE | BlockElementType.IMAGE
  ACTIONS = 'actions', // BlockType.ACTIONS
  CONTEXT = 'context', // BlockType.CONTEXT
  BUTTON = 'button', // BlockElementType.BUTTON
  OVERFLOW = 'overflow', // BlockElementType.OVERFLOW
  PLAIN_TEXT_INPUT = 'plain_text_input', // BlockElementType.PLAIN_TEXT_INPUT
  /** @deprecated */
  CONVERSATION_SELECT = 'conversations_select', // BlockElementType.CONVERSATIONS_SELECT
  /** @deprecated */
  CHANNEL_SELECT = 'channels_select', // BlockElementType.CHANNELS_SELECT
  /** @deprecated */
  USER_SELECT = 'users_select', // BlockElementType.USERS_SELECT
  STATIC_SELECT = 'static_select', // BlockElementType.STATIC_SELECT
  MULTI_STATIC_SELECT = 'multi_static_select', // BlockElementType.MULTI_STATIC_SELECT
  DATEPICKER = 'datepicker', // BlockElementType.DATEPICKER
  LINEAR_SCALE = 'linear_scale', // BlockElementType.LINEAR_SCALE
}
