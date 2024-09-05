import type { HTMLAttributes } from 'react';

export const SideBarFooter = ({
  children,
  ...props
}: HTMLAttributes<HTMLElement>) => (
  <footer className='rcx-sidebar-v2-footer' {...props}>
    {children}
  </footer>
);
