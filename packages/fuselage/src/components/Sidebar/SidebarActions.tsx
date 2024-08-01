import type { ComponentProps, Ref } from 'react';
import { forwardRef } from 'react';

import { IconButton } from '../Button';
import { ButtonGroup } from '../ButtonGroup';

type SidebarActionsProps = ComponentProps<typeof ButtonGroup>;

export const SidebarActions = forwardRef(function SidebarActions(
  props: SidebarActionsProps,
  ref: Ref<HTMLDivElement>
) {
  return <ButtonGroup ref={ref} {...props} />;
});

type SidebarActionProps = ComponentProps<typeof IconButton>;

export const SidebarAction = forwardRef(function SidebarAction(
  props: SidebarActionProps,
  ref: Ref<HTMLElement>
) {
  return <IconButton small ref={ref} {...props} />;
});
