import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { Box } from '../Box';
import { Icon } from '../Icon';

export function Chevron({
  up,
  right,
  down,
  left,
  size,
  ...props
}) {
  const children = useMemo(() => <Icon name='arrow-down' size={size} />, [size]);

  return <Box
    componentClassName='rcx-chevron'
    is='span'
    children={children}
    mod-up={up}
    mod-right={right}
    mod-down={down}
    mod-left={left}
    {...props}
  />;
}

Chevron.displayName = 'Chevron';

Chevron.propTypes = {
  up: PropTypes.bool,
  right: PropTypes.bool,
  down: PropTypes.bool,
  left: PropTypes.bool,
  size: PropTypes.oneOf(['1', '2', '4', '8', '12', '16', '20', '24', '28', '32', '36', '40', '44']),
};
