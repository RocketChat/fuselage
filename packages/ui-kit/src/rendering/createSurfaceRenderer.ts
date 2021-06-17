import { Block } from '../blocks/Block';
import {
  BaseSurfaceRenderer,
  PossibleAllowedLayouts,
} from './BaseSurfaceRenderer';
import { Conditions } from './Conditions';

export const createSurfaceRenderer = <
  OutputElement,
  AllowedBlockTypes extends PossibleAllowedLayouts
>() => (
  surfaceRenderer: BaseSurfaceRenderer<OutputElement, AllowedBlockTypes>,
  conditions?: Conditions
) => (blocks: readonly { type: string }[]): OutputElement[] =>
  surfaceRenderer.render(blocks as Block[], conditions);
