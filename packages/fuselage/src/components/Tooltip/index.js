import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { Box } from '../Box';

export function Tooltip({
  arrowPosition,
  ...props
}) {
  const [direction, position] = useMemo(() => {
    const [dir, pos] = arrowPosition ? arrowPosition.split('-') : [false, false];

    if (!dir || dir === 'left' || dir === 'right') {
      return [String(dir), false];
    }

    return [String(dir), pos ? String(pos) : 'center'];
  }, [arrowPosition]);

  return <Box
    is='div'
    rcx-tooltip
    rcx-tooltip--dir={direction}
    rcx-tooltip--pos={position}
    {...props}
  />;
}

Tooltip.propTypes = {
  position: PropTypes.oneOf(['up', 'up-left', 'up-right', 'down', 'down-left', 'down-right', 'left', 'right']),
};
