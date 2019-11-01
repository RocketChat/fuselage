import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import styles from './styles';

const Container = createStyledComponent(styles, 'rcx-box', 'div');

export const Box = React.forwardRef(function Box({
  invisible,
  is,
  ...props
}, ref) {
  return <Container as={is} invisible={invisible} modifiers={{ invisible }} ref={ref} {...props} />;
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
