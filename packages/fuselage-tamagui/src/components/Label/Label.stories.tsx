import { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';

// Meta export must be the default export
const meta: Meta<typeof Label> = {
  title: 'Inputs/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component: 'A caption for an input component.',
      },
    },
  },
  argTypes: {
    ref: {
      description: '((instance: any) => void) | RefObject<any> | null',
      table: {
        defaultValue: { summary: '-' },
      },
    },
    border: {
      description: 'Border<string | number>',
      table: {
        defaultValue: { summary: '-' },
      },
      control: 'object',
    },
    borderBlock: {
      description: 'BorderBlock<string | number>',
      table: {
        defaultValue: { summary: '-' },
      },
      control: 'object',
    },
    borderBlockStart: {
      description: 'BorderBlockStart<string | number>',
      table: {
        defaultValue: { summary: '-' },
      },
      control: 'object',
    },
    borderBlockEnd: {
      description: 'BorderBlockEnd<string | number>',
      table: {
        defaultValue: { summary: '-' },
      },
      control: 'object',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Label',
  },
};

export const Required: Story = {
  args: {
    children: 'Required Label',
    required: true,
  },
};

export const Info: Story = {
  args: {
    children: 'Info Label',
    info: true,
  },
};

export const InfoRequired: Story = {
  args: {
    children: 'Info Required Label',
    info: true,
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Label',
    disabled: true,
  },
};
