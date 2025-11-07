import type { ReactNode } from 'react';

import { SidebarDivider } from '../SidebarDivider.js';

import { TopBar } from './TopBar.js';
import { TopBarWrapper } from './TopBarWrapper.js';

type TopBarToolBoxProps = {
  children?: ReactNode;
  className?: string;
};

export const TopBarToolBox = ({
  children,
  className,
  ...props
}: TopBarToolBoxProps) => (
  <TopBar
    className={['rcx-sidebar-topbar--toolbox', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    <TopBarWrapper children={children} />
    <SidebarDivider />
  </TopBar>
);
