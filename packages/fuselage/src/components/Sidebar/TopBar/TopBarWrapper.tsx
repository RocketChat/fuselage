import type { ReactNode } from 'react';

export type TopBarWrapperProps = {
  children?: ReactNode;
};

export const TopBarWrapper = ({ children }: TopBarWrapperProps) => (
  <div className='rc-box rc-box--full rcx-sidebar-topbar__wrapper'>
    {children}
  </div>
);
