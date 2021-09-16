import { Block } from '../blocks/Block';
import { Conditions } from './Conditions';
import { SurfaceRenderer, PossibleAllowedLayouts } from './SurfaceRenderer';

export const createSurfaceRenderer =
  <OutputElement, AllowedBlockTypes extends PossibleAllowedLayouts>() =>
  (
    surfaceRenderer: SurfaceRenderer<OutputElement, AllowedBlockTypes>,
    conditions?: Conditions
  ) =>
  (blocks: readonly { type: string }[]): OutputElement[] =>
    surfaceRenderer.render(blocks as Block[], conditions);
