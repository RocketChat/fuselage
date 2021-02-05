import { ElementType } from './ElementType';
import { IActionableElement } from './IActionableElement';
import { IPlainText } from './IPlainText';

export interface IPlainTextInput extends IActionableElement {
  type: ElementType.PLAIN_TEXT_INPUT;
  placeholder?: IPlainText;
  initialValue?: string;
  multiline?: boolean;
  minLength?: number;
  maxLength?: number;
}
