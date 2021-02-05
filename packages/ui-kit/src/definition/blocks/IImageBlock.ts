import { ElementType } from './ElementType';
import { IBlock } from './IBlock';
import { IPlainText } from './IPlainText';

export interface IImageBlock extends IBlock {
  type: ElementType.IMAGE;
  imageUrl: string;
  altText: string;
  title?: IPlainText;
}

// export interface IImageBlock extends IBlock {
//   type: BlockType.IMAGE;
//   imageUrl: string;
//   altText: string;
//   title?: ITextObject;
// }
