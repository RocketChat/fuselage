import { forwardRef, type HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

export type SidebarProps = {
  collapsed?: boolean;
} & HTMLAttributes<HTMLElement>;

const SidebarV2Frame = styled(RcxView, {
  name: 'SidebarV2',
  tag: 'nav',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  color: '$fontDefault',
  backgroundColor: '$surfaceSidebar',
  variants: {
    collapsed: {
      true: {
        overflow: 'hidden',
        width: 48,
      },
    },
  } as const,
});

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  ({ collapsed, className: _className, ...props }, ref) => (
    <SidebarV2Frame
      ref={ref}
      collapsed={collapsed || undefined}
      {...(props as any)}
    />
  ),
);
