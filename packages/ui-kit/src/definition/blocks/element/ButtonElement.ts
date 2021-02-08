import { PlainText } from '../text/PlainText';
import { Actionable } from './Actionable';

export type ButtonElement = Actionable<{
  type: 'button';
  text: PlainText;
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
