import { ConfirmationDialog } from './ConfirmationDialog';
import { IElement } from './IElement';

export interface IActionableElement extends IElement {
  actionId: string;
  confirm?: ConfirmationDialog;
}
