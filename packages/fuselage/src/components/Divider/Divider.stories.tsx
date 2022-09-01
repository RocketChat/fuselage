import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ButtonGroup, Divider, IconButton } from '..';

export default {
  title: 'Data Display/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const Default: ComponentStory<typeof Divider> = Template.bind({});
export const WithText: ComponentStory<typeof Divider> = Template.bind({});
WithText.args = {
  children: 'Divider',
};

export const Vertical: ComponentStory<typeof Divider> = Template.bind({});
Vertical.args = {
  vertical: true,
};

export const AsButtonSeparator = () => (
  <ButtonGroup medium>
    <IconButton small icon='phone' />
    <Divider vertical />
    <IconButton small icon='user' />
  </ButtonGroup>
);
