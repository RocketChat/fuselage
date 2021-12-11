import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { MessageDivider } from '.';
import { Box } from '../..';

export default {
  title: 'Messages/Divider_new',
  component: MessageDivider,
} as ComponentMeta<typeof MessageDivider>;

export const Default: ComponentStory<typeof MessageDivider> = () => (
  <Box>
    <MessageDivider>Text</MessageDivider>
    <MessageDivider unreadLabel={'Unread'}>Text</MessageDivider>
    <MessageDivider unreadLabel={'Unread'} />
  </Box>
);
