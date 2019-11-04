import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';

const PlaceholderContainer = createStyledComponent('rcx-input-box__placeholder', 'option');

export const Placeholder = React.forwardRef(function Placeholder(props, ref) {
  return <PlaceholderContainer ref={ref} {...props} />;
});

Placeholder.displayName = 'InputBox.Placeholder';

Placeholder.propTypes = {
  children: PropTypes.node,
  invisible: PropTypes.bool,
};
