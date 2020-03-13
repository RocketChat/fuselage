import React from 'react';

import { Box } from '../..';

export function Tag({
  variant = 'default',
  disabled,
  round,
  ...props
}) {
  return <Box
    is='div'
    componentClassName='rcx-tag'
    mod-default={variant === 'default'}
    mod-primary={variant === 'primary'}
    mod-danger={variant === 'danger'}
    mod-disabled={!!disabled}
    mod-round={!!round}
    {...props}
  />;
}
