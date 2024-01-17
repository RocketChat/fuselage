import { Title, Primary } from '@storybook/addon-docs';
import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import type { MessageToolboxWrapper } from '.';
import { MessageToolbox, MessageToolboxItem } from '.';
import { Box } from '../..';

export default {
  title: 'Message/MessageToolbox',
  component: MessageToolbox,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Primary />
        </>
      ),
    },
  },
} as Meta<typeof MessageToolboxWrapper>;

export const Default: StoryFn<typeof MessageToolbox> = () => (
  <Box>
    <MessageToolbox>
      <MessageToolboxItem icon='quote' />
      <MessageToolboxItem icon='emoji' />
      <MessageToolboxItem icon='thread' />
      <MessageToolboxItem icon='menu' />
    </MessageToolbox>
  </Box>
);
