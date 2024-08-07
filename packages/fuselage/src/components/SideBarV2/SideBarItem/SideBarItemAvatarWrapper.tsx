import type { HTMLAttributes } from 'react';
import React from 'react';

export const SideBarItemAvatarWrapper = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidebar-v2-item__avatar', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
