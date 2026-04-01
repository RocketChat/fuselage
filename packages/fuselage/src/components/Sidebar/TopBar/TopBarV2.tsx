import type { ReactNode } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../../primitives';

type TopBarProps = {
  children?: ReactNode;
  className?: string;
};

const TopBarV2Frame = styled(RcxView, {
  name: 'SidebarTopBarV2',
  height: 44,
});

export const TopBarV2 = ({ className: _className, ...props }: TopBarProps) => (
  <TopBarV2Frame {...(props as any)} />
);
