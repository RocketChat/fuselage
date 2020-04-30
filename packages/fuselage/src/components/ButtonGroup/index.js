import PropTypes from 'prop-types';
import React, { cloneElement, useMemo } from 'react';
import flattenChildren from 'react-keyed-flatten-children';

import { Box } from '../Box';
import { mergeProps } from '../../helpers/mergeProps';

export function ButtonGroup({
  align,
  children,
  stretch,
  vertical,
  wrap,
  ...props
}) {
  return <Box
    rcx-button-group
    rcx-button-group--align={align}
    rcx-button-group--stretch={stretch}
    rcx-button-group--vertical={vertical}
    rcx-button-group--wrap={wrap}
    role='group'
    {...props}
  >
    {useMemo(() => flattenChildren(children).map((child) => cloneElement(child, mergeProps(child.props, {
      className: 'rcx-button-group__item',
    }))), [children])}
  </Box>;
}

ButtonGroup.defaultProps = {
  align: 'start',
};

ButtonGroup.propTypes = {
  /** The alignment that should be applied to the items */
  align: PropTypes.oneOf(['start', 'center', 'end']),
  /** Will be the items stretched to fill space? */
  stretch: PropTypes.bool,
  /** Is the items vertically placed? */
  vertical: PropTypes.bool,
  /** Will wrap the items when they exceed the container space? */
  wrap: PropTypes.bool,
};
