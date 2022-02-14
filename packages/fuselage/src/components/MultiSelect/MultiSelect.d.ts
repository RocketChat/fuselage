import { ComponentProps, FC, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type MultiSelectOptions = readonly (readonly [string, string, boolean?])[];

type MultiSelectProps = Omit<ComponentProps<typeof Box>, 'onChange'> & {
  error?: string;
  options: MultiSelectOptions;
  onChange: (value: MultiSelectOptions[number][0]) => void;
  customEmpty?: string;
  renderItem?: FC;
  renderSelected?: FC;
};

export const MultiSelect: ForwardRefExoticComponent<MultiSelectProps>;
