import { Title, Primary } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { MessageToolbox } from '.';
import { Box } from '../..';

export default {
  title: 'Messages/Toolbox_new',
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
} as ComponentMeta<typeof MessageToolbox>;

export const Default: ComponentStory<typeof MessageToolbox> = () => (
  <Box>
    <MessageToolbox>
      <MessageToolbox.Item icon='quote' />
      <MessageToolbox.Item icon='clock' />
      <MessageToolbox.Item icon='thread' />
    </MessageToolbox>
  </Box>
);
