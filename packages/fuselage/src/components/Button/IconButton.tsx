import type { Keys as IconName } from '@rocket.chat/icons';
import type { ReactElement } from 'react';
import { isValidElement, useMemo, forwardRef } from 'react';

import { styled } from 'tamagui';

import { RcxInteractive } from '../../primitives';
import type { BoxProps } from '../Box';
import { Icon, type IconProps } from '../Icon';

// --- IconButton base frame ---
// icon variant: transparent bg, secondary color, secondary hover/active bg

const IconButtonFrame = styled(RcxInteractive, {
  name: 'IconButton',
  role: 'button',

  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,

  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderRadius: '$x4',

  backgroundColor: 'transparent',
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
    borderColor: '$strokeExtraDark',
    boxShadow: '0 0 0 2px var(--shadowHighlight)',
  },
  disabledStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: '$buttonSecondaryDisabledColor',
    cursor: 'not-allowed',
  },
});

// --- Icon variant: info ---
const IconInfoButton = styled(IconButtonFrame, {
  color: '$statusFontOnInfo',
  disabledStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: '$buttonPrimaryDisabledBg',
    cursor: 'not-allowed',
  },
});

// --- Icon variant: success ---
const IconSuccessButton = styled(IconButtonFrame, {
  color: '$statusFontOnSuccess',
  focusVisibleStyle: {
    borderColor: '$strokeExtraDark',
    boxShadow: '0 0 0 2px var(--strokeLight)',
  },
  disabledStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: '$buttonSuccessDisabledBg',
    cursor: 'not-allowed',
  },
});

// --- Icon variant: warning ---
const IconWarningButton = styled(IconButtonFrame, {
  color: '$statusFontOnWarning',
  focusVisibleStyle: {
    borderColor: '$strokeExtraDark',
    boxShadow: '0 0 0 2px var(--strokeLight)',
  },
  disabledStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: '$buttonWarningDisabledBg',
    cursor: 'not-allowed',
  },
});

// --- Icon variant: danger ---
const IconDangerButton = styled(IconButtonFrame, {
  color: '$statusFontOnDanger',
  focusVisibleStyle: {
    borderColor: '$strokeExtraDark',
    boxShadow: '0 0 0 2px var(--strokeExtraLightError)',
  },
  disabledStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: '$buttonDangerDisabledBg',
    cursor: 'not-allowed',
  },
});

// --- Icon variant: secondary (filled secondary bg) ---
const IconSecondaryButton = styled(IconButtonFrame, {
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
});

// --- Icon secondary-info = primary button colors ---
const IconSecondaryInfoButton = styled(IconButtonFrame, {
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

// --- Icon secondary-success = success button colors ---
const IconSecondarySuccessButton = styled(IconButtonFrame, {
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

// --- Icon secondary-warning = warning button colors ---
const IconSecondaryWarningButton = styled(IconButtonFrame, {
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

// --- Icon secondary-danger = danger button colors ---
const IconSecondaryDangerButton = styled(IconButtonFrame, {
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

// --- Size map ---

const SQUARE_SIZES = {
  mini: 20,
  tiny: 24,
  small: 28,
  medium: 32,
  large: 40,
} as const;

const ICON_SIZES = {
  mini: 'x12',
  tiny: 'x16',
  small: 'x20',
  medium: 'x24',
  large: 'x28',
} as const;

// --- Public types ---

type ButtonSize = {
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  tiny?: boolean;
  mini?: boolean;
};

export type IconButtonProps = {
  icon: IconName | ReactElement;
  primary?: boolean;
  secondary?: boolean;
  info?: boolean;
  danger?: boolean;
  warning?: boolean;
  success?: boolean;
  pressed?: boolean;
} & ButtonSize &
  BoxProps;

const IconButton = forwardRef<HTMLElement, IconButtonProps>(
  (
    {
      icon,
      primary,
      info,
      secondary,
      danger,
      warning,
      success,
      mini,
      large,
      tiny,
      small,
      medium,
      pressed,
      children,
      ...props
    },
    ref,
  ) => {
    const Frame = useMemo(() => {
      if (secondary && danger) return IconSecondaryDangerButton;
      if (secondary && warning) return IconSecondaryWarningButton;
      if (secondary && success) return IconSecondarySuccessButton;
      if (secondary && info) return IconSecondaryInfoButton;
      if (info) return IconInfoButton;
      if (success) return IconSuccessButton;
      if (warning) return IconWarningButton;
      if (danger) return IconDangerButton;
      if (primary) return IconSecondaryInfoButton;
      if (secondary) return IconSecondaryButton;
      return IconButtonFrame;
    }, [danger, info, primary, secondary, success, warning]);

    const sizeName = mini
      ? 'mini'
      : tiny
        ? 'tiny'
        : small
          ? 'small'
          : medium
            ? 'medium'
            : 'large';

    const squareSize = SQUARE_SIZES[sizeName];
    const iconSize = ICON_SIZES[sizeName];

    // Pressed state: apply active bg/border
    const pressedStyles = pressed
      ? {
          backgroundColor: '$buttonSecondaryPressBg',
          borderColor: '$buttonSecondaryPressBg',
        }
      : {};

    return (
      <Frame
        width={squareSize}
        minWidth={squareSize}
        height={squareSize}
        padding={0}
        ref={ref}
        {...pressedStyles}
        {...(props as any)}
      >
        {isValidElement(icon) ? (
          icon
        ) : (
          <Icon name={icon as IconProps['name']} size={iconSize} />
        )}
        {children}
      </Frame>
    );
  },
);

export default IconButton;
