import type { HTMLAttributes } from 'react';

export const SidebarFooter = ({
  children,
  ...props
}: HTMLAttributes<HTMLElement>) => (
  <footer className='rcx-sidebar-v2-footer' {...props}>
    {children}
  </footer>
);
