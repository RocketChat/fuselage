import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { SelectInputOption } from '.';
import { Icon, SelectInput } from '../..';
import { PropsVariationSection } from '../../../.storybook/helpers';

export default {
  title: 'Inputs/SelectInput',
  component: SelectInput,
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
          <Stories title={'Props from InputBox'} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof SelectInput>;

const Template: ComponentStory<typeof SelectInput> = (args) => (
  <SelectInput aria-label='select' {...args}>
    <SelectInputOption value='a'>Item A</SelectInputOption>
    <SelectInputOption value='b'>Item B</SelectInputOption>
    <SelectInputOption value='c'>Item C</SelectInputOption>
  </SelectInput>
);

export const Default: ComponentStory<typeof SelectInput> = Template.bind({});

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true,
  htmlSize: 3,
  value: ['b', 'c'],
};

export const WithAddon = Template.bind({});
WithAddon.args = {
  addon: <Icon name='discover' size='x20' />,
};

export const MultipleWithAddon = Template.bind({});
MultipleWithAddon.args = {
  addon: <Icon name='discover' size='x20' />,
  multiple: true,
  htmlSize: 3,
};

export const Invalid = Template.bind({});
Invalid.args = {
  error: 'Error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const WithValue = Template.bind({});
WithValue.args = {
  defaultValue: 'b',
};

export const States: ComponentStory<typeof SelectInput> = () => (
  <>
    <PropsVariationSection
      component={SelectInput}
      common={{
        'aria-label': 'select',
        'children': (
          <>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </>
        ),
        'onChange': () => {},
      }}
      xAxis={{
        'default': {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: 'b' },
        'multiple': { multiple: true, size: 3 },
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
      component={SelectInput}
      common={{
        'aria-label': 'select',
        'children': (
          <>
            <SelectInputOption value='a'>Item A</SelectInputOption>
            <SelectInputOption value='b'>Item B</SelectInputOption>
            <SelectInputOption value='c'>Item C</SelectInputOption>
          </>
        ),
        'onChange': () => {},
        'small': true,
      }}
      xAxis={{
        'small': {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: 'b' },
        'multiple': { multiple: true, size: 3 },
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
