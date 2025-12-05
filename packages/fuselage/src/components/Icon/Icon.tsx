import type { Keys as IconName } from '@rocket.chat/icons';
import nameToCharacterMapping from '@rocket.chat/icons';
import { forwardRef } from 'react';

import { Box, type BoxProps } from '../Box';

export type IconProps = Omit<BoxProps, 'name' | 'size'> & {
  name: IconName;
  size?: BoxProps['width'];
};

const Icon = forwardRef<HTMLElement, IconProps>(function Icon(
  { name, size, ...props },
  ref,
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
