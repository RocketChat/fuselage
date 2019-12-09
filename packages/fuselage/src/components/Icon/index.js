import nameToCharacterMapping from '@rocket.chat/icons';
import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';

const Container = Box.extend('rcx-icon', 'i');

export function Icon({
  name,
  size,
  x44,
  x40,
  x32,
  x24,
  x20,
  x16,
  x8,
  x4,
  x2,
  ...props
}) {
  return <Container
    aria-hidden='true'
    children={nameToCharacterMapping[name]}
    mod-name={name}
    mod-x44={x44 || size === 44}
    mod-x40={x40 || size === 40}
    mod-x32={x32 || size === 32}
    mod-x24={x24 || size === 24}
    mod-x20={x20 || size === 20}
    mod-x16={x16 || size === 16}
    mod-x8={x8 || size === 8}
    mod-x4={x4 || size === 4}
    mod-x2={x2 || size === 2}
    {...props}
  />;
}

Icon.displayName = 'Icon';

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(nameToCharacterMapping)).isRequired,
  size: PropTypes.number,
  x44: PropTypes.bool,
  x40: PropTypes.bool,
  x32: PropTypes.bool,
  x24: PropTypes.bool,
  x20: PropTypes.bool,
  x16: PropTypes.bool,
  x8: PropTypes.bool,
  x4: PropTypes.bool,
  x2: PropTypes.bool,
};
