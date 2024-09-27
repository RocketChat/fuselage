import type { StoryFn, Meta } from '@storybook/react';

import Box from '../../Box';
import { MessageDivider } from './MessageDivider';

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
