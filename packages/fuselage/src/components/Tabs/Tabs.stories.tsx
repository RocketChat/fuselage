import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Tabs } from '../..';

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component:
          'Tabs is a component to navigate around the UI using buttons arranged together with the selected tab highlighted.',
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Stories title={''} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
  <Tabs>
    <Tabs.Item {...args}>Tab text 1</Tabs.Item>
    <Tabs.Item>Tab text 2</Tabs.Item>
    <Tabs.Item>Tab text 3</Tabs.Item>
    <Tabs.Item>Tab text 4</Tabs.Item>
    <Tabs.Item>Tab text 5</Tabs.Item>
  </Tabs>
);

export const Default: ComponentStory<typeof Tabs> = Template.bind({});

export const Selected: ComponentStory<typeof Tabs> = Template.bind({});
Selected.args = {
  selected: true,
};

export const Disabled: ComponentStory<typeof Tabs> = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const SelectedAndDisabled: ComponentStory<typeof Tabs> = Template.bind(
  {}
);
SelectedAndDisabled.args = {
  disabled: true,
  selected: true,
};
