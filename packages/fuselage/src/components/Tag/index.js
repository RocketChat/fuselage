import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '../..';

export function Tag({
  disabled,
  round,
  variant,
  onClick,
  ...props
}) {
  return <Box
    is='span'
    withTruncatedText
    rcx-tag
    rcx-tag--secondary={variant === 'secondary'}
    rcx-tag--primary={variant === 'primary'}
    rcx-tag--danger={variant === 'danger'}
    rcx-tag--ghost={variant === 'ghost'}
    rcx-tag--disabled={!!disabled}
    rcx-tag--round={!!round}
    rcx-tag--clickable={!!onClick}
    onClick={onClick}
    {...props}
  />;
}

Tag.propTypes = {
  disabled: PropTypes.bool,
  round: PropTypes.bool,
  variant: PropTypes.oneOf([undefined, 'secondary', 'primary', 'danger']),
};
