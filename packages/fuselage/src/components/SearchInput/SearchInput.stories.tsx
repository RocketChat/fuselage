import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
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
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => (
  <SearchInput aria-label='search' {...args} />
);

export const Default: ComponentStory<typeof SearchInput> = Template.bind({});

export const WithIconAddon: ComponentStory<typeof SearchInput> = Template.bind(
  {}
);
WithIconAddon.args = {
  addon: <Icon name='send' size='x20' />,
};

export const Invalid: ComponentStory<typeof SearchInput> = Template.bind({});
Invalid.args = {
  error: 'Error',
};

export const Disabled: ComponentStory<typeof SearchInput> = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithPlaceholder: ComponentStory<typeof SearchInput> =
  Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const WithValue: ComponentStory<typeof SearchInput> = Template.bind({});
WithValue.args = {
  defaultValue: 'cat rooms',
};

export const States: ComponentStory<typeof SearchInput> = () => (
  <>
    <PropsVariationSection
      component={SearchInput}
      common={{ 'onChange': () => {}, 'aria-label': 'search' }}
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
    <PropsVariationSection
      component={SearchInput}
      common={{ 'onChange': () => {}, 'small': true, 'aria-label': 'search' }}
      xAxis={{
        'small': {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: 'Value' },
        'with icon': {
          addon: <Icon name='magnifier' size='x20' />,
          value: 'Value',
        },
      }}
      yAxis={{
        'small': {},
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
  </>
);
