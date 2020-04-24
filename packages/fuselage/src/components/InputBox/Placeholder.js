import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

export const Placeholder = forwardRef(function Placeholder(props, ref) {
  return <Box is='option' rcx-input-box__placeholder ref={ref} {...props} />;
});

Placeholder.propTypes = {
  children: PropTypes.node,
};
