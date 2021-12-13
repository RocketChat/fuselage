import { action } from '@storybook/addon-actions';
import {
  Title,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Accordion, Box } from '../..';

export default {
  title: 'CONTAINERS/Accordion_new/AccordionItem',
  component: Accordion.Item,
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
} as ComponentMeta<typeof Accordion.Item>;

const Template: ComponentStory<typeof Accordion.Item> = (args) => {
  console.log(args);
  return (
    <Accordion>
      <Accordion.Item {...args}>
        <Box color='default' fontScale='p3' marginBlockEnd='x16'>
          Content
        </Box>
      </Accordion.Item>
    </Accordion>
  );
};

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
