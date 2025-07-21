import type { StoryFn, Meta } from '@storybook/react-webpack5';

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
Normal.parameters = {
  loki: {
    skip: true,
  },
};

export const Errored = Template.bind({});
Errored.args = {
  error: 'Error',
};
Errored.parameters = {
  loki: {
    skip: true,
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
Disabled.parameters = {
  loki: {
    skip: true,
  },
};
