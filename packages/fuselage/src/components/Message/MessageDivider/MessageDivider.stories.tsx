import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Box } from '../../Box';

import MessageDivider from './MessageDivider';

export default {
  title: 'Message/MessageDivider',
  component: MessageDivider,
  argTypes: {
    children: {
      control: 'text',
      description: 'Label rendered in the divider bar, e.g. a date.',
      table: { category: 'Content' },
    },
    unreadLabel: {
      control: 'text',
      description:
        'Label rendered on the trailing bar; when set, switches the divider to its unread styling.',
      table: { category: 'Content' },
    },
  },
} satisfies Meta<typeof MessageDivider>;

type Story = StoryObj<typeof MessageDivider>;

export const Default: Story = {
  render: () => (
    <Box>
      <MessageDivider>Text</MessageDivider>
      <MessageDivider unreadLabel={'Unread'}>Text</MessageDivider>
      <MessageDivider unreadLabel={'Unread'} />
    </Box>
  ),
};
