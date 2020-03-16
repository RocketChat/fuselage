import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '../..';

export function Tag({
  variant = 'secondary',
  disabled,
  round,
  onClick,
  ...props
}) {
  return <Box
    is='div'
    componentClassName='rcx-tag'
    mod-secondary={variant === 'secondary'}
    mod-primary={variant === 'primary'}
    mod-danger={variant === 'danger'}
    mod-disabled={!!disabled}
    mod-round={!!round}
    mod-clickable={!!onClick}
    onClick={onClick}
    {...props}
  />;
}

Tag.propTypes = {
  variant: PropTypes.oneOf(['secondary', 'primary', 'danger']),
  round: PropTypes.bool,
  disabled: PropTypes.bool,
};
