import { ComponentProps, ForwardRefExoticComponent, ReactNode } from 'react';

type TelephoneInputProps = ComponentProps<typeof Box> & {
  addon?: ReactNode;
  error?: string;
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: string;
};

export const TelephoneInput: ForwardRefExoticComponent<TelephoneInputProps>;
