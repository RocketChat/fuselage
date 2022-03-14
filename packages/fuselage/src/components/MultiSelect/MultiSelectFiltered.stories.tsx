import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { MultiSelectFiltered } from '../..';

export default {
  title: 'Inputs/MultiSelectFiltered',
  component: MultiSelectFiltered,
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
  },
} as ComponentMeta<typeof MultiSelectFiltered>;

const Template: ComponentStory<typeof MultiSelectFiltered> = (args) => (
  <MultiSelectFiltered {...args} />
);

export const Default = Template.bind({});
