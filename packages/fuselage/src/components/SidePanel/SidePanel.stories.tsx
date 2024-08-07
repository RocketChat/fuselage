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
import { MenuTemplate, leterAvatarUrls, names } from '../SideBarV2/helpers';

export default {
  title: 'Navigation/SidePanel',
  component: SidePanel,
  decorators: [
    (Story) => (
      <Box display='flex' h='90vh'>
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
} as ComponentMeta<typeof SidePanel>;

const Template: ComponentStory<typeof SidePanel> = (args) => (
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
            <SideBarItemIcon name='team' />
            <SideBarItemTitle>{names[index % 10]}</SideBarItemTitle>
            <SideBarItemBadge title='unread messages' children={index + 3} />
            <SideBarItemMenu children={<MenuTemplate />} />
          </SideBarItem>
        </SidePanelListItem>
      ))}
    </SidePanelList>
  </SidePanel>
);

export const Default = Template.bind({});
