import {
  TextObjectType,
  UiKitParserMessage,
  BlockElementType,
  LayoutBlockType,
} from '@rocket.chat/ui-kit';
import React from 'react';

import {
  actions,
  button,
  context,
  datePicker,
  divider,
  image,
  mrkdwn,
  multiStaticSelect,
  overflow,
  plainText,
  section,
  staticSelect,
} from '../renderers';
import MessageSurface from './MessageSurface';

class MessageParser extends UiKitParserMessage {
  [TextObjectType.PLAIN_TEXT] = plainText;

  [TextObjectType.MARKDOWN] = mrkdwn;

  [BlockElementType.BUTTON] = button;

  [BlockElementType.DATEPICKER] = datePicker;

  [BlockElementType.IMAGE] = image;

  [BlockElementType.STATIC_SELECT] = staticSelect;

  [BlockElementType.MULTI_STATIC_SELECT] = multiStaticSelect;

  [BlockElementType.OVERFLOW] = overflow;

  [LayoutBlockType.ACTIONS] = actions;

  [LayoutBlockType.CONTEXT] = context;

  [LayoutBlockType.DIVIDER] = divider;

  [LayoutBlockType.SECTION] = section;
}

export const messageParser = new MessageParser();

export const UiKitMessage = (blocks, conditions = {}) => (
  <MessageSurface>
    {messageParser.render(blocks, { engine: 'rocket.chat', ...conditions })}
  </MessageSurface>
);
