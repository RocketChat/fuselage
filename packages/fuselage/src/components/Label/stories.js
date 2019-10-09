import React from 'react';

import { InputBox, Label } from '../..';

export default {
  title: 'Forms|Label',
  component: Label,
  parameters: {
    jest: ['Label/spec'],
  },
};

export const _default = () =>
  <Label text='Label'>
    <InputBox.Skeleton />
  </Label>;

export const required = () =>
  <Label text='Label' required>
    <InputBox.Skeleton />
  </Label>;

export const withError = () =>
  <Label text='Label' error='Error'>
    <InputBox.Skeleton />
  </Label>;

export const withChildren = () =>
  <Label text='Label'>
    <InputBox.Skeleton />
  </Label>;

export const withChildrenAtTopPosition = () =>
  <Label text='Label' position='top'>
    <InputBox.Skeleton />
  </Label>;

export const withChildrenAtStartPosition = () =>
  <Label text='Label' position='start'>
    <InputBox.Skeleton />
  </Label>;

export const withChildrenAtEndPosition = () =>
  <Label text='Label' position='end'>
    <InputBox.Skeleton />
  </Label>;

export const nested = () =>
  <Label text='Outer label'>
    <Label text='Label' />
  </Label>;
