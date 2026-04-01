import type { ReactNode } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../../primitives';

type TopBarProps = {
  children?: ReactNode;
  className?: string;
};

const TopBarFrame = styled(RcxView, {
  name: 'SidebarTopBar',
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  height: 64,
  color: '$fontSecondaryInfo',
});

/**
 * Sidebar TopBar and ToolBox.
 */
export const TopBar = ({ className: _className, ...props }: TopBarProps) => (
  <TopBarFrame {...(props as any)} />
);
