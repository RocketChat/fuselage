import type { HTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

export const SidePanelListItem = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(function SidePanelListItem({ className, ...props }, ref) {
  return (
    <div
      role='listitem'
      ref={ref}
      className={['rcx-sidepanel-list__item', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  );
});
