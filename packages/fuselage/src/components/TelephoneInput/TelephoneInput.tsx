import type { ReactNode, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import type { InputBoxProps } from '../InputBox';
import { InputBox } from '../InputBox';

/** @public */
export type TelephoneInputProps = Omit<InputBoxProps, 'type'> & {
  addon?: ReactNode;
  input?: ReactNode;
  error?: string;
};

/**
 * An input for telephone numbers.
 * @public
 */
const TelephoneInput = forwardRef(function TelephoneInput(
  props: TelephoneInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return <InputBox type='tel' ref={ref} {...props} />;
});

export default TelephoneInput;
