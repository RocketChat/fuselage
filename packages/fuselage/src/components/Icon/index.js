import { useClassName } from '@rocket.chat/fuselage-hooks';
import * as characters from '@rocket.chat/icons/dist/font/characters';
import * as names from '@rocket.chat/icons/dist/font/index';
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
  iconName,
  name,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-icon', { [name || iconName]: true }, className);
  const theme = useTheme();

  const children = nameToCharacterMapping[name || iconName];

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
