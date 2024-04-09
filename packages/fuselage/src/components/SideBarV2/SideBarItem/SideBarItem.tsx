import type { HTMLAttributes } from 'react';
import React from 'react';

export const SideBarItem = ({
  selected,
  className,
  children,
  ...props
}: {
  selected?: boolean;
} & HTMLAttributes<HTMLAnchorElement>) => (
  <li>
    <a
      className={[
        'rcx-sidebar-v2-item',
        selected && 'rcx-sidebar-v2-item--selected',
        className && className,
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={(e) => e.stopPropagation()}
      {...props}
    >
      {children}
    </a>
  </li>
);
