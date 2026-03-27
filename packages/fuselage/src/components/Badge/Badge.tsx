import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import { styled } from 'tamagui';

import { RcxText } from '../../primitives';

export const BadgeFrame = styled(RcxText, {
  name: 'Badge',

  display: 'flex',
  overflow: 'hidden',
  justifyContent: 'center',

  width: 'fit-content',
  minWidth: '$x16',
  minHeight: '$x16',

  paddingBlock: '$x2',
  paddingInline: '$x4',

  textAlign: 'center',
  whiteSpace: 'nowrap',
  textDecorationLine: 'none',
  textOverflow: 'ellipsis',
  wordBreak: 'keep-all',

  borderRadius: '$full',

  fontFamily: '$body',
  fontSize: '$micro',
  lineHeight: '$micro',
  fontWeight: '$micro',
  letterSpacing: '$micro',

  variants: {
    variant: {
      primary: {
        color: '$fontPureWhite',
        backgroundColor: '$badgeLevel2',
      },
      secondary: {
        color: '$fontPureWhite',
        backgroundColor: '$badgeLevel1',
      },
      danger: {
        color: '$fontPureWhite',
        backgroundColor: '$badgeLevel4',
      },
      warning: {
        color: '$fontPureWhite',
        backgroundColor: '$badgeLevel3',
      },
      ghost: {
        color: '$fontPureWhite',
        backgroundColor: '$strokeDark',
      },
    },

    small: {
      true: {
        minWidth: '$x8',
        minHeight: '$x8',
      },
    },

    disabled: {
      true: {
        color: '$fontSecondaryInfo',
        backgroundColor: '$surfaceNeutral',
      },
    },
  } as const,

  defaultVariants: {
    variant: 'secondary',
  },
});

export type BadgeProps = {
  is?: ElementType<HTMLAttributes<HTMLSpanElement>>;
  variant?: 'secondary' | 'primary' | 'danger' | 'warning' | 'ghost';
  small?: boolean;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  title?: string;
} & HTMLAttributes<HTMLSpanElement>;

/**
 * Communicates notification's amount and types.
 * Uses .styleable() so Tamagui compiler can optimize it at build time.
 */
const Badge = BadgeFrame.styleable<BadgeProps>(
  forwardRef(({ is, variant = 'secondary', small, disabled, children, title, ...props }, ref) => (
    <BadgeFrame
      ref={ref}
      variant={variant}
      small={small || undefined}
      disabled={disabled || undefined}
      title={title}
      {...props}
    >
      {children}
    </BadgeFrame>
  )),
);

export default Badge;
