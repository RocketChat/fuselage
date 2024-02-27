import type { ReactNode } from 'react';
import React from 'react';

type TopBarProps = {
  children?: ReactNode;
  className?: string;
};

export const TopBar = ({ className, ...props }: TopBarProps) => (
  <div
    className={['rc-box rc-box--full rcx-sidebar-topbar', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);
