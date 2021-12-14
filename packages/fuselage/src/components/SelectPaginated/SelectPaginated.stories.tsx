import { action } from '@storybook/addon-actions';
import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { useState } from 'react';

import {
  PaginatedSelect,
  PaginatedMultiSelect,
  PaginatedMultiSelectFiltered,
  PaginatedSelectFiltered,
} from '.';
import { options } from './hugeList';

const optionsEllipses = [
  {
    value: 1000,
    label: 'Very very very very very very very very very large text',
  },
  ...options,
];

export default {
  title: 'Forms/Inputs/SelectPaginated_new',
  component: PaginatedSelect,
  parameters: {
    docs: {
      description: {
        component: 'An input for selection of options.',
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <ArgsTable />
          <Stories title={''} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof PaginatedSelect>;

const Template: ComponentStory<typeof PaginatedSelect> = (args) => (
  <PaginatedSelect {...args} />
);

export const Default: ComponentStory<typeof PaginatedSelect> = Template.bind(
  {}
);
Default.args = {
  width: '250px',
  placeholder: 'Placeholder here...',
  options,
};

export const WithTitle: ComponentStory<typeof PaginatedSelect> = Template.bind(
  {}
);
WithTitle.args = {
  withTitle: true,
  width: '250px',
  placeholder: 'Placeholder here...',
  options: optionsEllipses,
};

export const Error: ComponentStory<typeof PaginatedSelect> = Template.bind({});
Error.args = {
  error: true,
  width: '250px',
  placeholder: 'Placeholder here...',
  options,
};

export const Disabled: ComponentStory<typeof PaginatedSelect> = Template.bind(
  {}
);
Disabled.args = {
  disabled: true,
  width: '250px',
  placeholder: 'Placeholder here...',
  options,
};

export const NoPlaceholder: ComponentStory<typeof PaginatedSelect> =
  Template.bind({});
NoPlaceholder.args = {
  width: '250px',
  options,
};

const TemplateWithFilter: ComponentStory<typeof PaginatedSelectFiltered> = (
  args
) => <PaginatedSelectFiltered {...args} />;

export const SelectWithFilter: ComponentStory<typeof PaginatedSelectFiltered> =
  TemplateWithFilter.bind({});
SelectWithFilter.args = {
  width: '250px',
  options,
  placeholder: 'Placeholder here...',
};

export const SelectWithFilterAndEllipses: ComponentStory<
  typeof PaginatedSelectFiltered
> = TemplateWithFilter.bind({});
SelectWithFilterAndEllipses.args = {
  width: '250px',
  options: optionsEllipses,
  placeholder: 'Placeholder here...',
};

export const SelectWithFilterAndError: ComponentStory<
  typeof PaginatedSelectFiltered
> = TemplateWithFilter.bind({});
SelectWithFilterAndError.args = {
  width: '250px',
  options,
  placeholder: 'Placeholder here...',
  error: true,
};

export const SelectWithFilterAndDisabled: ComponentStory<
  typeof PaginatedSelectFiltered
> = TemplateWithFilter.bind({});
SelectWithFilterAndDisabled.args = {
  width: '250px',
  options,
  placeholder: 'Placeholder here...',
  disabled: true,
};

const TemplateMultiSelect: ComponentStory<typeof PaginatedMultiSelect> = (
  args
) => <PaginatedMultiSelect {...args} />;

export const PaginatedMultiSelectStory: ComponentStory<
  typeof PaginatedMultiSelect
> = TemplateMultiSelect.bind({});
PaginatedMultiSelectStory.args = {
  value: [1000, 2, 3],
  options: optionsEllipses,
  placeholder: 'Placeholder here...',
  withTitle: true,
};
PaginatedMultiSelectStory.storyName = 'PaginatedMultiSelect';

export const PaginatedMultiSelectDisabled: ComponentStory<
  typeof PaginatedMultiSelect
> = TemplateMultiSelect.bind({});
PaginatedMultiSelectDisabled.args = {
  options,
  placeholder: 'Placeholder here...',
  disabled: true,
};

export const PaginatedMultiSelectError: ComponentStory<
  typeof PaginatedMultiSelect
> = TemplateMultiSelect.bind({});
PaginatedMultiSelectError.args = {
  options,
  placeholder: 'Placeholder here...',
  error: true,
};

export const PaginatedMultiSelectFilteredStory: ComponentStory<
  typeof PaginatedMultiSelectFiltered
> = () => {
  const [filter, setFilter] = useState('');
  return (
    <PaginatedMultiSelectFiltered
      placeholder='Placeholder here...'
      onChange={action('change')}
      options={options}
      filter={filter}
      setFilter={setFilter}
    />
  );
};
PaginatedMultiSelectFilteredStory.storyName = 'PaginatedMultiSelectFiltered';

export const PaginatedMultiSelectFilteredError: ComponentStory<
  typeof PaginatedMultiSelectFiltered
> = () => (
  <PaginatedMultiSelectFiltered
    error
    placeholder='Placeholder here...'
    onChange={action('change')}
    options={options}
  />
);

export const PaginatedMultiSelectFilteredDisabled: ComponentStory<
  typeof PaginatedMultiSelectFiltered
> = () => (
  <PaginatedMultiSelectFiltered
    disabled
    placeholder='Placeholder here...'
    onChange={action('change')}
    options={options}
  />
);
