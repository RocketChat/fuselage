import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';

const Container = createStyledComponent('rcx-box', 'div');

export const Box = React.forwardRef(function Box({
  invisible,
  is,
  ...props
}, ref) {
  return <Container as={is} invisible={invisible} ref={ref} {...props} />;
});

Box.defaultProps = {
  is: 'div',
  invisible: false,
};

Box.displayName = 'Box';

Box.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
  is: PropTypes.elementType,
};
