import { useClassName } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React from 'react';

import { StyledBox } from './styles';

/** A primitive component with normalized styles. */
export const Box = React.forwardRef(function Box({
  className,
  invisible = false,
  is = 'div',
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-box', { invisible }, className);

  return <StyledBox as={is} className={compoundClassName} invisible={invisible} ref={ref} {...props} />;
});

Box.defaultProps = {
  is: 'div',
  invisible: false,
};

Box.displayName = 'Box';

Box.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
  /** The component which will render as a `Box` */
  is: PropTypes.elementType,
};
