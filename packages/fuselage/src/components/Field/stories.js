import React from 'react';

import { PseudoInput } from '../../../.storybook/helpers';
import { Field, Hint, Label } from '../..';

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
      <PseudoInput />
    </Label>
    <Hint>Help text</Hint>
  </Field>;
