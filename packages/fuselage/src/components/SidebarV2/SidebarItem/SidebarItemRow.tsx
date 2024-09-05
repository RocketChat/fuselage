import type { HTMLAttributes } from 'react';

export const SidebarItemRow = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-box rcx-box--full rcx-sidebar-v2-item__row', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
