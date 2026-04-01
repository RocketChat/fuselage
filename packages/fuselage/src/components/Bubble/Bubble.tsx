import type { Keys as IconName } from '@rocket.chat/icons';
import type { AllHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { createStyledContext, styled } from '@tamagui/core';

import { RcxInteractive, RcxText, RcxView } from '../../primitives';
import { Icon } from '../Icon';

// --- Styled Context ---

const BubbleContext = createStyledContext({
  small: false as boolean,
  variant: 'primary' as string,
});

// --- Styled Components ---

const BubbleFrame = styled(RcxView, {
  name: 'Bubble',
  context: BubbleContext,

  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
  alignItems: 'center',
});

const BubbleButtonFrame = styled(RcxInteractive, {
  name: 'BubbleButton',
  context: BubbleContext,

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  height: '$x28',

  paddingInline: 12,
  paddingInlineEnd: 16,

  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 20,

  columnGap: 8,

  variants: {
    variant: {
      primary: {
        color: '$buttonPrimaryColor',
        backgroundColor: '$buttonPrimaryBg',
        borderColor: '$buttonPrimaryBorderColor',

        hoverStyle: {
          backgroundColor: '$buttonPrimaryHoverBg',
          borderColor: '$buttonPrimaryHoverBorderColor',
          boxShadow: 'none',
        },

        pressStyle: {
          backgroundColor: '$buttonPrimaryPressBg',
          borderColor: '$buttonPrimaryPressBorderColor',
          boxShadow: 'none',
        },

        focusVisibleStyle: {
          backgroundColor: '$buttonPrimaryFocusBg',
          borderColor: '$buttonPrimaryFocusBorderColor',
          boxShadow: '0 0 0 2px var(--shadowHighlight)',
        },

        disabledStyle: {
          backgroundColor: '$buttonPrimaryDisabledBg',
          borderColor: '$buttonPrimaryDisabledBorderColor',
          color: '$buttonPrimaryDisabledColor',
          cursor: 'not-allowed',
        },
      },
      secondary: {
        color: '$buttonSecondaryColor',
        backgroundColor: '$buttonSecondaryBg',
        borderColor: '$buttonSecondaryBorderColor',

        hoverStyle: {
          backgroundColor: '$buttonSecondaryHoverBg',
          borderColor: '$buttonSecondaryHoverBorderColor',
          boxShadow: 'none',
        },

        pressStyle: {
          backgroundColor: '$buttonSecondaryPressBg',
          borderColor: '$buttonSecondaryPressBorderColor',
          boxShadow: 'none',
        },

        focusVisibleStyle: {
          backgroundColor: '$buttonSecondaryFocusBg',
          borderColor: '$buttonSecondaryFocusBorderColor',
          boxShadow: '0 0 0 2px var(--shadowHighlight)',
        },

        disabledStyle: {
          backgroundColor: '$buttonSecondaryDisabledBg',
          borderColor: '$buttonSecondaryDisabledBorderColor',
          color: '$buttonSecondaryDisabledColor',
          cursor: 'not-allowed',
        },
      },
    },
    small: {
      true: {
        height: '$x20',
      },
    },
  } as const,

  defaultVariants: {
    variant: 'primary',
  },
});

const BubbleButtonText = styled(RcxText, {
  name: 'BubbleButtonText',
  context: BubbleContext,

  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflowWrap: 'normal',

  color: 'inherit',

  fontFamily: '$body',
  fontSize: '$c2',
  fontWeight: '$c2',
  lineHeight: '$c2',
  letterSpacing: '$c2',

  variants: {
    small: {
      true: {
        fontSize: '$micro',
        fontWeight: '$micro',
        lineHeight: '$micro',
        letterSpacing: '$micro',
      },
    },
  } as const,
});

const BubbleItemFrame = styled(RcxText, {
  name: 'BubbleItem',
  context: BubbleContext,

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',

  height: '$x28',

  paddingInline: 12,
  paddingInlineEnd: 16,

  borderRadius: 20,

  columnGap: 8,

  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflowWrap: 'normal',

  fontFamily: '$body',
  fontSize: '$c2',
  fontWeight: '$c2',
  lineHeight: '$c2',
  letterSpacing: '$c2',

  variants: {
    variant: {
      primary: {
        color: '$buttonPrimaryColor',
        backgroundColor: '$buttonPrimaryBg',
      },
      secondary: {
        color: '$buttonSecondaryColor',
        backgroundColor: '$buttonSecondaryBg',
      },
    },
    small: {
      true: {
        height: '$x20',
        fontSize: '$micro',
        fontWeight: '$micro',
        lineHeight: '$micro',
        letterSpacing: '$micro',
      },
    },
    inGroup: {
      true: {},
      false: {
        paddingInline: 8,
        paddingInlineEnd: 8,
      },
    },
  } as const,

  defaultVariants: {
    variant: 'primary',
    inGroup: false,
  },
});

const BubbleItemInnerText = styled(RcxText, {
  name: 'BubbleItemInnerText',
  context: BubbleContext,

  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflowWrap: 'normal',

  color: 'inherit',

  fontFamily: '$body',
  fontSize: '$c2',
  fontWeight: '$c2',
  lineHeight: '$c2',
  letterSpacing: '$c2',

  variants: {
    small: {
      true: {
        fontSize: '$micro',
        fontWeight: '$micro',
        lineHeight: '$micro',
        letterSpacing: '$micro',
      },
    },
  } as const,
});

// --- Sub-components ---

type BubbleButtonProps = {
  onClick: () => void;
  label?: ReactNode;
  secondary?: boolean;
  icon?: IconName;
  isGroupFirst?: boolean;
  isGroupLast?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;

const BubbleButton = ({
  secondary,
  label,
  onClick,
  icon,
  isGroupFirst,
  isGroupLast,
  ...props
}: BubbleButtonProps) => (
  <BubbleButtonFrame
    role='button'
    variant={secondary ? 'secondary' : 'primary'}
    onPress={onClick}
    {...(isGroupFirst && {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    })}
    {...(isGroupLast && {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    })}
    {...(props as any)}
  >
    {icon && <Icon name={icon} size='x16' />}
    {label && <BubbleButtonText>{label}</BubbleButtonText>}
  </BubbleButtonFrame>
);

type BubbleItemProps = {
  label?: ReactNode;
  secondary?: boolean;
  icon?: IconName;
  inGroup?: boolean;
};

const BubbleItem = ({
  secondary,
  label,
  icon,
  inGroup,
  ...props
}: BubbleItemProps) => (
  <BubbleItemFrame
    variant={secondary ? 'secondary' : 'primary'}
    inGroup={inGroup || undefined}
    {...(props as any)}
  >
    {icon && <Icon name={icon} size='x16' />}
    {label && <BubbleItemInnerText>{label}</BubbleItemInnerText>}
  </BubbleItemFrame>
);

// --- Main component ---

export type BubbleProps = {
  secondary?: boolean;
  children: ReactNode;
  small?: boolean;
  onClick?: () => void;
  icon?: IconName;
  onDismiss?: () => void;
  contentProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;
  dismissProps?: Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>;
} & Omit<AllHTMLAttributes<HTMLDivElement>, 'onClick'>;

const Bubble = ({
  secondary,
  children,
  onClick,
  icon,
  onDismiss,
  small,
  contentProps,
  dismissProps,
  ...props
}: BubbleProps) => {
  const hasGroup = !!onDismiss;

  return (
    <BubbleFrame small={small || false} variant={secondary ? 'secondary' : 'primary'} {...(props as any)}>
      {onClick ? (
        <BubbleButton
          onClick={onClick}
          secondary={secondary}
          icon={icon}
          label={children}
          isGroupFirst={hasGroup}
          {...contentProps}
        />
      ) : (
        <BubbleItem
          secondary={secondary}
          icon={icon}
          label={children}
          inGroup={hasGroup}
          {...contentProps}
        />
      )}
      {onDismiss && (
        <BubbleButton
          onClick={onDismiss}
          secondary={secondary}
          icon='cross-small'
          isGroupLast
          {...{ 'aria-label': `Dismiss ${children}`, ...dismissProps }}
        />
      )}
    </BubbleFrame>
  );
};

export default Bubble;
