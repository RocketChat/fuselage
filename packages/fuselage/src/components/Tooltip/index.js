import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';

const Container = Box.extend('rcx-tooltip', 'div');

export function Tooltip({
  left,
  right,
  center,
  pointUp,
  pointDown,
  pointLeft,
  pointRight,
  ...props
}) {
  return <Container
    mod-dir-right={ !!pointRight }
    mod-dir-left={ !!pointLeft }
    mod-dir-up={ !!pointUp }
    mod-dir-down={ !!pointDown }
    mod-pos-left={ !!left }
    mod-pos-right={ !!right }
    mod-pos-center={ !left && !right && !pointLeft && !pointRight }
    {...props} />;
}

Tooltip.propTypes = {
  left: PropTypes.bool,
  right: PropTypes.bool,
};
