import type { HTMLAttributes } from 'react';

export const SidebarItemTitle = ({
  className,
  unread,
  onMouseEnter,
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
    onMouseEnter={(e) => {
      const { currentTarget } = e;
      if (currentTarget.scrollWidth > currentTarget.clientWidth) {
        currentTarget.title = currentTarget.textContent ?? '';
      } else {
        currentTarget.title = '';
      }
      onMouseEnter?.(e);
    }}
    {...props}
  />
);
