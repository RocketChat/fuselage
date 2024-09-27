import type { HTMLAttributes } from 'react';

export const SidebarItemAvatarWrapper = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={['rcx-box rcx-box--full rcx-sidebar-v2-item__avatar', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
