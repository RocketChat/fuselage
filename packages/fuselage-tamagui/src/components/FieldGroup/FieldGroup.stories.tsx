import type { StoryFn, Meta } from '@storybook/react'
import { Field, FieldHint, FieldLabel, FieldRow } from '../Field'
import { InputBox } from '../InputBox'
import { FieldGroup } from './FieldGroup'

export default {
  title: 'Inputs/FieldGroup',
  component: FieldGroup,
} satisfies Meta<typeof FieldGroup>

export const Default: StoryFn<typeof FieldGroup> = () => (
  <FieldGroup>
    <Field>
      <FieldLabel>Field #1</FieldLabel>
      <FieldRow>
        <InputBox placeholder="Input 1" />
      </FieldRow>
    </Field>
    <Field>
      <FieldLabel>Field #2</FieldLabel>
      <FieldRow>
        <InputBox placeholder="Input 2" />
      </FieldRow>
      <FieldHint>Help text</FieldHint>
    </Field>
    <Field>
      <FieldLabel>Field #3</FieldLabel>
      <FieldRow>
        <InputBox placeholder="Input 3" />
      </FieldRow>
    </Field>
  </FieldGroup>
)