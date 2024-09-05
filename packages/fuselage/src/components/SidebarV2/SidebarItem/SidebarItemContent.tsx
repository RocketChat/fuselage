import type { HTMLAttributes } from 'react';

export const SideBarItemContent = ({
  className,
  unread,
  ...props
}: { unread?: boolean } & HTMLAttributes<HTMLDivElement>) => (
  <div
    className={[
      'rcx-box rcx-box--full rcx-sidebar-v2-item__subtitle',
      unread && 'rcx-sidebar-v2-item__subtitle--highlighted',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
