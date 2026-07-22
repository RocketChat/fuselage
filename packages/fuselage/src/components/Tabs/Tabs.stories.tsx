import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Tabs from './Tabs';
import TabsItem from './TabsItem';

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
  subcomponents: {
    TabsItem,
  },
  argTypes: {
    divider: {
      control: 'boolean',
      description:
        'Shows a bottom border dividing the tabs from the content below.',
      table: { defaultValue: { summary: 'true' } },
    },
  },
} satisfies Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;

const render: Story['render'] = (args) => (
  <Tabs {...args}>
    <TabsItem {...args}>Tab text 1</TabsItem>
    <TabsItem>Tab text 2</TabsItem>
    <TabsItem>Tab text 3</TabsItem>
    <TabsItem>Tab text 4</TabsItem>
    <TabsItem>Tab text 5</TabsItem>
  </Tabs>
);

export const Default: Story = {
  render,
};

export const Selected: Story = {
  render,
  args: {
    selected: true,
  },
};

export const Disabled: Story = {
  render,
  args: {
    disabled: true,
  },
};

export const SelectedAndDisabled: Story = {
  render,
  args: {
    disabled: true,
    selected: true,
  },
};

export const NoUnderline: Story = {
  render,
  args: {
    selected: true,
    divider: false,
  },
};
