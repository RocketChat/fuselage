import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Label } from '../..';

export default {
  title: 'Forms/Label_new',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => (
  <Label {...args}>Label</Label>
);

export const Default: ComponentStory<typeof Label> = Template.bind({});

export const Required: ComponentStory<typeof Label> = Template.bind({});
Required.args = {
  required: true,
};

export const Disabled: ComponentStory<typeof Label> = Template.bind({});
Disabled.args = {
  disabled: true,
};
