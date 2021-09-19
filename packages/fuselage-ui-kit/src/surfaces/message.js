import { UiKitParserMessage } from '@rocket.chat/ui-kit';

import {
  actions,
  button,
  context,
  datepicker,
  divider,
  image,
  mrkdwn,
  multi_static_select,
  overflow,
  plain_text,
  section,
  static_select,
} from '../renderers';
import MessageSurface from './MessageSurface';
import { createSurfaceRenderer } from './createSurfaceRenderer';

class MessageParser extends UiKitParserMessage {}

MessageParser.prototype.plain_text = plain_text;
MessageParser.prototype.mrkdwn = mrkdwn;
MessageParser.prototype.divider = divider;
MessageParser.prototype.section = section;
MessageParser.prototype.image = image;
MessageParser.prototype.actions = actions;
MessageParser.prototype.context = context;
MessageParser.prototype.button = button;
MessageParser.prototype.datepicker = datepicker;
MessageParser.prototype.static_select = static_select;
MessageParser.prototype.multi_static_select = multi_static_select;
MessageParser.prototype.overflow = overflow;

export const messageParser = new MessageParser();

export const UiKitMessage = createSurfaceRenderer(
  MessageSurface,
  messageParser
);
