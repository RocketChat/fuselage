import type { ReactNode } from 'react';
import React from 'react';

type TopBarWrapperProps = {
  children?: ReactNode;
};

const TopBarWrapper = ({ children }: TopBarWrapperProps) => (
  <div
    className='rc-box rc-box--full rcx-sidebar-topbar__wrapper'
    children={children}
  />
);

export default TopBarWrapper;
