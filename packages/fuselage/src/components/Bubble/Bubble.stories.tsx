import { action } from '@storybook/addon-actions';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Bubble } from '../..';

export default {
  title: 'Data Display/Bubble',
  component: Bubble,
} as ComponentMeta<typeof Bubble>;

const Template: ComponentStory<typeof Bubble> = (args) => <Bubble {...args} />;

export const IconAndLabel = Template.bind({});
IconAndLabel.args = {
  children: 'New messages',
  onClick: action('click'),
  icon: 'arrow-down',
};

export const Dismissable = Template.bind({});
Dismissable.args = {
  children: 'New messages',
  icon: 'arrow-down',
  onClick: action('click'),
  onDismiss: action('dismiss'),
};

export const LabelOnly = Template.bind({});
LabelOnly.args = {
  children: 'See new messages',
  onClick: action('click'),
};
