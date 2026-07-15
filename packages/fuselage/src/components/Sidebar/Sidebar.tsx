import { Box, type BoxProps } from '../Box';

export type SidebarProps = BoxProps;

const Sidebar = (props: SidebarProps) => <Box rcx-sidebar {...props} />;

export default Sidebar;
