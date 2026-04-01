import type { HTMLAttributes } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../../primitives';

const SidebarItemAvatarWrapperFrame = styled(RcxView, {
  name: 'SidebarV2ItemAvatarWrapper',
  display: 'flex',
  flexDirection: 'row',
});

export const SidebarItemAvatarWrapper = ({
  className: _className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <SidebarItemAvatarWrapperFrame {...(props as any)} />
);
