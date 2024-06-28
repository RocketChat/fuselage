import type { HTMLAttributes } from 'react';
import React from 'react';

export const SideBarItemContent = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidebar-v2-item__subtitle', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
