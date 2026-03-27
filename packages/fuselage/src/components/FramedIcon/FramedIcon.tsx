import type { Keys } from '@rocket.chat/icons';
import nameToCharacterMapping from '@rocket.chat/icons';
import type { AllHTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxText } from '../../primitives';

// Single element — original was a single <i> with both framed-icon + icon classes
// Renders the icon glyph directly (no nested Icon component)
const FramedIconBase = styled(RcxText, {
  name: 'FramedIcon',

  display: 'inline-block',

  padding: '$x4',
  borderRadius: '$x4',

  // Icon font (RocketChat glyph font)
  fontFamily: 'RocketChat',
  fontWeight: '400',
  fontStyle: 'normal',
  fontSize: 20,
  lineHeight: 20,
  letterSpacing: 0,
  userSelect: 'none',

  // default: colors.font(secondary-info), bg: colors.surface(tint)
  color: '$fontSecondaryInfo',
  backgroundColor: '$surfaceTint',

  variants: {
    variant: {
      neutral: {},
      info: { color: '$statusFontOnInfo' },
      success: { color: '$statusFontOnSuccess' },
      warning: { color: '$statusFontOnWarning' },
      danger: { color: '$statusFontOnDanger' },
    },
  } as const,
});

export type FramedIconProps = {
  info?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  neutral?: boolean;
  icon: Keys;
} & Omit<AllHTMLAttributes<HTMLElement>, 'is'>;

const FramedIcon = ({
  info,
  success,
  warning,
  danger,
  neutral,
  icon,
  ...props
}: FramedIconProps) => {
  const variant =
    (info && 'info') ||
    (success && 'success') ||
    (warning && 'warning') ||
    (danger && 'danger') ||
    'neutral';

  return (
    <FramedIconBase variant={variant} aria-hidden='true' {...(props as any)}>
      {nameToCharacterMapping[icon]}
    </FramedIconBase>
  );
};

export default FramedIcon;
