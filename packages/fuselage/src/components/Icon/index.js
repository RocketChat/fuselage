import { useClassName } from '@rocket.chat/fuselage-hooks';
import * as characters from '@rocket.chat/icons/dist/font/characters';
import * as names from '@rocket.chat/icons/dist/font/index';
import React from 'react';

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
  const compoundClassName = useClassName('rcx-icon', { [iconName || name]: true }, className);

  const children = nameToCharacterMapping[iconName || name];

  return <StyledIcon
    aria-hidden='true'
    children={children}
    className={compoundClassName}
    ref={ref}
    {...props}
  />;
});

Icon.displayName = 'Icon';
