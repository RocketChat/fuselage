import type { RefAttributes } from 'react';

import { IconButton } from '../Button';
import type { IconButtonProps } from '../Button/IconButton';
import type { ButtonGroupProps } from '../ButtonGroup';
import { ButtonGroup } from '../ButtonGroup';

/**
 * @deprecated Use `SidebarV2ActionsProps` instead.
 */
export type SidebarActionsProps = ButtonGroupProps;

/**
 * @deprecated Use `SidebarV2Actions` instead.
 */
export function SidebarActions(props: SidebarActionsProps) {
  return <ButtonGroup {...props} />;
}

/**
 * @deprecated Use `SidebarV2ActionProps` instead.
 */
export type SidebarActionProps = Omit<IconButtonProps, 'ref'> &
  RefAttributes<HTMLElement>;

/**
 * @deprecated Use `SidebarV2Action` instead.
 */
export function SidebarAction(props: SidebarActionProps) {
  return <IconButton small {...props} />;
}
