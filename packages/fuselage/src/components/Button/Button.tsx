import type { AllHTMLAttributes } from 'react';
import { forwardRef, useMemo } from 'react';

import { styled, createStyledContext, Text } from '@tamagui/core';

import { RcxInteractive, RcxText } from '../../primitives';
import type { BoxProps } from '../Box';
import { Icon, type IconProps } from '../Icon';

// --- Context for compound component ---

const ButtonContext = createStyledContext({
  size: 'default' as string,
});

// --- Frame: layout + size (no color) ---

const ButtonFrame = styled(RcxInteractive, {
  name: 'Button',
  context: ButtonContext,
  role: 'button',

  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  textAlign: 'center',
  whiteSpace: 'nowrap',
  textDecoration: 'none',

  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: '$x4',

  // default (no color variant) = secondary
  backgroundColor: '$buttonSecondaryBg',
  borderColor: '$buttonSecondaryBg',
  color: '$buttonSecondaryColor',

  hoverStyle: {
    backgroundColor: '$buttonSecondaryHoverBg',
    borderColor: '$buttonSecondaryHoverBg',
    boxShadow: 'none',
  },
  pressStyle: {
    backgroundColor: '$buttonSecondaryPressBg',
    borderColor: '$buttonSecondaryPressBg',
    boxShadow: 'none',
  },
  focusVisibleStyle: {
    backgroundColor: '$buttonSecondaryFocusBg',
    borderColor: '$strokeExtraDark',
    boxShadow: '0 0 0 2px var(--shadowHighlight)',
  },
  disabledStyle: {
    backgroundColor: '$buttonSecondaryDisabledBg',
    borderColor: '$buttonSecondaryDisabledBg',
    color: '$buttonSecondaryDisabledColor',
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      default: {
        height: '$x40',
        paddingInline: 14, // 16 - 2*1px border
        minWidth: 80, // 40 * 2
      },
      small: {
        height: '$x28',
        paddingInline: 6, // 8 - 2*1px border
        minWidth: 56, // 28 * 2
      },
      medium: {
        height: '$x32',
        paddingInline: 10, // 12 - 2*1px border
        minWidth: 64, // 32 * 2
      },
      large: {
        height: '$x48',
        paddingInline: 22, // 24 - 2*1px border
        minWidth: 96, // 48 * 2
      },
    },
  } as const,

  defaultVariants: {
    size: 'default',
  },
});

// --- Color variant frames ---

const PrimaryButton = styled(ButtonFrame, {
  backgroundColor: '$buttonPrimaryBg',
  borderColor: '$buttonPrimaryBg',
  color: '$buttonPrimaryColor',

  hoverStyle: {
    backgroundColor: '$buttonPrimaryHoverBg',
    borderColor: '$buttonPrimaryHoverBg',
    boxShadow: 'none',
  },
  pressStyle: {
    backgroundColor: '$buttonPrimaryPressBg',
    borderColor: '$buttonPrimaryPressBg',
    boxShadow: 'none',
  },
  focusVisibleStyle: {
    backgroundColor: '$buttonPrimaryFocusBg',
    borderColor: '$strokeExtraDark',
    boxShadow: '0 0 0 2px var(--shadowHighlight)',
  },
  disabledStyle: {
    backgroundColor: '$buttonPrimaryDisabledBg',
    borderColor: '$buttonPrimaryDisabledBg',
    color: '$buttonPrimaryDisabledColor',
    cursor: 'not-allowed',
  },
});

const DangerButton = styled(ButtonFrame, {
  backgroundColor: '$buttonDangerBg',
  borderColor: '$buttonDangerBg',
  color: '$buttonDangerColor',

  hoverStyle: {
    backgroundColor: '$buttonDangerHoverBg',
    borderColor: '$buttonDangerHoverBg',
    boxShadow: 'none',
  },
  pressStyle: {
    backgroundColor: '$buttonDangerPressBg',
    borderColor: '$buttonDangerPressBg',
    boxShadow: 'none',
  },
  focusVisibleStyle: {
    backgroundColor: '$buttonDangerFocusBg',
    borderColor: '$strokeExtraDark',
    boxShadow: '0 0 0 2px var(--strokeExtraLightError)',
  },
  disabledStyle: {
    backgroundColor: '$buttonDangerDisabledBg',
    borderColor: '$buttonDangerDisabledBg',
    color: '$buttonDangerDisabledColor',
    cursor: 'not-allowed',
  },
});

const WarningButton = styled(ButtonFrame, {
  backgroundColor: '$buttonWarningBg',
  borderColor: '$buttonWarningBg',
  color: '$buttonWarningColor',

  hoverStyle: {
    backgroundColor: '$buttonWarningHoverBg',
    borderColor: '$buttonWarningHoverBg',
    boxShadow: 'none',
  },
  pressStyle: {
    backgroundColor: '$buttonWarningPressBg',
    borderColor: '$buttonWarningPressBg',
    boxShadow: 'none',
  },
  focusVisibleStyle: {
    backgroundColor: '$buttonWarningFocusBg',
    borderColor: '$strokeExtraDark',
    boxShadow: '0 0 0 2px var(--strokeLight)',
  },
  disabledStyle: {
    backgroundColor: '$buttonWarningDisabledBg',
    borderColor: '$buttonWarningDisabledBg',
    color: '$buttonWarningDisabledColor',
    cursor: 'not-allowed',
  },
});

const SuccessButton = styled(ButtonFrame, {
  backgroundColor: '$buttonSuccessBg',
  borderColor: '$buttonSuccessBg',
  color: '$buttonSuccessColor',

  hoverStyle: {
    backgroundColor: '$buttonSuccessHoverBg',
    borderColor: '$buttonSuccessHoverBg',
    boxShadow: 'none',
  },
  pressStyle: {
    backgroundColor: '$buttonSuccessPressBg',
    borderColor: '$buttonSuccessPressBg',
    boxShadow: 'none',
  },
  focusVisibleStyle: {
    backgroundColor: '$buttonSuccessFocusBg',
    borderColor: '$strokeExtraDark',
    boxShadow: '0 0 0 2px var(--strokeLight)',
  },
  disabledStyle: {
    backgroundColor: '$buttonSuccessDisabledBg',
    borderColor: '$buttonSuccessDisabledBg',
    color: '$buttonSuccessDisabledColor',
    cursor: 'not-allowed',
  },
});

const SecondaryDangerButton = styled(ButtonFrame, {
  backgroundColor: '$buttonSecondaryDangerBg',
  borderColor: '$buttonSecondaryDangerBg',
  color: '$buttonSecondaryDangerColor',

  hoverStyle: {
    backgroundColor: '$buttonSecondaryDangerHoverBg',
    borderColor: '$buttonSecondaryDangerHoverBg',
    boxShadow: 'none',
  },
  pressStyle: {
    backgroundColor: '$buttonSecondaryDangerPressBg',
    borderColor: '$buttonSecondaryDangerPressBg',
    boxShadow: 'none',
  },
  focusVisibleStyle: {
    backgroundColor: '$buttonSecondaryDangerFocusBg',
    borderColor: '$strokeExtraDark',
    boxShadow: '0 0 0 2px var(--strokeExtraLightError)',
  },
  disabledStyle: {
    backgroundColor: '$buttonSecondaryDangerDisabledBg',
    borderColor: '$buttonSecondaryDangerDisabledBg',
    color: '$buttonSecondaryDangerDisabledColor',
    cursor: 'not-allowed',
  },
});

const SecondaryWarningButton = styled(ButtonFrame, {
  backgroundColor: '$buttonSecondaryWarningBg',
  borderColor: '$buttonSecondaryWarningBg',
  color: '$buttonSecondaryWarningColor',

  hoverStyle: {
    backgroundColor: '$buttonSecondaryWarningHoverBg',
    borderColor: '$buttonSecondaryWarningHoverBg',
    boxShadow: 'none',
  },
  pressStyle: {
    backgroundColor: '$buttonSecondaryWarningPressBg',
    borderColor: '$buttonSecondaryWarningPressBg',
    boxShadow: 'none',
  },
  focusVisibleStyle: {
    backgroundColor: '$buttonSecondaryWarningFocusBg',
    borderColor: '$strokeExtraDark',
    boxShadow: '0 0 0 2px var(--strokeLight)',
  },
  disabledStyle: {
    backgroundColor: '$buttonSecondaryWarningDisabledBg',
    borderColor: '$buttonSecondaryWarningDisabledBg',
    color: '$buttonSecondaryWarningDisabledColor',
    cursor: 'not-allowed',
  },
});

const SecondarySuccessButton = styled(ButtonFrame, {
  backgroundColor: '$buttonSecondarySuccessBg',
  borderColor: '$buttonSecondarySuccessBg',
  color: '$buttonSecondarySuccessColor',

  hoverStyle: {
    backgroundColor: '$buttonSecondarySuccessHoverBg',
    borderColor: '$buttonSecondarySuccessHoverBg',
    boxShadow: 'none',
  },
  pressStyle: {
    backgroundColor: '$buttonSecondarySuccessPressBg',
    borderColor: '$buttonSecondarySuccessPressBg',
    boxShadow: 'none',
  },
  focusVisibleStyle: {
    backgroundColor: '$buttonSecondarySuccessFocusBg',
    borderColor: '$strokeExtraDark',
    boxShadow: '0 0 0 2px var(--strokeLight)',
  },
  disabledStyle: {
    backgroundColor: '$buttonSecondarySuccessDisabledBg',
    borderColor: '$buttonSecondarySuccessDisabledBg',
    color: '$buttonSecondarySuccessDisabledColor',
    cursor: 'not-allowed',
  },
});

// --- Text sub-component ---

const ButtonText = styled(RcxText, {
  name: 'ButtonText',
  context: ButtonContext,

  display: 'inline-block',
  width: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflowWrap: 'normal',

  color: 'inherit',
  fontFamily: '$body',

  variants: {
    size: {
      default: {
        fontSize: '$p2m',
        fontWeight: '$p2m',
        lineHeight: '$p2m',
        letterSpacing: '$p2m',
      },
      small: {
        fontSize: '$c2',
        fontWeight: '$c2',
        lineHeight: '$c2',
        letterSpacing: '$c2',
      },
      medium: {
        fontSize: '$c2',
        fontWeight: '$c2',
        lineHeight: '$c2',
        letterSpacing: '$c2',
      },
      large: {
        fontSize: '$p2',
        fontWeight: '$p2',
        lineHeight: '$p2',
        letterSpacing: '$p2',
      },
    },
  } as const,

  defaultVariants: {
    size: 'default',
  },
});

// --- Public props ---

export type ButtonProps = BoxProps & {
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  warning?: boolean;
  success?: boolean;
  disabled?: boolean;
  loading?: boolean;
  mini?: boolean;
  tiny?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  square?: boolean;
  external?: boolean;
  icon?: IconProps['name'];
} & Omit<
    AllHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>,
    'is' | 'className' | 'size'
  >;

// --- Spin animation keyframes (injected via CSS) ---
const spinKeyframes = `
@keyframes rcx-spin-animation {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
`;

// Inject keyframes once
let keyframesInjected = false;
const injectKeyframes = () => {
  if (keyframesInjected || typeof document === 'undefined') return;
  const style = document.createElement('style');
  style.textContent = spinKeyframes;
  document.head.appendChild(style);
  keyframesInjected = true;
};

/**
 * Indicates an actionable user action.
 */
const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    {
      primary,
      secondary,
      danger,
      warning,
      success,
      external,
      icon,
      is = 'button',
      rel: _rel,
      tiny,
      mini,
      small,
      medium,
      large,
      square,
      loading,
      disabled,
      children,
      ...props
    },
    ref,
  ) {
    if (loading) {
      injectKeyframes();
    }

    const extraProps =
      (is === 'a' && {
        rel: external ? 'noopener noreferrer' : undefined,
        target: external ? '_blank' : undefined,
      }) ||
      (is === 'button' && {
        type: 'button',
      }) ||
      {};

    // Determine color variant frame
    const Frame = useMemo(() => {
      if (primary) return PrimaryButton;
      if (secondary && success) return SecondarySuccessButton;
      if (secondary && warning) return SecondaryWarningButton;
      if (secondary && danger) return SecondaryDangerButton;
      if (success) return SuccessButton;
      if (warning) return WarningButton;
      if (danger) return DangerButton;
      // secondary or default
      return ButtonFrame;
    }, [primary, secondary, danger, warning, success]);

    // Determine size
    const size = small
      ? 'small'
      : medium
        ? 'medium'
        : large
          ? 'large'
          : 'default';

    // Square sizes (for icon-only buttons used via Button square)
    const squareStyles = square
      ? {
          width:
            mini
              ? 20
              : tiny
                ? 24
                : small
                  ? 28
                  : medium
                    ? 32
                    : 40,
          minWidth:
            mini
              ? 20
              : tiny
                ? 24
                : small
                  ? 28
                  : medium
                    ? 32
                    : 40,
          height:
            mini
              ? 20
              : tiny
                ? 24
                : small
                  ? 28
                  : medium
                    ? 32
                    : 40,
          paddingInline: 0,
          paddingBlock: 0,
          flexShrink: 0 as const,
        }
      : {};

    return (
      <Frame
        size={size}
        disabled={disabled || loading || undefined}
        tabIndex={disabled || loading ? -1 : 0}
        ref={ref}
        {...extraProps}
        {...squareStyles}
        {...(props as any)}
      >
        <ButtonText>
          {icon && !loading && (
            <Icon size='x16' name={icon} style={{ marginInlineEnd: 4 }} />
          )}
          {loading && (
            <Icon
              size='x16'
              name='loading'
              style={{
                marginInlineEnd: children ? 4 : undefined,
                animation: 'rcx-spin-animation 0.8s linear infinite',
              }}
            />
          )}
          {children}
        </ButtonText>
      </Frame>
    );
  },
);

export default Button;
