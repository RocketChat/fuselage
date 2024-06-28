import type { HTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

type SideBarListItemProps = {
  selected?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const SideBarListItem = forwardRef<HTMLDivElement, SideBarListItemProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      role='listitem'
      className={['rcx-sidebar-item__list-item', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  )
);
