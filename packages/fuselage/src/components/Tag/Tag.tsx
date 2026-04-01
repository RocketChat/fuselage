import type { ReactNode } from 'react';
import { createStyledContext, styled } from '@tamagui/core';

import { RcxText, RcxView } from '../../primitives';

const TagContext = createStyledContext({
  size: 'default' as string,
});

// Outer container — View for layout.
// Known issue: ~2px text width difference vs original (parent font-size 16px vs 10px).
const TagBase = styled(RcxView, {
  name: 'TagBase',
  context: TagContext,

  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',

  paddingBlock: '$x2',
  paddingInline: '$x4',

  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderRadius: '$x2',

  // default = button secondary colors
  backgroundColor: '$buttonSecondaryBg',

  variants: {
    variant: {
      'primary': {
        backgroundColor: '$buttonPrimaryBg',
        hoverStyle: { backgroundColor: '$buttonPrimaryHoverBg' },
      },
      'secondary': {
        backgroundColor: '$buttonSecondaryBg',
        hoverStyle: { backgroundColor: '$buttonSecondaryHoverBg' },
      },
      'danger': {
        backgroundColor: '$buttonDangerBg',
        hoverStyle: { backgroundColor: '$buttonDangerHoverBg' },
      },
      'warning': {
        backgroundColor: '$buttonWarningBg',
        hoverStyle: { backgroundColor: '$buttonWarningHoverBg' },
      },
      'featured': {
        backgroundColor: '$surfaceFeatured',
        hoverStyle: { backgroundColor: '$surfaceFeaturedHover' },
      },
      'secondary-danger': {
        backgroundColor: '$buttonSecondaryDangerBg',
        hoverStyle: { backgroundColor: '$buttonSecondaryDangerHoverBg' },
      },
      'secondary-warning': {
        backgroundColor: '$buttonSecondaryBg',
        hoverStyle: { backgroundColor: '$buttonSecondaryHoverBg' },
      },
      'secondary-info': {
        backgroundColor: '$buttonSecondaryBg',
        hoverStyle: { backgroundColor: '$buttonSecondaryHoverBg' },
      },
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
        backgroundColor: '$surfaceNeutral',
      },
    },
    clickable: {
      true: {
        cursor: 'pointer',
        hoverStyle: {
          backgroundColor: '$buttonSecondaryHoverBg',
        },
      },
    },
  } as const,
});

// Inner text — use raw Text (NOT RcxText) to avoid box-sizing: border-box
// which changes width calculation vs the original content-box span
const TagInner = styled(RcxText, {
  name: 'TagInner',
  context: TagContext,

  overflow: 'hidden',
  minWidth: 0,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  textDecoration: 'none',

  // Font scale: micro (default)
  fontFamily: '$body',
  fontSize: '$micro',
  fontWeight: '$micro',
  lineHeight: '$micro',
  letterSpacing: '$micro',

  // default text color
  color: '$buttonSecondaryColor',

  variants: {
    variant: {
      'primary': { color: '$buttonPrimaryColor' },
      'secondary': { color: '$buttonSecondaryColor' },
      'danger': { color: '$buttonDangerColor' },
      'warning': { color: '$buttonWarningColor' },
      'featured': { color: '$buttonPrimaryColor' },
      'secondary-danger': { color: '$buttonSecondaryDangerColor' },
      'secondary-warning': { color: '$statusFontOnWarning' },
      'secondary-info': { color: '$statusFontOnInfo' },
    },
    size: {
      default: {},
      medium: {
        fontSize: '$c2',
        fontWeight: '$c2',
        lineHeight: '$c2',
        letterSpacing: '$c2',
      },
      large: {
        fontSize: '$p2b',
        fontWeight: '$p2b',
        lineHeight: '$p2b',
        letterSpacing: '$p2b',
      },
    },
    disabled: {
      true: {
        color: '$fontSecondaryInfo',
      },
    },
  } as const,

  defaultVariants: {
    size: 'default',
  },
});

export type TagProps = {
  medium?: boolean;
  large?: boolean;
  variant?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'warning'
    | 'secondary-danger'
    | 'secondary-warning'
    | 'secondary-info'
    | 'featured';
  disabled?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
};

/**
 * Used for mentions
 */
const Tag = ({
  large,
  medium,
  disabled,
  onClick,
  variant,
  children,
  icon,
  href,
  ...props
}: TagProps) => {
  const clickable = !!(onClick || href);
  const size = large ? 'large' : medium ? 'medium' : undefined;

  return (
    <TagBase
      variant={variant}
      disabled={disabled || undefined}
      clickable={clickable || undefined}
      onClick={onClick}
      {...props}
    >
      {icon}
      <TagInner
        variant={variant}
        size={size}
        disabled={disabled || undefined}
      >
        {children}
      </TagInner>
    </TagBase>
  );
};

export default Tag;
