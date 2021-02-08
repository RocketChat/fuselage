import { BlockContext, RenderableBlock } from '../blocks';

export type ElementSetRenderer<T, E extends RenderableBlock> = (
  element: E,
  context: BlockContext,
  _: undefined,
  index: number
) => T | null;
