import { uiKitModal, UiKitParserModal } from '@rocket.chat/ui-kit';
import React from 'react';

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
  toggleButtonGroup,
} from '../renderers';
import ModalSurface from './ModalSurface';

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
ModalParser.prototype.toggleButtonGroup = toggleButtonGroup;

export const modalParser = new ModalParser();

export const UiKitModal = (blocks, conditions = {}) => (
  <ModalSurface>
    {uiKitModal(modalParser, { engine: 'rocket.chat', ...conditions })(blocks)}
  </ModalSurface>
);
