import { createSurfaceRenderer } from '../createSurfaceRenderer';
import { BannerSurfaceLayout } from './UiKitParserBanner';

export const uiKitBanner = createSurfaceRenderer<
  unknown,
  BannerSurfaceLayout[number]
>();
