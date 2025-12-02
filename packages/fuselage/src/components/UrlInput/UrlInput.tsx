import { forwardRef } from 'react';

import { InputBox, type InputBoxProps } from '../InputBox';

export type UrlInputProps = Omit<InputBoxProps, 'type'>;

const UrlInput = forwardRef<HTMLElement, UrlInputProps>(
  function UrlInput(props, ref) {
    return <InputBox type='url' ref={ref} {...props} />;
  },
);

export default UrlInput;
