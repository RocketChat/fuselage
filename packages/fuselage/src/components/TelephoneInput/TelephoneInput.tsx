import type { ReactNode } from 'react';
import { forwardRef } from 'react';

import { InputBox, type InputBoxProps } from '../InputBox';

type TelephoneInputProps = Omit<InputBoxProps, 'type'> & {
  addon?: ReactNode;
  input?: ReactNode;
  error?: string;
};

/**
 * An input for telephone numbers.
 */
export const TelephoneInput = forwardRef<HTMLInputElement, TelephoneInputProps>(
  function TelephoneInput(props, ref) {
    return <InputBox type='tel' ref={ref} {...props} />;
  },
);
