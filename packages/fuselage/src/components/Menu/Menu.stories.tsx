import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Box, Menu, MenuProps } from '..';
import { menuOptions, customMenuOptions } from '../../../.storybook/helpers.js';

export default {
  title: 'Navigation/Menu',
  component: Menu,
  parameters: {
    docs: {
      description: {
        component: 'Kebab Menu',
      },
    },
  },
} as ComponentMeta<typeof Menu>;

export const Default: ComponentStory<typeof Menu> = () => (
  <Box style={{ position: 'relative', maxWidth: 250 }}>
    <Menu options={menuOptions} />
  </Box>
);

export const CustomOptions: ComponentStory<typeof Menu> = () => (
  <Box style={{ position: 'relative', maxWidth: 250 }}>
    <Menu options={customMenuOptions as MenuProps['options']} />
  </Box>
);
