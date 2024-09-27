import type { ReactNode } from 'react';

import { SidebarDivider } from '../SidebarDivider';
import { TopBar } from './TopBar';
import { TopBarWrapper } from './TopBarWrapper';

type TopBarSectionProps = {
  children?: ReactNode;
  className?: string;
};

export const TopBarSection = ({
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
