import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { CheckBox, Field, InputBox, ToggleSwitch } from '../..';

export default {
  title: 'Forms/Field_new',
  component: Field,
} as ComponentMeta<typeof Field>;

export const Example: ComponentStory<typeof Field> = () => (
  <Field>
    <Field.Label>Label</Field.Label>
    <Field.Description>Description</Field.Description>
    <Field.Row>
      <InputBox.Skeleton />
    </Field.Row>
    <Field.Hint>Hint</Field.Hint>
    <Field.Error>Error</Field.Error>
  </Field>
);

export const WithCheckBox: ComponentStory<typeof Field> = () => (
  <Field>
    <Field.Row>
      <CheckBox id='check-box' />
      <Field.Label htmlFor='check-box'>Label</Field.Label>
    </Field.Row>
  </Field>
);

export const WithToggleSwitch: ComponentStory<typeof Field> = () => (
  <Field>
    <Field.Row>
      <ToggleSwitch id='toggle-switch' />
      <Field.Label htmlFor='toggle-switch'>Label</Field.Label>
    </Field.Row>
  </Field>
);
