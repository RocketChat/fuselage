import * as characters from '@rocket.chat/icons/dist/font/characters.js';
import * as names from '@rocket.chat/icons/dist/font/index.js';
import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import styles from './styles';

const nameToCharacterMapping = Object.entries(names)
  .reduce((map, [symbol, name]) => ({
    ...map,
    [name]: characters[symbol],
  }), {});

const Container = createStyledComponent(styles, 'rcx-icon', 'i');

export const Icon = React.forwardRef(function Icon({
  name,
  ...props
}, ref) {
  return <Container
    aria-hidden='true'
    children={nameToCharacterMapping[name]}
    modifiers={{ [name]: true }}
    ref={ref}
    {...props}
  />;
});

Icon.displayName = 'Icon';

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(nameToCharacterMapping)).isRequired,
};

Icon.styled = Container;
