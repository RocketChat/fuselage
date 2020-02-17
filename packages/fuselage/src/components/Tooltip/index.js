import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';

export function Tooltip({
  arrowPosition,
  ...props
}) {
  const direction = arrowPosition ? arrowPosition.split('-') : false;
  const position = () => {
    if (!direction || direction[0] === 'left' || direction[0] === 'right') {
      return false;
    }
    return direction[1] ? direction[1] : 'center';
  };
  return <Box
    is='div'
    componentClassName='rcx-tooltip'
    mod-dir={ direction ? direction[0] : false }
    mod-pos={ position() }
    {...props} />;
}

Tooltip.propTypes = {
  position: PropTypes.oneOf(['up', 'up-left', 'up-right', 'down', 'down-left', 'down-right', 'left', 'right']),
};
