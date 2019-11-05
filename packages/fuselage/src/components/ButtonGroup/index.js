import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import { createStyledComponent } from '../../styles';

const Container = createStyledComponent('rcx-button-group');
const ItemContainer = createStyledComponent('rcx-button-group__item');

export const ButtonGroup = React.forwardRef(function ButtonGroup({
  align,
  children,
  stretch,
  vertical,
  wrap,
  ...props
}, ref) {
  const wrappedChildren = useMemo(() =>
    React.Children.map(children, (child, index) => <ItemContainer
      key={index}
      children={child}
      mod-stretch={stretch}
      mod-vertical={vertical}
    />), [children]);

  return <Container
    children={wrappedChildren}
    mod-align={align}
    mod-stretch={stretch}
    mod-vertical={vertical}
    mod-wrap={wrap}
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
