import { action } from '@storybook/addon-actions';
import {
  Title,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Accordion, Box } from '../..';
import { AccordionItem } from './AccordionItem';

export default {
  title: 'Containers/Accordion/AccordionItem',
  component: AccordionItem,
  parameters: {
    docs: {
      description: {
        component: 'A collapsible panel.',
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title={''} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof AccordionItem>;

const Template: ComponentStory<typeof AccordionItem> = (args) => (
  <Accordion>
    <AccordionItem {...args}>
      <Box color='default' fontScale='p2m' marginBlockEnd='x16'>
        Content
      </Box>
    </AccordionItem>
  </Accordion>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Item',
};

export const Expanded = Template.bind({});
Expanded.args = {
  title: 'Item',
  defaultExpanded: true,
};

export const Noncollapsible = Template.bind({});
Noncollapsible.args = {
  title: 'Item',
  noncollapsible: true,
};

export const WithoutTitle = Template.bind({});

export const Enabled = Template.bind({});
Enabled.args = {
  title: 'Item',
  onToggleEnabled: action('toggleEnabled'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Item',
  onToggleEnabled: action('toggleEnabled'),
  disabled: true,
};
