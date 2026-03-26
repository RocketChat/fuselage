import type { HTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../../primitives';

const SidebarItemMenuFrame = styled(RcxView, {
  name: 'SidebarV2ItemMenu',
  flexShrink: 0,
  width: 0,
  height: 20,
  marginInlineEnd: -4,
  opacity: 0,
  '$group-sidebarV2Item-hover': {
    display: 'flex' as any,
    flexDirection: 'row' as any,
    alignItems: 'center' as any,
    width: 20,
    height: 20,
    marginInlineEnd: 0,
    opacity: 1,
  },
});

export const SidebarItemMenu = ({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <SidebarItemMenuFrame {...(props as any)}>
    {children}
  </SidebarItemMenuFrame>
);
