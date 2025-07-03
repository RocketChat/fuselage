import type { Meta, StoryObj } from '@storybook/react';
import { YStack } from 'tamagui';

import { AnimatedVisibility } from './AnimatedVisibility';

const meta = {
  title: 'Layout/AnimatedVisibility',
  component: AnimatedVisibility,
  parameters: {
    docs: {
      description: {
        component: 'AnimatedVisibility',
      },
    },
  },
  argTypes: {
    visibility: {
      description: '"hidden" "visible" "hiding" "unhiding"',
      control: 'radio',
      options: ['visible', 'hidden', 'hiding', 'unhiding'],
      table: {
        defaultValue: { summary: '-' },
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AnimatedVisibility>;

export default meta;
type Story = StoryObj<typeof AnimatedVisibility>;

export const Example: Story = {
  args: {
    children: (
      <YStack backgroundColor='$background' padding='$4' borderRadius='$2'>
        Visible
      </YStack>
    ),
  },
};
