import { ComponentProps, ForwardRefExoticComponent, ReactNode } from 'react';

import { Box } from '../Box';

type SelectOptions = readonly (readonly [string, string])[];

type SelectInputProps = Omit<ComponentProps<typeof Box>, 'onChange'> & {
  error?: string;
  options: SelectOptions;
  onChange: (value: SelectOptions[number][0]) => void;
  htmlSize?: number;
  addon: ReactNode;
};

export const SelectInput: ForwardRefExoticComponent<SelectInputProps>;
export const SelectInputOption;
