import { createSurfaceRenderer } from '../createSurfaceRenderer';
import type { ContextualBarSurfaceLayout } from './UiKitParserContextualBar';

export const uiKitContextualBar =
  createSurfaceRenderer<ContextualBarSurfaceLayout[number]>();
