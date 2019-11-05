import * as characters from '@rocket.chat/icons/dist/font/characters.js';
import * as names from '@rocket.chat/icons/dist/font/index.js';
import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';

const nameToCharacterMapping = Object.entries(names)
  .reduce((map, [symbol, name]) => ({
    ...map,
    [name]: characters[symbol],
  }), {});

const Container = createStyledComponent('rcx-icon', 'i');

export const Icon = React.forwardRef(function Icon({
  name,
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
}, ref) {
  return <Container
    aria-hidden='true'
    children={nameToCharacterMapping[name]}
    mod-name={name}
    mod-x44={x44}
    mod-x40={x40}
    mod-x32={x32}
    mod-x24={x24}
    mod-x20={x20}
    mod-x16={x16}
    mod-x8={x8}
    mod-x4={x4}
    mod-x2={x2}
    ref={ref}
    {...props}
  />;
});

Icon.displayName = 'Icon';

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(nameToCharacterMapping)).isRequired,
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
