import type { HTMLAttributes } from 'react';
import React from 'react';

export const SidePanelSectionAction = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidepanel-section__action', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
