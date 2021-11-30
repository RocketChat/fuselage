import { createSurfaceRenderer } from '../createSurfaceRenderer';
import { ModalSurfaceLayout } from './UiKitParserModal';

export const uiKitModal = createSurfaceRenderer<
  unknown,
  ModalSurfaceLayout[number]
>();
