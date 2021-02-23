import { Block } from '../blocks/Block';
import { BaseSurfaceRenderer } from './BaseSurfaceRenderer';
import { Conditions } from './Conditions';

export const createSurfaceRenderer = <OutputElement>() => (
  surfaceRenderer: BaseSurfaceRenderer<OutputElement>,
  conditions?: Conditions
) => (blocks: readonly { type: string }[]) =>
  surfaceRenderer.render(blocks as Block[], conditions);
