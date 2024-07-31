import type { ReactNode } from 'react';

import SidebarDivider from '../SidebarDivider';
import TopBar from './TopBar';
import TopBarWrapper from './TopBarWrapper';

/** @public */
export type TopBarSectionProps = {
  children?: ReactNode;
  className?: string;
};

/** @public */
const TopBarSection = ({
  className,
  children,
  ...props
}: TopBarSectionProps) => (
  <TopBar
    className={['rcx-sidebar-topbar--section', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    <TopBarWrapper children={children} />
    <SidebarDivider />
  </TopBar>
);

export default TopBarSection;
