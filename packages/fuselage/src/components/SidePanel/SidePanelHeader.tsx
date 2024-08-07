import type { HTMLAttributes } from 'react';
import React from 'react';

export const SidePanelHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidepanel-header', className].filter(Boolean).join(' ')}
    {...props}
  />
);
