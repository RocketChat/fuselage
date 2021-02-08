import { ElementType } from './ElementType';
import { ImageElement } from './ImageElement';
import { Layout } from './Layout';
import { TextObject } from './TextObject';

export type ContextBlock = Layout<{
  type: ElementType.CONTEXT;
  elements: (TextObject | ImageElement)[];
}>;

// export interface IContextBlock extends IBlock {
//   type: BlockType.CONTEXT;
//   elements: Array<ITextObject | IImageElement>;
// }
