import nameToCharacterMapping from '@rocket.chat/icons';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';
import { sizePropType } from '../../styles/props/layout';

export const Icon = forwardRef(function Icon({
  name,
  size,
  ...props
}, ref) {
  return <Box
    is='i'
    rcx-icon
    rcx-icon--name={name}
    children={nameToCharacterMapping[name]}
    aria-hidden='true'
    fontSize={size}
    ref={ref}
    {...props}
  />;
});

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(nameToCharacterMapping)).isRequired,
  size: sizePropType,
};
