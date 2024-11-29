import type { StoryFn, Meta } from '@storybook/react';
import type { ComponentType } from 'react';

import Box from '../Box';

import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

export default {
  title: 'Containers/Accordion',
  component: Accordion,
  subcomponents: {
    AccordionItem: AccordionItem as ComponentType<any>,
  },
} satisfies Meta<typeof Accordion>;

export const Default: StoryFn<typeof Accordion> = () => (
  <Accordion>
    <AccordionItem title='Item #1'>
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

const ItemTemplate: StoryFn<typeof AccordionItem> = ({
  title = 'Item #2',
  ...args
}) => (
  <Accordion>
    <AccordionItem title='Item #1'>
      <Box color='default' fontScale='p2' marginBlockEnd={16}>
        Content #1
      </Box>
    </AccordionItem>
    <AccordionItem title={title} {...args}>
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

export const ExpandedItemByDefault = ItemTemplate.bind({});
ExpandedItemByDefault.args = {
  defaultExpanded: true,
};

export const DisabledItem = ItemTemplate.bind({});
DisabledItem.args = {
  disabled: true,
};
