import type { Keys as Icons } from '@rocket.chat/icons';
import type { LinkHTMLAttributes, ReactNode } from 'react';
import React from 'react';

import { Icon } from '../Icon';

export const SideBarLink = ({
  selected,
  icon,
  badge,
  ...props
}: {
  selected?: boolean;
  icon?: Icons;
  badge?: ReactNode;
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
    {badge && <span className='rcx-sidebar-v2-link--section'>{badge}</span>}
  </a>
);
