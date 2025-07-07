import { styled, Stack, GetProps, YStack, Theme } from 'tamagui'
import type { ComponentProps } from 'react'
import { forwardRef, useLayoutEffect, useRef, useCallback } from 'react'

const CheckBoxWrapper = styled(YStack, {
  name: 'CheckBox',
  display: 'inline-flex',
  cursor: 'pointer',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  
  variants: {
    size: {
      small: { width: 16, height: 16 },
      medium: { width: 20, height: 20 },
      large: { width: 24, height: 24 },
    },
  },
  
  defaultVariants: {
    size: 'medium',
  },
})

const CheckBoxInput = styled(Stack, {
  position: 'absolute',
  width: '100%',
  height: '100%',
  opacity: 0,
  cursor: 'pointer',
  zIndex: 1,

  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },
  pressStyle: {
    backgroundColor: '$backgroundPress',
  },
})

const CheckBoxFake = styled(Stack, {
  position: 'relative',
  width: '100%',
  height: '100%',
  borderWidth: 2,
  borderColor: '$border',
  borderRadius: '$1',
  backgroundColor: 'transparent',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    checked: {
      true: {
        backgroundColor: '$primary',
        borderColor: '$primary',
      },
    },
    indeterminate: {
      true: {
        backgroundColor: '$primary',
        borderColor: '$primary',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
  } as const,
})

const CheckMark = styled(Stack, {
  width: '60%',
  height: '60%',
  borderColor: '$background',
  borderWidth: 2,
  borderTop: 0,
  borderRight: 0,
  transform: 'rotate(-45deg) translate(10%, -10%)',
})

const IndeterminateMark = styled(Stack, {
  width: '60%',
  height: 2,
  backgroundColor: '$background',
})

export type CheckBoxProps = GetProps<typeof CheckBoxWrapper> & {
  indeterminate?: boolean
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  size?: 'small' | 'medium' | 'large'
  'aria-label'?: string
}

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(function CheckBox(
  { 
    indeterminate, 
    checked, 
    defaultChecked,
    disabled,
    onChange, 
    size = 'medium',
    'aria-label': ariaLabel,
    ...props 
  }, 
  ref
) {
  const innerRef = useRef<HTMLInputElement>(null)
  const mergedRef = (node: HTMLInputElement) => {
    innerRef.current = node
    if (typeof ref === 'function') {
      ref(node)
    } else if (ref) {
      ref.current = node
    }
  }

  useLayoutEffect(() => {
    if (innerRef.current && indeterminate !== undefined) {
      innerRef.current.indeterminate = indeterminate
    }
  }, [indeterminate])

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (innerRef.current && indeterminate !== undefined) {
        innerRef.current.indeterminate = indeterminate
      }
      onChange?.(event)
    },
    [indeterminate, onChange]
  )

  return (
    <Theme name="light">
      <CheckBoxWrapper size={size} {...props}>
        <CheckBoxInput
          as="input"
          type="checkbox"
          ref={mergedRef}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={handleChange}
          aria-label={ariaLabel}
        />
        <CheckBoxFake 
          checked={checked} 
          indeterminate={indeterminate}
          disabled={disabled}
        >
          {indeterminate ? (
            <IndeterminateMark />
          ) : checked ? (
            <CheckMark />
          ) : null}
        </CheckBoxFake>
      </CheckBoxWrapper>
    </Theme>
  )
})