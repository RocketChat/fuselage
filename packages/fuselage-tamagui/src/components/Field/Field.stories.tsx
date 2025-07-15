import type { StoryFn, Meta } from '@storybook/react'
import { CheckBox } from '../CheckBox'
import { InputBox } from '../InputBox'
import { Field } from './Field'
import { FieldDescription } from './FieldDescription'
import { FieldError } from './FieldError'
import { FieldHint } from './FieldHint'
import { FieldLabel } from './FieldLabel'
import { FieldLabelInfo } from './FieldLabelInfo'
import { FieldLink } from './FieldLink'
import { FieldRow } from './FieldRow'

export default {
  title: 'Inputs/Field',
  component: Field,
} satisfies Meta<typeof Field>

export const WithTextInput: StoryFn<typeof Field> = () => (
  <Field>
    <FieldLabel required htmlFor='fieldWithText'>
      Label
      <FieldLabelInfo id='fieldWithTextInfo' title='this is a info label' />
    </FieldLabel>
    <FieldDescription>Description</FieldDescription>
    <FieldRow>
      <InputBox id='fieldWithText' aria-describedby='fieldWithTextInfo' />
    </FieldRow>
    <FieldError>Error feedback</FieldError>
    <FieldRow>
      <FieldHint>Hint</FieldHint>
      <FieldLink href='#'>Link</FieldLink>
    </FieldRow>
  </Field>
)

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
)