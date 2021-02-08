import { PlainText } from '../text/PlainText';
import { Layout } from './Layout';

export type ImageBlock = Layout<{
  type: 'image';
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
