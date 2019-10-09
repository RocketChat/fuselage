import React from 'react';

import { Field, Hint, InputBox, Label } from '../..';

export default {
  title: 'Forms|Field',
  component: Field,
  parameters: {
    jest: ['Field/spec'],
  },
};

export const _default = () =>
  <Field>
    <Label text='Label'>
      <InputBox.Skeleton />
    </Label>
    <Hint>Help text</Hint>
  </Field>;
