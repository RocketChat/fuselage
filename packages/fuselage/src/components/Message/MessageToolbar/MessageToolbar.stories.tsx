import type { Meta } from '@storybook/react-vite';
import type { ComponentType } from 'react';

import Box from '../../Box/index.js';
import { BasicMessageTemplate } from '../helpers.js';

import { MessageToolbar } from './MessageToolbar.js';
import { MessageToolbarItem } from './MessageToolbarItem.js';

export default {
  title: 'Message/MessageToolbar',
  component: MessageToolbar,
  subcomponents: {
    MessageToolbarItem: MessageToolbarItem as ComponentType<any>,
  },
} satisfies Meta<typeof MessageToolbar>;

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
