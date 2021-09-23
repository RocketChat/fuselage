import { Block } from '../blocks/Block';
import { RenderableLayoutBlock } from '../blocks/RenderableLayoutBlock';
import { Conditions } from './Conditions';
import { SurfaceRenderer } from './SurfaceRenderer';

export const createSurfaceRenderer =
  <T, B extends RenderableLayoutBlock>() =>
  (surfaceRenderer: SurfaceRenderer<T, B>, conditions?: Conditions) =>
  (blocks: readonly { type: string }[]): T[] =>
    surfaceRenderer.render(blocks as Block[], conditions);
