import type { HTMLAttributes } from 'react';
import React from 'react';

export const SideBarItemCol = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidebar-v2-item__col', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
