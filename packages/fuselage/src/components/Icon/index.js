import { css } from '@rocket.chat/css-in-js';
import nameToCharacterMapping from '@rocket.chat/icons';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { sizePropType, getSizeValue } from '../../propTypes/sizes';
import { Box } from '../Box';

export const Icon = forwardRef(function Icon({
  className,
  name,
  size,
  ...props
}, ref) {
  return <Box ref={ref}
    is='i'
    aria-hidden='true'
    children={nameToCharacterMapping[name]}
    className={[
      className,
      size && css`font-size: ${ getSizeValue(size) };`,
    ]}
    rcx-icon
    rcx-icon--name={name}
    {...props}
  />;
});

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(nameToCharacterMapping)).isRequired,
  size: sizePropType,
};
