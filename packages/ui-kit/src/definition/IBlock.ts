import { BlockId } from './BlockId';
import { IElement } from './IElement';

export interface IBlock extends IElement {
  blockId?: BlockId;
}
