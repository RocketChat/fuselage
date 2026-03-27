import type { ReactNode } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../../primitives';

type TopBarWrapperProps = {
  children?: ReactNode;
};

const TopBarWrapperFrame = styled(RcxView, {
  name: 'SidebarTopBarWrapper',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexGrow: 1,
  paddingInline: 16,
});

export const TopBarWrapper = ({ children }: TopBarWrapperProps) => (
  <TopBarWrapperFrame>{children}</TopBarWrapperFrame>
);
