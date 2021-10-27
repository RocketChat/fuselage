import { createSurfaceRenderer } from '../createSurfaceRenderer';
import { ContextualBarSurfaceLayout } from './UiKitParserContextualBar';

export const uiKitContextualBar = createSurfaceRenderer<
  unknown,
  ContextualBarSurfaceLayout[number]
>();
