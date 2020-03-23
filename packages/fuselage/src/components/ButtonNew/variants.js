import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { ButtonBase } from '.';

export const ButtonVariant = forwardRef(function ButtonPrimary({
  small,
  medium,
  large,
  square,
  variant = 'secondary',
  ...props
}, ref) {
  return <ButtonBase
    mod-large={large || (!small && !medium)}
    mod-small={small}
    mod-medium={medium}
    mod-square={square}
    mod-small-square={small && square}
    mod-medium-square={medium && square}
    mod-variant={variant}
    ref={ref}
    {...props}
  />;
});

ButtonVariant.propTypes = {
  variant: PropTypes.oneOf([
    'primary', 'secondary', 'danger', 'primary-danger',
    'ghost', 'ghost-danger', 'ghost-primary',
    'nude-danger', 'nude-primary',
  ]),
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  square: PropTypes.bool,
};
