import React from 'react';

import { InputBox } from '../InputBox';

export const UrlInput = React.forwardRef(function UrlInput(props, ref) {
  return <InputBox ref={ref} type='url' {...props} />;
});

UrlInput.displayName = 'UrlInput';
