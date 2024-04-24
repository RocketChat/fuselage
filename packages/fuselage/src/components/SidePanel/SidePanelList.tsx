import type { HTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

export const SidePanelList = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(function SidePanelList({ className, ...props }, ref) {
  return (
    <div
      role='list'
      ref={ref}
      className={['rcx-sidepanel-list', className].filter(Boolean).join(' ')}
      {...props}
    />
  );
});
