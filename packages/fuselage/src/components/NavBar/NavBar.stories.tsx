import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

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
        <NavBarItem icon='home' aria-label='home' title='home' />
        <NavBarItem icon='store' aria-label='marketplace' title='marketplace' />
        <NavBarItem
          icon='notebook-hashtag'
          aria-label='directory'
          title='directory'
        />
        <NavBarItem icon='document-eye' aria-label='audit' title='audit' />
        <NavBarItem
          icon='address-book'
          aria-label='contacts'
          title='contacts'
        />
      </NavBarGroup>
      <NavBarDivider />
      <NavBarGroup role='toolbar'>
        <NavBarItem>
          <MenuDisplayExample small icon='sort' />
        </NavBarItem>
        <NavBarItem icon='magnifier' aria-label='search' title='search' />
        <Menu icon='pencil-box' small>
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
        <NavBarItem icon='dialpad' aria-label='dialpad' title='dialpad' />
        <NavBarItem icon='live' aria-label='live' title='live' />
        <NavBarItem
          icon='phone-disabled'
          aria-label='phone-disabled'
          title='phone-disabled'
        />
        <NavBarItem
          icon='message-disabled'
          aria-label='message-disabled'
          title='message-disabled'
        />
      </NavBarGroup>
    </NavBarSection>
    <NavBarSection>
      <NavBarGroup>
        <NavBarItem icon='cog' aria-label='preferences' title='preferences' />
        <NavBarItem>
          <Menu small icon={<Avatar url={avatarUrl} />}>
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
