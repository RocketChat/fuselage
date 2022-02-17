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
  title: 'Inputs/MultiSelect',
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

const options: readonly (readonly [string, string, boolean?])[] = [
  ['1', 'a teste 1'],
  ['2', 'b teste 2', true],
  ['3', 'c teste 3'],
  ['4', 'd teste 4'],
  ['5', 'd teste 5'],
  ['6', 'd teste 6'],
  ['7', 'd teste 7'],
  ['8', 'd teste 8'],
  ['9', 'd teste 9'],
  ['10', 'd teste 10'],
];

const Template: ComponentStory<typeof MultiSelect> = (args) => (
  <MultiSelect {...args} />
);

export const Default: ComponentStory<typeof MultiSelect> = Template.bind({});
Default.args = {
  placeholder: 'Placeholder here...',
  options,
};

export const Error: ComponentStory<typeof MultiSelect> = Template.bind({});
Error.args = {
  error: 'Error',
  placeholder: 'Placeholder here...',
  options,
};

export const Disabled: ComponentStory<typeof MultiSelect> = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: 'Placeholder here...',
  options,
};

export const CustomEmpty: ComponentStory<typeof MultiSelect> = Template.bind(
  {}
);
CustomEmpty.args = {
  customEmpty: 'Custom Empty Placeholder',
  placeholder: 'Placeholder here...',
  options: [],
};

const FilteredTemplate: ComponentStory<typeof MultiSelectFiltered> = (args) => (
  <MultiSelectFiltered {...args} />
);

export const WithFilter: ComponentStory<typeof MultiSelectFiltered> =
  FilteredTemplate.bind({});
WithFilter.args = {
  placeholder: 'Placeholder here...',
  onChange: action('change'),
  options,
};
