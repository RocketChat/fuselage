import { Box, type BoxProps } from '../Box';

import { SidebarItem } from './Item';
import { SidebarSection } from './Section';
import SidebarBanner from './SidebarBanner';
import SidebarDivider from './SidebarDivider';
import SidebarTopBar from './TopBar';

export type SidebarProps = BoxProps;

const Sidebar = Object.assign(
  (props: SidebarProps) => <Box rcx-sidebar {...props} />,
  {
    TopBar: SidebarTopBar,
    Item: SidebarItem,
    Section: SidebarSection,
    Divider: SidebarDivider,
    Banner: SidebarBanner,
  },
);

export default Sidebar;
