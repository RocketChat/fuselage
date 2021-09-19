import { UiKitParserBanner } from '@rocket.chat/ui-kit';

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
import BannerSurface from './BannerSurface';
import { createSurfaceRenderer } from './createSurfaceRenderer';

class BannerParser extends UiKitParserBanner {}

BannerParser.prototype.plain_text = plain_text;
BannerParser.prototype.mrkdwn = mrkdwn;
BannerParser.prototype.divider = divider;
BannerParser.prototype.section = section;
BannerParser.prototype.image = image;
BannerParser.prototype.actions = actions;
BannerParser.prototype.context = context;
BannerParser.prototype.input = input;
BannerParser.prototype.button = button;
BannerParser.prototype.datepicker = datepicker;
BannerParser.prototype.static_select = static_select;
BannerParser.prototype.multi_static_select = multi_static_select;
BannerParser.prototype.overflow = overflow;
BannerParser.prototype.plain_text_input = plain_text_input;
BannerParser.prototype.linear_scale = linear_scale;

export const bannerParser = new BannerParser();

export const UiKitBanner = createSurfaceRenderer(BannerSurface, bannerParser);
