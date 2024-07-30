import type { IconName } from '@rocket.chat/icons';
import nameToCharacterMapping from '@rocket.chat/icons';
import type { ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

/** @public */
export interface IconProps extends Omit<BoxProps, 'name' | 'size'> {
  name: IconName;
  size?: BoxProps['width'];
}

/** @public */
const Icon = forwardRef(function Icon(
  { name, size, ...props }: IconProps,
  ref: ForwardedRef<HTMLElement>
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

export default Icon;
