import type { Meta, StoryFn } from '@storybook/react';

import {
  Sidepanel,
  SidepanelSection,
  SidepanelHeader,
  SidepanelHeaderTitle,
  SidepanelList,
  SidepanelListItem,
} from '.';
import {
  Avatar,
  Box,
  Icon,
  IconButton,
  InputBox,
  SidebarItem,
  SidebarItemBadge,
  SidebarItemIcon,
  SidebarItemMenu,
  SidebarItemTitle,
} from '../..';
import { SidebarItemAvatarWrapper } from '../SidebarV2/SidebarItem/SidebarItemAvatarWrapper';
import { MenuTemplate, leterAvatarUrls, names } from '../SidebarV2/helpers';

export default {
  title: 'Navigation/Sidepanel',
  component: Sidepanel,
  decorators: [
    (Story) => (
      <Box display='flex' h='90vh' w='x276'>
        <Story />
      </Box>
    ),
  ],
} as Meta<typeof Sidepanel>;

const Template: StoryFn<typeof Sidepanel> = (args) => (
  <Sidepanel {...args}>
    <SidepanelHeader>
      <SidepanelHeaderTitle>All</SidepanelHeaderTitle>
      <IconButton icon='burger-menu' size='x28' title='menu' />
    </SidepanelHeader>
    <SidepanelSection>
      <InputBox
        type='text'
        placeholder='Search'
        addon={<Icon name='magnifier' size='x18' />}
      />
    </SidepanelSection>
    <Box overflowY='auto' height='full'>
      <SidepanelList>
        {new Array(20).fill(null).map((_, index) => (
          <SidepanelListItem key={index}>
            <SidebarItem href='#'>
              <SidebarItemAvatarWrapper>
                <Avatar
                  size='x20'
                  url={leterAvatarUrls[index % 4]}
                  alt='avatar'
                />
              </SidebarItemAvatarWrapper>
              <SidebarItemIcon icon='team' />
              <SidebarItemTitle>{names[index % 10]}</SidebarItemTitle>
              <SidebarItemBadge title='unread messages' children={index + 3} />
              <SidebarItemMenu children={<MenuTemplate />} />
            </SidebarItem>
          </SidepanelListItem>
        ))}
      </SidepanelList>
    </Box>
  </Sidepanel>
);

export const Default = Template.bind({});
