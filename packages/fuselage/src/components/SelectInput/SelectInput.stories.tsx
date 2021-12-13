import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Icon, SelectInput } from '../..';
import { PropsVariationSection } from '../../../.storybook/helpers';

export default {
  title: 'Forms/Inputs/SelectInput_new',
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
  <SelectInput {...args}>
    <SelectInput.Option value='a'>Item A</SelectInput.Option>
    <SelectInput.Option value='b'>Item B</SelectInput.Option>
    <SelectInput.Option value='c'>Item C</SelectInput.Option>
  </SelectInput>
);

export const Default: ComponentStory<typeof SelectInput> = Template.bind({});

export const Multiple: ComponentStory<typeof SelectInput> = Template.bind({});
Multiple.args = {
  multiple: true,
  htmlSize: 3,
  value: ['b', 'c'],
};

export const WithAddon: ComponentStory<typeof SelectInput> = Template.bind({});
WithAddon.args = {
  addon: <Icon name='discover' size='x20' />,
};

export const MultipleWithAddon: ComponentStory<typeof SelectInput> =
  Template.bind({});
MultipleWithAddon.args = {
  addon: <Icon name='discover' size='x20' />,
  multiple: true,
  htmlSize: 3,
};

export const Invalid: ComponentStory<typeof SelectInput> = Template.bind({});
Invalid.args = {
  error: 'Error',
};

export const Disabled: ComponentStory<typeof SelectInput> = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithPlaceholder: ComponentStory<typeof SelectInput> =
  Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const WithValue: ComponentStory<typeof SelectInput> = Template.bind({});
WithValue.args = {
  defaultValue: 'b',
};

export const States: ComponentStory<typeof SelectInput> = () => (
  <PropsVariationSection
    component={SelectInput}
    common={{
      children: (
        <>
          <SelectInput.Option value='a'>Item A</SelectInput.Option>
          <SelectInput.Option value='b'>Item B</SelectInput.Option>
          <SelectInput.Option value='c'>Item C</SelectInput.Option>
        </>
      ),
      onChange: () => {},
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
);
