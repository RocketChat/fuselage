import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Icon, InputBox } from '../..';

export default {
  title: 'Forms/InputBox_new',
  component: InputBox,
} as ComponentMeta<typeof InputBox>;

const Template: ComponentStory<typeof InputBox> = (args) => (
  <InputBox {...args} />
);

export const Default: ComponentStory<typeof InputBox> = Template.bind({});
Default.args = {
  defaultValue: 'Value',
  onChange: action('change'),
};

export const WithAddon: ComponentStory<typeof InputBox> = Template.bind({});
WithAddon.args = {
  addon: <Icon name='send' size='x20' />,
};

export const Invalid: ComponentStory<typeof InputBox> = Template.bind({});
Invalid.args = {
  defaultValue: 'Value',
  error: 'Error',
  onChange: action('change'),
};

export const Disabled: ComponentStory<typeof InputBox> = Template.bind({});
Disabled.args = {
  defaultValue: 'Value',
  disabled: true,
  onChange: action('change'),
};

export const WithPlaceholder: ComponentStory<typeof InputBox> = Template.bind(
  {}
);
WithPlaceholder.args = {
  placeholder: 'Placeholder',
  onChange: action('change'),
};
export const Skeleton: ComponentStory<typeof InputBox> = () => (
  <InputBox.Skeleton />
);
Skeleton.storyName = 'InputBox.Skeleton';
