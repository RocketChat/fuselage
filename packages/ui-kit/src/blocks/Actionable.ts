import { ConfirmationDialog } from './ConfirmationDialog';

export type Actionable<Block> = Block & {
  actionId: string;
  confirm?: ConfirmationDialog;
};
