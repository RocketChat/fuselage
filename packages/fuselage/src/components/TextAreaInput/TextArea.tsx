import type { ReactNode, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import type { InputBoxProps } from '../InputBox';
import { InputBox } from '../InputBox';

/** @public */
export type TextAreaInputProps = Omit<InputBoxProps, 'type'> & {
  addon?: ReactNode;
  error?: string;
};

/**
 * An input for multi-line plain-text editing.
 * @public
 */
const TextAreaInput = forwardRef(function TextAreaInput(
  props: TextAreaInputProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  return <InputBox type='textarea' ref={ref} {...props} />;
});

export default TextAreaInput;
