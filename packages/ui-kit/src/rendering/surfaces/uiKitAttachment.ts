import type { AttachmentSurfaceLayout } from './UiKitParserAttachment';
import { createSurfaceRenderer } from '../createSurfaceRenderer';

export const uiKitAttachment =
  createSurfaceRenderer<AttachmentSurfaceLayout[number]>();
