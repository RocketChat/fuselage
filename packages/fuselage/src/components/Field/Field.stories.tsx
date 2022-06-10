import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { CheckBox, Field, InputBox, ToggleSwitch } from '../..';

export default {
  title: 'Inputs/Field',
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
          <Stories title={'Field Patterns'} />
        </>
      ),
    },
  },
} as ComponentMeta<typeof Field>;

export const Default: ComponentStory<typeof Field> = () => (
  <Field>
    <Field.Label>Label</Field.Label>
    <Field.Description>Description</Field.Description>
    <Field.Row>
      <InputBox.Skeleton />
    </Field.Row>
    <Field.Error>Error</Field.Error>
    <Field.Hint>Hint</Field.Hint>
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

export const WithDescription: ComponentStory<typeof Field> = () => (
  <Field>
    <Field.Label>Label</Field.Label>
    <Field.Description>
      Descriptions should add useful and relevant additional information about
      what is required of the user for the related input. Its content is
      strictly composed by plain text.
    </Field.Description>
    <Field.Row>
      <InputBox.Skeleton />
    </Field.Row>
  </Field>
);

export const WithError: ComponentStory<typeof Field> = () => (
  <Field>
    <Field.Label>Label</Field.Label>
    <Field.Row>
      <InputBox.Skeleton />
    </Field.Row>
    <Field.Error>
      Error text appears when the user has inputted an invalid response to a
      field and let's the user know exactly what the issue is, so as to let them
      remedy the error as easily as possible.
    </Field.Error>
  </Field>
);

export const WithHint: ComponentStory<typeof Field> = () => (
  <Field>
    <Field.Label>Label</Field.Label>
    <Field.Row>
      <InputBox.Skeleton />
    </Field.Row>
    <Field.Hint>
      Hint fields help by explaining technical terms or concepts related to
      third-party apps and integrations.
    </Field.Hint>
  </Field>
);

export const WithHintAndError: ComponentStory<typeof Field> = () => (
  <Field>
    <Field.Label>Label</Field.Label>
    <Field.Row>
      <InputBox.Skeleton />
    </Field.Row>
    <Field.Error>Error must be above.</Field.Error>
    <Field.Hint>Hint must be below.</Field.Hint>
  </Field>
);

export const WithLink: ComponentStory<typeof Field> = () => (
  <Field>
    <Field.Label>Label</Field.Label>
    <Field.Row>
      <InputBox.Skeleton />
    </Field.Row>
    <Field.Row justifyContent='end'>
      <Field.Link href='#'>
        Link is used for external resources or documentation.
      </Field.Link>
    </Field.Row>
  </Field>
);

export const WithHintAndLink: ComponentStory<typeof Field> = () => (
  <Field>
    <Field.Label>Label</Field.Label>
    <Field.Row>
      <InputBox.Skeleton />
    </Field.Row>
    <Field.Row justifyContent='space-between'>
      <Field.Hint>Same line as Link in the left</Field.Hint>
      <Field.Link href='#'>Same line as Hint in the right</Field.Link>
    </Field.Row>
  </Field>
);
