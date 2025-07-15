import { styled, XStack, GetProps, Theme } from 'tamagui'
import type { ReactNode } from 'react'

const StyledButtonGroup = styled(XStack, {
  name: 'ButtonGroup',
  alignItems: 'center',
  
  variants: {
    align: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
    },
    vertical: {
      true: {
        flexDirection: 'column',
        alignItems: 'stretch',
      },
    },
    wrap: {
      true: { flexWrap: 'wrap' },
    },
    stretch: {
      true: { flex: 1 },
    },
  } as const,

  defaultVariants: {
    align: 'start',
  },
})

export type ButtonGroupProps = GetProps<typeof StyledButtonGroup> & {
  children?: ReactNode
  align?: 'start' | 'center' | 'end'
  vertical?: boolean
  wrap?: boolean
  stretch?: boolean
}

export const ButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
  return (
    <Theme name="light">
      <StyledButtonGroup {...props}>
        {children}
      </StyledButtonGroup>
    </Theme>
  )
}