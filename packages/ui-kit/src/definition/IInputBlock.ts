import { ElementType } from './ElementType';
import { IBlock } from './IBlock';
import { IPlainText } from './IPlainText';
import { InputElement } from './InputElement';

export interface IInputBlock extends IBlock {
  type: ElementType.INPUT;
  label: IPlainText;
  element: InputElement;
  hint?: IPlainText;
  optional?: boolean;
}
