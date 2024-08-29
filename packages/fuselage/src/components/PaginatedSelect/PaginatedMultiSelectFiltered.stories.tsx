import { useArgs } from '@storybook/preview-api';
import type { StoryFn, Meta } from '@storybook/react';

import { PaginatedMultiSelectFiltered } from './PaginatedMultiSelectFiltered';

export default {
  title: 'Inputs/PaginatedMultiSelectFiltered',
  component: PaginatedMultiSelectFiltered,
  args: {
    placeholder: 'Placeholder here...',
    options: Array.from({ length: 1000 }, (_, i) => ({
      value: i,
      label: `Item #${i}`,
    })),
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'centered',
  },
} satisfies Meta<typeof PaginatedMultiSelectFiltered>;

const Template: StoryFn<typeof PaginatedMultiSelectFiltered> = (args) => (
  <PaginatedMultiSelectFiltered {...args} />
);

export const Normal: StoryFn<typeof PaginatedMultiSelectFiltered> = (args) => {
  const [, updateArgs] = useArgs();

  return (
    <PaginatedMultiSelectFiltered
      setFilter={(filter) => updateArgs({ filter })}
      {...args}
    />
  );
};

export const Errored = Template.bind({});
Errored.args = {
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
