import {
  Title,
  Description,
  Primary,
  Stories,
  ArgsTable,
} from '@storybook/addon-docs';
import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { Icon, NumberInput } from '../..';
import { PropsVariationSection } from '../../../.storybook/helpers';

export default {
  title: 'Inputs/NumberInput',
  component: NumberInput,
  parameters: {
    docs: {
      description: {
        component: 'An input for numbers.',
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
} as Meta<typeof NumberInput>;

const Template: StoryFn<typeof NumberInput> = (args) => (
  <NumberInput {...args} />
);

export const Default: StoryFn<typeof NumberInput> = Template.bind({});

export const WithIconAddon: StoryFn<typeof NumberInput> = Template.bind({});
WithIconAddon.args = {
  addon: <Icon name='send' size='x20' />,
};

export const Invalid: StoryFn<typeof NumberInput> = Template.bind({});
Invalid.args = {
  error: 'Error',
};
export const Disabled: StoryFn<typeof NumberInput> = Template.bind({});
Disabled.args = {
  disabled: true,
};
export const WithPlaceholder: StoryFn<typeof NumberInput> = Template.bind({});
WithPlaceholder.args = {
  defaultValue: 1024,
};

export const States: StoryFn<typeof NumberInput> = () => (
  <PropsVariationSection
    component={NumberInput}
    common={{ onChange: () => {} }}
    xAxis={{
      'default': {},
      'with placeholder': { placeholder: 'Placeholder' },
      'with value': { value: 1024 },
      'with icon': { addon: <Icon name='discover' size='x20' />, value: 1024 },
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
