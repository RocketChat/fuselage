import type { HTMLAttributes } from 'react';
import React from 'react';

export const SideBarMedia = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidebar-v2-media', className].filter(Boolean).join(' ')}
    {...props}
  />
);
