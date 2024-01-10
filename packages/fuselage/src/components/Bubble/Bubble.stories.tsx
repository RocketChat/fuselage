import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Bubble from '.';

export default {
  title: 'Components/Bubble',
  component: Bubble,
} as ComponentMeta<typeof Bubble>;

const Template: ComponentStory<typeof Bubble> = (args) => <Bubble {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'New messages',
  icon: 'arrow-down',
};
export const WithDismiss = Template.bind({});
WithDismiss.args = {
  children: 'New messages',
  icon: 'arrow-down',
  onDismiss: () => console.log('dismiss'),
};
