import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';

type SidebarListItemProps = {
  selected?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const SidebarListItem = forwardRef<HTMLDivElement, SidebarListItemProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      role='listitem'
      className={[
        'rcx-box rcx-box--full rcx-sidebar-item__list-item',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  )
);
