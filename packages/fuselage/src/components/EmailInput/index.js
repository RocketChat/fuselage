import React from 'react';

import { InputBox } from '../InputBox';

export const EmailInput = React.forwardRef(function EmailInput(props, ref) {
  return <InputBox is='input' ref={ref} type='email' {...props} />;
});

EmailInput.displayName = 'EmailInput';
