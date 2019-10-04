import React from 'react';

import { PseudoInput } from '../../../.storybook/helpers';
import { Label } from '../..';

export default {
  title: 'Forms|Label',
  component: Label,
  parameters: {
    jest: ['Label/spec'],
  },
};

export const _default = () =>
  <Label text='Label'>
    <PseudoInput />
  </Label>;

export const required = () =>
  <Label text='Label' required>
    <PseudoInput />
  </Label>;

export const withError = () =>
  <Label text='Label' error='Error'>
    <PseudoInput />
  </Label>;

export const withChildren = () =>
  <Label text='Label'>
    <PseudoInput />
  </Label>;

export const withChildrenAtTopPosition = () =>
  <Label text='Label' position='top'>
    <PseudoInput />
  </Label>;

export const withChildrenAtStartPosition = () =>
  <Label text='Label' position='start'>
    <PseudoInput />
  </Label>;

export const withChildrenAtEndPosition = () =>
  <Label text='Label' position='end'>
    <PseudoInput />
  </Label>;

export const nested = () =>
  <Label text='Outer label'>
    <Label text='Label' />
  </Label>;
