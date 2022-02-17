import {
  ComponentProps,
  ElementType,
  ForwardRefExoticComponent,
  ReactNode,
} from 'react';

import { Box } from '../Box';

type MultiSelectOptions = readonly (readonly [string, string, boolean?])[];

type MultiSelectAnchorParams = {
  children: ReactNode;
  disabled: boolean;
  onClick: MouseEventHandler;
  onBlur: FocusEventHandler;
  onKeyUp: KeyboardEventHandler;
  onKeyDown: KeyboardEventHandler;
};

type MultiSelectProps = Omit<ComponentProps<typeof Box>, 'onChange'> & {
  error?: string;
  options: MultiSelectOptions;
  onChange: (value: MultiSelectOptions[number][0]) => void;
  customEmpty?: string;
  anchor?:
    | ElementType<MultiSelectAnchorParams>
    | ((params: MultiSelectAnchorParams) => ReactNode);
};

export const MultiSelect: ForwardRefExoticComponent<MultiSelectProps>;
