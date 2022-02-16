import React from 'react';

import { Icon, UrlInput } from '../..';
import PropsVariation from '../../.storybook/PropsVariation';

export default {
  title: 'Inputs/UrlInput',
  component: UrlInput,
  parameters: {
    jest: ['UrlInput.spec.tsx'],
  },
};

export const Default = () => <UrlInput />;

export const WithIconAddon = () => (
  <UrlInput addon={<Icon name='send' size='x20' />} />
);

export const Invalid = () => <UrlInput error='Error' />;

export const Disabled = () => <UrlInput disabled />;

export const WithPlaceholder = () => <UrlInput placeholder='Placeholder' />;

export const WithValue = () => <UrlInput defaultValue='https://rocket.chat' />;

export const States = () => (
  <PropsVariation
    component={UrlInput}
    common={{ onChange: () => undefined }}
    xAxis={{
      'default': {},
      'with placeholder': { placeholder: 'Placeholder' },
      'with value': { value: 'https://rocket.chat' },
      'with icon': {
        addon: <Icon name='discover' size='x20' />,
        value: 'https://rocket.chat',
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
