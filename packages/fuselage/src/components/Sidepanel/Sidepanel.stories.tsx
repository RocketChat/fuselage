import type { Meta, StoryFn } from '@storybook/react-webpack5';

import {
  Avatar,
  Box,
  Icon,
  IconButton,
  InputBox,
  SidebarV2ItemTitle,
  SidebarV2ItemCol,
  SidebarV2ItemBadge,
  SidebarV2ItemIcon,
  SidebarV2ItemMenu,
  SidebarV2ItemContent,
  SidebarV2ItemRow,
  SidebarV2Item,
  SidebarV2ItemTimestamp,
  Tag,
} from '../..';
import { SidebarItemAvatarWrapper } from '../SidebarV2/SidebarItem/SidebarItemAvatarWrapper';
import { MenuTemplate, leterAvatarUrls, names } from '../SidebarV2/helpers';

import {
  Sidepanel,
  SidepanelSection,
  SidepanelHeader,
  SidepanelHeaderTitle,
  SidepanelList,
  SidepanelListItem,
} from '.';

export default {
  title: 'Navigation/Sidepanel',
  component: Sidepanel,
  decorators: [
    (Story) => (
      <Box h='90vh' w='x276'>
        <Story />
      </Box>
    ),
  ],
} as Meta<typeof Sidepanel>;

const Template: StoryFn<typeof Sidepanel> = (args) => (
  <Sidepanel {...args}>
    <SidepanelHeader>
      <SidepanelHeaderTitle>
        Title Lorem Ipsum Indolor Ipsum Dolor Ipsum Ipsum
      </SidepanelHeaderTitle>
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
        {new Array(20).fill(null).map((_, index) => {
          return (
            <SidepanelListItem key={index}>
              <SidebarV2Item href='#'>
                <SidebarV2ItemCol>
                  <SidebarV2ItemRow>
                    <SidebarItemAvatarWrapper>
                      <Avatar
                        size='x20'
                        url={leterAvatarUrls[index % 4]}
                        alt='avatar'
                      />
                    </SidebarItemAvatarWrapper>
                    <SidebarV2ItemIcon
                      highlighted={Boolean(index === 0)}
                      icon='team'
                    />
                    <SidebarV2ItemTitle unread={Boolean(index === 0)}>
                      {names[index % 10]}
                    </SidebarV2ItemTitle>
                    <SidebarV2ItemTimestamp>11:22:21 AM</SidebarV2ItemTimestamp>
                  </SidebarV2ItemRow>
                  <SidebarV2ItemRow>
                    <SidebarV2ItemContent unread={Boolean(index === 0)}>
                      Lorem Ipsum Indolor Dolor Ipsum Ipsum
                    </SidebarV2ItemContent>
                    <Tag
                      role='button'
                      maxWidth='50%'
                      flexShrink={1}
                      flexGrow={0}
                    >
                      <Icon size='x12' mie={4} name='team' />
                      Team title
                    </Tag>
                    <SidebarV2ItemBadge
                      title='unread messages'
                      children={index + 3}
                    />
                    <SidebarV2ItemMenu children={<MenuTemplate />} />
                  </SidebarV2ItemRow>
                </SidebarV2ItemCol>
              </SidebarV2Item>
            </SidepanelListItem>
          );
        })}
      </SidepanelList>
    </Box>
  </Sidepanel>
);

export const Default = Template.bind({});
