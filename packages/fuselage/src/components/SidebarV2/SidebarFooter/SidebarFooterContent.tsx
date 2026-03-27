import type { ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxText } from '../../../primitives';

type SidebarFooterContentProps = {
  children?: ReactNode;
  color?: string;
};

const SidebarFooterContentFrame = styled(RcxText, {
  name: 'SidebarV2FooterContent',
  fontFamily: '$body',
  fontSize: '$micro',
  fontWeight: '$micro',
  lineHeight: '$micro',
  letterSpacing: '$micro',
  overflowWrap: 'normal',
});

export const SidebarFooterContent = ({
  children,
  color: _color,
  ...props
}: SidebarFooterContentProps) => (
  <SidebarFooterContentFrame {...(props as any)}>
    {children}
  </SidebarFooterContentFrame>
);
