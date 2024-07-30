import type { ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import type { InputBoxProps } from '../InputBox';
import { InputBox } from '../InputBox';

type UrlInputProps = Omit<InputBoxProps, 'type'>;

const UrlInput = forwardRef(function UrlInput(
  props: UrlInputProps,
  ref: ForwardedRef<HTMLElement>
) {
  return <InputBox type='url' ref={ref} {...props} />;
});

export default UrlInput;
