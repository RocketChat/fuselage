import type { ReactNode } from 'react';

import { SidebarDivider } from '../SidebarDivider.js';

import { TopBar } from './TopBar.js';
import { TopBarWrapper } from './TopBarWrapper.js';

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
