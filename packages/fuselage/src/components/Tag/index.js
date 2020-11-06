
import PropTypes from 'prop-types';
import React from 'react';

import { prependClassName } from '../../helpers/prependClassName';

export function Tag({
  small,
  medium,
  className,
  variant = 'secondary',
  disabled,
  ...props
}) {
  const modifiers = [variant, small && 'small', medium && 'medium', disabled && 'disabled'].map((modifier) => `rcx-tag--${ modifier }`).join(' ');

  return <span className={prependClassName(className, `rcx-tag ${ modifiers }`)} {...props} />;
}

Tag.propTypes = {
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['secondary', 'primary', 'danger', 'warning', 'ghost']),
};
