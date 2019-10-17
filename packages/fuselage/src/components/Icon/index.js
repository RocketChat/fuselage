import { useClassName } from '@rocket.chat/fuselage-hooks';
import * as characters from '@rocket.chat/icons/dist/font/characters.js';
import * as names from '@rocket.chat/icons/dist/font/index.js';
import PropTypes from 'prop-types';
import React from 'react';

import { useTheme } from '../../hooks/useTheme';
import { StyledIcon } from './styles';

const nameToCharacterMapping = Object.entries(names)
  .reduce((map, [symbol, name]) => ({
    ...map,
    [name]: characters[symbol],
  }), {});

export const Icon = React.forwardRef(function Icon({
  className,
  name,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-icon', { [name]: true }, className);
  const theme = useTheme();

  const children = nameToCharacterMapping[name];

  return <StyledIcon
    aria-hidden='true'
    children={children}
    className={compoundClassName}
    ref={ref}
    theme={theme}
    {...props}
  />;
});

Icon.displayName = 'Icon';

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(nameToCharacterMapping)).isRequired,
};
