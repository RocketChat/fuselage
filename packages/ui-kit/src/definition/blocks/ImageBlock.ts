import { ElementType } from './ElementType';
import { IPlainText } from './IPlainText';
import { Layout } from './Layout';

export type ImageBlock = Layout<{
  type: ElementType.IMAGE;
  imageUrl: string;
  altText: string;
  title?: IPlainText;
}>;

// export interface IImageBlock extends IBlock {
//   type: BlockType.IMAGE;
//   imageUrl: string;
//   altText: string;
//   title?: ITextObject;
// }
