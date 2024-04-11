import type { AllHTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

export const SideBarItem = forwardRef(
  ({
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
        className && className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Tag>
  )
);
