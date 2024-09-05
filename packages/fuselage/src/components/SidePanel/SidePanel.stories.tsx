import type { Meta, StoryFn } from '@storybook/react';

import {
  SidePanel,
  SidePanelSection,
  SidePanelHeader,
  SidePanelHeaderTitle,
  SidePanelList,
  SidePanelListItem,
} from '.';
import {
  Avatar,
  Box,
  Icon,
  IconButton,
  InputBox,
  SideBarItem,
  SideBarItemAvatarWrapper,
  SideBarItemBadge,
  SideBarItemIcon,
  SideBarItemMenu,
  SideBarItemTitle,
} from '../..';
import { MenuTemplate, leterAvatarUrls, names } from '../SidebarV2/helpers';

export default {
  title: 'Navigation/SidePanel',
  component: SidePanel,
  decorators: [
    (Story) => (
      <Box display='flex' h='90vh' w='x276'>
        <Story />
      </Box>
    ),
  ],
} as Meta<typeof SidePanel>;

const Template: StoryFn<typeof SidePanel> = (args) => (
  <SidePanel {...args}>
    <SidePanelHeader>
      <SidePanelHeaderTitle>All</SidePanelHeaderTitle>
      <IconButton icon='burger-menu' size='x28' title='menu' />
    </SidePanelHeader>
    <SidePanelSection>
      <InputBox
        type='text'
        placeholder='Search'
        addon={<Icon name='magnifier' size='x18' />}
      />
    </SidePanelSection>
    <Box overflowY='auto' height='full'>
      <SidePanelList>
        {new Array(20).fill(null).map((_, index) => (
          <SidePanelListItem key={index}>
            <SideBarItem href='#'>
              <SideBarItemAvatarWrapper>
                <Avatar
                  size='x20'
                  url={leterAvatarUrls[index % 4]}
                  alt='avatar'
                />
              </SideBarItemAvatarWrapper>
              <SideBarItemIcon icon='team' />
              <SideBarItemTitle>{names[index % 10]}</SideBarItemTitle>
              <SideBarItemBadge title='unread messages' children={index + 3} />
              <SideBarItemMenu children={<MenuTemplate />} />
            </SideBarItem>
          </SidePanelListItem>
        ))}
      </SidePanelList>
    </Box>
  </SidePanel>
);

export const Default = Template.bind({});
