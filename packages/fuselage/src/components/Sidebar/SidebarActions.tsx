import type { ComponentProps } from 'react';
import React from 'react';

import { ActionButton } from '..';
import { ButtonGroup } from '../ButtonGroup';

type SidebarActionsProps = ComponentProps<typeof ButtonGroup>;

export const SidebarActions = (props: SidebarActionsProps) => (
  <ButtonGroup mb='neg-x2' medium {...props} />
);

type SidebarActionProps = ComponentProps<typeof ActionButton>;

export const SidebarAction = (props: SidebarActionProps) => (
  <ActionButton small {...props} />
);
