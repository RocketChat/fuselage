import Box, { type BoxProps } from '../Box';
import SidebarSection from './Section';
import SidebarBanner from './SidebarBanner';
import SidebarDivider from './SidebarDivider';
import SidebarItem from './SidebarItem';
import SidebarTopBar from './TopBar';

/** @public */
export type SidebarProps = BoxProps;

/** @public */
function Sidebar(props: SidebarProps) {
  return <Box rcx-sidebar {...props} />;
}

/** @public */
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Sidebar {
  export const TopBar = SidebarTopBar;
  export const Item = SidebarItem;
  export const Section = SidebarSection;
  export const Divider = SidebarDivider;
  export const Banner = SidebarBanner;
}

export default Sidebar;
