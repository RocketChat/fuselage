import { LayoutBlockish } from '../LayoutBlockish';
import { TextObject } from '../TextObject';
import { ImageElement } from '../elements/ImageElement';

export type ContextBlock = LayoutBlockish<{
  type: 'context';
  elements: readonly (TextObject | ImageElement)[];
}>;
