import { Layout } from '../Layout';
import { LayoutBlockType } from '../LayoutBlockType';
import { PlainText } from '../text/PlainText';

export type ImageBlock = Layout<{
  type: `${LayoutBlockType.IMAGE}`;
  imageUrl: string;
  altText: string;
  title?: PlainText;
}>;
