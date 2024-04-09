import type { HTMLAttributes } from 'react';
import React from 'react';

import { Icon } from '../../Icon';

export const SideBarItemAction = ({
  children,
  className,
  ...props
}: { onClick: (e: Event) => void } & HTMLAttributes<HTMLDivElement>) => (
  <li>
    <div
      role='button'
      className={[
        'rcx-sidebar-v2-item rcx-sidebar-v2-item__action',
        className && className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <Icon name='plus-small' size='x20' />
      {children}
    </div>
  </li>
);
