import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Accordion, Box } from '../..';

export default {
  title: 'CONTAINERS/Accordion_new',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
  console.log(args);
  return (
    <Accordion>
      <Accordion.Item title='Item #1' defaultExpanded>
        <Box color='default' fontScale='p3' marginBlockEnd='x16'>
          Content #1
        </Box>
      </Accordion.Item>
      <Accordion.Item title='Item #2'>
        <Box color='default' fontScale='p3' marginBlockEnd='x16'>
          Content #2
        </Box>
      </Accordion.Item>
      <Accordion.Item title='Item #3'>
        <Box color='default' fontScale='p3' marginBlockEnd='x16'>
          Content #3
        </Box>
      </Accordion.Item>
    </Accordion>
  );
};

export const Default = Template.bind({});
