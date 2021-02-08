import { Actionable } from './Actionable';
import { ElementType } from './ElementType';
import { PlainText } from './PlainText';

export type ButtonElement = Actionable<{
  type: ElementType.BUTTON;
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
