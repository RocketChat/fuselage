import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { MessageDivider } from '.';
import Box from '../../Box';

export default {
  title: 'Message/MessageDivider',
  component: MessageDivider,
} as Meta<typeof MessageDivider>;

export const Default: StoryFn<typeof MessageDivider> = () => (
  <Box>
    <MessageDivider>Text</MessageDivider>
    <MessageDivider unreadLabel={'Unread'}>Text</MessageDivider>
    <MessageDivider unreadLabel={'Unread'} />
  </Box>
);
