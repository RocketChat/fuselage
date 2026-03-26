import type { Keys } from '@rocket.chat/icons';
import type { AllHTMLAttributes } from 'react';
import { styled } from 'tamagui';

import { RcxText } from '../../primitives';
import { Icon } from '../Icon';

// RcxText because it needs font props (p2m scale affects icon sizing)
const FramedIconBase = styled(RcxText, {
  name: 'FramedIcon',

  display: 'inline-flex',

  padding: '$x4',
  borderRadius: '$x4',

  // p2m font scale (from original: @include typography.use-font-scale(p2m))
  fontFamily: '$body',
  fontSize: '$p2m',
  fontWeight: '$p2m',
  lineHeight: '$p2m',
  letterSpacing: '$p2m',

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
    <FramedIconBase variant={variant} {...(props as any)}>
      <Icon name={icon} size={20} />
    </FramedIconBase>
  );
};

export default FramedIcon;
