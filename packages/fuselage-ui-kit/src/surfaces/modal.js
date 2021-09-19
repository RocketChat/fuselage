import { UiKitParserModal } from '@rocket.chat/ui-kit';

import {
  actions,
  button,
  context,
  datepicker,
  divider,
  image,
  input,
  mrkdwn,
  multi_static_select,
  overflow,
  plain_text_input,
  plain_text,
  section,
  static_select,
  linear_scale,
} from '../renderers';
import ModalSurface from './ModalSurface';
import { createSurfaceRenderer } from './createSurfaceRenderer';

class ModalParser extends UiKitParserModal {}

ModalParser.prototype.plain_text = plain_text;
ModalParser.prototype.mrkdwn = mrkdwn;
ModalParser.prototype.divider = divider;
ModalParser.prototype.section = section;
ModalParser.prototype.image = image;
ModalParser.prototype.actions = actions;
ModalParser.prototype.context = context;
ModalParser.prototype.input = input;
ModalParser.prototype.button = button;
ModalParser.prototype.datepicker = datepicker;
ModalParser.prototype.static_select = static_select;
ModalParser.prototype.multi_static_select = multi_static_select;
ModalParser.prototype.overflow = overflow;
ModalParser.prototype.plain_text_input = plain_text_input;
ModalParser.prototype.linear_scale = linear_scale;

export const modalParser = new ModalParser();

export const UiKitModal = createSurfaceRenderer(ModalSurface, modalParser);
