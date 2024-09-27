import type { Meta } from '@storybook/react';
import type { ComponentType } from 'react';

import Box from '../../Box';
import { BasicMessageTemplate } from '../helpers';
import { MessageToolbar } from './MessageToolbar';
import { MessageToolbarItem } from './MessageToolbarItem';

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
