import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

const OptionContainer = Box.extend('rcx-input-box__option', 'option');

export const Option = forwardRef(function Option(props, ref) {
  return <OptionContainer ref={ref} {...props} />;
});

Option.propTypes = {
  children: PropTypes.node,
};
