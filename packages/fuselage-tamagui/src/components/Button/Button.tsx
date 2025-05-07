import { getSize, getSpace } from '@tamagui/get-token'
import {
  GetProps,
  SizeTokens,
  View,
  Text,
  createStyledContext,
  styled,
  useTheme,
  withStaticProperties,
} from '@tamagui/web'
import { cloneElement, isValidElement, useContext } from 'react'
import { getTokens } from '@tamagui/core'

export const ButtonContext = createStyledContext({
  size: '$md' as SizeTokens,
})

export const ButtonFrame = styled(View, {
  name: 'Button',
  context: ButtonContext,
  backgroundColor: '$background',
  alignItems: 'center',
  flexDirection: 'row',
  // background: '#353B45',
  // backgroundPress: '#4C5362', // darker background on press
  // backgroundHover: '#404754', // lighter background on hover
  // color: '#353B45',
  borderRadius: '$1',

  hoverStyle: {
    backgroundColor: '#404754',
    borderColor:'none',
    cursor: 'pointer',
  },
  pressStyle: {
    backgroundColor: '#4C5362',
    borderColor:'none'
  },

  focusVisibleStyle: {
    backgroundColor: '#404754',
  //   borderColor: '$borderColorFocus',
  },

  variants: {
    size: {
      '...size': (name, { tokens }) => {
        return {
          height: tokens.size[name],
          // borderRadius: tokens.radius[name],
          // note the getSpace and getSize helpers will let you shift down/up token sizes
          // whereas with gap we just multiply by 0.2
          // this is a stylistic choice, and depends on your design system values
          gap: tokens.space[name].val * 0.2,
          paddingHorizontal: getSpace(name, {
            shift: -1,
          }),
        }
      },
    },
    Primary:{
      true:{
        backgroundColor:'$primary_button.background',
        hoverStyle: {
          backgroundColor: '$primary_button.backgroundHover',
          borderColor:'none',
          cursor: 'pointer',
        },
      
        pressStyle: {
          backgroundColor: '$primary_button.backgroundPress',
          borderColor:'none'
        },
      
        focusVisibleStyle: {
          backgroundColor: '$primary_button.backgroundFocus',
        },
      },
    },
    Danger:{
      true:{
        backgroundColor:'$danger_button.background',
        hoverStyle: {
          backgroundColor: '$danger_button.backgroundHover',
          borderColor:'none',
          cursor: 'pointer',
        },
      
        pressStyle: {
          backgroundColor: '$danger_button.backgroundPress',
          borderColor:'none'
        },
      
        focusVisibleStyle: {
          backgroundColor: '$danger_button.backgroundFocus',
        },
      
      },
      
    },
    Warning:{
      true:{
        //font color:'FFFFFF',
        backgroundColor:'$warning_button.background',
        hoverStyle: {
          backgroundColor: '$warning_button.backgroundHover',
          borderColor:'none',
          cursor: 'pointer',
        },
      
        pressStyle: {
          backgroundColor: '$warning_button.backgroundPress',
          borderColor:'none'
        },
      
        focusVisibleStyle: {
          backgroundColor: '$warning_button.backgroundFocus',
        },
      
      },
      
    },
    Success:{
      true:{
        backgroundColor:'$success_button.background',
        hoverStyle: {
          backgroundColor: '$success_button.backgroundHover',
          borderColor:'none',
          cursor: 'pointer',
        },
      
        pressStyle: {
          backgroundColor: '$success_button.backgroundPress',
          borderColor:'none'
        },
      
        focusVisibleStyle: {
          backgroundColor: '$success_button.backgroundFocus',
        },
      
      },
      
    },
    Secondary:{
      true:{
        backgroundColor:'$secondary_button.background',
        hoverStyle: {
          backgroundColor: '$secondary_button.backgroundHover',
          borderColor:'none',
          cursor: 'pointer',
        },
      
        pressStyle: {
          backgroundColor: '$secondary_button.backgroundPress',
          borderColor:'none'
        },
      
        focusVisibleStyle: {
          backgroundColor: '$secondary_button.backgroundFocus',
        },
      },
    },
    SecondaryDanger:{
      true:{
        backgroundColor:'$secondaryDanger_button.background',
        hoverStyle: {
          backgroundColor: '$secondaryDanger_button.backgroundHover',
          borderColor:'none',
          cursor: 'pointer',
        },
      
        pressStyle: {
          backgroundColor: '$secondaryDanger_button.backgroundPress',
          borderColor:'none'
        },
      
        focusVisibleStyle: {
          backgroundColor: '$secondaryDanger_button.backgroundFocus',
        },
      },
    },
    SecondaryWarning:{
      true:{
        // font color:'FEEFBE',  

        backgroundColor:'$secondaryWarning_button.background',
        hoverStyle: {
          backgroundColor: '$secondaryWarning_button.backgroundHover',
          borderColor:'none',
          cursor: 'pointer',
        },
      
        pressStyle: {
          backgroundColor: '$secondaryWarning_button.backgroundPress',
          borderColor:'none'
        },
      
        focusVisibleStyle: {
          backgroundColor: '$secondaryWarning_button.backgroundFocus',
        },
      },
    },
    // 404754,4C5362,404754
    SecondarySuccess:{
      true:{
        backgroundColor:'$secondarySuccess_button.background',
        hoverStyle: {
          backgroundColor: '$secondarySuccess_button.backgroundHover',
          borderColor:'none',
          cursor: 'pointer',
        },
      
        pressStyle: {
          backgroundColor: '$secondarySuccess_button.backgroundPress',
          borderColor:'none'
        },
      
        focusVisibleStyle: {
          backgroundColor: '$secondarySuccess_button.backgroundFocus',
        },
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        backgroundColor: '$disabled_button.background',          
        borderRadius: '$2',
        hoverStyle: {
          cursor: 'not-allowed',
          backgroundColor: '$disabled_button.backgroundHover',
          borderColor:'none'
        },

        focusVisibleStyle: {
          backgroundColor: '$disabled_button.backgroundFocus',
        //   borderColor: '$borderColorFocus',
        },
      },
    },
  } as const,

  defaultVariants: {
    size: '$md',
  },
})

type ButtonProps = GetProps<typeof ButtonFrame>

export const ButtonText = styled(Text, {
  name: 'ButtonText',
  context: ButtonContext,
  color: '$color',
  userSelect: 'none',

  variants: {
    size: {
      '...fontSize': (name, { font }) => ({
        fontSize: font?.size[name],
      }),
    },
  } as const,
})

const ButtonIcon = (props: { children: any }) => {
  const { size } = useContext(ButtonContext.context)
  const smaller = getSize(size, {
    shift: -2,
  })
  const theme = useTheme()
  return isValidElement(props.children) ? cloneElement(props.children, {
    size: smaller.val * 0.5,
    color: theme.color.get(),
  }) : null
}

export const Button = withStaticProperties(ButtonFrame, {
  Props: ButtonContext.Provider,
  Text: ButtonText,
  Icon: ButtonIcon,
})