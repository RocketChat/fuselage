import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { Icon, SearchInput } from '../..';
import { PropsVariationSection } from '../../../.storybook/helpers';

export default {
  title: 'Inputs/SearchInput',
  component: SearchInput,
  parameters: {
    docs: {
      description: {
        component: 'An input for search queries.',
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <ArgsTable />
          <Stories title={'Props from InputBox'} />
        </>
      ),
    },
  },
} as Meta<typeof SearchInput>;

const Template: StoryFn<typeof SearchInput> = (args) => (
  <SearchInput {...args} />
);

export const Default: StoryFn<typeof SearchInput> = Template.bind({});

export const WithIconAddon: StoryFn<typeof SearchInput> = Template.bind({});
WithIconAddon.args = {
  addon: <Icon name='send' size='x20' />,
};

export const Invalid: StoryFn<typeof SearchInput> = Template.bind({});
Invalid.args = {
  error: 'Error',
};

export const Disabled: StoryFn<typeof SearchInput> = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithPlaceholder: StoryFn<typeof SearchInput> = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const WithValue: StoryFn<typeof SearchInput> = Template.bind({});
WithValue.args = {
  defaultValue: 'cat rooms',
};

export const States: StoryFn<typeof SearchInput> = () => (
  <PropsVariationSection
    component={SearchInput}
    common={{ onChange: () => {} }}
    xAxis={{
      'default': {},
      'with placeholder': { placeholder: 'Placeholder' },
      'with value': { value: 'Value' },
      'with icon': {
        addon: <Icon name='magnifier' size='x20' />,
        value: 'Value',
      },
    }}
    yAxis={{
      'default': {},
      'hover': { className: 'hover' },
      'active': { className: 'active' },
      'focus': { className: 'focus' },
      'disabled': { disabled: true },
      'errored': { error: 'Error' },
      'errored + hover': { className: 'hover', error: 'Error' },
      'errored + active': { className: 'active', error: 'Error' },
      'errored + focus': { className: 'focus', error: 'Error' },
    }}
  />
);
