import { LayoutBlockish } from '../LayoutBlockish';
import { PlainText } from '../text/PlainText';

export type ImageBlock = LayoutBlockish<{
  type: 'image';
  imageUrl: string;
  altText: string;
  title?: PlainText;
}>;
