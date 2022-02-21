import { action } from '@storybook/addon-actions';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Box, Menu } from '..';
import { Icon } from '../Icon';

export default {
  title: 'Navigation/Menu',
  component: Menu,
  parameters: {
    docs: {
      description: {
        component: 'Kebab Menu',
      },
    },
    layout: 'centered',
  },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => (
  <Box position='relative' maxWidth={250}>
    <Menu {...args} />
  </Box>
);

export const simple = Template.bind({});
simple.args = {
  options: {
    makeAdmin: {
      label: (
        <Box display='flex' alignItems='center'>
          <Icon mie='x4' name='key' size='x16' />
          Make Admin
        </Box>
      ),
      action: action('makeAdmin.action'),
    },
    delete: {
      label: (
        <Box display='flex' alignItems='center' color='danger'>
          <Icon mie='x4' name='trash' size='x16' />
          Delete
        </Box>
      ),
      action: action('delete.action'),
    },
  },
};

export const complex = Template.bind({});
complex.args = {
  options: {
    example: {
      label: 'Example',
      action: action('example.action'),
    },
    divider1: {
      type: 'divider',
    },
    heading: {
      type: 'heading',
      label: 'Heading Example',
    },
    delete: {
      type: 'option',
      label: (
        <Box display='flex' alignItems='center' color='danger'>
          <Icon mie='x4' name='trash' size='x16' />
          Delete
        </Box>
      ),
      action: action('delete.action'),
    },
  },
};
