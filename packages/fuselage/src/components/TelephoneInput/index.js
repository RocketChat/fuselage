import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

export const TelephoneInput = forwardRef(function TelephoneInput(props, ref) {
  return <InputBox type='tel' ref={ref} {...props} />;
});
