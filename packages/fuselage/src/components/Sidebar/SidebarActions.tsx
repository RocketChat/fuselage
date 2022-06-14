import type { ComponentProps } from 'react';
import React from 'react';

import { IconButton } from '../Button';
import { ButtonGroup } from '../ButtonGroup';

type SidebarActionsProps = ComponentProps<typeof ButtonGroup>;

export const SidebarActions = (props: SidebarActionsProps) => (
  <ButtonGroup mb='neg-x2' medium {...props} />
);

type SidebarActionProps = ComponentProps<typeof IconButton>;

export const SidebarAction = (props: SidebarActionProps) => (
  <IconButton small {...props} />
);
