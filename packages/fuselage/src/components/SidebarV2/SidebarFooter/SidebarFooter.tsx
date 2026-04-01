import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../../primitives';

const SidebarFooterFrame = styled(RcxView, {
  name: 'SidebarV2Footer',
  tag: 'footer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: 48,
  paddingBlockStart: 12,
  paddingBlockEnd: 8,
  paddingInline: 16,
  color: '$fontDefault',
  backgroundColor: '$surfaceSidebar',
  gap: 4,
});

export const SidebarFooter = ({
  children,
  ...props
}: HTMLAttributes<HTMLElement>) => (
  <SidebarFooterFrame {...(props as any)}>{children}</SidebarFooterFrame>
);
