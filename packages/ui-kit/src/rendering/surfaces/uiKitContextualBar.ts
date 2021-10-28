import { createSurfaceRenderer } from '../createSurfaceRenderer';
import { ContextualBarSurfaceLayout } from './UIKitParserContextualBar';

export const uiKitContextualBar = createSurfaceRenderer<
  unknown,
  ContextualBarSurfaceLayout[number]
>();
