import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

type UrlInputProps = Omit<ComponentProps<typeof InputBox>, 'type'>;

const UrlInput = forwardRef(function UrlInput(
  props: UrlInputProps,
  ref: Ref<HTMLElement>
) {
  return <InputBox type='url' ref={ref} {...props} />;
});

export default UrlInput;
