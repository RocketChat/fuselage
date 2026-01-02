import {
  SizeTokens,
  createStyledContext,
  styled,
  withStaticProperties,
} from '@tamagui/web'


import { Focusable } from './Focusable'
import { SizableText } from './SizableText'
import React from 'react'


export const ButtonContext = createStyledContext({
  size: '$lg' as SizeTokens,
  small: false,
  fontScale: '$hero',
})

export const ButtonFrame = styled(Focusable, {

  tag: 'button',

  name: 'Button',

  context: ButtonContext,

  alignItems: 'center',

  borderRadius: '$default',

  flexDirection: 'row',

  variants: {

    size: {

      '...size': (name, { tokens }) => ({
        paddingInline: name === '$sm' ? tokens.size['$sm'] : tokens.size['$lg'],
        paddingBlock: name === '$sm' ? tokens.size['$sm'] : tokens.size['$md'],
      })
    }
  }

})

export const ButtonText = styled(SizableText, {
  name: 'ButtonText',
  context: ButtonContext,
  userSelect: 'none',
  fontScale: '$p2m',
  variants: {
    small: {
      true: {
        fontScale: '$c2',
      }
    }
  }
})


const ButtonComponent = ButtonFrame.styleable<{
  small?: boolean
}>(function Button(
  {children, small, ...props},
  ref
) {
  return <ButtonFrame {
    ...props} ref={ref}>
    <ButtonText small={small} >{children}</ButtonText>
    </ButtonFrame>
})


export const Button = withStaticProperties(ButtonComponent, {

  Props: ButtonContext.Provider,

  Text: ButtonText,
})
