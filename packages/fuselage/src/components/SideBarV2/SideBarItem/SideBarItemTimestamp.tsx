import type { HTMLAttributes } from 'react';
import React from 'react';

export const SideBarItemTimestamp = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidebar-v2-item__timestamp', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
