import { Title, Primary } from '@storybook/addon-docs';
import type { ComponentMeta } from '@storybook/react';
import React from 'react';

import { MessageToolbar, MessageToolbarItem } from '.';
import Box from '../../Box';
import { BasicMessageTemplate } from '../helpers';

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
} satisfies ComponentMeta<typeof MessageToolbar>;

const toolbar = (
  <Box>
    <MessageToolbar>
      <MessageToolbarItem title='Quote' icon='quote' />
      <MessageToolbarItem title='Emoji' icon='emoji' />
      <MessageToolbarItem title='Thread' icon='thread' />
      <MessageToolbarItem title='Menu' icon='menu' />
    </MessageToolbar>
  </Box>
);

export const Default = BasicMessageTemplate.bind({});
Default.args = {
  toolbar,
};
