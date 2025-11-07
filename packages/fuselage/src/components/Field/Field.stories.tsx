import type { StoryFn, Meta } from '@storybook/react-vite';

import { CheckBox } from '../CheckBox/index.js';
import { RadioButton } from '../RadioButton/index.js';
import { TextAreaInput } from '../TextAreaInput/index.js';
import { TextInput } from '../TextInput/index.js';
import { ToggleSwitch } from '../ToggleSwitch/index.js';

import Field from './Field.js';
import FieldDescription from './FieldDescription.js';
import FieldError from './FieldError.js';
import FieldHint from './FieldHint.js';
import FieldLabel from './FieldLabel.js';
import FieldLabelInfo from './FieldLabelInfo.js';
import FieldLink from './FieldLink.js';
import FieldRow from './FieldRow.js';

export default {
  title: 'Inputs/Field',
  component: Field,
  subcomponents: {
    FieldDescription,
    FieldError,
    FieldHint,
    FieldLabel,
    FieldLabelInfo,
    FieldLink,
    FieldRow,
  },
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
