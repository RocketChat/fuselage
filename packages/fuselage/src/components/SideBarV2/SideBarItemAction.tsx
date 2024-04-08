import type { HTMLAttributes } from 'react';
import React from 'react';

import { Icon } from '../Icon';

export const SideBarItemAction = ({
  children,
  ...props
}: { onClick: (e: Event) => void } & HTMLAttributes<HTMLDivElement>) => (
  <li>
    <div
      role='button'
      className='rcx-sidebar-v2-item rcx-sidebar-v2-item__action'
      {...props}
    >
      <Icon name='plus-small' size='x20' />
      {children}
    </div>
  </li>
);
