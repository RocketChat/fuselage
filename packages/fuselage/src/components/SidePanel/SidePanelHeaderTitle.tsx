import type { HTMLAttributes } from 'react';
import React from 'react';

export const SidePanelHeaderTitle = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidepanel-header__title', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
