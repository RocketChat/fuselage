import { forwardRef, useRef, useLayoutEffect, useCallback } from 'react'
import { Stack, YStack, XStack, styled, Text, Input as TamaguiInput, GetProps } from 'tamagui'
import { IconB } from '../Icon'

import { Addon } from './Addon'
import { Input } from './Input'
import { Wrapper } from './Wrapper'

type TamaguiInputProps = GetProps<typeof TamaguiInput>
type InputBoxProps = TamaguiInputProps & {
  addon?: React.ReactNode
  input?: React.ReactNode
  multiple?: boolean
  error?: string
  placeholder?: string
  placeholderVisible?: boolean
  small?: boolean
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | 'textarea'
    | 'select'
}

export const InputBox = forwardRef<HTMLInputElement, InputBoxProps>(function InputBox(
  {
    addon,
    error,
    placeholder,
    placeholderVisible,
    small,
    type = 'text',
    onChange,
    disabled,
    ...props
  },
  ref
) {
  const innerRef = useRef<HTMLInputElement>(null)

  useLayoutEffect(() => {
    if (innerRef.current && error && innerRef.current.setCustomValidity) {
      innerRef.current.setCustomValidity(error)
    }
  }, [error])

  // auto add icon for date/time
  let actualAddon = addon
  const handleAddonClick = () => {
    if (innerRef.current && 'showPicker' in innerRef.current) {
      ;(innerRef.current as any).showPicker()
    }
  }
  if (type === 'date') {
    actualAddon = <Icon name="calendar" size={20} onClick={handleAddonClick} />
  }
  if (type === 'time') {
    actualAddon = <Icon name="clock" size={20} onClick={handleAddonClick} />
  }

  const handleChange = useCallback(
    (e: any) => {
      onChange?.(e)
    },
    [onChange]
  )

  // If no addon, use Input directly
  if (!actualAddon) {
    return (
      <Input
        ref={ref || innerRef}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        disabled={disabled}
        size={small ? '$2' : '$4'}
        fontSize={small ? '$2' : '$4'}
        onChange={handleChange}
        {...props}
      />
    )
  }

  // If addon, wrap with Wrapper and Addon
  return (
    <Wrapper disabled={disabled}>
      <Input
        ref={ref || innerRef}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        disabled={disabled}
        size={small ? '$2' : '$4'}
        fontSize={small ? '$2' : '$4'}
        onChange={handleChange}
        {...props}
      />
      <Addon>{actualAddon}</Addon>
    </Wrapper>
  )
})