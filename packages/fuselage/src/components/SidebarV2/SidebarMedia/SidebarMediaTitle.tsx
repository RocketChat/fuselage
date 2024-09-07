import type { HTMLAttributes } from 'react';

export const SidebarMediaTitle = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidebar-v2-media__title', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
