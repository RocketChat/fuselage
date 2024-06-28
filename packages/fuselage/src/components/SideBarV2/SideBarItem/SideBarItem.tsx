import type { AllHTMLAttributes } from 'react';
import React from 'react';

export const SideBarItem = ({
  selected,
  className,
  children,
  is: Tag = 'a',
  ...props
}: {
  selected?: boolean;
  is?: React.ElementType;
} & AllHTMLAttributes<HTMLAnchorElement>) => (
  <Tag
    className={[
      'rcx-sidebar-v2-item',
      selected && 'rcx-sidebar-v2-item--selected',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    {children}
  </Tag>
);
