import type { HTMLAttributes } from 'react';

export const SidebarItemTimestamp = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={[
      'rcx-box rcx-box--full rcx-sidebar-v2-item__timestamp',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
