import { Layout } from '../Layout';
import { LayoutBlockType } from '../LayoutBlockType';
import { TextObject } from '../TextObject';
import { ImageElement } from '../elements/ImageElement';

export type ContextBlock = Layout<{
  type: `${LayoutBlockType.CONTEXT}`;
  elements: (TextObject | ImageElement)[];
}>;
