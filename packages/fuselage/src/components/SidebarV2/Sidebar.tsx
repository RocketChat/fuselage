import { forwardRef, type HTMLAttributes } from 'react';

type SideBarProps = { collapsed?: boolean } & HTMLAttributes<HTMLElement>;

export const SideBar = forwardRef<HTMLElement, SideBarProps>(
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
