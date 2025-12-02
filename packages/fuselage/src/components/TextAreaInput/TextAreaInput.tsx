import type { ReactNode } from 'react';
import { forwardRef } from 'react';

import { InputBox, type InputBoxProps } from '../InputBox';

export type TextAreaInputProps = Omit<InputBoxProps, 'type'> & {
  addon?: ReactNode;
  error?: string;
};

/**
 * An input for multi-line plain-text editing.
 */
const TextAreaInput = forwardRef<HTMLTextAreaElement, TextAreaInputProps>(
  function TextAreaInput(props, ref) {
    return <InputBox type='textarea' ref={ref} {...props} />;
  },
);

export default TextAreaInput;
