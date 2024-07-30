import type { ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import type { IconButtonProps } from '../Button';
import { IconButton } from '../Button';
import type { ButtonGroupProps } from '../ButtonGroup';
import { ButtonGroup } from '../ButtonGroup';

export type SidebarActionsProps = ButtonGroupProps;

export const SidebarActions = forwardRef(function SidebarActions(
  props: SidebarActionsProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return <ButtonGroup ref={ref} {...props} />;
});

export type SidebarActionProps = IconButtonProps;

export const SidebarAction = forwardRef(function SidebarAction(
  props: SidebarActionProps,
  ref: ForwardedRef<HTMLElement>
) {
  return <IconButton small ref={ref} {...props} />;
});
