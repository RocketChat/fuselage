import * as characters from '@rocket.chat/icons/dist/font/characters';
import * as names from '@rocket.chat/icons/dist/font/index';
import React from 'react';
import { useClassName } from '@rocket.chat/fuselage-hooks';

import { Box } from '../Box';

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
  const compoundClassName = useClassName('rcx-icon', {}, className);

  const children = nameToCharacterMapping[iconName || name];

  return <Box aria-hidden='true' children={children} className={compoundClassName} is='i' ref={ref} {...props} />;
});

Icon.displayName = 'Icon';
