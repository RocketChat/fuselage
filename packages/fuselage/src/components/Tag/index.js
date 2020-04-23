import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '../..';

export function Tag({
  disabled,
  round,
  variant = 'secondary',
  onClick,
  ...props
}) {
  return <Box
    componentClassName='rcx-tag'
    is='span'
    mod-secondary={variant === 'secondary'}
    mod-primary={variant === 'primary'}
    mod-danger={variant === 'danger'}
    mod-ghost={variant === 'ghost'}
    mod-disabled={!!disabled}
    mod-round={!!round}
    mod-clickable={!!onClick}
    onClick={onClick}
    {...props}
  />;
}

Tag.propTypes = {
  disabled: PropTypes.bool,
  round: PropTypes.bool,
  variant: PropTypes.oneOf(['secondary', 'primary', 'danger']),
};
