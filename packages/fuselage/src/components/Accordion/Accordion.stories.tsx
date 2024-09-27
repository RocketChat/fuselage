import type { StoryFn, Meta } from '@storybook/react';
import type { ComponentType } from 'react';

import Box from '../Box';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';

export default {
  title: 'Containers/Accordion',
  component: Accordion,
  subcomponents: {
    'Accordion.Item': Accordion.Item as ComponentType<any>,
    'AccordionItem': AccordionItem as ComponentType<any>,
  },
} satisfies Meta<typeof Accordion>;

const Template: StoryFn<typeof Accordion> = () => (
  <Accordion>
    <Accordion.Item title='Item #1' defaultExpanded>
      <Box color='default' fontScale='p2' marginBlockEnd={16}>
        Content #1
      </Box>
    </Accordion.Item>
    <Accordion.Item title='Item #2'>
      <Box color='default' fontScale='p2' marginBlockEnd={16}>
        Content #2
      </Box>
    </Accordion.Item>
    <Accordion.Item title='Item #3'>
      <Box color='default' fontScale='p2' marginBlockEnd={16}>
        Content #3
      </Box>
    </Accordion.Item>
  </Accordion>
);

export const Default: StoryFn<typeof Accordion> = Template.bind({});
