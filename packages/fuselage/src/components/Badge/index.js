import PropTypes from 'prop-types';
import React from 'react';

import { prependClassName } from '../../helpers/prependClassName';

export function Badge({
  is: Tag = 'span',
  variant = 'secondary',
  className,
  disabled,
  ...props
}) {
  return <Tag className={prependClassName(className, `rcx-box rcx-box--full rcx-badge rcx-badge--round ${ disabled ? 'rcx-badge--disabled' : '' } rcx-badge--${ variant }`)} {...props} />;
}

Badge.propTypes = {
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['secondary', 'primary', 'danger', 'warning', 'ghost']),
};
