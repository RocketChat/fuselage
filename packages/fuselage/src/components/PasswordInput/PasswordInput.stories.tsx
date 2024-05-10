import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Icon, PasswordInput } from '../..';
import { PropsVariationSection } from '../../../.storybook/helpers';

export default {
  title: 'Inputs/PasswordInput',
  component: PasswordInput,
  parameters: { jest: ['PasswordInput.spec.tsx'] },
} as ComponentMeta<typeof PasswordInput>;

export const Default: ComponentStory<typeof PasswordInput> = () => (
  <PasswordInput aria-label='password' />
);

export const WithValue = () => (
  <PasswordInput aria-label='password' defaultValue='password' />
);

export const WithIconAddon = () => (
  <PasswordInput aria-label='password' addon={<Icon name='send' size={20} />} />
);

export const Invalid = () => (
  <PasswordInput aria-label='password' error='Error' />
);

export const Disabled = () => <PasswordInput aria-label='password' disabled />;

export const WithPlaceholder = () => (
  <PasswordInput aria-label='password' placeholder='Placeholder' />
);

export const States = () => (
  <>
    <PropsVariationSection
      component={PasswordInput}
      common={{ 'onChange': () => undefined, 'aria-label': 'password' }}
      xAxis={{
        'default': {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: 'Value' },
        'with icon': { addon: <Icon name='key' size='x20' />, value: 'Value' },
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
      component={PasswordInput}
      common={{
        'onChange': () => undefined,
        'small': true,
        'aria-label': 'password',
      }}
      xAxis={{
        'small': {},
        'with placeholder': { placeholder: 'Placeholder' },
        'with value': { value: 'Value' },
        'with icon': { addon: <Icon name='key' size='x20' />, value: 'Value' },
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
