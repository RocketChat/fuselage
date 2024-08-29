import type { StoryFn, Meta } from '@storybook/react';
import type { ComponentType } from 'react';

import { Avatar } from '../Avatar';
import Box from '../Box';
import { MenuV2 as Menu, MenuItem, MenuSection } from '../Menu';
import { MenuDisplayExample } from '../Menu/V2/Menu.stories';
import { avatarUrl } from '../Message/helpers';
import { NavBar } from './NavBar';
import { NavBarDivider } from './NavBarDivider';
import { NavBarGroup } from './NavBarGroup';
import { NavBarItem } from './NavBarItem';
import { NavBarSection } from './NavBarSection';

export default {
  title: 'Navigation/Navbar',
  component: NavBar,
  subcomponents: {
    NavBarItem: NavBarItem as ComponentType<any>,
    NavBarSection: NavBarSection as ComponentType<any>,
    NavBarDivider: NavBarDivider as ComponentType<any>,
    NavBarGroup: NavBarGroup as ComponentType<any>,
  },
  decorators: [
    (Story) => (
      <Box display='flex'>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof NavBar>;

const Template: StoryFn<typeof NavBar> = (args) => (
  <NavBar {...args}>
    <NavBarSection>
      <NavBarGroup role='toolbar'>
        <NavBarItem icon='home' title='home' />
        <NavBarItem icon='store' title='marketplace' />
        <NavBarItem icon='notebook-hashtag' title='directory' />
        <NavBarItem icon='document-eye' title='audit' />
        <NavBarItem icon='address-book' title='contacts' />
      </NavBarGroup>
      <NavBarDivider />
      <NavBarGroup role='toolbar'>
        <NavBarItem>
          <MenuDisplayExample small icon='sort' title='sort' />
        </NavBarItem>
        <NavBarItem icon='magnifier' title='search' />
        <Menu icon='pencil-box' small title='create new'>
          <MenuSection title='Create new'>
            <MenuItem key='direct-message'>Direct message</MenuItem>
            <MenuItem key='discussion'>Discussion</MenuItem>
            <MenuItem key='channel'>Channel</MenuItem>
            <MenuItem key='team'>Team</MenuItem>
          </MenuSection>
        </Menu>
      </NavBarGroup>
      <NavBarDivider />
      <NavBarGroup role='toolbar'>
        <NavBarItem icon='dialpad' title='dialpad' />
        <NavBarItem icon='live' title='live' />
        <NavBarItem icon='phone-disabled' title='phone-disabled' />
        <NavBarItem icon='message-disabled' title='message-disabled' />
      </NavBarGroup>
    </NavBarSection>
    <NavBarSection>
      <NavBarGroup>
        <NavBarItem icon='cog' title='preferences' />
        <NavBarItem>
          <Menu
            small
            icon={<Avatar url={avatarUrl} alt='user avatar' size='x28' />}
            title='profile'
          >
            <MenuItem key='1'>Profile</MenuItem>
            <MenuItem key='2'>Chats</MenuItem>
            <MenuItem key='3'>Settings</MenuItem>
          </Menu>
        </NavBarItem>
      </NavBarGroup>
    </NavBarSection>
  </NavBar>
);

export const Default: StoryFn<typeof NavBar> = Template.bind({});
