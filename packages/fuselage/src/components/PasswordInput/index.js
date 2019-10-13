import React from 'react';

import { InputBox } from '../InputBox';

export const PasswordInput = React.forwardRef(function PasswordInput(props, ref) {
  return <InputBox ref={ref} type='password' {...props} />;
});

PasswordInput.displayName = 'PasswordInput';
