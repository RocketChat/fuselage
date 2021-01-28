import { uiKitBanner, UiKitParserBanner } from '@rocket.chat/ui-kit';
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
  linearScale,
} from '../renderers';
import BannerSurface from './BannerSurface';

class BannerParser extends UiKitParserBanner {}

BannerParser.prototype.plainText = plainText;
BannerParser.prototype.mrkdwn = mrkdwn;
BannerParser.prototype.divider = divider;
BannerParser.prototype.section = section;
BannerParser.prototype.image = image;
BannerParser.prototype.actions = actions;
BannerParser.prototype.context = context;
BannerParser.prototype.input = input;
BannerParser.prototype.button = button;
BannerParser.prototype.datePicker = datePicker;
BannerParser.prototype.staticSelect = staticSelect;
BannerParser.prototype.multiStaticSelect = multiStaticSelect;
BannerParser.prototype.overflow = overflow;
BannerParser.prototype.plainInput = plainInput;
BannerParser.prototype.linearScale = linearScale;

export const bannerParser = new BannerParser();

export const UiKitBanner = (blocks, conditions = {}) => (
  <BannerSurface>
    {uiKitBanner(bannerParser, { engine: 'rocket.chat', ...conditions })(
      blocks
    )}
  </BannerSurface>
);
