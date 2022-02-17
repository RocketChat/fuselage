import { Title, Primary } from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
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
} as ComponentMeta<typeof MessageToolboxWrapper>;

export const Default: ComponentStory<typeof MessageToolbox> = () => (
  <Box>
    <MessageToolbox>
      <MessageToolboxItem icon='quote' />
      <MessageToolboxItem icon='emoji' />
      <MessageToolboxItem icon='thread' />
      <MessageToolboxItem icon='menu' />
    </MessageToolbox>
  </Box>
);
