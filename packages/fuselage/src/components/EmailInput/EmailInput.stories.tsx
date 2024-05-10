import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Icon, EmailInput } from '../..';
import { PropsVariationSection } from '../../../.storybook/helpers';

export default {
  title: 'Inputs/EmailInput',
  component: EmailInput,
  parameters: {
    docs: {
      description: {
        component: 'An input for email addresses.',
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
} as ComponentMeta<typeof EmailInput>;

const Template: ComponentStory<typeof EmailInput> = (args) => (
  <EmailInput aria-label='email' {...args} />
);

export const Default: ComponentStory<typeof EmailInput> = Template.bind({});

export const WithIconAddon: ComponentStory<typeof EmailInput> = () => (
  <EmailInput aria-label='email' addon={<Icon name='send' size='x20' />} />
);

export const Invalid: ComponentStory<typeof EmailInput> = Template.bind({});
Invalid.args = {
  error: 'Error',
};

export const Disabled: ComponentStory<typeof EmailInput> = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithPlaceholder: ComponentStory<typeof EmailInput> = Template.bind(
  {}
);
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const WithValue: ComponentStory<typeof EmailInput> = Template.bind({});
WithValue.args = {
  defaultValue: 'support@rocket.chat',
};

export const States: ComponentStory<typeof EmailInput> = () => (
  <>
    <PropsVariationSection
      component={EmailInput}
      common={{ 'onChange': () => {}, 'aria-label': 'email' }}
      xAxis={{
        'default': {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: 'support@rocket.chat' },
        'with icon': {
          addon: <Icon name='at' size='x20' />,
          value: 'support@rocket.chat',
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
      component={EmailInput}
      common={{ 'onChange': () => {}, 'small': true, 'aria-label': 'email' }}
      xAxis={{
        'small': {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: 'support@rocket.chat' },
        'with icon': {
          addon: <Icon name='at' size='x20' />,
          value: 'support@rocket.chat',
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
