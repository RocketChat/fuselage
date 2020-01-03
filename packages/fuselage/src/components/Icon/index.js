import nameToCharacterMapping from '@rocket.chat/icons';
import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';

export function Icon({
  name,
  size,
  ...props
}) {
  return <Box
    is='i'
    componentClassName='rcx-icon'
    aria-hidden='true'
    children={nameToCharacterMapping[name]}
    mod-name={name}
    mod-size={size}
    {...props}
  />;
}

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(nameToCharacterMapping)).isRequired,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
