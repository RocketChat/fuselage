import type { ReactNode } from 'react';
import React from 'react';

type TopBarProps = {
  children?: ReactNode;
  className?: string;
};

const TopBar = ({ className, ...props }: TopBarProps) => (
  <div
    className={['rc-box rc-box--full rcx-sidebar-topbar', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);

export default TopBar;
