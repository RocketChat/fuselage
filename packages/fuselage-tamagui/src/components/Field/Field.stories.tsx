import type { StoryFn, Meta } from '@storybook/react'
import { useState } from 'react'
import { CheckBox } from '../CheckBox'
import { InputBox } from '../InputBox'
import { RadioButton } from '../RadioButton'
import { ToggleSwitch } from '../ToggleSwitch'
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

export const Default: StoryFn<typeof Field> = () => (
  <Field>
    <FieldLabel required htmlFor='fieldWithTextArea'>
      Label
      <FieldLabelInfo id='fieldWithTextAreaInfo' title='this is a info label' />
    </FieldLabel>
    <FieldDescription>Description</FieldDescription>
    <FieldRow>
      <InputBox 
        type="textarea"
        id='fieldWithTextArea' 
        aria-describedby='fieldWithTextAreaInfo'
        rows={1}
        style={{ 
          minHeight: '40px',
          width: '100%',
          maxWidth: '100%',
          minWidth: '800px',
          backgroundColor: '#ffffff',
          border: '1px solid #ced4da',
          borderRadius: '4px',
          padding: '8px 12px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: '14px',
          lineHeight: '1.4'
        }}
      />
    </FieldRow>
    <FieldError>Error feedback</FieldError>
    <FieldRow justifyContent="space-between" alignItems="flex-end">
      <FieldHint>Hint</FieldHint>
      <FieldLink href='/story/inputs-field--with-text-area' target="_blank" rel="noopener noreferrer">Link</FieldLink>
    </FieldRow>
  </Field>
)

export const WithTextInput: StoryFn<typeof Field> = () => (
  <Field>
    <FieldLabel required htmlFor='fieldWithText'>
      Label
      <FieldLabelInfo id='fieldWithTextInfo' title='this is a info label' />
    </FieldLabel>
    <FieldDescription>Description</FieldDescription>
    <FieldRow>
      <InputBox 
        id='fieldWithText' 
        aria-describedby='fieldWithTextInfo'
        style={{ 
          width: '100%',
          maxWidth: '100%',
          minWidth: '800px',
          backgroundColor: '#ffffff',
          border: '1px solid #ced4da',
          borderRadius: '4px',
          padding: '8px 12px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: '14px',
          lineHeight: '1.4'
        }}
      />
    </FieldRow>
    <FieldError>Error feedback</FieldError>
    <FieldRow justifyContent="space-between" alignItems="flex-end">
      <FieldHint>Hint</FieldHint>
      <FieldLink href='/story/inputs-field--with-text-input' target="_blank" rel="noopener noreferrer">Link</FieldLink>
    </FieldRow>
  </Field>
)

export const WithTextArea: StoryFn<typeof Field> = () => (
  <Field>
    <FieldLabel required htmlFor='fieldWithTextArea'>
      Label
      <FieldLabelInfo id='fieldWithTextAreaInfo' title='this is a info label' />
    </FieldLabel>
    <FieldDescription>Description</FieldDescription>
    <FieldRow>
      <InputBox 
        type="textarea"
        id='fieldWithTextArea' 
        aria-describedby='fieldWithTextAreaInfo'
        rows={1}
        style={{ 
          minHeight: '40px',
          width: '100%',
          maxWidth: '100%',
          minWidth: '800px',
          backgroundColor: '#ffffff',
          border: '1px solid #ced4da',
          borderRadius: '4px',
          padding: '8px 12px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: '14px',
          lineHeight: '1.4'
        }}
      />
    </FieldRow>
    <FieldError>Error feedback</FieldError>
    <FieldRow justifyContent="space-between" alignItems="flex-end">
      <FieldHint>Hint</FieldHint>
      <FieldLink href='/story/inputs-field--with-text-area' target="_blank" rel="noopener noreferrer">Link</FieldLink>
    </FieldRow>
  </Field>
)

export const WithRadioButton: StoryFn<typeof Field> = () => {
  const [isChecked, setIsChecked] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Radio button clicked, new value:', e.target.checked)
    setIsChecked(e.target.checked)
  }
  
  return (
    <Field>
      <FieldRow>
        <FieldLabel required htmlFor='fieldWithRadio'>
          Label
          <FieldLabelInfo id='fieldWithRadioInfo' title='this is a info label' />
        </FieldLabel>
        <RadioButton 
          id='fieldWithRadio' 
          aria-describedby='fieldWithRadioInfo'
          checked={isChecked}
          onChange={handleChange}
        />
      </FieldRow>
      <FieldDescription>Description - Radio button is {isChecked ? 'checked' : 'unchecked'}</FieldDescription>
      <FieldError>Error feedback</FieldError>
      <FieldRow justifyContent="space-between" alignItems="flex-end">
        <FieldHint>Hint</FieldHint>
        <FieldLink href='/story/inputs-field--with-radio-button' target="_blank" rel="noopener noreferrer">Link</FieldLink>
      </FieldRow>
    </Field>
  )
}

export const WithToggleSwitch: StoryFn<typeof Field> = () => {
  const [isChecked, setIsChecked] = useState(false)
  
  return (
    <Field>
      <FieldRow>
        <FieldLabel required htmlFor='fieldWithToggle'>
          Label
          <FieldLabelInfo id='fieldWithToggleInfo' title='this is a info label' />
        </FieldLabel>
        <ToggleSwitch
          id='fieldWithToggle'
          aria-describedby='fieldWithToggleInfo'
          checked={isChecked}
          onChange={setIsChecked}
        />
      </FieldRow>
      <FieldDescription>Description</FieldDescription>
      <FieldError>Error feedback</FieldError>
      <FieldRow justifyContent="space-between" alignItems="flex-end">
        <FieldHint>Hint</FieldHint>
        <FieldLink href='/story/inputs-field--with-toggle-switch' target="_blank" rel="noopener noreferrer">Link</FieldLink>
      </FieldRow>
    </Field>
  )
}

export const WithCheckbox: StoryFn<typeof Field> = () => {
  const [isChecked, setIsChecked] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Checkbox clicked, new value:', e.target.checked)
    setIsChecked(e.target.checked)
  }
  
  return (
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
          checked={isChecked}
          onChange={handleChange}
        />
      </FieldRow>
      <FieldDescription>Description - Checkbox is {isChecked ? 'checked' : 'unchecked'}</FieldDescription>
      <FieldError>Error feedback</FieldError>
      <FieldRow justifyContent="space-between" alignItems="flex-end">
        <FieldHint>Hint</FieldHint>
        <FieldLink href='/story/inputs-field--with-checkbox' target="_blank" rel="noopener noreferrer">Link</FieldLink>
      </FieldRow>
    </Field>
  )
}