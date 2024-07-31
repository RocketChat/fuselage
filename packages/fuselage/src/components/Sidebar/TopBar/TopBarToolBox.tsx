import type { ReactNode } from 'react';

import SidebarDivider from '../SidebarDivider';
import TopBar from './TopBar';
import TopBarWrapper from './TopBarWrapper';

/** @public */
export type TopBarToolBoxProps = {
  children?: ReactNode;
  className?: string;
};

/** @public */
const TopBarToolBox = ({
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

export default TopBarToolBox;
