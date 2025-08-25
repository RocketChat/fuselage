import { styled } from '@tamagui/core'
import { Anchor as TamaguiAnchor } from '@tamagui/web'

export const Anchor = styled(TamaguiAnchor, {
  name: 'Anchor',
  textDecorationLine: 'none',

  hoverStyle: {
    textDecorationLine: 'none',
  },

  pressStyle: {
    textDecorationLine: 'none',
  },

  variants: {
    size: {
      xs: { fontSize: '$1', lineHeight: '$1' },
      sm: { fontSize: '$2', lineHeight: '$2' },
      md: { fontSize: '$3', lineHeight: '$3' },
      lg: { fontSize: '$4', lineHeight: '$4' },
      xl: { fontSize: '$5', lineHeight: '$5' },
    },
  } as const,

  defaultVariants: {
    size: 'md',
  },
})
