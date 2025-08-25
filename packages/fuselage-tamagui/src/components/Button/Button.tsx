
import {
  GetProps,
  SizeTokens,
  View,
  Text,
  createStyledContext,
  styled,
  withStaticProperties,
} from '@tamagui/web'
import { isValidElement } from 'react'

export const ButtonContext = createStyledContext({
  size: 'medium' as SizeTokens,
})

export const ButtonFrame = styled(View, {
  name: 'Button',
  context: ButtonContext,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 4,
  cursor: 'pointer',
  userSelect: 'none',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontWeight: '500',
  
  // Default secondary button styling (gray)
  backgroundColor: '#EBECEF',
  borderColor: '#E4E7EA',
  color: '#1F2329',
  
  hoverStyle: {
    backgroundColor: '#EEEFF1',
    borderColor: '#D7DBE0',
    cursor: 'pointer',
  },
  pressStyle: {
    backgroundColor: '#E4E7EA',
    borderColor: '#CBCED1',
  },
  focusVisibleStyle: {
    backgroundColor: '#EEEFF1',
    borderColor: '#1F2329',
    outline: '2px solid #1F2329',
    outlineOffset: 2,
  },

  variants: {
    // Size variants matching original Fuselage
    size: {
      tiny: {
        height: 24,
        paddingHorizontal: 8,
        minWidth: 24,
        fontSize: 12,
        lineHeight: 16,
      },
      mini: {
        height: 20,
        paddingHorizontal: 8,
        minWidth: 20,
        fontSize: 12,
        lineHeight: 16,
      },
      small: {
        height: 28,
        paddingHorizontal: 8,
        minWidth: 56,
        fontSize: 14,
        lineHeight: 16,
      },
      medium: {
        height: 32,
        paddingHorizontal: 12,
        minWidth: 64,
        fontSize: 14,
        lineHeight: 16,
      },
      large: {
        height: 48,
        paddingHorizontal: 24,
        minWidth: 96,
        fontSize: 18,
        lineHeight: 28,
      },
      $true: {
        height: 40,
        paddingHorizontal: 16,
        minWidth: 80,
        fontSize: 18,
        lineHeight: 28,
      },
    },
    square: {
      true: {
        aspectRatio: 1,
        paddingHorizontal: 0,
        minWidth: 'auto',
      },
    },
    loading: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
    disabled: {
      true: {
        opacity: 0.4,
        cursor: 'not-allowed',
        pointerEvents: 'none',
        backgroundColor: '#EEEFF1',
        borderColor: '#E4E7EA',
        color: '#9EA2A8',
      },
    },
    // Button variants matching original Fuselage
    primary: {
      true: {
        backgroundColor: '#156FF5',
        borderColor: '#156FF5',
        color: '#FFFFFF',
        hoverStyle: {
          backgroundColor: '#095AD2',
          borderColor: '#095AD2',
          cursor: 'pointer',
        },
        pressStyle: {
          backgroundColor: '#10529E',
          borderColor: '#10529E',
        },
        focusVisibleStyle: {
          backgroundColor: '#095AD2',
          borderColor: '#1F2329',
          outline: '2px solid #1F2329',
          outlineOffset: 2,
        },
      },
    },
    secondary: {
      true: {
        backgroundColor: '#EBECEF',
        borderColor: '#E4E7EA',
        color: '#1F2329',
        hoverStyle: {
          backgroundColor: '#EEEFF1',
          borderColor: '#D7DBE0',
          cursor: 'pointer',
        },
        pressStyle: {
          backgroundColor: '#E4E7EA',
          borderColor: '#CBCED1',
        },
        focusVisibleStyle: {
          backgroundColor: '#EEEFF1',
          borderColor: '#156FF5',
          outline: '2px solid #156FF5',
          outlineOffset: 2,
        },
      },
    },
    danger: {
      true: {
        backgroundColor: '#EC0D2A',
        borderColor: '#EC0D2A',
        color: '#FFFFFF',
        hoverStyle: {
          backgroundColor: '#D40C26',
          borderColor: '#D40C26',
          cursor: 'pointer',
        },
        pressStyle: {
          backgroundColor: '#BB0B21',
          borderColor: '#BB0B21',
        },
        focusVisibleStyle: {
          backgroundColor: '#D40C26',
          borderColor: '#EC0D2A',
          outline: '2px solid #EC0D2A',
          outlineOffset: 2,
        },
      },
    },
    warning: {
      true: {
        backgroundColor: '#FFD031',
        borderColor: '#FFD031',
        color: '#1F2329',
        hoverStyle: {
          backgroundColor: '#F3BE08',
          borderColor: '#F3BE08',
          cursor: 'pointer',
        },
        pressStyle: {
          backgroundColor: '#DFAC00',
          borderColor: '#DFAC00',
        },
        focusVisibleStyle: {
          backgroundColor: '#F3BE08',
          borderColor: '#FFD031',
          outline: '2px solid #FFD031',
          outlineOffset: 2,
        },
      },
    },
    success: {
      true: {
        backgroundColor: '#2DE0A5',
        borderColor: '#2DE0A5',
        color: '#FFFFFF',
        hoverStyle: {
          backgroundColor: '#1ECB92',
          borderColor: '#1ECB92',
          cursor: 'pointer',
        },
        pressStyle: {
          backgroundColor: '#19AC7C',
          borderColor: '#19AC7C',
        },
        focusVisibleStyle: {
          backgroundColor: '#1ECB92',
          borderColor: '#2DE0A5',
          outline: '2px solid #2DE0A5',
          outlineOffset: 2,
        },
      },
    },
    info: {
      true: {
        backgroundColor: '#156FF5',
        borderColor: '#156FF5',
        color: '#FFFFFF',
        hoverStyle: {
          backgroundColor: '#095AD2',
          borderColor: '#095AD2',
          cursor: 'pointer',
        },
        pressStyle: {
          backgroundColor: '#10529E',
          borderColor: '#10529E',
        },
        focusVisibleStyle: {
          backgroundColor: '#095AD2',
          borderColor: '#156FF5',
          outline: '2px solid #156FF5',
          outlineOffset: 2,
        },
      },
    },
    // Secondary variants
    'secondary-danger': {
      true: {
        backgroundColor: '#EBECEF',
        borderColor: '#E4E7EA',
        color: '#EC0D2A',
        hoverStyle: {
          backgroundColor: '#EEEFF1',
          borderColor: '#D7DBE0',
          cursor: 'pointer',
        },
        pressStyle: {
          backgroundColor: '#E4E7EA',
          borderColor: '#CBCED1',
        },
        focusVisibleStyle: {
          backgroundColor: '#EEEFF1',
          borderColor: '#EC0D2A',
          outline: '2px solid #EC0D2A',
          outlineOffset: 2,
        },
      },
    },
    'secondary-warning': {
      true: {
        backgroundColor: '#EBECEF',
        borderColor: '#E4E7EA',
        color: '#F3BE08',
        hoverStyle: {
          backgroundColor: '#EEEFF1',
          borderColor: '#D7DBE0',
          cursor: 'pointer',
        },
        pressStyle: {
          backgroundColor: '#E4E7EA',
          borderColor: '#CBCED1',
        },
        focusVisibleStyle: {
          backgroundColor: '#EEEFF1',
          borderColor: '#F3BE08',
          outline: '2px solid #F3BE08',
          outlineOffset: 2,
        },
      },
    },
    'secondary-success': {
      true: {
        backgroundColor: '#EBECEF',
        borderColor: '#E4E7EA',
        color: '#2DE0A5',
        hoverStyle: {
          backgroundColor: '#EEEFF1',
          borderColor: '#D7DBE0',
          cursor: 'pointer',
        },
        pressStyle: {
          backgroundColor: '#E4E7EA',
          borderColor: '#CBCED1',
        },
        focusVisibleStyle: {
          backgroundColor: '#EEEFF1',
          borderColor: '#2DE0A5',
          outline: '2px solid #2DE0A5',
          outlineOffset: 2,
        },
      },
    },
    'secondary-info': {
      true: {
        backgroundColor: '#EBECEF',
        borderColor: '#E4E7EA',
        color: '#156FF5',
        hoverStyle: {
          backgroundColor: '#EEEFF1',
          borderColor: '#D7DBE0',
          cursor: 'pointer',
        },
        pressStyle: {
          backgroundColor: '#E4E7EA',
          borderColor: '#CBCED1',
        },
        focusVisibleStyle: {
          backgroundColor: '#EEEFF1',
          borderColor: '#156FF5',
          outline: '2px solid #156FF5',
          outlineOffset: 2,
        },
      },
    },
    // Link variant
    asLink: {
      true: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: '#156FF5',
        hoverStyle: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          color: '#095AD2',
          cursor: 'pointer',
        },
        pressStyle: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          color: '#10529E',
        },
        focusVisibleStyle: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          outline: '2px solid #156FF5',
          outlineOffset: 2,
        },
      },
    },
  } as const,

  defaultVariants: {
    size: 'medium',
  },
})

type ButtonProps = GetProps<typeof ButtonFrame> & {
  icon?: any;
  loading?: boolean;
  external?: boolean;
  square?: boolean;
  href?: string;
  asLink?: boolean;
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  warning?: boolean;
  success?: boolean;
  info?: boolean;
  tiny?: boolean;
  mini?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
};

export const ButtonText = styled(Text, {
  name: 'ButtonText',
  context: ButtonContext,
  color: 'inherit',
  userSelect: 'none',
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontWeight: '500',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
})

const ButtonIcon = (props: { children: any }) => {
  return isValidElement(props.children) ? props.children : null
}

const ButtonComponent = ({ 
  icon, 
  loading, 
  external,
  children,
  disabled,
  href,
  asLink,
  primary,
  secondary,
  danger,
  warning,
  success,
  info,
  tiny,
  mini,
  small,
  medium,
  large,
  square,
  ...props
}: ButtonProps) => {
  // Determine size variant
  const sizeVariant = tiny ? 'tiny' : 
                     mini ? 'mini' : 
                     small ? 'small' : 
                     medium ? 'medium' : 
                     large ? 'large' : 'medium';

  // Determine button variant
  const buttonVariant = primary ? 'primary' :
                       secondary && danger ? 'secondary-danger' :
                       secondary && warning ? 'secondary-warning' :
                       secondary && success ? 'secondary-success' :
                       secondary && info ? 'secondary-info' :
                       danger ? 'danger' :
                       warning ? 'warning' :
                       success ? 'success' :
                       info ? 'info' :
                       secondary ? 'secondary' : undefined;

  const extraProps = {
    ...(external ? {
      rel: 'noopener noreferrer',
      target: '_blank',
    } : {}),
    ...(href ? { href } : {}),
    ...(asLink ? { tag: 'a' } : {}),
  };

  return (
    <ButtonFrame
      {...props}
      {...extraProps}
      size={sizeVariant}
      square={square}
      loading={loading}
      disabled={disabled || loading}
      asLink={asLink || !!href}
      primary={primary}
      secondary={secondary}
      danger={danger}
      warning={warning}
      success={success}
      info={info}
      {...(buttonVariant ? { [buttonVariant]: true } : {})}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        {icon && !loading && <ButtonIcon>{icon}</ButtonIcon>}
        {loading && <ButtonIcon>loading</ButtonIcon>}
        {typeof children === 'string' ? (
          <ButtonText>{children}</ButtonText>
        ) : (
          children
        )}
      </View>
    </ButtonFrame>
  );
};

export const Button = withStaticProperties(ButtonComponent, {
  Props: ButtonContext.Provider,
  Text: ButtonText,
  Icon: ButtonIcon,
});