import React from 'react';

import { Input } from '../..';

export default {
  title: 'Forms|Input',
  component: Input,
  parameters: {
    jest: ['Input/spec'],
  },
};

export const _default = () =>
  <Input />;

export const withPlaceholder = () =>
  <Input placeholder='Placeholder' />;

export const withValue = () =>
  <Input defaultValue='Value' />;

export const disabled = () =>
  <Input disabled />;

export const invalid = () =>
  <Input invalid />;

export const withIcon = () =>
  <Input icon='mail' />;

export const ofTextareaType = () =>
  <Input type='textarea' />;

export const ofSelectType = () =>
  <Input type='select'>
    <option value='A'>Item A</option>
    <option value='B'>Item B</option>
    <option value='C'>Item C</option>
  </Input>;
