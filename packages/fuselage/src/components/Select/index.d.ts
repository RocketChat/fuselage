import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type SelectOptions = readonly (readonly [string, string])[];

type SelectProps = Omit<ComponentProps<typeof Box>, 'onChange'> & {
  error?: string;
  options: SelectOptions;
  onChange: (value: SelectOptions[number][0]) => void;
};

export const Select: ForwardRefExoticComponent<SelectProps>;

export const SelectFiltered: ForwardRefExoticComponent<SelectProps>;
