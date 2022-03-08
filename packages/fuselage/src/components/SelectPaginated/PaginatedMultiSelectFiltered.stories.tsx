import { useArgs } from '@storybook/client-api';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { PaginatedMultiSelectFiltered } from '.';

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
} as ComponentMeta<typeof PaginatedMultiSelectFiltered>;

export const Normal: ComponentStory<typeof PaginatedMultiSelectFiltered> = (
  args
) => {
  const [, updateArgs] = useArgs();

  return (
    <PaginatedMultiSelectFiltered
      setFilter={(filter) => updateArgs({ filter })}
      {...args}
    />
  );
};

export const Errored: ComponentStory<typeof PaginatedMultiSelectFiltered> = (
  args
) => <PaginatedMultiSelectFiltered {...args} />;
Errored.args = {
  error: true,
};

export const Disabled: ComponentStory<typeof PaginatedMultiSelectFiltered> = (
  args
) => <PaginatedMultiSelectFiltered {...args} />;
Disabled.args = {
  disabled: true,
};
