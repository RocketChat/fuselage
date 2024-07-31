import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Box from '../Box';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

export default {
  title: 'Containers/Accordion',
  component: Accordion,
} satisfies ComponentMeta<typeof AccordionItem>;

const Template: ComponentStory<typeof Accordion> = () => (
  <Accordion>
    <AccordionItem title='Item #1' defaultExpanded>
      <Box color='default' fontScale='p2' marginBlockEnd={16}>
        Content #1
      </Box>
    </AccordionItem>
    <AccordionItem title='Item #2'>
      <Box color='default' fontScale='p2' marginBlockEnd={16}>
        Content #2
      </Box>
    </AccordionItem>
    <AccordionItem title='Item #3'>
      <Box color='default' fontScale='p2' marginBlockEnd={16}>
        Content #3
      </Box>
    </AccordionItem>
  </Accordion>
);

export const Default: ComponentStory<typeof Accordion> = Template.bind({});
