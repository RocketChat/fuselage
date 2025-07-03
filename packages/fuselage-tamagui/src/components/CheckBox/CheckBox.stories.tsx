import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { YStack, XStack } from 'tamagui';

import { CheckBox } from './CheckBox';

const meta = {
  title: 'INPUTS/CheckBox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    checked: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: {
    'aria-label': 'Default checkbox',
  },
};

export const Checked: Story = {
  args: {
    'aria-label': 'Checked checkbox',
    'checked': true,
  },
};

export const Indeterminate: Story = {
  args: {
    'aria-label': 'Indeterminate checkbox',
    'indeterminate': true,
  },
};

export const Disabled: Story = {
  args: {
    'aria-label': 'Disabled checkbox',
    'disabled': true,
  },
};

export const DisabledChecked: Story = {
  args: {
    'aria-label': 'Disabled checked checkbox',
    'disabled': true,
    'checked': true,
  },
};

export const Small: Story = {
  args: {
    'aria-label': 'Small checkbox',
    'size': 'small',
  },
};

export const Medium: Story = {
  args: {
    'aria-label': 'Medium checkbox',
    'size': 'medium',
  },
};

export const Large: Story = {
  args: {
    'aria-label': 'Large checkbox',
    'size': 'large',
  },
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <CheckBox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        aria-label='Controlled checkbox'
      />
    );
  },
};

export const States: Story = {
  render: () => (
    <YStack space='$4'>
      <CheckBox defaultChecked aria-label='Checked checkbox' />
      <CheckBox indeterminate aria-label='Indeterminate checkbox' />
      <CheckBox disabled aria-label='Disabled checkbox' />
      <CheckBox disabled checked aria-label='Disabled checked checkbox' />
      <CheckBox
        disabled
        indeterminate
        aria-label='Disabled indeterminate checkbox'
      />
    </YStack>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <XStack space='$4' alignItems='center'>
      <CheckBox size='small' aria-label='Small checkbox' />
      <CheckBox size='medium' aria-label='Medium checkbox' />
      <CheckBox size='large' aria-label='Large checkbox' />
    </XStack>
  ),
};
