import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { useMemo } from 'react';
import { styled, Text } from '@tamagui/core';

import { RcxText } from '../../primitives';
import type { BoxCompatProps } from '../../utilities/boxCompat';
import { extractBoxProps } from '../../utilities/boxCompat';
import { Avatar } from '../Avatar';
import { Icon } from '../Icon';

// Outer container — RcxText because:
// 1. Original was <button> which accepts font props
// 2. Needs inline-flex to not stretch to 100%
// 3. Font props affect layout (same issue as Tag)
const ChipBase = styled(RcxText, {
  name: 'ChipBase',

  display: 'inline-flex',
  flexDirection: 'row',
  overflow: 'hidden',
  alignItems: 'center',

  minHeight: '$x28',
  paddingInline: '$x4',

  // border-width: 0 in original (overrides kind-variant's 1px)
  borderWidth: 0,
  // border-radius: medium (4px) from kind-variant
  borderRadius: '$x4',

  cursor: 'pointer',
  focusable: true,
  role: 'button',

  // p2 font scale on outer (from original: @include typography.use-font-scale('p2'))
  fontFamily: '$body',
  fontSize: '$p2',
  fontWeight: '$p2',
  lineHeight: '$p2',
  letterSpacing: '$p2',

  // chip color: colors.font(secondary-info) = n700
  color: '$fontSecondaryInfo',
  // button secondary bg
  backgroundColor: '$buttonSecondaryBg',

  hoverStyle: {
    backgroundColor: '$buttonSecondaryHoverBg',
  },
  pressStyle: {
    backgroundColor: '$buttonSecondaryPressBg',
  },
  focusVisibleStyle: {
    borderColor: '$strokeExtraDark',
    borderWidth: 1,
    boxShadow: '0 0 0 2px var(--strokeExtraLightHighlight)',
  },
  // Original SCSS disabled: color=$button-secondary-color(n900), bg=$button-secondary-bg(n400)
  disabledStyle: {
    color: '$buttonSecondaryColor',
    backgroundColor: '$buttonSecondaryBg',
    cursor: 'not-allowed',
  },
});

// Inner text — inherits font from ChipBase (both are Text-based)
const ChipText = styled(Text, {
  name: 'ChipText',

  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',

  marginInline: '$x4',

  // Inherit font and color from parent ChipBase
  color: 'inherit',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  lineHeight: 'inherit',
  letterSpacing: 'inherit',
});

export type ChipProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type'
> & {
  thumbUrl?: string;
  renderThumb?: (props: { url: string }) => ReactNode;
  renderDismissSymbol?: () => ReactNode;
} & Partial<BoxCompatProps>;

const defaultRenderThumb = ({ url }: { url: string }) => (
  <Avatar size='x20' url={url} />
);

const defaultRenderDismissSymbol = () => <Icon name='cross' size='x16' />;

const Chip = ({
  children,
  thumbUrl,
  onClick,
  onMouseDown,
  renderThumb = defaultRenderThumb,
  renderDismissSymbol = defaultRenderDismissSymbol,
  disabled,
  style: styleProp,
  ...rest
}: ChipProps) => {
  const onDismiss = onClick || onMouseDown;
  const { style: boxStyle, rest: cleanProps } = extractBoxProps(rest as Record<string, unknown>);
  const mergedStyle = useMemo(() => {
    const hasBoxStyle = Object.keys(boxStyle).length > 0;
    if (!hasBoxStyle && !styleProp) return undefined;
    return { ...boxStyle, ...styleProp };
  }, [boxStyle, styleProp]);

  return (
    <ChipBase
      disabled={!onDismiss || disabled || undefined}
      onClick={onDismiss}
      style={mergedStyle}
      {...(cleanProps as any)}
    >
      {thumbUrl && renderThumb && renderThumb({ url: thumbUrl })}
      {children && <ChipText>{children}</ChipText>}
      {onDismiss && renderDismissSymbol && renderDismissSymbol()}
    </ChipBase>
  );
};

export default Chip;
