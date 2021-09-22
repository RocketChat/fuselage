import { createSurfaceRenderer } from '../createSurfaceRenderer';
import { AttachmentSurfaceLayout } from './UiKitParserAttachment';

export const uiKitAttachment = createSurfaceRenderer<
  unknown,
  AttachmentSurfaceLayout[number]
>();
