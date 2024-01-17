import type { MessageSurfaceLayout } from './UiKitParserMessage';
import { createSurfaceRenderer } from '../createSurfaceRenderer';

export const uiKitMessage =
  createSurfaceRenderer<MessageSurfaceLayout[number]>();
