import type { ComponentProps, ForwardRefExoticComponent } from 'react';

import type { Box } from '../Box';

type MultiSelectOptions = readonly (readonly [string, string, boolean?])[];

type MultiSelectProps = Omit<ComponentProps<typeof Box>, 'onChange'> & {
  error?: string;
  options: MultiSelectOptions;
  onChange: (value: MultiSelectOptions[number][0]) => void;
  customEmpty?: string;
};

export const MultiSelect: ForwardRefExoticComponent<MultiSelectProps>;
