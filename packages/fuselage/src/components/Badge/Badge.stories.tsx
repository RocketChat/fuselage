import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Badge, Box } from '../..';

export default {
  title: 'Data Display/Badge_new',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => (
  <Box display='inline-flex'>
    <Badge {...args}>99</Badge>
  </Box>
);

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
