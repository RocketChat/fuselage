import { action } from '@storybook/addon-actions';
import React from 'react';

import { Icon, UrlInput } from '../..';

export default {
  title: 'Forms|UrlInput',
  component: UrlInput,
  parameters: {
    jest: ['UrlInput/spec'],
  },
};

export const _default = () =>
  <UrlInput />;

export const withPlaceholder = () =>
  <UrlInput placeholder='Placeholder' onChange={action('change')} />;

export const withValue = () =>
  <UrlInput value='https://rocket.chat' onChange={action('change')} />;

export const withAddon = () =>
  <UrlInput addon={<Icon name='discover' />} onChange={action('change')} />;

export const disabled = () =>
  <UrlInput disabled onChange={action('change')} />;

export const withError = () =>
  <UrlInput error='Error' onChange={action('change')} />;
