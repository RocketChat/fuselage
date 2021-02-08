import { ElementType } from './ElementType';
import { Layout } from './Layout';
import { PlainText } from './PlainText';

export type ImageBlock = Layout<{
  type: ElementType.IMAGE;
  imageUrl: string;
  altText: string;
  title?: PlainText;
}>;

// export interface IImageBlock extends IBlock {
//   type: BlockType.IMAGE;
//   imageUrl: string;
//   altText: string;
//   title?: ITextObject;
// }
