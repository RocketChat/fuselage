import { action } from '@storybook/addon-actions';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Item } from 'react-stately';

import { Box } from '../..';
import { Menu } from './Menu';
// import { Icon } from '../Icon';

export default {
  title: 'Navigation/Menu/v2',
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
  <Box
    position='relative'
    maxWidth={250}
    minHeight={100}
    minWidth={100}
    height='full'
    width={'full'}
    bg='#cecece'
  >
    <Menu {...args}>
      <Item key='1'>teste 1</Item>
      <Item key='2'>teste 2</Item>
      <Item key='3'>teste 3</Item>
    </Menu>
    <Menu {...args}>
      <Item key='1'>teste 1</Item>
      <Item key='2'>teste 2</Item>
      <Item key='3'>teste 3</Item>
    </Menu>
  </Box>
);

export const Simple = Template.bind({});
// Simple.args = {
//   options: {
//     makeAdmin: {
//       label: (
//         <Box display='flex' alignItems='center'>
//           <Icon mie='x4' name='key' size='x16' />
//           Make Admin
//         </Box>
//       ),
//       action: action('makeAdmin.action'),
//     },
//     delete: {
//       label: (
//         <Box display='flex' alignItems='center' color='danger'>
//           <Icon mie='x4' name='trash' size='x16' />
//           Delete
//         </Box>
//       ),
//       action: action('delete.action'),
//     },
//   },
// };

// export const Complex = Template.bind({});
// Complex.args = {
//   options: {
//     example: {
//       label: 'Example',
//       action: action('example.action'),
//     },
//     divider1: {
//       type: 'divider',
//     },
//     heading: {
//       type: 'heading',
//       label: 'Heading Example',
//     },
//     delete: {
//       type: 'option',
//       label: (
//         <Box display='flex' alignItems='center' color='danger'>
//           <Icon mie='x4' name='trash' size='x16' />
//           Delete
//         </Box>
//       ),
//       action: action('delete.action'),
//     },
//   },
// };
