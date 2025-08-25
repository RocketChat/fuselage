import type { ComponentProps, ReactNode, Ref } from 'react';
import { forwardRef } from 'react';

import { InputBox } from '../InputBox';

type UrlInputProps = Omit<ComponentProps<typeof InputBox>, 'type'> & {
  addon?: ReactNode;
  error?: string;
};

/**
 * An input for URL addresses.
 */
export const UrlInput = forwardRef(function UrlInput(
  props: UrlInputProps,
  ref: Ref<HTMLInputElement>,
) {
  return <InputBox type='url' ref={ref} {...props} />;
});
