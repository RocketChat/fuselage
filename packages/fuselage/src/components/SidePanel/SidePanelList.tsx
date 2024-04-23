import type { HTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

export const SidePanelList = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(function SidePanelList({ className, ...props }) {
  return (
    <div
      role='list'
      className={['rcx-sidepanel-list', className].filter(Boolean).join(' ')}
      {...props}
    />
  );
});
