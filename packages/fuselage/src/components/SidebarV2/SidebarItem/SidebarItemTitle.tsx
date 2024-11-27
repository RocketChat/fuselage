import type { HTMLAttributes } from 'react';

export const SidebarItemTitle = ({
  className,
  unread,
  ...props
}: { unread?: boolean } & HTMLAttributes<HTMLDivElement>) => (
  <div
    className={[
      'rcx-box rcx-box--full rcx-sidebar-v2-item__title',
      unread && 'rcx-sidebar-v2-item__title--highlighted',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
