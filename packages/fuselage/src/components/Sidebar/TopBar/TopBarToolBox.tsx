import type { ReactNode } from 'react';

import SidebarDivider from '../SidebarDivider';

import { TopBar } from './TopBar';
import { TopBarWrapper } from './TopBarWrapper';

/**
 * @deprecated Use `NavBar` for app-level navigation instead.
 */
export type TopBarToolBoxProps = {
  children?: ReactNode;
  className?: string;
};

/**
 * @deprecated Use `NavBar` for app-level navigation instead.
 */
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
    <TopBarWrapper>{children}</TopBarWrapper>
    <SidebarDivider />
  </TopBar>
);
