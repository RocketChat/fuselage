import { ContextElement } from './ContextElement';
import { ElementType } from './ElementType';
import { IBlock } from './IBlock';

export interface IContextBlock extends IBlock {
  type: ElementType.CONTEXT;
  elements: ContextElement[];
}

// export interface IContextBlock extends IBlock {
//   type: BlockType.CONTEXT;
//   elements: Array<ITextObject | IImageElement>;
// }
