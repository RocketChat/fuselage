import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { PaginatedSelectFiltered } from '.';

export default {
  title: 'Inputs/PaginatedSelectFiltered',
  component: PaginatedSelectFiltered,
  args: {
    placeholder: 'Placeholder here...',
    options: Array.from({ length: 1000 }, (_, i) => ({
      value: i,
      label: `Item #${i}`,
    })),
    width: '250px',
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'centered',
  },
} as ComponentMeta<typeof PaginatedSelectFiltered>;

const Template: ComponentStory<typeof PaginatedSelectFiltered> = (args) => (
  <PaginatedSelectFiltered {...args} />
);

export const normal = Template.bind({});

export const errored = Template.bind({});
errored.args = {
  error: 'Error',
};

export const disabled = Template.bind({});
disabled.args = {
  disabled: true,
};
