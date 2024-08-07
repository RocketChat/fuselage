import type { StoryFn, Meta } from '@storybook/react';

import { CheckBox } from '../CheckBox';
import { RadioButton } from '../RadioButton';
import { TextAreaInput } from '../TextAreaInput';
import { TextInput } from '../TextInput';
import { ToggleSwitch } from '../ToggleSwitch';
import { Field } from './Field';
import { FieldDescription } from './FieldDescription';
import { FieldError } from './FieldError';
import { FieldHint } from './FieldHint';
import { FieldLabel } from './FieldLabel';
import { FieldLabelInfo } from './FieldLabelInfo';
import { FieldLink } from './FieldLink';
import { FieldRow } from './FieldRow';

export default {
  title: 'Inputs/Field',
  component: Field,
} satisfies Meta<typeof Field>;

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
