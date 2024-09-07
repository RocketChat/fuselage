import type { ComponentProps } from 'react';

import { StatusBullet } from '../../StatusBullet';

export const SidebarItemStatusBullet = (
  props: ComponentProps<typeof StatusBullet>
) => (
  <div className='rcx-box rcx-box--full rcx-sidebar-v2-item__status-bullet'>
    <StatusBullet {...props} />
  </div>
);
