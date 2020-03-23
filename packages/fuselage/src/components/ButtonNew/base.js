import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

export const ButtonBase = forwardRef(function ButtonBase({
  external,
  is = 'button',
  rel,
  ...props
}, ref) {
  const extraProps = (is === 'a' && {
    rel: external && 'noopener noreferrer',
    target: external && '_blank',
  })
  || (is === 'button' && {
    type: 'button',
  })
  || {};

  return <Box
    componentClassName='rcx-button'
    is={is}
    ref={ref}
    {...extraProps}
    {...props}
  />;
});

ButtonBase.displayName = 'ButtonBase';

ButtonBase.propTypes = {
  external: PropTypes.bool,
};
