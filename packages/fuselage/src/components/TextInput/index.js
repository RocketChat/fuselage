import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

export const TextInput = forwardRef(function TextInput(props, ref) {
  return <InputBox type='text' ref={ref} {...props} />;
});
