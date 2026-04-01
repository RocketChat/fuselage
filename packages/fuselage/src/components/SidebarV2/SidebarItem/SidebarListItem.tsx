import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../../primitives';

type SidebarListItemProps = {
  selected?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const SidebarListItemFrame = styled(RcxView, {
  name: 'SidebarV2ListItem',
  role: 'listitem',
});

export const SidebarListItem = forwardRef<HTMLDivElement, SidebarListItemProps>(
  ({ className: _className, children, ...props }, ref) => (
    <SidebarListItemFrame ref={ref} {...(props as any)}>
      {children}
    </SidebarListItemFrame>
  ),
);
