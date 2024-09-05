import type { HTMLAttributes } from 'react';

export const SideBarItemCol = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-box rcx-box--full rcx-sidebar-v2-item__col', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
