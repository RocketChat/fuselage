import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../..';

export function Tag({
  disabled,
  round,
  variant = 'secondary',
  onClick,
  ...props
}) {
  return <Box
    is='span'
    rcx-tag
    rcx-tag--warning={variant === 'warning'}
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
  variant: PropTypes.oneOf(['secondary', 'primary', 'danger', 'warning', 'ghost']),
};
