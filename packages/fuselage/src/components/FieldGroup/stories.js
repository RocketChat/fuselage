import React from 'react';

import { Field, FieldGroup, Hint, InputBox, Label } from '../..';

export default {
  title: 'Forms|FieldGroup',
  component: FieldGroup,
  parameters: {
    jest: ['FieldGroup/spec'],
  },
};

export const _default = () =>
  <FieldGroup>
    <Field>
      <Label text='Field #1'>
        <InputBox.Skeleton />
      </Label>
    </Field>
    <Field>
      <Label text='Field #2'>
        <InputBox.Skeleton />
      </Label>
      <Hint>Help text</Hint>
    </Field>
    <Field>
      <Label text='Field #3'>
        <InputBox.Skeleton />
      </Label>
    </Field>
  </FieldGroup>;
