import type { HTMLAttributes } from 'react';
import React from 'react';

export const SideBarMediaTitle = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidebar-v2-media__title', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
