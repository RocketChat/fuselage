import { action } from '@storybook/addon-actions';
import type { StoryFn, Meta } from '@storybook/react';

import Box from '../Box';
import { Icon } from '../Icon';
import { Menu } from './Menu';

export default {
  title: 'Navigation/Menu',
  component: Menu,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <Box position='relative' maxWidth={250}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Menu>;

const Template: StoryFn<typeof Menu> = (args) => <Menu {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  options: {
    makeAdmin: {
      label: (
        <Box display='flex' alignItems='center'>
          <Icon mie={4} name='key' size='x16' />
          Make Admin
        </Box>
      ),
      action: action('makeAdmin.action'),
    },
    delete: {
      label: (
        <Box display='flex' alignItems='center' color='danger'>
          <Icon mie={4} name='trash' size='x16' />
          Delete
        </Box>
      ),
      action: action('delete.action'),
    },
  },
};

export const Complex = Template.bind({});
Complex.args = {
  options: {
    example: {
      label: 'Example',
      action: action('example.action'),
    },
    disabled: {
      label: 'Disabled',
      action: action('disabled.action'),
      disabled: true,
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
          <Icon mie={4} name='trash' size='x16' />
          Delete
        </Box>
      ),
      action: action('delete.action'),
    },
  },
};
