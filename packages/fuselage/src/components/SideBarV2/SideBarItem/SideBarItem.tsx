import type { HTMLAttributes } from 'react';
import React from 'react';

export const SideBarItem = ({
  selected,
  className,
  children,
  is: Tag = 'li',
  ...props
}: {
  selected?: boolean;
  is?: React.ElementType;
} & HTMLAttributes<HTMLAnchorElement>) => (
  <Tag>
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
  </Tag>
);
