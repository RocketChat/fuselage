import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Menu, MenuItem, MenuSection } from '.';
import Box from '../../Box/Box';
import { CheckBox } from '../../CheckBox';
import { OptionContent, OptionIcon, OptionInput } from '../../Option';

type MenuStories = ComponentMeta<typeof Menu>;

export default {
  title: 'Navigation/Menu/v2',
  component: Menu,
  decorators: [
    (Story) => (
      <Box
        position='relative'
        minHeight={50}
        height='full'
        minWidth={100}
        maxWidth={250}
        width={'full'}
        display='flex'
        alignItems='center'
      >
        <Story />
      </Box>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'Kebab Menu',
      },
    },
    layout: 'centered',
  },
} as MenuStories;

export const Simple: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args}>
    <MenuItem key='1'>teste 1</MenuItem>
    <MenuItem key='2'>teste 2</MenuItem>
    <MenuItem key='3'>teste 3</MenuItem>
  </Menu>
);

export const WithSections: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args}>
    <MenuSection title='Styles'>
      <MenuItem key='bold'>Bold</MenuItem>
      <MenuItem key='underline'>Underline</MenuItem>
    </MenuSection>
    <MenuSection title='Align'>
      <MenuItem key='left'>Left</MenuItem>
      <MenuItem key='middle'>Middle</MenuItem>
      <MenuItem key='right'>Right</MenuItem>
    </MenuSection>
  </Menu>
);

export const Complex: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args}>
    <MenuSection title='Styles'>
      <MenuItem key='bold'>
        <OptionIcon name='bold' />
        <OptionContent>Bold</OptionContent>
        <OptionInput>
          <CheckBox />
        </OptionInput>
      </MenuItem>
      <MenuItem key='underline'>
        <OptionIcon name='underline' />
        <OptionContent>Underline</OptionContent>
        <OptionInput>
          <CheckBox />
        </OptionInput>
      </MenuItem>
    </MenuSection>
  </Menu>
);
