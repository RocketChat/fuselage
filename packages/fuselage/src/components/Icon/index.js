import { css } from '@rocket.chat/css-in-js';
import nameToCharacterMapping from '@rocket.chat/icons';
import PropTypes from 'prop-types';
import React from 'react';

import { sizePropType, getSizeValue } from '../../propTypes/sizes';
import { Box } from '../Box';
import { useCss } from '../Box/useCss';

export const Icon = React.forwardRef(function Icon({
  className,
  name,
  size,
  ...props
}, ref) {
  const iconSizeClassName = useCss(css`font-size: ${ getSizeValue(size) };`, [size]);

  return <Box ref={ref}
    is='i'
    componentClassName='rcx-icon'
    aria-hidden='true'
    children={nameToCharacterMapping[name]}
    className={[iconSizeClassName, className].filter(Boolean).join(' ')}
    mod-name={name}
    {...props}
  />;
});

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(nameToCharacterMapping)).isRequired,
  size: sizePropType,
};
