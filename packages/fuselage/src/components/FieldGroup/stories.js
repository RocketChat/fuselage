import React from 'react';

import { PseudoInput } from '../../../.storybook/helpers';
import { Field, FieldGroup, Hint, Label } from '../..';

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
        <PseudoInput />
      </Label>
    </Field>
    <Field>
      <Label text='Field #2'>
        <PseudoInput />
      </Label>
      <Hint>Help text</Hint>
    </Field>
    <Field>
      <Label text='Field #3'>
        <PseudoInput />
      </Label>
    </Field>
  </FieldGroup>;
