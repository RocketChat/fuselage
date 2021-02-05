import { ElementType } from './ElementType';
import { IElement } from './IElement';

export interface IPlainText extends IElement {
  type: ElementType.PLAIN_TEXT;
  text: string;
  emoji?: boolean;
}
