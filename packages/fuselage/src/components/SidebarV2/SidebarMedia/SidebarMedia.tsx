import type { HTMLAttributes } from 'react';

export const SidebarMedia = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-sidebar-v2-media', className].filter(Boolean).join(' ')}
    {...props}
  />
);
