import type { ReactNode, ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import type { InputBoxProps } from '../InputBox';
import { InputBox } from '../InputBox';

/** @public */
export type EmailInputProps = Omit<InputBoxProps, 'type'> & {
  addon?: ReactNode;
  error?: string;
};

/** @public */
const EmailInput = forwardRef(function EmailInput(
  props: EmailInputProps,
  ref: ForwardedRef<HTMLElement>
) {
  return <InputBox type='email' ref={ref} {...props} />;
});

export default EmailInput;
