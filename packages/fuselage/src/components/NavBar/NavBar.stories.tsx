import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  NavBar,
  NavBarItem,
  NavBarSection,
  NavBarDivider,
  NavBarGroup,
} from '.';
import { Avatar } from '../Avatar';
import Box from '../Box';
import { MenuV2 as Menu, MenuItem, MenuSection } from '../Menu';
import { MenuDisplayExample } from '../Menu/V2/Menu.stories';
import { avatarUrl } from '../Message/helpers';

export default {
  title: 'Navigation/Navbar',
  component: NavBar,
  decorators: [
    (Story) => (
      <Box display='flex'>
        <Story />
      </Box>
    ),
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Stories />
          <ArgsTable />
        </>
      ),
    },
  },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => (
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

export const Default: ComponentStory<typeof NavBar> = Template.bind({});
