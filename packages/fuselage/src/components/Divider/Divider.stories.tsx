import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Divider } from '../..';

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
