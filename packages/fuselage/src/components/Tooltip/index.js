import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';

export function Tooltip({
  position,
  ...props
}) {
  return <Box
    is='div'
    componentClassName='rcx-tooltip'
    mod-arrowless={ !position }
    mod-dir-right={ position === 'right' }
    mod-dir-left={ position === 'left' }
    mod-dir-up={ ['up', 'up-left', 'up-right'].includes(position) }
    mod-dir-down={ ['down', 'down-left', 'down-right'].includes(position) }
    mod-pos-left={ ['up-left', 'down-left'].includes(position) }
    mod-pos-right={ ['up-right', 'down-right'].includes(position) }
    mod-pos-center={ !['up-right', 'up-left', 'down-right', 'down-left', 'right', 'left'].includes(position) }
    {...props} />;
}

Tooltip.propTypes = {
  position: PropTypes.oneOf(['up', 'up-left', 'up-right', 'down', 'down-left', 'down-right', 'left', 'right']),
};
