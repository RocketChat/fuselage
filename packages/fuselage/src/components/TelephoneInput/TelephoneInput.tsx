import type { ComponentProps, ReactNode, Ref } from 'react';
import { forwardRef, useState } from 'react';

import { InputBox } from '../InputBox';

type TelephoneInputProps = Omit<ComponentProps<typeof InputBox>, 'type'> & {
  addon?: ReactNode;
  input?: ReactNode;
  error?: string;
};

/**
 * An input for telephone numbers.
 */
export const TelephoneInput = forwardRef(function TelephoneInput(
  props: TelephoneInputProps,
  ref: Ref<HTMLInputElement>
) {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const telephonicValue = event.target.value;
    if (/^[0-9()+]*$/.test(telephonicValue)) {
      setValue(telephonicValue);
    }
  };

  return (
    <InputBox
      type='tel'
      ref={ref}
      value={value}
      onChange={handleChange}
      {...props}
    />
  );
});
