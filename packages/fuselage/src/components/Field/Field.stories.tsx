import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import {
  CheckBox,
  Field,
  FieldDescription,
  FieldError,
  FieldHint,
  FieldRow,
  FieldLabel,
  InputBox,
  ToggleSwitch,
  FieldLink,
} from '../..';

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
    <FieldLabel>Label</FieldLabel>
    <FieldDescription>Description</FieldDescription>
    <FieldRow>
      <InputBox.Skeleton />
    </FieldRow>
    <FieldError>Error</FieldError>
    <FieldHint>Hint</FieldHint>
  </Field>
);

export const WithCheckBox: ComponentStory<typeof Field> = () => (
  <Field>
    <FieldRow>
      <CheckBox id='check-box' />
      <FieldLabel htmlFor='check-box'>Label</FieldLabel>
    </FieldRow>
  </Field>
);

export const WithToggleSwitch: ComponentStory<typeof Field> = () => (
  <Field>
    <FieldRow>
      <ToggleSwitch id='toggle-switch' />
      <FieldLabel htmlFor='toggle-switch'>Label</FieldLabel>
    </FieldRow>
  </Field>
);

export const WithDescription: ComponentStory<typeof Field> = () => (
  <Field>
    <FieldLabel>Label</FieldLabel>
    <FieldDescription>
      Descriptions should add useful and relevant additional information about
      what is required of the user for the related input. Its content is
      strictly composed by plain text.
    </FieldDescription>
    <FieldRow>
      <InputBox.Skeleton />
    </FieldRow>
  </Field>
);

export const WithError: ComponentStory<typeof Field> = () => (
  <Field>
    <FieldLabel>Label</FieldLabel>
    <FieldRow>
      <InputBox.Skeleton />
    </FieldRow>
    <FieldError>
      Error text appears when the user has inputted an invalid response to a
      field and let's the user know exactly what the issue is, so as to let them
      remedy the error as easily as possible.
    </FieldError>
  </Field>
);

export const WithHint: ComponentStory<typeof Field> = () => (
  <Field>
    <FieldLabel>Label</FieldLabel>
    <FieldRow>
      <InputBox.Skeleton />
    </FieldRow>
    <FieldHint>
      Hint fields help by explaining technical terms or concepts related to
      third-party apps and integrations.
    </FieldHint>
  </Field>
);

export const WithHintAndError: ComponentStory<typeof Field> = () => (
  <Field>
    <FieldLabel>Label</FieldLabel>
    <FieldRow>
      <InputBox.Skeleton />
    </FieldRow>
    <FieldError>Error must be above.</FieldError>
    <FieldHint>Hint must be below.</FieldHint>
  </Field>
);

export const WithLink: ComponentStory<typeof Field> = () => (
  <Field>
    <FieldLabel>Label</FieldLabel>
    <FieldRow>
      <InputBox.Skeleton />
    </FieldRow>
    <FieldRow justifyContent='end'>
      <FieldLink href='#'>
        Link is used for external resources or documentation.
      </FieldLink>
    </FieldRow>
  </Field>
);

export const WithHintAndLink: ComponentStory<typeof Field> = () => (
  <Field>
    <FieldLabel>Label</FieldLabel>
    <FieldRow>
      <InputBox.Skeleton />
    </FieldRow>
    <FieldRow justifyContent='space-between'>
      <FieldHint>Same line as Link in the left</FieldHint>
      <FieldLink href='#'>Same line as Hint in the right</FieldLink>
    </FieldRow>
  </Field>
);
