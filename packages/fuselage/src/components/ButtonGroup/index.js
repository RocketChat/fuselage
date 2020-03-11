import PropTypes from 'prop-types';
import React from 'react';

import { Box, PropsProvider } from '../Box';

const Base = Box.extend('rcx-button-group');

export function ButtonGroup({
  align,
  children,
  stretch,
  vertical,
  wrap,
  ...props
}) {
  return <Base
    mod-align={align}
    mod-stretch={stretch}
    mod-vertical={vertical}
    mod-wrap={wrap}
    role='group'
    {...props}
  >
    <PropsProvider children={children} fn={({ className }) => ({
      className: [className, 'rcx-button-group__item'].filter(Boolean).join(' '),
    })} />
  </Base>;
}

ButtonGroup.defaultProps = {
  align: 'start',
};

ButtonGroup.displayName = 'ButtonGroup';

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
