import PropTypes from 'prop-types';
import React from 'react';

import { prependClassName } from '../../helpers/prependClassName';

const useTagPropsToClass = (props) => {
  props.className = prependClassName(props.className, 'rcx-box rcx-box--full rcx-badge rcx-badge--round');

  if (props.disabled) {
    props.className = prependClassName(props.className, 'rcx-badge--disabled');
  }

  props.className = props.variant
    ? prependClassName(props.className, `rcx-badge--${ props.variant }`)
    : prependClassName(props.className, 'rcx-badge--secondary');
  delete props.variant;

  return props;
};

export function Badge({
  ...props
}) {
  props = useTagPropsToClass(props);

  return <span {...props} />;
}

Badge.propTypes = {
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['secondary', 'primary', 'danger', 'warning', 'ghost']),
};
