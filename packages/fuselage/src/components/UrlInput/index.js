import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

export const UrlInput = forwardRef(function UrlInput(props, ref) {
  return <InputBox type='url' ref={ref} {...props} />;
});
