import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

const PlaceholderContainer = Box.extend('rcx-input-box__placeholder', 'option');

export const Placeholder = forwardRef(function Placeholder(props, ref) {
  return <PlaceholderContainer ref={ref} {...props} />;
});

Placeholder.displayName = 'InputBox.Placeholder';

Placeholder.propTypes = {
  children: PropTypes.node,
};
