import type { Meta, StoryObj } from '@storybook/react-webpack5';

import FramedIcon from './FramedIcon';

export default {
  title: 'Data Display/FramedIcon',
  component: FramedIcon,
  argTypes: {
    icon: {
      control: 'text',
      description: 'Name of the Fuselage icon rendered inside the frame.',
      table: { category: 'Content' },
    },
    info: {
      control: 'boolean',
      description: 'Applies the info (blue) color kind to the frame.',
      table: { category: 'Kind' },
    },
    success: {
      control: 'boolean',
      description: 'Applies the success (green) color kind to the frame.',
      table: { category: 'Kind' },
    },
    warning: {
      control: 'boolean',
      description: 'Applies the warning (yellow) color kind to the frame.',
      table: { category: 'Kind' },
    },
    danger: {
      control: 'boolean',
      description: 'Applies the danger (red) color kind to the frame.',
      table: { category: 'Kind' },
    },
    neutral: {
      control: 'boolean',
      description:
        'Applies the neutral color kind explicitly; used by default when no other kind is set.',
      table: { category: 'Kind' },
    },
  },
} satisfies Meta<typeof FramedIcon>;

type Story = StoryObj<typeof FramedIcon>;

export const Default: Story = {
  args: {
    icon: 'rocket',
  },
};

export const Info: Story = {
  args: {
    icon: 'rocket',
    info: true,
  },
};

export const Success: Story = {
  args: {
    icon: 'rocket',
    success: true,
  },
};

export const Warning: Story = {
  args: {
    icon: 'rocket',
    warning: true,
  },
};

export const Danger: Story = {
  args: {
    icon: 'rocket',
    danger: true,
  },
};
