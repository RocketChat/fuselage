import type { ModalSurfaceLayout } from './UiKitParserModal';
import { createSurfaceRenderer } from '../createSurfaceRenderer';

export const uiKitModal = createSurfaceRenderer<ModalSurfaceLayout[number]>();
