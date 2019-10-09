import React from 'react';

import { Icon, InputBox } from '../..';

export default {
  title: 'Forms|InputBox',
  component: InputBox,
  parameters: {
    jest: ['InputBox/spec'],
  },
};

export const _default = () =>
  <InputBox />;

export const withPlaceholder = () =>
  <InputBox data-placeholder='Placeholder' />;

export const withValue = () =>
  <InputBox children='Value' />;

export const withAddon = () =>
  <InputBox addon={<Icon name='send' />} />;

export const disabled = () =>
  <InputBox className='disabled' />;

export const invalid = () =>
  <InputBox className='invalid' />;

export const skeleton = () =>
  <InputBox.Skeleton />;
