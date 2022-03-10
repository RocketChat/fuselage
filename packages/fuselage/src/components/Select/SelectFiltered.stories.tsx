import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { SelectFiltered } from '../..';

export default {
  title: 'Inputs/SelectFiltered',
  component: SelectFiltered,
  parameters: {
    layout: 'centered',
  },
  args: {
    width: '250px',
    placeholder: 'Placeholder here...',
    options: Array.from(
      {
        length: 10,
      },
      (_, i) => [`${i + 1}`, `Item #${i + 1}`]
    ),
  },
} as ComponentMeta<typeof SelectFiltered>;

const Template: ComponentStory<typeof SelectFiltered> = (args) => (
  <SelectFiltered {...args} />
);

export const Default = Template.bind({});

export const WithLabelEllipsis = Template.bind({});
WithLabelEllipsis.args = {
  options: Array.from(
    {
      length: 10,
    },
    (_, i) => [`${i + 1}`, `Item with huge label and numbered as #${i + 1}`]
  ),
  value: '7',
};

export const WithEmptyOptions = Template.bind({});
WithEmptyOptions.args = {
  options: [],
};

export const WithAddon = Template.bind({});
WithAddon.args = {
  addonIcon: 'magnifier',
};

export const WithCustomEmptyOptionsLabel = Template.bind({});
WithCustomEmptyOptionsLabel.args = {
  options: [],
  customEmpty: 'Custom empty placeholder',
};
