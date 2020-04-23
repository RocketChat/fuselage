import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

export const EmailInput = forwardRef(function EmailInput(props, ref) {
  return <InputBox type='email' ref={ref} {...props} />;
});
