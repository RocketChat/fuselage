import React from 'react';

import { useClassName } from '../../hooks';
import { Box } from '../Box';
import { Label } from '../Label';

export const RadioButton = React.forwardRef(function RadioButton({
  className,
  hidden,
  invisible,
  style,
  ...props
}, ref) {
  const classNames = {
    container: useClassName('rcx-radio-button', {}, className),
    input: useClassName('rcx-radio-button__input'),
    fake: useClassName('rcx-radio-button__fake'),
  };

  return <Label className={classNames.container} hidden={hidden} invisible={invisible} style={style}>
    <Box className={classNames.input} is='input' ref={ref} type='radio' {...props} />
    <Box aria-hidden='true' className={classNames.fake} is='i' />
  </Label>;
});

RadioButton.displayName = 'RadioButton';
