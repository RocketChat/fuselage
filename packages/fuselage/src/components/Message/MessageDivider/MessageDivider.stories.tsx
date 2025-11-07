import type { StoryFn, Meta } from '@storybook/react-vite';

import Box from '../../Box/index.js';

import { MessageDivider } from './MessageDivider.js';

export default {
  title: 'Message/MessageDivider',
  component: MessageDivider,
} satisfies Meta<typeof MessageDivider>;

export const Default: StoryFn<typeof MessageDivider> = () => (
  <Box>
    <MessageDivider>Text</MessageDivider>
    <MessageDivider unreadLabel={'Unread'}>Text</MessageDivider>
    <MessageDivider unreadLabel={'Unread'} />
  </Box>
);
