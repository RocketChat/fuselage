import type { HTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

export const SidePanelListItem = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(function SidePanelListItem({ className, ...props }) {
  return (
    <div
      role='listitem'
      className={['rcx-sidepanel-list__item', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  );
});
