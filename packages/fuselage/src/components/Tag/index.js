import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '../..';

export function Tag({
  variant = 'secondary',
  disabled,
  textStyle = 'micro',
  round,
  onClick,
  ...props
}) {
  return <Box
    is='div'
    textStyle={textStyle}
    componentClassName='rcx-tag'
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
  textStyle: PropTypes.oneOf([
    'h1', 's1', 's2', 'p1', 'p2', 'c1', 'c2', 'micro', 'mono',
    'headline', 'subtitle', 'paragraph', 'caption',
  ]),
  variant: PropTypes.oneOf(['secondary', 'primary', 'danger']),
  round: PropTypes.bool,
  disabled: PropTypes.bool,
};
