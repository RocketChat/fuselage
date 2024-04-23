import type { HTMLAttributes } from 'react';
import React from 'react';

export const SidePanelListItem = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    role='listitem'
    className={['rcx-sidepanel-list__item', className && className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
