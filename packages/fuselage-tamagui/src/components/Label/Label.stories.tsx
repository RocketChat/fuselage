import { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';
import { LabelInfo } from './LabelInfo';

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
  render: () => <Label>Label</Label>,
};

export const Required: Story = {
  render: () => <Label required>Label</Label>,
};

export const Info: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Label>Label</Label>
      <LabelInfo title="Additional information" />
    </div>
  ),
};

export const InfoRequired: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Label required>Label</Label>
      <div style={{ marginLeft: '8px' }}>
        <LabelInfo title="Additional information" />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => <Label disabled>Label</Label>,
};
