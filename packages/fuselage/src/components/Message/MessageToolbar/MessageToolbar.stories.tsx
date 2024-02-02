import { Title, Primary } from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import type { MessageToolbarWrapper } from '.';
import { MessageToolbar, MessageToolbarItem } from '.';
import { Box } from '../..';

export default {
  title: 'Message/MessageToolbar',
  component: MessageToolbar,
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
} as ComponentMeta<typeof MessageToolbarWrapper>;

export const Default: ComponentStory<typeof MessageToolbar> = () => (
  <Box>
    <MessageToolbar>
      <MessageToolbarItem title='Quote' icon='quote' />
      <MessageToolbarItem title='Emoji' icon='emoji' />
      <MessageToolbarItem title='Thread' icon='thread' />
      <MessageToolbarItem title='Menu' icon='menu' />
    </MessageToolbar>
  </Box>
);
