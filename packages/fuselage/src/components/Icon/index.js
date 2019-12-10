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
    componentClassName='rcx-icon'
    is='i'
    aria-hidden='true'
    children={nameToCharacterMapping[name]}
    mod-name={name}
    mod-size={size}
    {...props}
  />;
}

Icon.displayName = 'Icon';

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(nameToCharacterMapping)).isRequired,
  size: PropTypes.oneOf(['1', '2', '4', '8', '12', '16', '20', '24', '28', '32', '36', '40', '44']),
};
