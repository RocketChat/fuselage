import type { ContextualBarSurfaceLayout } from './UiKitParserContextualBar';
import { createSurfaceRenderer } from '../createSurfaceRenderer';

export const uiKitContextualBar =
  createSurfaceRenderer<ContextualBarSurfaceLayout[number]>();
