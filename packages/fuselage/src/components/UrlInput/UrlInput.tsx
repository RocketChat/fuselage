import type { ReactNode, Ref } from 'react';
import { forwardRef } from 'react';

import { InputBox, type InputBoxProps } from '../InputBox/index.js';

type UrlInputProps = Omit<InputBoxProps, 'type'> & {
  addon?: ReactNode;
  error?: string;
};

const UrlInput = forwardRef(function UrlInput(
  props: UrlInputProps,
  ref: Ref<HTMLElement>,
) {
  return <InputBox type='url' ref={ref} {...props} />;
});

export default UrlInput;
