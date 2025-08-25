import { styled, Stack, GetProps, YStack } from 'tamagui'
import type { ComponentProps } from 'react'
import { forwardRef, useRef, useCallback } from 'react'

const RadioButtonWrapper = styled(YStack, {
  name: 'RadioButton',
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

const RadioButtonInput = styled(Stack, {
  position: 'absolute',
  width: '100%',
  height: '100%',
  opacity: 0,
  cursor: 'pointer',
  zIndex: 20,
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
})

const RadioButtonFake = styled(Stack, {
  position: 'relative',
  width: '100%',
  height: '100%',
  borderWidth: 2,
  borderColor: '#E4E7EA',
  borderRadius: 50, // Full circle for radio button
  backgroundColor: '#FFFFFF',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',

  // Hover state
  hoverStyle: {
    borderColor: '#156FF5',
  },

  // Focus state
  focusStyle: {
    borderColor: '#156FF5',
    outline: '2px solid #156FF5',
    outlineOffset: 2,
  },

  variants: {
    checked: {
      true: {
        borderColor: '#156FF5',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        backgroundColor: '#F7F8FA',
        borderColor: '#E4E7EA',
        hoverStyle: {
          borderColor: '#E4E7EA',
        },
        focusStyle: {
          borderColor: '#E4E7EA',
          outline: 'none',
        },
      },
    },
  } as const,
})

const RadioButtonDot = styled(Stack, {
  width: '30%',
  height: '30%',
  borderRadius: 50, // Full circle
  backgroundColor: '#156FF5',
  opacity: 0,
  transition: 'opacity 0.2s ease',

  variants: {
    checked: {
      true: {
        opacity: 1,
      },
    },
    disabled: {
      true: {
        backgroundColor: '#9EA2A8',
      },
    },
  } as const,
})

export type RadioButtonProps = GetProps<typeof RadioButtonWrapper> & {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  size?: 'small' | 'medium' | 'large'
  'aria-label'?: string
  name?: string
  value?: string
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(function RadioButton(
  { 
    checked, 
    defaultChecked,
    disabled,
    onChange, 
    size = 'medium',
    'aria-label': ariaLabel,
    name,
    value,
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

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event)
    },
    [onChange]
  )

  const handleWrapperClick = useCallback(() => {
    if (innerRef.current && !disabled) {
      innerRef.current.click()
    }
  }, [disabled])

  return (
    <RadioButtonWrapper size={size} {...props} onClick={handleWrapperClick}>
      <RadioButtonInput
        as="input"
        type="radio"
        ref={mergedRef}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={handleChange}
        aria-label={ariaLabel}
        name={name}
        value={value}
      />
      <RadioButtonFake 
        checked={checked} 
        disabled={disabled}
      >
        <RadioButtonDot 
          checked={checked}
          disabled={disabled}
        />
      </RadioButtonFake>
    </RadioButtonWrapper>
  )
})
