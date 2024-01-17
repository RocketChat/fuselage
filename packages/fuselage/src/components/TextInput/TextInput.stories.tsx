import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { Icon, TextInput } from '../..';
import { PropsVariationSection } from '../../../.storybook/helpers';

export default {
  title: 'Inputs/TextInput',
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component: 'An input for any kind of single-line text.',
      },
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Stories title={'Props from InputBox'} />
        </>
      ),
    },
  },
} as Meta<typeof TextInput>;

const Template: StoryFn<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default: StoryFn<typeof TextInput> = Template.bind({});

export const WithIconAddon: StoryFn<typeof TextInput> = Template.bind({});
WithIconAddon.args = {
  addon: <Icon name='send' size='x20' />,
};

export const Invalid: StoryFn<typeof TextInput> = Template.bind({});
Invalid.args = {
  error: 'Error',
};

export const Disabled: StoryFn<typeof TextInput> = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithPlaceholder: StoryFn<typeof TextInput> = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const WithValue: StoryFn<typeof TextInput> = Template.bind({});
WithValue.args = {
  defaultValue: 'Value',
};

export const States: StoryFn<typeof TextInput> = () => (
  <PropsVariationSection
    component={TextInput}
    common={{ onChange: () => {} }}
    xAxis={{
      'default': {},
      'with placeholder': { placeholder: 'Placeholder' },
      'with value': { value: 'Value' },
      'with icon': {
        addon: <Icon name='keyboard' size='x20' />,
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
