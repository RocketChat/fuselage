import React from 'react';

import { Icon, PasswordInput } from '../..';
import PropsVariation from '../../.storybook/PropsVariation';

export default {
  title: 'Forms/Inputs/PasswordInput',
  component: PasswordInput,
  parameters: { jest: ['PasswordInput.spec.tsx'] },
};

export const Default = () => <PasswordInput />;

export const WithValue = () => <PasswordInput defaultValue='password' />;

export const WithIconAddon = () => (
  <PasswordInput addon={<Icon name='send' size={20} />} />
);

export const Invalid = () => <PasswordInput error='Error' />;

export const Disabled = () => <PasswordInput disabled />;

export const WithPlaceholder = () => (
  <PasswordInput placeholder='Placeholder' />
);

export const States = () => (
  <PropsVariation
    component={PasswordInput}
    common={{ onChange: () => undefined }}
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
);
