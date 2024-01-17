import type { BannerSurfaceLayout } from './UiKitParserBanner';
import { createSurfaceRenderer } from '../createSurfaceRenderer';

export const uiKitBanner = createSurfaceRenderer<BannerSurfaceLayout[number]>();
