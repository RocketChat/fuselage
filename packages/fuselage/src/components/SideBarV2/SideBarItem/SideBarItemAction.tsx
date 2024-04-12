import type { Keys as Icons } from '@rocket.chat/icons';
import type { HTMLAttributes } from 'react';
import React from 'react';

import { Icon } from '../../Icon';

export const SideBarItemAction = ({
  children,
  className,
  icon = 'plus-small',
  ...props
}: {
  onClick: (e: Event) => void;
  icon?: Icons;
} & HTMLAttributes<HTMLDivElement>) => (
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
      <Icon name={icon} size='x20' />
      {children}
    </div>
  </li>
);
