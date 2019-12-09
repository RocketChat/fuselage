import PropTypes from 'prop-types';
import React, { forwardRef, useMemo } from 'react';

import { Box } from '../Box';
import { Icon } from '../Icon';

const Container = Box.extend('rcx-chevron', 'span');

export const Chevron = forwardRef(function Chevron({
  up,
  right,
  down,
  left,
  size,
  ...props
}, ref) {
  const children = useMemo(() => <Icon name='arrow-down' size={size} />, [size]);

  return <Container
    children={children}
    ref={ref}
    mod-up={up}
    mod-right={right}
    mod-down={down}
    mod-left={left}
    {...props}
  />;
});

Chevron.displayName = 'Chevron';

Chevron.propTypes = {
  up: PropTypes.bool,
  right: PropTypes.bool,
  down: PropTypes.bool,
  left: PropTypes.bool,
  size: PropTypes.number,
};
