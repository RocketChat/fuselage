import { Actionable } from './Actionable';
import { ElementType } from './ElementType';
import { IPlainText } from './IPlainText';

export type ButtonElement = Actionable<{
  type: ElementType.BUTTON;
  text: IPlainText;
  url?: string;
  value?: string;
  style?: 'primary' | 'danger';
}>;

// export interface IButtonElement extends IInteractiveElement {
//   type: BlockElementType.BUTTON;
//   text: ITextObject;
//   value?: string;
//   url?: string;
//   style?: ButtonStyle;
//   // confirm?: IConfirmationDialogObject;
// }
