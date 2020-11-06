
import PropTypes from 'prop-types';
import React from 'react';

import { prependClassName } from '../../helpers/prependClassName';

export function Tag({
  is: TagName = 'span',
  small,
  medium,
  className,
  disabled,
  onClick,
  variant = 'secondary',
  ...props
}) {
  const modifiers = [
    variant,
    small && 'small',
    medium && 'medium',
    disabled && 'disabled',
    onClick && 'clickable',
  ]
    .map((modifier) => `rcx-tag--${ modifier }`)
    .filter(Boolean)
    .join(' ');

  return <TagName className={prependClassName(className, `rcx-tag ${ modifiers }`)} {...props} />;
}

Tag.propTypes = {
  small: PropTypes.bool,
  medium: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['secondary', 'primary', 'danger', 'warning', 'ghost']),
};
