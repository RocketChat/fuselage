import { styled, Stack, GetProps, YStack } from 'tamagui'
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

const CheckBoxFake = styled(Stack, {
  position: 'relative',
  width: '100%',
  height: '100%',
  borderWidth: 2,
  borderColor: '#E4E7EA',
  borderRadius: 4,
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
        backgroundColor: '#156FF5',
        borderColor: '#156FF5',
      },
    },
    indeterminate: {
      true: {
        backgroundColor: '#156FF5',
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

const CheckMark = styled(Stack, {
  width: '60%',
  height: '60%',
  alignItems: 'center',
  justifyContent: 'center',
})

const IndeterminateMark = styled(Stack, {
  width: '60%',
  height: 2,
  backgroundColor: '#FFFFFF',
  borderRadius: 1,
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

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (innerRef.current && indeterminate !== undefined) {
        innerRef.current.indeterminate = indeterminate
      }
      if (onChange) {
        onChange(event)
      }
    },
    [indeterminate, onChange]
  )

  const handleWrapperClick = useCallback((e: React.MouseEvent) => {
    if (innerRef.current && !disabled) {
      innerRef.current.checked = !innerRef.current.checked
      const event = new Event('change', { bubbles: true })
      innerRef.current.dispatchEvent(event)
    }
  }, [disabled])

  return (
    <CheckBoxWrapper size={size} {...props} onClick={handleWrapperClick}>
      <input
        type="checkbox"
        ref={mergedRef}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={handleInputChange}
        aria-label={ariaLabel}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0,
          cursor: 'pointer',
          zIndex: 10,
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          border: 0,
          outline: 'none',
        }}
      />
      <CheckBoxFake 
        checked={checked} 
        indeterminate={indeterminate}
        disabled={disabled}
      >
        {indeterminate ? (
          <IndeterminateMark />
        ) : checked ? (
          <CheckMark>
            <svg 
              width="60%" 
              height="60%" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#FFFFFF" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
          </CheckMark>
        ) : null}
      </CheckBoxFake>
    </CheckBoxWrapper>
  )
})

CheckBox.displayName = 'CheckBox'