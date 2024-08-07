import type { HTMLAttributes } from 'react';
import React from 'react';

export const SideBarItemTitle = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidebar-v2-item__title', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
