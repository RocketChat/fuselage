import { ElementType } from './ElementType';
import { IBlock } from './IBlock';

export interface IDividerBlock extends IBlock {
  type: ElementType.DIVIDER;
}
