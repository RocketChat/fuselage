import type { HTMLAttributes } from 'react';

export const SidebarItemTimestamp = ({
  className,
  unread,
  ...props
}: { unread?: boolean } & HTMLAttributes<HTMLDivElement>) => (
  <div
    className={[
      'rcx-box rcx-box--full rcx-sidebar-v2-item__timestamp',
      unread && 'rcx-sidebar-v2-item__timestamp--highlighted',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
