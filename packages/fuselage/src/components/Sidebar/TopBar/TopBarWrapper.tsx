import type { ReactNode } from 'react';

/**
 * @deprecated Use `NavBar` for app-level navigation instead.
 */
export type TopBarWrapperProps = {
  children?: ReactNode;
};

/**
 * @deprecated Use `NavBar` for app-level navigation instead.
 */
export const TopBarWrapper = ({ children }: TopBarWrapperProps) => (
  <div className='rc-box rc-box--full rcx-sidebar-topbar__wrapper'>
    {children}
  </div>
);
