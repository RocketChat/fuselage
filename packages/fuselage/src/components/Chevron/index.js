import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { createPropType } from '../../helpers/createPropType';
import { size } from '../../styleTokens';
import { Box } from '../Box';
import { Icon } from '../Icon';

export function Chevron({ up, right, down, left, size, ...props }) {
  const children = useMemo(() => <Icon name='chevron-down' size={size} />, [
    size,
  ]);

  return (
    <Box
      is='span'
      children={children}
      rcx-chevron
      rcx-chevron--up={up}
      rcx-chevron--right={right}
      rcx-chevron--down={down}
      rcx-chevron--left={left}
      {...props}
    />
  );
}

Chevron.propTypes = {
  up: PropTypes.bool,
  right: PropTypes.bool,
  down: PropTypes.bool,
  left: PropTypes.bool,
  size: createPropType(size),
};
