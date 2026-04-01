import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';
import type { BoxProps } from '../Box';

import { SidebarItem } from './Item';
import { SidebarSection } from './Section';
import SidebarBanner from './SidebarBanner';
import SidebarDivider from './SidebarDivider';
import SidebarTopBar from './TopBar';

export type SidebarProps = BoxProps;

const SidebarFrame = styled(RcxView, {
  name: 'Sidebar',
  color: '$fontDefault',
  backgroundColor: '$surfaceSidebar',
});

const Sidebar = Object.assign(
  (props: SidebarProps) => <SidebarFrame {...(props as any)} />,
  {
    TopBar: SidebarTopBar,
    Item: SidebarItem,
    Section: SidebarSection,
    Divider: SidebarDivider,
    Banner: SidebarBanner,
  },
);

export default Sidebar;
