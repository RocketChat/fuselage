import type { ReactNode } from 'react';

/** @public */
export type TopBarWrapperProps = {
  children?: ReactNode;
};

/** @public */
const TopBarWrapper = ({ children }: TopBarWrapperProps) => (
  <div
    className='rc-box rc-box--full rcx-sidebar-topbar__wrapper'
    children={children}
  />
);

export default TopBarWrapper;
