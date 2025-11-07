import type { ReactNode, Ref } from 'react';
import { forwardRef } from 'react';

import { InputBox, type InputBoxProps } from '../InputBox/index.js';

type TelephoneInputProps = Omit<InputBoxProps, 'type'> & {
  addon?: ReactNode;
  input?: ReactNode;
  error?: string;
};

/**
 * An input for telephone numbers.
 */
export const TelephoneInput = forwardRef(function TelephoneInput(
  props: TelephoneInputProps,
  ref: Ref<HTMLInputElement>,
) {
  return <InputBox type='tel' ref={ref} {...props} />;
});
