import type { ConfirmationDialog } from './ConfirmationDialog';

export type Actionable<Block> = Block & {
  appId: string;
  blockId: string;
  actionId: string;
  confirm?: ConfirmationDialog;
};
