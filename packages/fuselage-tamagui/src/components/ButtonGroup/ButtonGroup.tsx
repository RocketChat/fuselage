import { styled, XStack, GetProps } from 'tamagui'
import type { ReactNode } from 'react'

const StyledButtonGroup = styled(XStack, {
  name: 'ButtonGroup',
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: 16, // Default gap between buttons
  
  variants: {
    size: {
      small: { gap: 8 },
      medium: { gap: 16 },
      large: { gap: 24 },
    },
    align: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
    },
    vertical: {
      true: {
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: 12, // Vertical gap
      },
    },
    wrap: {
      true: { 
        flexWrap: 'wrap',
        marginBottom: -16,
        rowGap: 16, // Vertical gap in wrap mode
        columnGap: 16, // Horizontal gap in wrap mode
      },
    },
    stretch: {
      true: { 
        justifyContent: 'stretch',
        alignItems: 'stretch',
        flexGrow: 1,
      },
    },
  } as const,

  defaultVariants: {
    align: 'start',
  },
})

// Styled wrapper for button items to handle spacing
const ButtonGroupItem = styled(XStack, {
  name: 'ButtonGroupItem',
  // Remove individual margins since we're using gap
  
  // Small size spacing
  '.rcx-button-group--small &': {
    // Gap is handled by parent
  },
  
  // Large size spacing
  '.rcx-button-group--large &': {
    // Gap is handled by parent
  },
  
  // Wrap mode spacing
  '.rcx-button-group--wrap > &': {
    // Gap is handled by parent with rowGap and columnGap
  },
  
  // Stretch mode
  '.rcx-button-group--stretch > &': {
    flexGrow: 1,
  },
  
  // Vertical mode
  '.rcx-button-group--vertical &': {
    // Gap is handled by parent
  },
  
  // Vertical large spacing
  '.rcx-button-group--vertical.rcx-button-group--large > &': {
    // Gap is handled by parent
  },
  
  // Vertical small spacing
  '.rcx-button-group--vertical.rcx-button-group--small > &': {
    // Gap is handled by parent
  },
})

export type ButtonGroupProps = GetProps<typeof StyledButtonGroup> & {
  children?: ReactNode
  align?: 'start' | 'center' | 'end'
  vertical?: boolean
  wrap?: boolean
  stretch?: boolean
  small?: boolean
  large?: boolean
}

export const ButtonGroup = ({ 
  children, 
  small,
  large,
  ...props 
}: ButtonGroupProps) => {
  // Determine size class
  const sizeClass = small ? 'rcx-button-group--small' : 
                   large ? 'rcx-button-group--large' : '';
  
  // Build className for styling
  const className = [
    'rcx-button-group',
    props.stretch && 'rcx-button-group--stretch',
    props.vertical && 'rcx-button-group--vertical',
    props.wrap && 'rcx-button-group--wrap',
    sizeClass,
  ].filter(Boolean).join(' ');

  return (
    <StyledButtonGroup 
      {...props}
      className={className}
      role="group"
      size={small ? 'small' : large ? 'large' : 'medium'}
    >
      {children}
    </StyledButtonGroup>
  )
}