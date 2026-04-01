import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../../primitives';

const SidebarItemRowFrame = styled(RcxView, {
  name: 'SidebarV2ItemRow',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 4,
});

export const SidebarItemRow = ({
  className: _className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <SidebarItemRowFrame {...(props as any)} />
);
