import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Icon, PasswordInput } from '../..';
import PropsVariation from '../../.storybook/PropsVariation';

export default {
  title: 'Forms/Inputs/PasswordInput',
  component: PasswordInput,
  parameters: { jest: ['PasswordInput.spec.tsx'] },
} as Meta;

export const Default: Story = () => <PasswordInput />;

export const WithValue: Story = () => <PasswordInput defaultValue='password' />;

export const WithIconAddon: Story = () => (
  <PasswordInput addon={<Icon name='send' size={20} />} />
);

export const Invalid: Story = () => <PasswordInput error='Error' />;

export const Disabled: Story = () => <PasswordInput disabled />;

export const WithPlaceholder: Story = () => (
  <PasswordInput placeholder='Placeholder' />
);

export const States: Story = () => (
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
