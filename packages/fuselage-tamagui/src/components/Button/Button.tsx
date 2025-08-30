
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
import './button.css'

export const ButtonContext = createStyledContext({
  size: 'medium' as SizeTokens,
})

export const ButtonFrame = styled(View, {
  name: 'Button',
  context: ButtonContext,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
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
  appearance: 'none',
  
  // Default secondary button styling (matching Fuselage exactly)
  backgroundColor: '#EBECEF',
  borderColor: '#E4E7EA',
  color: '#1F2329',
  
  hoverStyle: {
    backgroundColor: '#D7DBE0',
    borderColor: '#CBCED1',
    cursor: 'pointer',
  },
  pressStyle: {
    backgroundColor: '#CBCED1',
    borderColor: '#B8BEC4',
  },
  focusVisibleStyle: {
    backgroundColor: '#EBECEF',
    borderColor: '#1F2329',
    color: '#1F2329',
    borderWidth: 2,
    boxShadow: '0 0 0 2px #156FF5',
  },

  variants: {
    // Size variants matching original Fuselage exactly
    size: {
      default: {
        height: 48,
        paddingHorizontal: 24,
        minWidth: 96, // 2 * height
        fontSize: 18,
        lineHeight: 28,
      },
      tiny: {
        height: 24,
        paddingHorizontal: 8,
        minWidth: 48, // 2 * height
        fontSize: 12,
        lineHeight: 16,
      },
      mini: {
        height: 20,
        paddingHorizontal: 8,
        minWidth: 40, // 2 * height
        fontSize: 12,
        lineHeight: 16,
      },
      small: {
        height: 28,
        paddingHorizontal: 8,
        minWidth: 56, // 2 * height
        fontSize: 14,
        lineHeight: 16,
      },
      medium: {
        height: 32,
        paddingHorizontal: 12,
        minWidth: 64, // 2 * height
        fontSize: 14,
        lineHeight: 16,
      },
      large: {
        height: 48,
        paddingHorizontal: 24,
        minWidth: 96, // 2 * height
        fontSize: 18,
        lineHeight: 28,
      },
    },
    square: {
      true: {
        aspectRatio: 1,
        paddingHorizontal: 0,
        minWidth: 'auto',
        width: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
      },
    },
    // Square size variants matching Fuselage exactly
    'tiny-square': {
      true: {
        width: 24,
        minWidth: 24,
        height: 24,
        padding: 0,
      },
    },
    'mini-square': {
      true: {
        width: 20,
        minWidth: 20,
        height: 20,
        padding: 0,
      },
    },
    'small-square': {
      true: {
        width: 28,
        minWidth: 28,
        height: 28,
        padding: 0,
      },
    },
    'medium-square': {
      true: {
        width: 32,
        minWidth: 32,
        height: 32,
        padding: 0,
      },
    },
    'large-square': {
      true: {
        width: 40,
        minWidth: 40,
        height: 40,
        padding: 0,
      },
    },
    loading: {
      true: {
        opacity: 0.6,
        pointerEvents: 'none',
        backgroundColor: '#F7F8FA',
        borderColor: '#F2F3F5',
        color: '#9EA2A8',
      },
    },
    disabled: {
      true: {
        opacity: 1,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
    },
    // Disabled variants for different button types
    'disabled-primary': {
      true: {
        backgroundColor: '#D1EBFE',
        borderColor: '#D1EBFE',
        color: '#FFFFFF',
      },
    },
    'disabled-secondary': {
      true: {
        backgroundColor: '#EBECEF',
        borderColor: '#E4E7EA',
        color: '#9EA2A8',
      },
    },
    'disabled-danger': {
      true: {
        backgroundColor: '#FFC1C9',
        borderColor: '#FFC1C9',
        color: '#FFFFFF',
      },
    },
    'disabled-warning': {
      true: {
        backgroundColor: '#C0F6E4',
        borderColor: '#C0F6E4',
        color: '#FFFFFF',
      },
    },
    'disabled-success': {
      true: {
        backgroundColor: '#C0F6E4',
        borderColor: '#C0F6E4',
        color: '#FFFFFF',
      },
    },
    'disabled-secondary-danger': {
      true: {
        backgroundColor: '#EBECEF',
        borderColor: '#E4E7EA',
        color: '#F98F9D',
      },
    },
    'disabled-secondary-warning': {
      true: {
        backgroundColor: '#EBECEF',
        borderColor: '#E4E7EA',
        color: '#F7B27B',
      },
    },
    'disabled-secondary-success': {
      true: {
        backgroundColor: '#EBECEF',
        borderColor: '#E4E7EA',
        color: '#96F0D2',
      },
    },
    'disabled-secondary-info': {
      true: {
        backgroundColor: '#EBECEF',
        borderColor: '#E4E7EA',
        color: '#76B7FC',
      },
    },
    // Button variants matching original Fuselage exactly
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
          backgroundColor: '#0747A6',
          borderColor: '#0747A6',
        },
        focusVisibleStyle: {
          backgroundColor: '#156FF5',
          borderColor: '#1F2329',
          color: '#FFFFFF',
          borderWidth: 2,
          boxShadow: '0 0 0 2px #156FF5',
        },
      },
    },
    secondary: {
      true: {
        backgroundColor: '#EBECEF',
        borderColor: '#E4E7EA',
        color: '#1F2329',
        hoverStyle: {
          backgroundColor: '#D7DBE0',
          borderColor: '#CBCED1',
          cursor: 'pointer',
        },
        pressStyle: {
          backgroundColor: '#CBCED1',
          borderColor: '#B8BEC4',
        },
        focusVisibleStyle: {
          backgroundColor: '#EBECEF',
          borderColor: '#1F2329',
          color: '#1F2329',
          borderWidth: 2,
          boxShadow: '0 0 0 2px #1F2329',
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
          backgroundColor: '#A5091C',
          borderColor: '#A5091C',
        },
        focusVisibleStyle: {
          backgroundColor: '#EC0D2A',
          borderColor: '#1F2329',
          color: '#FFFFFF',
          borderWidth: 2,
          boxShadow: '0 0 0 2px #EC0D2A',
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
          backgroundColor: '#C99A00',
          borderColor: '#C99A00',
        },
        focusVisibleStyle: {
          backgroundColor: '#FFD031',
          borderColor: '#1F2329',
          color: '#1F2329',
          borderWidth: 2,
          boxShadow: '0 0 0 2px #FFD031',
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
          backgroundColor: '#0F9B6B',
          borderColor: '#0F9B6B',
        },
        focusVisibleStyle: {
          backgroundColor: '#2DE0A5',
          borderColor: '#1F2329',
          color: '#FFFFFF',
          borderWidth: 2,
          boxShadow: '0 0 0 2px #2DE0A5',
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
          backgroundColor: '#0747A6',
          borderColor: '#0747A6',
        },
        focusVisibleStyle: {
          backgroundColor: '#156FF5',
          borderColor: '#1F2329',
          color: '#FFFFFF',
          borderWidth: 2,
          boxShadow: '0 0 0 2px #156FF5',
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
          backgroundColor: '#D7DBE0',
          borderColor: '#CBCED1',
          cursor: 'pointer',
        },
        pressStyle: {
          backgroundColor: '#CBCED1',
          borderColor: '#B8BEC4',
        },
        focusVisibleStyle: {
          backgroundColor: '#EBECEF',
          borderColor: '#1F2329',
          color: '#EC0D2A',
          borderWidth: 2,
          boxShadow: '0 0 0 2px #EC0D2A',
        },
      },
    },
    'secondary-warning': {
      true: {
        backgroundColor: '#EBECEF',
        borderColor: '#E4E7EA',
        color: '#F3BE08',
        hoverStyle: {
          backgroundColor: '#D7DBE0',
          borderColor: '#CBCED1',
          cursor: 'pointer',
        },
        pressStyle: {
          backgroundColor: '#CBCED1',
          borderColor: '#B8BEC4',
        },
        focusVisibleStyle: {
          backgroundColor: '#EBECEF',
          borderColor: '#1F2329',
          color: '#F3BE08',
          borderWidth: 2,
          boxShadow: '0 0 0 2px #FFD031',
        },
      },
    },
    'secondary-success': {
      true: {
        backgroundColor: '#EBECEF',
        borderColor: '#E4E7EA',
        color: '#2DE0A5',
        hoverStyle: {
          backgroundColor: '#D7DBE0',
          borderColor: '#CBCED1',
          cursor: 'pointer',
        },
        pressStyle: {
          backgroundColor: '#CBCED1',
          borderColor: '#B8BEC4',
        },
        focusVisibleStyle: {
          backgroundColor: '#EBECEF',
          borderColor: '#1F2329',
          color: '#2DE0A5',
          borderWidth: 2,
          boxShadow: '0 0 0 2px #2DE0A5',
        },
      },
    },
    'secondary-info': {
      true: {
        backgroundColor: '#EBECEF',
        borderColor: '#E4E7EA',
        color: '#156FF5',
        hoverStyle: {
          backgroundColor: '#D7DBE0',
          borderColor: '#CBCED1',
          cursor: 'pointer',
        },
        pressStyle: {
          backgroundColor: '#CBCED1',
          borderColor: '#B8BEC4',
        },
        focusVisibleStyle: {
          backgroundColor: '#EBECEF',
          borderColor: '#1F2329',
          color: '#156FF5',
          borderWidth: 2,
          boxShadow: '0 0 0 2px #156FF5',
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
          boxShadow: '0 0 0 2px #156FF5',
        },
      },
    },
  } as const,

  defaultVariants: {
    size: 'default',
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
  width: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

const ButtonIcon = (props: { children: any }) => {
  return isValidElement(props.children) ? props.children : null
}

// Add User icon component matching Fuselage
const AddUserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="m22 21-2-2"/>
    <path d="M16 3.13a6 6 0 0 1 0 11.75"/>
  </svg>
)

const ButtonComponent = ({ 
  icon, 
  loading, 
  external,
  children,
  disabled,
  href,
  asLink,
  is = 'button',
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
                     large ? 'large' : 'default';

  // Determine button variant (matching Fuselage logic exactly)
  const buttonVariant = primary ? 'primary' :
                       secondary && success ? 'secondary-success' :
                       secondary && warning ? 'secondary-warning' :
                       secondary && danger ? 'secondary-danger' :
                       success ? 'success' :
                       warning ? 'warning' :
                       danger ? 'danger' :
                       secondary ? 'secondary' : undefined;

  // Determine square variants
  const squareVariants = square ? {
    'tiny-square': tiny,
    'mini-square': mini,
    'small-square': small,
    'medium-square': medium,
    'large-square': large,
  } : {};

  // Determine disabled variants
  const isDisabled = disabled || loading;
  const disabledVariant = isDisabled ? 
    (primary ? 'disabled-primary' :
     secondary && success ? 'disabled-secondary-success' :
     secondary && warning ? 'disabled-secondary-warning' :
     secondary && danger ? 'disabled-secondary-danger' :
     success ? 'disabled-success' :
     warning ? 'disabled-warning' :
     danger ? 'disabled-danger' :
     secondary ? 'disabled-secondary' : undefined) : undefined;

  const extraProps = {
    ...(external ? {
      rel: 'noopener noreferrer',
      target: '_blank',
    } : {}),
    ...(href ? { href } : {}),
    ...(asLink || is === 'a' ? { tag: 'a' } : {}),
  };

  return (
    <ButtonFrame
      {...props}
      {...extraProps}
      size={sizeVariant}
      square={square}
      loading={loading}
      disabled={isDisabled}
      asLink={asLink && is !== 'a'}
      primary={primary}
      secondary={secondary}
      danger={danger}
      warning={warning}
      success={success}
      info={info}
      data-primary={primary || undefined}
      data-secondary={secondary || undefined}
      data-danger={danger || undefined}
      data-warning={warning || undefined}
      data-success={success || undefined}
      data-info={info || undefined}
      data-secondary-danger={secondary && danger || undefined}
      data-secondary-warning={secondary && warning || undefined}
      data-secondary-success={secondary && success || undefined}
      data-secondary-info={secondary && info || undefined}
      {...(buttonVariant ? { [buttonVariant]: true } : {})}
      {...(disabledVariant ? { [disabledVariant]: true } : {})}
      {...squareVariants}
    >
      <View style={{ 
        display: 'flex',
        width: '100%',
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 4,
        overflow: 'hidden',
        minWidth: 0
      }}>
        {icon && !loading && <ButtonIcon>{icon}</ButtonIcon>}
        {loading && (
          <View
            style={{
              width: 16,
              height: 16,
              border: '2px solid transparent',
              borderTop: '2px solid currentColor',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }}
          />
        )}
        <ButtonText style={{ flex: 1, minWidth: 0 }}>{children}</ButtonText>
      </View>
    </ButtonFrame>
  );
};

export const Button = withStaticProperties(ButtonComponent, {
  Props: ButtonContext.Provider,
  Text: ButtonText,
  Icon: ButtonIcon,
});