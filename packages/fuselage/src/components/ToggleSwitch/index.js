import React, { forwardRef } from 'react';

import { Label } from '../Label';
import { Box } from '../Box';

export const ToggleSwitch = forwardRef(function ToggleSwitch({
  className,
  hidden,
  invisible,
  style,
  title,
  onClick,
  ...props
}, ref) {
  return <Box
    is={Label}
    componentClassName='rcx-toggle-switch'
    className={className}
    hidden={hidden}
    invisible={invisible}
    style={style}
    title={title}
    onClick={onClick}
  >
    <Box is='input' componentClassName='rcx-toggle-switch__input' ref={ref} type='checkbox' {...props} />
    <Box is='i' componentClassName='rcx-toggle-switch__fake' aria-hidden='true' />
  </Box>;
});
