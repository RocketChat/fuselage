import type { HTMLAttributes } from 'react';
import React from 'react';

export const SidePanelSection = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidepanel-section', className && className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    {children}
  </div>
);
