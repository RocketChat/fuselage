import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
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
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput aria-label='text' {...args} />
);

export const Default: ComponentStory<typeof TextInput> = Template.bind({});

export const WithIconAddon: ComponentStory<typeof TextInput> = Template.bind(
  {}
);
WithIconAddon.args = {
  addon: <Icon name='send' size='x20' />,
};

export const Invalid: ComponentStory<typeof TextInput> = Template.bind({});
Invalid.args = {
  error: 'Error',
};

export const Disabled: ComponentStory<typeof TextInput> = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithPlaceholder: ComponentStory<typeof TextInput> = Template.bind(
  {}
);
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const WithValue: ComponentStory<typeof TextInput> = Template.bind({});
WithValue.args = {
  defaultValue: 'Value',
};

export const States: ComponentStory<typeof TextInput> = () => (
  <>
    <PropsVariationSection
      component={TextInput}
      common={{ 'onChange': () => {}, 'aria-label': 'text' }}
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
    <PropsVariationSection
      component={TextInput}
      common={{ 'onChange': () => {}, 'small': true, 'aria-label': 'text' }}
      xAxis={{
        'small': {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: 'Value' },
        'with icon': {
          addon: <Icon name='keyboard' size='x20' />,
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
