import { ComponentProps, ForwardRefExoticComponent, ReactNode } from 'react';

import { InputBox } from '..';
import { Box } from '../Box';

type SelectInputOptions = readonly (readonly [string, string])[];

type SelectInputProps = Omit<ComponentProps<typeof Box>, 'onChange'> & {
  error?: string;
  options: SelectInputOptions;
  onChange: (value: SelectInputOptions[number][0]) => void;
  htmlSize?: number;
  addon: ReactNode;
};

export const SelectInput: ForwardRefExoticComponent<SelectInputProps>;
export const SelectInputOption: typeof InputBox.Option;
