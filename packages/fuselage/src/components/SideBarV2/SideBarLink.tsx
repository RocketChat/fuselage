import type { Keys as Icons } from '@rocket.chat/icons';
import type { LinkHTMLAttributes } from 'react';
import React from 'react';

import { Badge } from '../Badge';
import { Icon } from '../Icon';

export const SideBarLink = ({
  selected,
  icon,
  badgeCount,
  ...props
}: {
  selected?: boolean;
  icon?: Icons;
  badgeCount?: number;
} & LinkHTMLAttributes<HTMLAnchorElement>) => (
  <a
    className={[
      'rcx-sidebar-v2-link',
      selected && 'rcx-sidebar-v2-item--selected',
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    <span className='rcx-sidebar-v2-link--section'>
      {icon && (
        <Icon name={icon} size='x20' className='rcx-sidebar-v2-link__icon' />
      )}
      <span>{props.children}</span>
    </span>
    {badgeCount && (
      <span className='rcx-sidebar-v2-link--section'>
        <Badge>{badgeCount}</Badge>
      </span>
    )}
  </a>
);
