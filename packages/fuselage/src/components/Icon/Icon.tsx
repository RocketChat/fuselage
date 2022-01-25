import nameToCharacterMapping, { Keys } from '@rocket.chat/icons';
import PropTypes from 'prop-types';
import React, { ComponentProps, forwardRef } from 'react';

import { createPropType } from '../../helpers/createPropType';
import { size } from '../../styleTokens';
import { Box } from '../Box';
import { iconsList } from './IconsList';

type IconProps = Omit<ComponentProps<typeof Box>, 'size'> & {
  name: Keys;
  size?: ComponentProps<typeof Box>['width'];
};

export const Icon = forwardRef<HTMLInputElement, IconProps>(function Icon(
  { name, size, ...props },
  ref
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

Icon.propTypes = {
  name: PropTypes.oneOf(iconsList).isRequired,
  size: createPropType(size),
};
