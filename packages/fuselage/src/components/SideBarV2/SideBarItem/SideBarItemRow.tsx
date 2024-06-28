import type { HTMLAttributes } from 'react';
import React from 'react';

export const SideBarItemRow = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidebar-v2-item__row', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
