import { BlockContext } from '../../enums/BlockContext';
import { Block } from '../blocks';

export type ElementRenderer<T, E extends Block> = (
  element: E,
  context: BlockContext,
  index: number
) => T | null;
