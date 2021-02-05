import { ContextElement } from './ContextElement';
import { ElementType } from './ElementType';
import { IBlock } from './IBlock';

export interface IContextBlock extends IBlock {
  type: ElementType.CONTEXT;
  elements: ContextElement[];
}
