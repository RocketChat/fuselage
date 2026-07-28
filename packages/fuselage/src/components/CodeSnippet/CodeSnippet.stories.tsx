import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { action } from 'storybook/actions';

import CodeSnippet from './CodeSnippet';

export default {
  title: 'Data Display/CodeSnippet',
  component: CodeSnippet,
  argTypes: {
    children: {
      control: 'text',
      description:
        'Code or command text to display; renders a loading skeleton when empty.',
      table: { category: 'Content' },
    },
    buttonText: {
      control: 'text',
      description: 'Label for the copy button. Defaults to `Copy`.',
      table: { category: 'Content', defaultValue: { summary: 'Copy' } },
    },
    buttonDisabled: {
      control: 'boolean',
      description: 'Disables the copy button.',
      table: { category: 'State' },
    },
    onClick: {
      control: false,
      description:
        'Called when the copy button is clicked; the button is only rendered when this is provided.',
      table: { category: 'Events' },
    },
  },
} satisfies Meta<typeof CodeSnippet>;

type Story = StoryObj<typeof CodeSnippet>;

export const Default: Story = {
  args: {
    children: 'curl -L https://go.rocket.chat/i/docker-compose.yml -O',
  },
};

export const CopyButton: Story = {
  args: {
    children: 'curl -L https://go.rocket.chat/i/docker-compose.yml -O',
    onClick: action('click'),
  },
};

export const CustomButtonName: Story = {
  args: {
    children: 'curl -L https://go.rocket.chat/i/docker-compose.yml -O',
    onClick: action('click'),
    buttonText: 'Custom name',
  },
};

export const LoadingCode: Story = {
  args: {
    children: '',
    onClick: action('click'),
  },
};

export const DisabledButton: Story = {
  args: {
    children: 'curl -L https://go.rocket.chat/i/docker-compose.yml -O',
    onClick: action('click'),
    buttonText: 'Disabled Button',
    buttonDisabled: true,
  },
};
