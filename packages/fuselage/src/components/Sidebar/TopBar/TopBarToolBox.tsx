import type { ReactNode } from 'react';

import { SidebarDivider } from '../SidebarDivider';
import { TopBar } from './TopBar';
import { TopBarWrapper } from './TopBarWrapper';

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
