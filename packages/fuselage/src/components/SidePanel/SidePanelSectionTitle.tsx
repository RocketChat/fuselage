import type { HTMLAttributes } from 'react';
import React from 'react';

export const SidePanelSectionTitle = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidepanel-section__title', className && className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    {children}
  </div>
);
