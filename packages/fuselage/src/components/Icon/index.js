import * as characters from '@rocket.chat/icons/dist/font/characters';
import * as names from '@rocket.chat/icons/dist/font/index';
import React from 'react';

import { useClassName } from '../../hooks';

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
  const classNames = {
    element: useClassName('rcx-icon', {}, className),
  };

  const children = nameToCharacterMapping[iconName || name];

  return <i aria-hidden='true' children={children} className={classNames.element} ref={ref} {...props} />;
});

Icon.displayName = 'Icon';
