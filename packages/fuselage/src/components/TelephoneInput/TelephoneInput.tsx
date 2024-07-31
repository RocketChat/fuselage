import type { ReactNode, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import type { InputBoxProps } from '../InputBox';
import { InputBox } from '../InputBox';

type TelephoneInputProps = Omit<InputBoxProps, 'type'> & {
  addon?: ReactNode;
  input?: ReactNode;
  error?: string;
};

export const TelephoneInput = forwardRef(function TelephoneInput(
  props: TelephoneInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return <InputBox type='tel' ref={ref} {...props} />;
});
