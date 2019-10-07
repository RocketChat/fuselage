import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';

/**
 * A container for grouping buttons that semantically share a common action context.
 */
export const ButtonGroup = React.forwardRef(function ButtonGroup({
  align,
  stretch,
  vertical,
  wrap,
  ...props
}, ref) {
  return <Box
    is='div'
    ref={ref}
    role='group'
    styles={['rcx-button-group', {
      align,
      stretch,
      vertical,
      stretchVertical: !!stretch && !!vertical,
      wrap,
    }]}
    {...props}
  />;
});

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.propTypes = {
  /**
   * The alignment that should be applied to the items
   */
  align: PropTypes.oneOf(['start', 'end']),
  /**
   * Will be the items stretched to fill space?
   */
  stretch: PropTypes.bool,
  /**
   * Is the items vertically placed?
   */
  vertical: PropTypes.bool,
  /**
   * Will wrap the items when they exceed the container space?
   */
  wrap: PropTypes.bool,
};
