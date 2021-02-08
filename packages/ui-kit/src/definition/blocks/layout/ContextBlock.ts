import { ImageElement } from '../element/ImageElement';
import { TextObject } from '../text/TextObject';
import { Layout } from './Layout';

export type ContextBlock = Layout<{
  type: 'context';
  elements: (TextObject | ImageElement)[];
}>;
