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
      description: 'Determines the visibility state of the component',
      control: 'radio',
      options: [
        (AnimatedVisibility as any).VISIBLE,
        (AnimatedVisibility as any).HIDDEN,
        (AnimatedVisibility as any).HIDING,
        (AnimatedVisibility as any).UNHIDING,
      ],
      table: {
        defaultValue: { summary: (AnimatedVisibility as any).VISIBLE },
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
    visibility: (AnimatedVisibility as any).VISIBLE,
  },
};