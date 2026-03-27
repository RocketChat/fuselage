import type { ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../../primitives';
import SidebarDivider from '../SidebarDivider';

import { TopBarWrapper } from './TopBarWrapper';

type TopBarToolBoxProps = {
  children?: ReactNode;
  className?: string;
};

const TopBarToolBoxFrame = styled(RcxView, {
  name: 'SidebarTopBarToolBox',
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  height: 56,
  color: '$fontSecondaryInfo',
});

export const TopBarToolBox = ({
  children,
  className: _className,
  ...props
}: TopBarToolBoxProps) => (
  <TopBarToolBoxFrame {...(props as any)}>
    <TopBarWrapper children={children} />
    <SidebarDivider />
  </TopBarToolBoxFrame>
);
