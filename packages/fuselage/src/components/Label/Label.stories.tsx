import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Label from './Label';
import { LabelInfo } from './LabelInfo';

export default {
  title: 'Inputs/Label',
  component: Label,
  argTypes: {
    children: {
      control: 'text',
      description: 'Label content.',
      table: { category: 'Content' },
    },
    is: {
      control: 'text',
      description:
        'Underlying element rendered; defaults to `label`, or `span` when nested inside another `Label`.',
      table: { category: 'Polymorphism' },
    },
    required: {
      control: 'boolean',
      description: 'Appends a required-field asterisk (`*`) after the content.',
      table: { category: 'State' },
    },
    disabled: {
      control: 'boolean',
      description: 'Applies the disabled visual style.',
      table: { category: 'State' },
    },
  },
} satisfies Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const Required: Story = {
  args: {
    children: 'Label',
    required: true,
  },
};

export const Info: Story = {
  render: (args) => (
    <Label {...args}>
      Label
      <LabelInfo title='this is a label info' />
    </Label>
  ),
};

export const InfoRequired: Story = {
  args: {
    required: true,
  },
  render: (args) => (
    <Label {...args}>
      Label
      <LabelInfo title='this is a label info' />
    </Label>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Label',
    disabled: true,
  },
};
