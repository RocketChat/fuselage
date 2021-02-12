import { LayoutBlockType } from '../../../enums/LayoutBlockType';
import { PlainText } from '../text/PlainText';
import { Layout } from './Layout';

export type ImageBlock = Layout<{
  type: `${LayoutBlockType.IMAGE}`;
  imageUrl: string;
  altText: string;
  title?: PlainText;
}>;
