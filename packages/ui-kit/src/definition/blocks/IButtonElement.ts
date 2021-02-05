import { ElementType } from './ElementType';
import { IActionableElement } from './IActionableElement';
import { IPlainText } from './IPlainText';

export interface IButtonElement extends IActionableElement {
  type: ElementType.BUTTON;
  text: IPlainText;
  url?: string;
  value?: string;
  style?: 'primary' | 'danger';
}

// export interface IButtonElement extends IInteractiveElement {
//   type: BlockElementType.BUTTON;
//   text: ITextObject;
//   value?: string;
//   url?: string;
//   style?: ButtonStyle;
//   // confirm?: IConfirmationDialogObject;
// }
