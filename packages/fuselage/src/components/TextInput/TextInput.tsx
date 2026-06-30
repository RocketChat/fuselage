import type { ReactNode, RefAttributes } from 'react';

import { InputBox, type InputBoxProps } from '../InputBox';

export type TextInputProps = Omit<InputBoxProps, 'ref' | 'type'> &
  RefAttributes<HTMLInputElement> & {
    addon?: ReactNode;
    error?: string;
  };

/**
 * An input for any kind of single-line text.
 */
function TextInput(props: TextInputProps) {
  return <InputBox type='text' {...props} />;
}

export default TextInput;
