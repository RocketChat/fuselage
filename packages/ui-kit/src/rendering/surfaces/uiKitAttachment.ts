import { createSurfaceRenderer } from '../createSurfaceRenderer';
import type { AttachmentSurfaceLayout } from './UiKitParserAttachment';

export const uiKitAttachment =
  createSurfaceRenderer<AttachmentSurfaceLayout[number]>();
