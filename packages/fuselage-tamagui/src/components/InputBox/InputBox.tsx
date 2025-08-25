import { forwardRef, useRef, useLayoutEffect, useCallback } from 'react'
import { Stack, YStack, XStack, styled, Text, Input as TamaguiInput, GetProps } from 'tamagui'
import { Icon } from '../Icon'

import { Addon } from './Addon'
import { Input } from './Input'
import { Wrapper } from './Wrapper'

type TamaguiInputProps = GetProps<typeof TamaguiInput>
type InputBoxProps = TamaguiInputProps & {
  addon?: React.ReactNode
  input?: React.ReactNode
  multiple?: boolean
  htmlSize?: number
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
    htmlSize,
    children,
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

  // Render native textarea when requested
  if (type === 'textarea') {
    const textareaEl = (
      <Stack
        tag="textarea"
        ref={ref as any}
        aria-invalid={!!error}
        disabled={disabled}
        onChange={handleChange}
        flex={1}
        minWidth={0}
        borderWidth={0}
        backgroundColor="transparent"
        outline="none"
        fontSize={small ? '12px' : '14px'}
        fontFamily="system-ui, -apple-system, sans-serif"
        lineHeight="1.4"
        // Default rows similar to browser default; consumers can override via props
        // @ts-expect-error: pass-through attribute for native textarea
        rows={(props as any).rows}
        placeholder={placeholder}
        {...props}
      />
    )

    // Match input styling by wrapping in the same container when addon or not
    return (
      <Wrapper disabled={disabled}>
        {textareaEl}
        {addon ? <Addon>{addon}</Addon> : null}
      </Wrapper>
    )
  }

  // Render native select when requested
  if (type === 'select') {
    const selectEl = (
      <Stack
        tag="select"
        ref={ref as any}
        aria-invalid={!!error}
        disabled={disabled}
        multiple={props.multiple}
        // @ts-expect-error: pass-through attribute for native select size
        size={htmlSize}
        onChange={handleChange}
        flex={1}
        minWidth={0}
        borderWidth={0}
        backgroundColor="transparent"
        outline="none"
        // ensure the text inherits container font sizing
        fontSize={small ? '12px' : '14px'}
        fontFamily="system-ui, -apple-system, sans-serif"
        lineHeight="1.4"
      >
        {children}
      </Stack>
    )

    // Always wrap select to get consistent border/background with inputs
    return (
      <Wrapper disabled={disabled}>
        {selectEl}
        {addon ? <Addon>{addon}</Addon> : null}
      </Wrapper>
    )
  }

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
        fontSize={small ? '12px' : '14px'}
        fontFamily="system-ui, -apple-system, sans-serif"
        lineHeight="1.4"
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
        fontSize={small ? '12px' : '14px'}
        fontFamily="system-ui, -apple-system, sans-serif"
        lineHeight="1.4"
        onChange={handleChange}
        {...props}
      />
      <Addon>{actualAddon}</Addon>
    </Wrapper>
  )
})