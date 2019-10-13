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
  <InputBox placeholder='Placeholder' />;

export const withValue = () =>
  <InputBox defaultValue='Value' />;

export const withAddon = () =>
  <InputBox addon={<Icon name='send' />} />;

export const disabled = () =>
  <InputBox disabled />;

export const invalid = () =>
  <InputBox error='Error' />;

export const skeleton = () =>
  <InputBox.Skeleton />;
