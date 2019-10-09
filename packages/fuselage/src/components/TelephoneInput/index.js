import React from 'react';

import { InputBox } from '../InputBox';

export const TelephoneInput = React.forwardRef(function TelephoneInput(props, ref) {
  return <InputBox is='input' ref={ref} type='tel' {...props} />;
});

TelephoneInput.displayName = 'TelephoneInput';
