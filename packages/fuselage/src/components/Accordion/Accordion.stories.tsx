import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Accordion, Box } from '../..';

export default {
  title: 'Containers/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component:
          'An `Accordion` allows users to toggle the display of sections of content.',
      },
    },
  },
} as ComponentMeta<typeof Accordion.Item>;

const Template: ComponentStory<typeof Accordion> = () => (
  <Accordion>
    <Accordion.Item title='Item #1' defaultExpanded>
      <Box color='default' fontScale='p2' marginBlockEnd='x16'>
        Content #1
      </Box>
    </Accordion.Item>
    <Accordion.Item title='Item #2'>
      <Box color='default' fontScale='p2' marginBlockEnd='x16'>
        Content #2
      </Box>
    </Accordion.Item>
    <Accordion.Item title='Item #3'>
      <Box color='default' fontScale='p2' marginBlockEnd='x16'>
        Content #3
      </Box>
    </Accordion.Item>
  </Accordion>
);

export const Default: ComponentStory<typeof Accordion> = Template.bind({});
