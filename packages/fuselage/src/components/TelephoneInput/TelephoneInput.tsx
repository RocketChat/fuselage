import React, { ComponentProps, forwardRef, ReactNode, Ref } from 'react';

import { Box } from '..';
import { InputBox } from '../InputBox';

type TelephoneInputProps = Omit<ComponentProps<typeof Box>, 'type'> & {
  addon?: ReactNode;
  input?: ReactNode;
  error?: string;
};

export const TelephoneInput = forwardRef(function TelephoneInput(
  props: TelephoneInputProps,
  ref: Ref<HTMLInputElement>
) {
  return <InputBox type='tel' ref={ref} {...props} />;
});
