import type { StoryFn, Meta } from '@storybook/react';

import { Tabs } from './Tabs';
import { TabsItem } from './TabsItem';

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  subcomponents: {
    TabsItem,
  },
} satisfies Meta<typeof Tabs>;

const Template: StoryFn<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <TabsItem {...args}>Tab text 1</TabsItem>
    <TabsItem>Tab text 2</TabsItem>
    <TabsItem>Tab text 3</TabsItem>
    <TabsItem>Tab text 4</TabsItem>
    <TabsItem>Tab text 5</TabsItem>
  </Tabs>
);

export const Default: StoryFn<typeof Tabs> = Template.bind({});

export const Selected: StoryFn<typeof Tabs> = Template.bind({});
Selected.args = {
  selected: true,
};

export const Disabled: StoryFn<typeof Tabs> = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const SelectedAndDisabled: StoryFn<typeof Tabs> = Template.bind({});
SelectedAndDisabled.args = {
  disabled: true,
  selected: true,
};

export const NoUnderline: StoryFn<typeof Tabs> = Template.bind({});
NoUnderline.args = {
  selected: true,
  divider: false,
};
