import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

type NumberInputProps = Omit<ComponentProps<typeof InputBox>, 'type'>;

export const NumberInput = forwardRef(function NumberInput(
  props: NumberInputProps,
  ref: Ref<HTMLInputElement>
) {
  return <InputBox type='number' ref={ref} {...props} />;
});
