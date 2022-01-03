import { Title, Primary } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { MessageToolbox, ToolboxWrapper, Item } from '.';
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
} as ComponentMeta<typeof ToolboxWrapper>;

export const Default: ComponentStory<typeof MessageToolbox> = () => (
  <Box>
    <MessageToolbox>
      <Item icon='quote' />
      <Item icon='clock' />
      <Item icon='thread' />
    </MessageToolbox>
  </Box>
);
