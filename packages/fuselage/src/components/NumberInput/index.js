import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

export const NumberInput = forwardRef(function NumberInput(props, ref) {
  return <InputBox type='number' ref={ref} {...props} />;
});
