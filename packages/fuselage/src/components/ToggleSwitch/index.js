import React from 'react';
import { useClassName } from '@rocket.chat/fuselage-hooks';

import { Box } from '../Box';
import { Label } from '../Label';

export const ToggleSwitch = React.forwardRef(function ToggleSwitch({
  className,
  hidden,
  invisible,
  style,
  ...props
}, ref) {
  const classNames = {
    container: useClassName('rcx-toggle-switch', {}, className),
    input: useClassName('rcx-toggle-switch__input'),
    fake: useClassName('rcx-toggle-switch__fake'),
  };

  return <Label className={classNames.container} hidden={hidden} invisible={invisible} style={style}>
    <Box className={classNames.input} is='input' ref={ref} type='checkbox' {...props} />
    <Box aria-hidden='true' className={classNames.fake} is='i' />
  </Label>;
});

ToggleSwitch.displayName = 'ToggleSwitch';
