import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Box } from '../Box';

import Accordion from './Accordion';
import AccordionItem, { type AccordionItemProps } from './AccordionItem';

export default {
  title: 'Containers/Accordion',
  component: Accordion,
  subcomponents: {
    AccordionItem,
  },
  argTypes: {
    children: {
      control: false,
      description: 'AccordionItem elements rendered as collapsible sections.',
      table: { category: 'Content' },
    },
  },
} satisfies Meta<typeof Accordion>;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
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
  ),
};

const ItemTemplate = ({
  title = 'Item #2',
  ...args
}: Partial<AccordionItemProps>) => (
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

export const ExpandedItemByDefault: Story = {
  render: () => <ItemTemplate defaultExpanded />,
};

export const DisabledItem: Story = {
  render: () => <ItemTemplate disabled />,
};
