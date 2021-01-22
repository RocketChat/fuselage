import { uiKitBanner, UiKitParserBanner } from '@rocket.chat/ui-kit';
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
import BannerSurface from './BannerSurface';

class BannerParser extends UiKitParserBanner {}

BannerParser.prototype.plainText = plainText;
BannerParser.prototype.mrkdwn = mrkdwn;
BannerParser.prototype.divider = divider;
BannerParser.prototype.section = section;
BannerParser.prototype.image = image;
BannerParser.prototype.actions = actions;
BannerParser.prototype.context = context;
BannerParser.prototype.button = button;
BannerParser.prototype.datePicker = datePicker;
BannerParser.prototype.staticSelect = staticSelect;
BannerParser.prototype.multiStaticSelect = multiStaticSelect;
BannerParser.prototype.overflow = overflow;

export const bannerParser = new BannerParser();

export const UiKitBanner = (blocks, conditions = {}) => (
  <BannerSurface>
    {uiKitBanner(bannerParser, { engine: 'rocket.chat', ...conditions })(
      blocks
    )}
  </BannerSurface>
);
