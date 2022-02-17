import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Box, Menu } from '..';
import { menuOptions } from '../../../.storybook/helpers.js';

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

export const Template: ComponentStory<typeof Menu> = () => (
  <Box style={{ position: 'relative', maxWidth: 250 }}>
    <Menu options={menuOptions} />
  </Box>
);
