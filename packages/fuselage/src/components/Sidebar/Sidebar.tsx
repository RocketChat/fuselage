import type { ComponentProps } from 'react';
import React from 'react';

import Box from '../Box';

type SidebarProps = ComponentProps<typeof Box>;

const Sidebar = (props: SidebarProps) => <Box rcx-sidebar {...props} />;

export default Sidebar;
