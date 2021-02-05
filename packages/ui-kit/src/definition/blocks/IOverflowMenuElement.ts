import { BlockElementType } from './BlockElementType';
import { IInteractiveElement } from './IInteractiveElement';
import { IOptionObject } from './IOptionObject';

export interface IOverflowMenuElement extends IInteractiveElement {
  type: BlockElementType.OVERFLOW_MENU;
  options: Array<IOptionObject>;
  // confirm?: IConfirmationDialogObject;
}
