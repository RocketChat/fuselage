import type { Keys as IconName } from '@rocket.chat/icons';
import nameToCharacterMapping from '@rocket.chat/icons';
import { forwardRef } from 'react';
import { styled } from 'tamagui';

import type { BoxProps } from '../Box';
import { RcxText } from '../../primitives';

const StyledIcon = styled(RcxText, {
  name: 'Icon',

  display: 'inline-block',
  userSelect: 'none',
  verticalAlign: 'text-bottom',
  color: 'inherit',

  letterSpacing: 0,
  fontFamily: 'RocketChat',
  fontWeight: '400',
  fontStyle: 'normal',
  // fontVariant: 'normal' — not supported as Tamagui prop, handled by rcx-box reset
  // lineHeight: 1 in CSS means 1×fontSize (unitless), but Tamagui treats 1 as 1px
  // Set dynamically via prop to match fontSize
  textRendering: 'auto',
});

export type IconProps = Omit<BoxProps, 'name' | 'size'> & {
  name: IconName;
  size?: BoxProps['width'];
};

// Convert 'x16' → 16, 'x20' → 20, or pass number directly
const resolveSize = (size: any): number | undefined => {
  if (typeof size === 'number') return size;
  if (typeof size === 'string') {
    const match = /^x(\d+)$/.exec(size);
    if (match) return parseInt(match[1], 10);
  }
  return size;
};

const Icon = forwardRef<HTMLElement, IconProps>(function Icon(
  { name, size, ...props },
  ref,
) {
  const resolvedSize = resolveSize(size);
  return (
    <StyledIcon
      aria-hidden='true'
      fontSize={resolvedSize}
      lineHeight={resolvedSize}
      ref={ref}
      {...(props as any)}
    >
      {nameToCharacterMapping[name]}
    </StyledIcon>
  );
});

export default Icon;
