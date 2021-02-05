import { BlockContext, IElement } from '../blocks';

export type ElementSetRenderer<T, E extends IElement> = (
  element: E,
  context: BlockContext,
  _: undefined,
  index: number
) => T;
