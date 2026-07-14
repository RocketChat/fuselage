import type { RefAttributes } from 'react';

import { IconButton } from '../Button';
import type { IconButtonProps } from '../Button/IconButton';
import type { ButtonGroupProps } from '../ButtonGroup';
import { ButtonGroup } from '../ButtonGroup';

export type SidebarActionsProps = ButtonGroupProps;

export function SidebarActions(props: SidebarActionsProps) {
  return <ButtonGroup {...props} />;
}

export type SidebarActionProps = Omit<IconButtonProps, 'ref'> &
  RefAttributes<HTMLElement>;

export function SidebarAction(props: SidebarActionProps) {
  return <IconButton small {...props} />;
}
