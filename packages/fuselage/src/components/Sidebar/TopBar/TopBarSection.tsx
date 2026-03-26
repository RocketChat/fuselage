import type { ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../../primitives';
import SidebarDivider from '../SidebarDivider';

import { TopBarWrapper } from './TopBarWrapper';

type TopBarSectionProps = {
  children?: ReactNode;
  className?: string;
};

const TopBarSectionFrame = styled(RcxView, {
  name: 'SidebarTopBarSection',
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  height: 64,
  color: '$fontSecondaryInfo',
});

export const TopBarSection = ({
  className: _className,
  children,
  ...props
}: TopBarSectionProps) => (
  <TopBarSectionFrame {...(props as any)}>
    <TopBarWrapper children={children} />
    <SidebarDivider />
  </TopBarSectionFrame>
);
