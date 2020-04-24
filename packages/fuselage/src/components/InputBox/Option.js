import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

export const Option = forwardRef(function Option(props, ref) {
  return <Box is='option' rcx-input-box__option ref={ref} {...props} />;
});

Option.propTypes = {
  children: PropTypes.node,
};
