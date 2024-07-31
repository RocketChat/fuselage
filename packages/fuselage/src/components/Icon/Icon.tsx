import type { Keys } from '@rocket.chat/icons';
import nameToCharacterMapping from '@rocket.chat/icons';
import type { Ref } from 'react';
import React, { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

export type IconProps = Omit<BoxProps, 'name' | 'size'> & {
  name: Keys;
  size?: BoxProps['width'];
};

export const Icon = forwardRef(function Icon(
  { name, size, ...props }: IconProps,
  ref: Ref<HTMLElement>
) {
  return (
    <Box
      is='i'
      rcx-icon
      rcx-icon--name={name}
      children={nameToCharacterMapping[name]}
      aria-hidden='true'
      fontSize={size}
      ref={ref}
      {...props}
    />
  );
});
