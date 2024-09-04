import type { ComponentProps, ReactNode, Ref } from 'react';
import { forwardRef } from 'react';

import { InputBox } from '../InputBox';

type TextAreaInputProps = Omit<ComponentProps<typeof InputBox>, 'type'> & {
  addon?: ReactNode;
  error?: string;
};

/**
 * An input for multi-line plain-text editing.
 */
export const TextAreaInput = forwardRef(function TextAreaInput(
  props: TextAreaInputProps,
  ref: Ref<HTMLTextAreaElement>
) {
  return <InputBox type='textarea' ref={ref} {...props} />;
});
