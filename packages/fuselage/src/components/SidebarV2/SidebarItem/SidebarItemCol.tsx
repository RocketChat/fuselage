import type { HTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../../primitives';

const SidebarItemColFrame = styled(RcxView, {
  name: 'SidebarV2ItemCol',
  display: 'flex',
  overflow: 'hidden',
  flexDirection: 'column',
  width: '100%',
});

export const SidebarItemCol = ({
  className: _className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <SidebarItemColFrame {...(props as any)} />
);
