import { ActionId } from './ActionId';
import { ConfirmationDialog } from './ConfirmationDialog';
import { IElement } from './IElement';

export interface IActionableElement extends IElement {
  actionId: ActionId;
  confirm?: ConfirmationDialog;
}
