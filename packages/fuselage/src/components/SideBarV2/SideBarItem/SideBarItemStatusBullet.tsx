import type { ComponentProps } from 'react';
import React from 'react';

import { StatusBullet } from '../../StatusBullet';

export const SideBarItemStatusBullet = (
  props: ComponentProps<typeof StatusBullet>
) => (
  <div className='rcx-sidebar-v2-item__status-bullet'>
    <StatusBullet {...props} />
  </div>
);
