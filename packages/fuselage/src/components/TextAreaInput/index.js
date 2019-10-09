import React from 'react';

import { InputBox } from '../InputBox';

export const TextAreaInput = React.forwardRef(function TextAreaInput(props, ref) {
  return <InputBox is='textarea' ref={ref} {...props} />;
});

TextAreaInput.displayName = 'TextAreaInput';
