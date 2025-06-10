import type { StoryFn, Meta } from '@storybook/react';

import { CheckBox } from '../CheckBox';
import { RadioButton } from '../RadioButton';
import { Select } from '../Select';
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
      <FieldLabel required>
        Label
        <FieldLabelInfo title='this is a info label' />
      </FieldLabel>
      <RadioButton />
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
      <FieldLabel required>
        Label
        <FieldLabelInfo title='this is a info label' />
      </FieldLabel>
      <ToggleSwitch />
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
      <FieldLabel required>
        Label
        <FieldLabelInfo title='this is a info label' />
      </FieldLabel>
      <CheckBox />
    </FieldRow>
    <FieldDescription>Description</FieldDescription>
    <FieldError>Error feedback</FieldError>
    <FieldRow>
      <FieldHint>Hint</FieldHint>
      <FieldLink href='#'>Link</FieldLink>
    </FieldRow>
  </Field>
);
export const WithSelect: StoryFn<typeof Field> = () => (
  <Field>
    <FieldRow>
      <FieldLabel required>
        Label
        <FieldLabelInfo title='this is a info label' />
      </FieldLabel>
    </FieldRow>
    <FieldRow>
      <Select
        options={[
          ['1', 'item 1'],
          ['2', 'item 2'],
          ['3', 'item 3'],
          ['4', 'item 4'],
          ['5', 'item 5'],
          ['6', 'item 6'],
          ['7', 'item 7'],
          ['8', 'item 8'],
          ['9', 'item 9'],
          ['10', 'item 10'],
        ]}
      />
    </FieldRow>

    <FieldRow>
      <FieldDescription>Description</FieldDescription>
      <FieldError>Error feedback</FieldError>
    </FieldRow>
    <FieldRow>
      <FieldHint>Hint</FieldHint>
      <FieldLink href='#'>Link</FieldLink>
    </FieldRow>
  </Field>
);
