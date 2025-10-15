import type { Ref } from 'react';
import { forwardRef } from 'react';

import { InputBox, type InputBoxProps } from '../InputBox';

type UrlInputProps = Omit<InputBoxProps, 'type'>;

const UrlInput = forwardRef(function UrlInput(
  props: UrlInputProps,
  ref: Ref<HTMLElement>,
) {
  return <InputBox type='url' ref={ref} {...props} />;
});

export default UrlInput;
