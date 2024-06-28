import type { HTMLAttributes } from 'react';
import React from 'react';

export const SidePanelSection = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidepanel-section', className].filter(Boolean).join(' ')}
    {...props}
  />
);
