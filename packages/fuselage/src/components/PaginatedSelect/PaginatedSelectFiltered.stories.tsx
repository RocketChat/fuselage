import type { StoryFn, Meta } from '@storybook/react';

import { PaginatedSelectFiltered } from './PaginatedSelectFiltered';

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
} satisfies Meta<typeof PaginatedSelectFiltered>;

const Template: StoryFn<typeof PaginatedSelectFiltered> = (args) => (
  <PaginatedSelectFiltered {...args} />
);

export const Normal = Template.bind({});

export const Errored = Template.bind({});
Errored.args = {
  error: 'Error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
