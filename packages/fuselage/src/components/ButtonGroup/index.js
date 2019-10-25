import PropTypes from 'prop-types';
import React from 'react';

import { createStyledComponent } from '../../styles';
import styles from './styles';

const Container = createStyledComponent(styles, 'rcx-button-group');

export const ButtonGroup = React.forwardRef(function ButtonGroup({
  align,
  stretch,
  vertical,
  wrap,
  ...props
}, ref) {
  return <Container
    modifiers={{
      align,
      stretch,
      vertical,
      wrap,
    }}
    ref={ref}
    role='group'
    {...props}
  />;
});

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.propTypes = {
  /** The alignment that should be applied to the items */
  align: PropTypes.oneOf(['start', 'end']),
  /** Is this component visible? */
  invisible: PropTypes.bool,
  /** Will be the items stretched to fill space? */
  stretch: PropTypes.bool,
  /** Is the items vertically placed? */
  vertical: PropTypes.bool,
  /** Will wrap the items when they exceed the container space? */
  wrap: PropTypes.bool,
};

ButtonGroup.styled = Container;
