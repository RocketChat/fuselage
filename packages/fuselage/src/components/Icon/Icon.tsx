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
  lineHeight: 1,
  textRendering: 'auto',
  overflowWrap: 'normal',
});

export type IconProps = Omit<BoxProps, 'name' | 'size'> & {
  name: IconName;
  size?: BoxProps['width'];
};

const Icon = forwardRef<HTMLElement, IconProps>(function Icon(
  { name, size, ...props },
  ref,
) {
  return (
    <StyledIcon
      aria-hidden='true'
      fontSize={size as any}
      ref={ref}
      {...(props as any)}
    >
      {nameToCharacterMapping[name]}
    </StyledIcon>
  );
});

export default Icon;
