import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { FramedIcon } from './FramedIcon';

export default {
  title: 'Data Display/FramedIcon',
  component: FramedIcon,
} as ComponentMeta<typeof FramedIcon>;

const Template: ComponentStory<typeof FramedIcon> = (args) => (
  <FramedIcon {...args} icon='rocket' />
);

export const Default = Template.bind({});

export const Info = Template.bind({});
Info.args = {
  info: true,
};

export const Success = Template.bind({});
Success.args = {
  success: true,
};

export const Warning = Template.bind({});
Warning.args = {
  warning: true,
};

export const Danger = Template.bind({});
Danger.args = {
  danger: true,
};
