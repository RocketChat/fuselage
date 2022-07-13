import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import { IconButton } from '../Button';
import { ButtonGroup } from '../ButtonGroup';

type SidebarActionsProps = ComponentProps<typeof ButtonGroup>;

export const SidebarActions = (props: SidebarActionsProps) => (
  <ButtonGroup mb='neg-x2' medium {...props} />
);

type SidebarActionProps = ComponentProps<typeof IconButton>;

export const SidebarAction = forwardRef(function SidebarAction(
  props: SidebarActionProps,
  ref: Ref<any>
) {
  return <IconButton small ref={ref} {...props} />;
});
