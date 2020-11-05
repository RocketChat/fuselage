import { css } from '@rocket.chat/css-in-js';
import PropTypes from 'prop-types';
import React from 'react';

import { appendClassName } from '../../helpers/appendClassName';
import { prependClassName } from '../../helpers/prependClassName';
import { useStyle } from '../../hooks/useStyle';
import { fontScale } from '../../styleTokens';

const useTagPropsToClass = (props) => {
  props.className = prependClassName(props.className, 'rcx-tag');

  if (props.disabled) {
    props.className = prependClassName(props.className, 'rcx-tag--disabled');
  }

  props.className = props.variant
    ? prependClassName(props.className, `rcx-tag--${ props.variant }`)
    : prependClassName(props.className, 'rcx-tag--secondary');
  delete props.variant;

  const newClassName = useStyle(css`
    font-size: ${ fontScale(props.fontScale)?.fontSize } !important;
    font-weight: ${ fontScale(props.fontScale)?.fontWeight } !important;
    letter-spacing: ${ fontScale(props.fontScale)?.letterSpacing } !important;
    line-height: ${ fontScale(props.fontScale)?.lineHeight } !important;
  `);
  delete props.fontScale;

  props.className = appendClassName(props.className, newClassName);

  return props;
};

export function Tag({
  ...props
}) {
  props = useTagPropsToClass(props);

  return <span {...props} />;
}

Tag.propTypes = {
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['secondary', 'primary', 'danger', 'warning', 'ghost']),
};
