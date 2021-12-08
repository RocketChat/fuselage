import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Box, Chip, Margins } from '../..';
import { exampleAvatar, blankAvatar } from '../../../.storybook/helpers';

export default {
  title: 'Data Display/Chip_new',
  component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => (
  <Chip {...args}>Marie Rowe</Chip>
);

export const Example = Template.bind({});
Example.args = {
  thumbUrl: exampleAvatar,
  onClick: action('click'),
};

export const Default = Template.bind({});

export const Dismissible = Template.bind({});
Dismissible.args = {
  onClick: action('click'),
};

export const WithThumb = () => (
  <Box display='flex' margin='-x4'>
    <Margins all='x4'>
      <Chip thumbUrl={blankAvatar}>Chip</Chip>
      <Chip thumbUrl={blankAvatar} onClick={action('click')}>
        Chip
      </Chip>
    </Margins>
  </Box>
);
