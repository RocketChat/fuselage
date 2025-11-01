import type { StoryFn, Meta } from '@storybook/react-vite';

import {
  TextInput,
  EmailInput,
  PasswordInput,
  SearchInput,
  TextAreaInput,
  Select,
  CheckBox,
  ToggleSwitch,
  RadioButton,
  TelephoneInput,
  NumberInput,
  UrlInput,
} from '../Inputs/index.js';

import {
  Field,
  FieldDescription,
  FieldError,
  FieldHint,
  FieldLabel,
  FieldLabelInfo,
  FieldLink,
  FieldRow,
} from './index.js';

export default {
  title: 'Inputs/Field',
  component: Field,
} satisfies Meta<typeof Field>;

export const WithTextInput: StoryFn<typeof Field> = () => (
  <Field>
    <FieldLabel required>
      Example Text Input
      <FieldLabelInfo title='with extra info in a tooltip' />
    </FieldLabel>
    <FieldDescription>
      Text inputs are used to enter a single line of text.
    </FieldDescription>
    <FieldRow>
      <TextInput />
    </FieldRow>
    <FieldError>You failed to enter a valid value</FieldError>
    <FieldRow>
      <FieldHint>This should help the user enter a valid value</FieldHint>
      <FieldLink href='#'>Link to more information</FieldLink>
    </FieldRow>
  </Field>
);
export const WithEmailInput: StoryFn<typeof Field> = () => (
  <Field>
    <FieldLabel required>
      Example Email Input
      <FieldLabelInfo title='with extra info in a tooltip' />
    </FieldLabel>
    <FieldDescription>
      This field requires a valid email address
    </FieldDescription>
    <FieldRow>
      <EmailInput />
    </FieldRow>
    <FieldError>You failed to enter a valid value</FieldError>
    <FieldRow>
      <FieldHint>This should help the user enter a valid value</FieldHint>
      <FieldLink href='#'>Link to more information</FieldLink>
    </FieldRow>
  </Field>
);
export const WithPasswordInput: StoryFn<typeof Field> = () => (
  <Field>
    <FieldLabel required>
      Example Password Input
      <FieldLabelInfo title='with extra info in a tooltip' />
    </FieldLabel>
    <FieldDescription>This field requires a valid password</FieldDescription>
    <FieldRow>
      <PasswordInput />
    </FieldRow>
    <FieldError>You failed to enter a valid value</FieldError>
    <FieldRow>
      <FieldHint>This should help the user enter a valid value</FieldHint>
      <FieldLink href='#'>Link to more information</FieldLink>
    </FieldRow>
  </Field>
);
export const WithSearchInput: StoryFn<typeof Field> = () => (
  <Field>
    <FieldLabel required>
      Example Search Input
      <FieldLabelInfo title='with extra info in a tooltip' />
    </FieldLabel>
    <FieldDescription>
      You can use this field to search for things
    </FieldDescription>
    <FieldRow>
      <SearchInput />
    </FieldRow>
    <FieldError>You failed to enter a valid value</FieldError>
    <FieldRow>
      <FieldHint>This should help the user enter a valid value</FieldHint>
      <FieldLink href='#'>Link to more information</FieldLink>
    </FieldRow>
  </Field>
);
export const WithTextArea: StoryFn<typeof Field> = () => (
  <Field>
    <FieldLabel required>
      Example Text Area
      <FieldLabelInfo title='with extra info in a tooltip' />
    </FieldLabel>
    <FieldDescription>
      You can use this field to enter multi-line text
    </FieldDescription>
    <FieldRow>
      <TextAreaInput />
    </FieldRow>
    <FieldError>You failed to enter a valid value</FieldError>
    <FieldRow>
      <FieldHint>This should help the user enter a valid value</FieldHint>
      <FieldLink href='#'>Link to more information</FieldLink>
    </FieldRow>
  </Field>
);
export const WithRadioButton: StoryFn<typeof Field> = () => (
  <Field>
    <FieldRow>
      <FieldLabel required>
        Example Radio Button
        <FieldLabelInfo title='with extra info in a tooltip' />
      </FieldLabel>
      <RadioButton />
    </FieldRow>
    <FieldDescription>You can only select a single option</FieldDescription>
    <FieldError>You failed to enter a valid value</FieldError>
    <FieldRow>
      <FieldHint>This should help the user enter a valid value</FieldHint>
      <FieldLink href='#'>Link to more information</FieldLink>
    </FieldRow>
  </Field>
);
export const WithToggleSwitch: StoryFn<typeof Field> = () => (
  <Field>
    <FieldRow>
      <FieldLabel required>
        Example Toggle Switch
        <FieldLabelInfo title='with extra info in a tooltip' />
      </FieldLabel>
      <ToggleSwitch />
    </FieldRow>
    <FieldDescription>This field represents a boolean value</FieldDescription>
    <FieldError>You failed to enter a valid value</FieldError>
    <FieldRow>
      <FieldHint>This should help the user enter a valid value</FieldHint>
      <FieldLink href='#'>Link to more information</FieldLink>
    </FieldRow>
  </Field>
);
export const WithCheckbox: StoryFn<typeof Field> = () => (
  <Field>
    <FieldRow>
      <FieldLabel required>
        Example Checkbox
        <FieldLabelInfo title='with extra info in a tooltip' />
      </FieldLabel>
      <CheckBox />
    </FieldRow>
    <FieldDescription>You can select multiple options</FieldDescription>
    <FieldError>You failed to enter a valid value</FieldError>
    <FieldRow>
      <FieldHint>This should help the user enter a valid value</FieldHint>
      <FieldLink href='#'>Link to more information</FieldLink>
    </FieldRow>
  </Field>
);
export const WithTelephoneInput: StoryFn<typeof Field> = () => (
  <Field>
    <FieldLabel required>
      Example Telephone Input
      <FieldLabelInfo title='with extra info in a tooltip' />
    </FieldLabel>
    <FieldDescription>
      This field requires a valid telephone number
    </FieldDescription>
    <FieldRow>
      <TelephoneInput />
    </FieldRow>
    <FieldError>You failed to enter a valid value</FieldError>
    <FieldRow>
      <FieldHint>This should help the user enter a valid value</FieldHint>
      <FieldLink href='#'>Link to more information</FieldLink>
    </FieldRow>
  </Field>
);
export const WithNumberInput: StoryFn<typeof Field> = () => (
  <Field>
    <FieldLabel required>
      Example Number Input
      <FieldLabelInfo title='with extra info in a tooltip' />
    </FieldLabel>
    <FieldDescription>This field requires a valid number</FieldDescription>
    <FieldRow>
      <NumberInput />
    </FieldRow>
    <FieldError>You failed to enter a valid value</FieldError>
    <FieldRow>
      <FieldHint>This should help the user enter a valid value</FieldHint>
      <FieldLink href='#'>Link to more information</FieldLink>
    </FieldRow>
  </Field>
);

export const WithUrlInput: StoryFn<typeof Field> = () => (
  <Field>
    <FieldLabel required>
      Example URL Input
      <FieldLabelInfo title='with extra info in a tooltip' />
    </FieldLabel>
    <FieldDescription>This field requires a valid URL</FieldDescription>
    <FieldRow>
      <UrlInput />
    </FieldRow>
    <FieldError>You failed to enter a valid value</FieldError>
    <FieldRow>
      <FieldHint>This should help the user enter a valid value</FieldHint>
      <FieldLink href='#'>Link to more information</FieldLink>
    </FieldRow>
  </Field>
);

export const WithSelect: StoryFn<typeof Field> = () => (
  <Field>
    <FieldRow>
      <FieldLabel required>
        Example Select
        <FieldLabelInfo title='with extra info in a tooltip' />
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
      <FieldDescription>
        You can select a single option from a list of options
      </FieldDescription>
      <FieldError>You failed to enter a valid value</FieldError>
    </FieldRow>
    <FieldRow>
      <FieldHint>This should help the user enter a valid value</FieldHint>
      <FieldLink href='#'>Link to more information</FieldLink>
    </FieldRow>
  </Field>
);
