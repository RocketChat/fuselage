import { LayoutBlockType } from '../../../enums/LayoutBlockType';
import { ImageElement } from '../element/ImageElement';
import { TextObject } from '../text/TextObject';
import { Layout } from './Layout';

export type ContextBlock = Layout<{
  type: `${LayoutBlockType.CONTEXT}`;
  elements: (TextObject | ImageElement)[];
}>;
