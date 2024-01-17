import { Title, Description, Primary, Stories } from '@storybook/addon-docs';
import type { StoryFn, Meta } from '@storybook/react';
import React from 'react';

import { FieldLabelInfo } from './FieldLabelInfo';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldHint,
  FieldRow,
  FieldLabel,
  ToggleSwitch,
  FieldLink,
  TextInput,
  TextAreaInput,
  RadioButton,
  CheckBox,
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
          <Stories />
        </>
      ),
    },
  },
} as Meta<typeof Field>;

export const WithTextInput: StoryFn<typeof Field> = () => (
  <Field>
    <FieldLabel required htmlFor='fieldWithText'>
      Label
      <FieldLabelInfo id='fieldWithTextInfo' title='this is a info label' />
    </FieldLabel>
    <FieldDescription>Description</FieldDescription>
    <FieldRow>
      <TextInput id='fieldWithText' aria-describedby='fieldWithTextInfo' />
    </FieldRow>
    <FieldError>Error feedback</FieldError>
    <FieldRow>
      <FieldHint>Hint</FieldHint>
      <FieldLink href='#'>Link</FieldLink>
    </FieldRow>
  </Field>
);
export const WithTextArea: StoryFn<typeof Field> = () => (
  <Field>
    <FieldLabel required htmlFor='fieldWithTextArea'>
      Label
      <FieldLabelInfo id='fieldWithTextAreaInfo' title='this is a info label' />
    </FieldLabel>
    <FieldDescription>Description</FieldDescription>
    <FieldRow>
      <TextAreaInput
        id='fieldWithTextArea'
        aria-describedby='fieldWithTextAreaInfo'
      />
    </FieldRow>
    <FieldError>Error feedback</FieldError>
    <FieldRow>
      <FieldHint>Hint</FieldHint>
      <FieldLink href='#'>Link</FieldLink>
    </FieldRow>
  </Field>
);
export const WithRadioButton: StoryFn<typeof Field> = () => (
  <Field>
    <FieldRow>
      <FieldLabel required htmlFor='fieldWithRadio'>
        Label
        <FieldLabelInfo id='fieldWithRadioInfo' title='this is a info label' />
      </FieldLabel>
      <RadioButton id='fieldWithRadio' aria-describedby='fieldWithRadioInfo' />
    </FieldRow>
    <FieldDescription>Description</FieldDescription>
    <FieldError>Error feedback</FieldError>
    <FieldRow>
      <FieldHint>Hint</FieldHint>
      <FieldLink href='#'>Link</FieldLink>
    </FieldRow>
  </Field>
);
export const WithToggleSwitch: StoryFn<typeof Field> = () => (
  <Field>
    <FieldRow>
      <FieldLabel required htmlFor='fieldWithToggle'>
        Label
        <FieldLabelInfo id='fieldWithToggleInfo' title='this is a info label' />
      </FieldLabel>
      <ToggleSwitch
        id='fieldWithToggle'
        aria-describedby='fieldWithToggleInfo'
      />
    </FieldRow>
    <FieldDescription>Description</FieldDescription>
    <FieldError>Error feedback</FieldError>
    <FieldRow>
      <FieldHint>Hint</FieldHint>
      <FieldLink href='#'>Link</FieldLink>
    </FieldRow>
  </Field>
);
export const WithCheckbox: StoryFn<typeof Field> = () => (
  <Field>
    <FieldRow>
      <FieldLabel required htmlFor='fieldWithCheckbox'>
        Label
        <FieldLabelInfo
          id='fieldWithCheckboxInfo'
          title='this is a info label'
        />
      </FieldLabel>
      <CheckBox
        id='fieldWithCheckbox'
        aria-describedby='fieldWithCheckboxInfo'
      />
    </FieldRow>
    <FieldDescription>Description</FieldDescription>
    <FieldError>Error feedback</FieldError>
    <FieldRow>
      <FieldHint>Hint</FieldHint>
      <FieldLink href='#'>Link</FieldLink>
    </FieldRow>
  </Field>
);
