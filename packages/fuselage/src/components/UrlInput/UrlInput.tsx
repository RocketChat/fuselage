import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';

import type { InputBoxProps } from '../InputBox';
import { InputBox } from '../InputBox';

/** @public */
export type UrlInputProps = Omit<InputBoxProps, 'type'>;

/** @public */
const UrlInput = forwardRef(function UrlInput(
  props: UrlInputProps,
  ref: ForwardedRef<HTMLElement>
) {
  return <InputBox type='url' ref={ref} {...props} />;
});

export default UrlInput;
