import { styled, Input, GetProps, Stack, Theme } from 'tamagui'
import type { ComponentProps, ReactNode } from 'react'
import { forwardRef } from 'react'

const StyledInput = styled(Input, {
  name: 'NumberInput',
  backgroundColor: '$background',
  borderColor: '$border',
  borderWidth: 1,
  borderRadius: '$2',
  color: '$color',
  paddingHorizontal: '$3',
  paddingVertical: '$2',
  
  variants: {
    size: {
      small: {
        height: '$3',
        fontSize: '$2',
      },
      medium: {
        height: '$4',
        fontSize: '$3',
      },
    },
    hasError: {
      true: {
        borderColor: '$error',
        color: '$error',
      },
    },
  } as const,

  defaultVariants: {
    size: 'medium',
  },
})

const InputWrapper = styled(Stack, {
  position: 'relative',
  flexDirection: 'row',
  alignItems: 'center',
})

const AddonWrapper = styled(Stack, {
  position: 'absolute',
  right: '$3',
  alignItems: 'center',
  justifyContent: 'center',
})

export type NumberInputProps = Omit<GetProps<typeof StyledInput>, 'type'> & {
  addon?: ReactNode
  error?: string
  size?: 'small' | 'medium'
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(function NumberInput(
  { addon, error, size = 'medium', ...props }, 
  ref
) {
  return (
    <Theme name="light">
      <InputWrapper>
        <StyledInput
          ref={ref}
          type="number"
          size={size}
          hasError={!!error}
          {...props}
          paddingRight={addon ? '$8' : '$3'}
        />
        {addon && (
          <AddonWrapper>
            {addon}
          </AddonWrapper>
        )}
      </InputWrapper>
    </Theme>
  )
})