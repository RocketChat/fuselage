import { BlockContext, RenderableBlock } from '../blocks';

export type ElementRenderer<T, E extends RenderableBlock> = (
  element: E,
  context: BlockContext,
  index: number
) => T | null;
