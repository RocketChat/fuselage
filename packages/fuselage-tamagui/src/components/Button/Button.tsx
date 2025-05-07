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
        backgroundColor:'#095AD2',
        hoverStyle: {
          backgroundColor: '#10529E',
          borderColor:'none',
          cursor: 'pointer',
        },
      
        pressStyle: {
          backgroundColor: '#01336B',
          borderColor:'none'
        },
      
        focusVisibleStyle: {
          backgroundColor: '#095AD2',
        },
      },
    },
    Danger:{
      true:{
        backgroundColor:'#BB3E4E',
        hoverStyle: {
          backgroundColor: '#95323F',
          borderColor:'none',
          cursor: 'pointer',
        },
      
        pressStyle: {
          backgroundColor: '#822C37',
          borderColor:'none'
        },
      
        focusVisibleStyle: {
          backgroundColor: '#BB3E4E',
        },
      
      },
      
    },
    Warning:{
      true:{
        //font color:'FFFFFF',
        backgroundColor:'#B08C30',
        hoverStyle: {
          backgroundColor: '#C7AA66',
          borderColor:'none',
          cursor: 'pointer',
        },
      
        pressStyle: {
          backgroundColor: '#01336B',
          borderColor:'none'
        },
      
        focusVisibleStyle: {
          backgroundColor: '#095AD2',
        },
      
      },
      
    },
    Success:{
      true:{
        backgroundColor:'#1D7256',
        hoverStyle: {
          backgroundColor: '#175943',
          borderColor:'none',
          cursor: 'pointer',
        },
      
        pressStyle: {
          backgroundColor: '#134937',
          borderColor:'none'
        },
      
        focusVisibleStyle: {
          backgroundColor: '#1D7256',
        },
      
      },
      
    },
    Secondary:{
      true:{
        backgroundColor:'#353B45',
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
          backgroundColor: '#353B45',
        },
      },
    },
    SecondaryDanger:{
      true:{
        backgroundColor:'#353B45',
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
          backgroundColor: '#353B45',
        },
      },
    },
    SecondaryWarning:{
      true:{
        // font color:'FEEFBE',  

        backgroundColor:'#e1e1e1',
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
        },
      },
    },
    // 404754,4C5362,404754
    SecondarySuccess:{
      true:{
        backgroundColor:'#e1e1e1',
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
        },
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        backgroundColor: '#353B45',          
        borderRadius: '$2',
        hoverStyle: {
          cursor: 'not-allowed',
          backgroundColor: '#404754',
          borderColor:'none'
        },

        focusVisibleStyle: {
          backgroundColor: '#353B45',
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