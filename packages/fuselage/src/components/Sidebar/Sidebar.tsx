import { Box, type BoxProps } from '../Box';

/**
 * @deprecated Use `SidebarV2Props` instead.
 */
export type SidebarProps = BoxProps;

/**
 * @deprecated Use `SidebarV2` instead.
 */
const Sidebar = (props: SidebarProps) => <Box rcx-sidebar {...props} />;

export default Sidebar;
