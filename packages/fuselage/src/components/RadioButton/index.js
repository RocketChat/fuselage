import React, { forwardRef } from 'react';

import { Box } from '../Box';
import { Label } from '../Label';

export const RadioButton = forwardRef(function RadioButton({
  className,
  hidden,
  invisible,
  style,
  title,
  ...props
}, ref) {
  return <Box
    is={Label}
    componentClassName='rcx-radio-button'
    className={className}
    hidden={hidden}
    invisible={invisible}
    style={style}
    title={title}
  >
    <Box is='input' componentClassName='rcx-radio-button__input' ref={ref} type='radio' {...props} />
    <Box is='i' componentClassName='rcx-radio-button__fake' aria-hidden='true' />
  </Box>;
});
