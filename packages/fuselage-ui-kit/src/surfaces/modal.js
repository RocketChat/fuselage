import { UiKitParserModal } from '@rocket.chat/ui-kit';

import {
  actions,
  button,
  context,
  datePicker,
  divider,
  image,
  input,
  mrkdwn,
  multiStaticSelect,
  overflow,
  plainInput,
  plainText,
  section,
  staticSelect,
  linearScale,
} from '../renderers';
import ModalSurface from './ModalSurface';
import { createSurfaceRenderer } from './createSurfaceRenderer';

class ModalParser extends UiKitParserModal {}

ModalParser.prototype.plainText = plainText;
ModalParser.prototype.mrkdwn = mrkdwn;
ModalParser.prototype.divider = divider;
ModalParser.prototype.section = section;
ModalParser.prototype.image = image;
ModalParser.prototype.actions = actions;
ModalParser.prototype.context = context;
ModalParser.prototype.input = input;
ModalParser.prototype.button = button;
ModalParser.prototype.datePicker = datePicker;
ModalParser.prototype.staticSelect = staticSelect;
ModalParser.prototype.multiStaticSelect = multiStaticSelect;
ModalParser.prototype.overflow = overflow;
ModalParser.prototype.plainInput = plainInput;
ModalParser.prototype.linearScale = linearScale;

export const modalParser = new ModalParser();

export const UiKitModal = createSurfaceRenderer(ModalSurface, modalParser);
