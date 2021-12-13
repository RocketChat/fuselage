import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type MultiSelectOptions = readonly (readonly [string, string])[];

type MultiSelectProps = Omit<ComponentProps<typeof Box>, 'onChange'> & {
  error?: string;
  options: MultiSelectOptions;
  onChange: (value: MultiSelectOptions[number][0]) => void;
};

export const MultiSelect: ForwardRefExoticComponent<MultiSelectProps>;

export const MultiSelectFiltered: ForwardRefExoticComponent<MultiSelectProps>;
