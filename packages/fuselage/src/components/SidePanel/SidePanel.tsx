import type { HTMLAttributes } from 'react';
import React from 'react';

export const SidePanel = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidepanel', className && className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    {children}
  </div>
);
