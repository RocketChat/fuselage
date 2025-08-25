import type { Meta, StoryObj } from '@storybook/react';
import { Bubble } from './Bubble';

const meta: Meta<typeof Bubble> = {
  title: 'Components/Bubble',
  component: Bubble,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    secondary: {
      control: 'boolean',
      description: 'Whether to use secondary styling',
    },
    small: {
      control: 'boolean',
      description: 'Whether to use small size',
    },
    onClick: {
      action: 'clicked',
      description: 'Callback when bubble is clicked',
    },
    onDismiss: {
      action: 'dismissed',
      description: 'Callback when dismiss button is clicked',
    },
    icon: {
      control: 'text',
      description: 'Icon name to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const IconAndLabel: Story = {
  args: {
    children: 'New messages',
    onClick: () => console.log('Bubble clicked'),
  },
};

export const Dismissable: Story = {
  args: {
    children: 'New messages',
    onDismiss: () => console.log('Bubble dismissed'),
  },
};

export const LabelOnly: Story = {
  args: {
    children: 'See new messages',
  },
};

export const Secondary: Story = {
  args: {
    children: 'See new messages',
    secondary: true,
  },
};

export const SecondaryDismissable: Story = {
  args: {
    children: 'New messages',
    secondary: true,
    onDismiss: () => console.log('Bubble dismissed'),
  },
  parameters: {
    docs: {
      description: {
        story: 'Example with only a dismiss action - the label is not clickable.',
      },
    },
  },
};

export const WithoutAction: Story = {
  args: {
    children: '22 Nov 2023',
  },
};

export const WithLargeText: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum libero viverra nulla varius, a consequat ante malesuada. Fusce bibendum, lacus sed fermentum sagittis, urna erat viverra lacus, eu pellentesque neque est nec nisl. Morbi in lobortis dui, ac consectetur mi.',
  },
};

export const Small: Story = {
  args: {
    children: '22 Nov 2023',
    small: true,
  },
};
