import { createSurfaceRenderer } from '../createSurfaceRenderer';
import { MessageSurfaceLayout } from './UiKitParserMessage';

export const uiKitMessage = createSurfaceRenderer<
  unknown,
  MessageSurfaceLayout[number]
>();
