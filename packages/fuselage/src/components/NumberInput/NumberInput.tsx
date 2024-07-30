import type { ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import type { InputBoxProps } from '../InputBox';
import { InputBox } from '../InputBox';

type NumberInputProps = Omit<InputBoxProps, 'type'>;

export const NumberInput = forwardRef(function NumberInput(
  props: NumberInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return <InputBox type='number' ref={ref} {...props} />;
});
