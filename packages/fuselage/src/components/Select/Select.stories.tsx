import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Select } from '../..';

export default {
  title: 'Inputs/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
  },
  args: {
    placeholder: 'Placeholder here...',
    options: Array.from(
      {
        length: 10,
      },
      (_, i) => [`${i + 1}`, `Item #${i + 1}`]
    ),
    width: 250,
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});

export const WithValue = Template.bind({});
WithValue.args = {
  value: '2',
};

export const Errored = Template.bind({});
Errored.args = {
  error: 'Error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithoutPlaceholder = Template.bind({});
WithoutPlaceholder.args = {
  placeholder: undefined,
};

export const CustomEmpty = Template.bind({});
CustomEmpty.args = {
  customEmpty: 'Custom Empty Placeholder',
  options: [],
};
