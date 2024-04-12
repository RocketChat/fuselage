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
import { Box, Icon, IconButton, InputBox } from '../..';

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
      <IconButton icon='burger-menu' size='x28' />
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
        <SidePanelListItem key={index}>Item {index}</SidePanelListItem>
      ))}
    </SidePanelList>
  </SidePanel>
);

export const Default = Template.bind({});
