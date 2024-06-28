import type { Keys as Icons } from '@rocket.chat/icons';
import type { LinkHTMLAttributes, ReactNode } from 'react';
import React from 'react';

import { appendClassName } from '../../helpers/appendClassName';
import { patchChildren } from '../../helpers/patchChildren';
import { Icon } from '../Icon';

export const SideBarLink = ({
  selected,
  icon,
  badge,
  menu,
  ...props
}: {
  selected?: boolean;
  icon?: Icons;
  badge?: ReactNode;
  menu?: ReactNode;
} & LinkHTMLAttributes<HTMLAnchorElement>) => (
  <a
    className={[
      'rcx-sidebar-v2-link',
      'rcx-sidebar-v2-item',
      selected && 'rcx-sidebar-v2-item--selected',
    ]
      .filter(Boolean)
      .join(' ')}
    onClick={(e) => e.stopPropagation()}
    {...props}
  >
    {icon && (
      <Icon name={icon} size='x20' className='rcx-sidebar-v2-item__icon' />
    )}
    <span className='rcx-sidebar-v2-item__title'>{props.children}</span>
    {badge}
    {menu &&
      patchChildren(
        <span className='rcx-sidebar-v2-item__menu-wrapper'>{menu}</span>,
        (childProps: { className: string | string[] }) => ({
          className: appendClassName(
            childProps.className,
            'rcx-sidebar-v2-item__menu rcx-box--animated'
          ),
        })
      )}
  </a>
);
