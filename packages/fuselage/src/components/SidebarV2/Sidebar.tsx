import { forwardRef, type HTMLAttributes } from 'react';

type SidebarProps = { collapsed?: boolean } & HTMLAttributes<HTMLElement>;

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  ({ collapsed, className, ...props }, ref) => (
    <nav
      ref={ref}
      className={[
        'rcx-box rcx-box--full rcx-sidebar-v2',
        'rcx-box--animated',
        collapsed && 'rcx-sidebar-v2--collapsed',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  )
);
