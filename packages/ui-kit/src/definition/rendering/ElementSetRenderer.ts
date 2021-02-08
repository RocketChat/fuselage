import { BlockContext } from '../../enums/BlockContext';
import { Block } from '../blocks';

export type ElementSetRenderer<T, E extends Block> = (
  element: E,
  context: BlockContext,
  _: undefined,
  index: number
) => T | null;
