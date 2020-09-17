import React from 'react';

import { Box } from '..';
import Item from './Item';
import Section from './Section';
import TopBar from './TopBar';

export const Sidebar = (props) => <Box rcx-sidebar {...props}/>;

Sidebar.TopBar = TopBar;
Sidebar.Item = Item;
Sidebar.Section = Section;

export default Sidebar;
