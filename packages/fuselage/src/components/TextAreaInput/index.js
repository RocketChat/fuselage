import React from 'react';

import { InputBox } from '../InputBox';

export const TextAreaInput = React.forwardRef(function TextAreaInput(props, ref) {
  return <InputBox ref={ref} type='textarea' {...props} />;
});

TextAreaInput.displayName = 'TextAreaInput';
