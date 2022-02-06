import nameToCharacterMapping, { Keys } from '@rocket.chat/icons';
import React, { ComponentProps, forwardRef, Ref } from 'react';

import { Box } from '../Box';

type IconProps = Omit<ComponentProps<typeof Box>, 'size'> & {
  name: Keys;
  size?: ComponentProps<typeof Box>['width'];
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
