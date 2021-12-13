import { action } from '@storybook/addon-actions';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { MultiSelect, MultiSelectFiltered } from '../..';

export default {
  title: 'Forms/MultiSelect_new',
  component: MultiSelect,
  parameters: {
    docs: {
      description: {
        component: 'An input for selection of options.',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories title={''} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof MultiSelect>;

const options = [
  [1, 'a teste 1'],
  [2, 'b teste 2', true],
  [3, 'c teste 3'],
  [4, 'd teste 4'],
  [5, 'd teste 5'],
  [6, 'd teste 6'],
  [7, 'd teste 7'],
  [8, 'd teste 8'],
  [9, 'd teste 9'],
  [10, 'd teste 10'],
];

const Template: ComponentStory<typeof MultiSelect> = (args) => (
  <MultiSelect {...args} />
);

export const Default: ComponentStory<typeof MultiSelect> = Template.bind({});
Default.storyName = 'MultiSelect';
Default.args = {
  placeholder: 'Placeholder here...',
  options,
};

export const MultiSelectError: ComponentStory<typeof MultiSelect> =
  Template.bind({});
MultiSelectError.args = {
  error: true,
  placeholder: 'Placeholder here...',
  options,
};
MultiSelectError.storyName = null;

export const MultiSelectDisabled: ComponentStory<typeof MultiSelect> =
  Template.bind({});
MultiSelectDisabled.args = {
  disabled: true,
  placeholder: 'Placeholder here...',
  options,
};

const FilteredTemplate: ComponentStory<typeof MultiSelectFiltered> = (args) => (
  <MultiSelectFiltered {...args} />
);

export const Filtered: ComponentStory<typeof MultiSelectFiltered> =
  FilteredTemplate.bind({});
Filtered.args = {
  placeholder: 'Placeholder here...',
  onChange: action('change'),
  options,
};
Filtered.storyName = 'MultiSelectFiltered';

export const FilteredError: ComponentStory<typeof MultiSelectFiltered> =
  FilteredTemplate.bind({});
FilteredError.args = {
  error: true,
  placeholder: 'Placeholder here...',
  onChange: action('change'),
  options,
};
FilteredError.storyName = 'MultiSelectFiltered error';

export const FilteredDisabled: ComponentStory<typeof MultiSelectFiltered> =
  FilteredTemplate.bind({});
FilteredDisabled.args = {
  disabled: true,
  placeholder: 'Placeholder here...',
  onChange: action('change'),
  options,
};
FilteredDisabled.storyName = 'MultiSelectFiltered disabled';
