import type { HTMLAttributes } from 'react';
import React from 'react';

export const SidePanelList = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    role='list'
    className={['rcx-sidepanel-list', className && className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
