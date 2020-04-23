import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

export const PasswordInput = forwardRef(function PasswordInput(props, ref) {
  return <InputBox type='password' ref={ref} {...props} />;
});
