import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { CheckBox, Field, InputBox, ToggleSwitch } from '../..';

export default {
  title: 'Forms/Field_new',
  component: Field,
  parameters: {
    docs: {
      description: {
        component: 'A `Field` is a wrapper representing an entry in a form.',
      },

      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Stories title={'Label positioning for selection buttons'} />
        </>
      ),
    },
  },
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
