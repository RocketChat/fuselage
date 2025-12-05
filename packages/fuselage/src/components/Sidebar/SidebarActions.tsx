import { forwardRef } from 'react';

import { IconButton } from '../Button';
import type { IconButtonProps } from '../Button/IconButton';
import type { ButtonGroupProps } from '../ButtonGroup';
import { ButtonGroup } from '../ButtonGroup';

export type SidebarActionsProps = ButtonGroupProps;

export const SidebarActions = forwardRef<HTMLDivElement, SidebarActionsProps>(
  function SidebarActions(props, ref) {
    return <ButtonGroup ref={ref} {...props} />;
  },
);

export type SidebarActionProps = IconButtonProps;

export const SidebarAction = forwardRef<HTMLElement, SidebarActionProps>(
  function SidebarAction(props, ref) {
    return <IconButton small ref={ref} {...props} />;
  },
);
