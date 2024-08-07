import type { HTMLAttributes } from 'react';
import React from 'react';

export const SidePanel = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidepanel', className].filter(Boolean).join(' ')}
    {...props}
  />
);
