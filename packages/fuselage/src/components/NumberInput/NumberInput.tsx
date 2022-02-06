import React, { ComponentProps, forwardRef, Ref } from 'react';

import { Box } from '..';
import { InputBox } from '../InputBox';

type NumberInputProps = Omit<ComponentProps<typeof Box>, 'type'>;

export const NumberInput = forwardRef(function NumberInput(
  props: NumberInputProps,
  ref: Ref<HTMLInputElement>
) {
  return <InputBox type='number' ref={ref} {...props} />;
});
