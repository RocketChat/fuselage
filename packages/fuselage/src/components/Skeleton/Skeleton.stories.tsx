import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Skeleton from './Skeleton';

export default {
  title: 'Layout/Skeleton',
  component: Skeleton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'rect', 'circle'],
      description: 'Shape of the skeleton placeholder.',
    },
  },
} satisfies Meta<typeof Skeleton>;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {};

export const RectVariant: Story = {
  args: {
    variant: 'rect',
    width: '50%',
    height: 100,
  },
};

export const CircleVariant: Story = {
  args: {
    variant: 'circle',
    width: 16,
    height: 16,
  },
};

export const TextVariant: Story = {
  args: {
    variant: 'text',
  },
};
