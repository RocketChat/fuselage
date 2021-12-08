import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Box, Chevron } from '../..';

export default {
  title: 'Misc/Chevron_new',
  component: Chevron,
} as ComponentMeta<typeof Chevron>;

const Template: ComponentStory<typeof Chevron> = (args) => (
  <Chevron {...args} size={40} />
);

export const Default = Template.bind({});

export const Up = Template.bind({});
Up.args = {
  up: true,
};

export const Right = Template.bind({});
Right.args = {
  right: true,
};

export const Down = Template.bind({});
Down.args = {
  down: true,
};

export const Left = Template.bind({});
Left.args = {
  left: true,
};

export const Size = () => (
  <Box display='flex' alignItems='center'>
    <Chevron size='x2' />
    <Chevron size='x4' />
    <Chevron size='x8' />
    <Chevron size='x16' />
    <Chevron size='x20' />
    <Chevron size='x24' />
    <Chevron size='x32' />
    <Chevron size='x40' />
  </Box>
);
