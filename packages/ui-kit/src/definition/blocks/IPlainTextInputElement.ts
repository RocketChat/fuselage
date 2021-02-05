import { BlockElementType } from './BlockElementType';
import { IInputElement } from './IInputElement';

export interface IPlainTextInputElement extends IInputElement {
  type: BlockElementType.PLAIN_TEXT_INPUT;
  initialValue?: string;
  multiline?: boolean;
}
