import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Accordion, Box } from '../..';

export default {
  title: 'CONTAINERS/Accordion_new/AccordionItem',
  component: Accordion,
  argTypes: {
    title: {
      description: 'node',
      control: {
        type: null,
      },
    },
    defaultExpanded: {
      description: 'bool',
      control: {
        type: null,
      },
    },
    disabled: {
      description: 'bool',
      control: {
        type: null,
      },
    },
    expanded: {
      description: 'bool',
      control: {
        type: null,
      },
    },
    tabIndex: {
      description: 'number',
      defaultValue: 10,
      control: {
        type: null,
      },
    },
    onToggle: {
      description: 'func',
      control: {
        type: null,
      },
    },
    onToggleEnabled: {
      description: 'func',
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
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

Template.storyName = 'Accordion.Item';

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
  onToggleEnabled: () => {
    action('toggleEnabled');
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Item',
  onToggleEnabled: () => {
    action('toggleEnabled');
  },
  disabled: true,
};
