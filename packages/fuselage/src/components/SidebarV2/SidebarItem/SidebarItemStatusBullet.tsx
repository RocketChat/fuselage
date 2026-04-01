import { styled } from '@tamagui/core';

import { RcxView } from '../../../primitives';
import type { StatusBulletProps } from '../../StatusBullet';
import { StatusBullet } from '../../StatusBullet';

const SidebarItemStatusBulletFrame = styled(RcxView, {
  name: 'SidebarV2ItemStatusBullet',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 4,
});

export const SidebarItemStatusBullet = (props: StatusBulletProps) => (
  <SidebarItemStatusBulletFrame>
    <StatusBullet {...props} />
  </SidebarItemStatusBulletFrame>
);
