import { Stack, styled, GetProps } from 'tamagui'
import { useBoxOnlyProps } from '../../hooks/useBoxOnlyProps'
import { useArrayLikeClassNameProp } from '../../hooks/useArrayLikeClassNameProp'
import type { Falsy } from '../../types/Falsy'

export interface BoxProps extends GetProps<typeof StyledBox> {
  animated?: boolean
  withRichContent?: boolean | 'inlineWithoutBreaks'
  htmlSize?: number
  focusable?: boolean
  elevation?: '0' | '1' | '2'
  invisible?: boolean
  is?: keyof JSX.IntrinsicElements
}

const StyledBox = styled(Stack, {
  name: 'Box',
  backgroundColor: '$background',

  variants: {
    elevation: {
      '0': {},
      '1': {
        shadowColor: '$shadowColor',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      '2': {
        shadowColor: '$shadowColor',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
      }
    }
  }
})

export const Box = StyledBox