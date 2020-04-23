import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

export const TextAreaInput = forwardRef(function TextAreaInput(props, ref) {
  return <InputBox type='textarea' ref={ref} {...props} />;
});
