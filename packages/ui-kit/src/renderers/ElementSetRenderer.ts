import { BlockContext, IElement } from '../definition/blocks';

export type ElementSetRenderer<T, E extends IElement> = (
  element: E,
  context: BlockContext,
  _: undefined,
  index: number
) => T;
