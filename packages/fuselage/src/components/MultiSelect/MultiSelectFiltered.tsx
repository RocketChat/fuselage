import React, {
  ComponentProps,
  Dispatch,
  ElementType,
  forwardRef,
  SetStateAction,
  useCallback,
  useState,
} from 'react';

import { Box } from '..';
import { Flex } from '../Box';
import { InputBox } from '../InputBox';
import { MultiSelect } from './MultiSelect';

type MultiSelectOption = [value: string, label: string, selected?: boolean];

type MultiSelectFilteredProps = Omit<ComponentProps<typeof Box>, 'onChange'> & {
  value?: MultiSelectOption[1][];
  error?: string;
  options: MultiSelectOption[];
  onChange: (params: MultiSelectOption[0][]) => void;
  getLabel?: (params: MultiSelectOption) => MultiSelectOption[1];
  getValue?: (params: MultiSelectOption) => MultiSelectOption[0];
  customEmpty?: string;
  anchor?: ElementType;
  renderOptions?: ElementType;
  renderItem?: ElementType;
  renderSelected?: ElementType;
  filter?: string;
  setFilter?: Dispatch<SetStateAction<string>>;
};

export const MultiSelectFiltered = ({
  options,
  placeholder,
  filter: propFilter,
  setFilter: propSetFilter,
  ...props
}: MultiSelectFilteredProps) => {
  const [filter, setFilter] = useState('');
  const anchor = useCallback(
    forwardRef<HTMLInputElement, ComponentProps<typeof InputBox>>(
      ({ children, filter, ...props }, ref) => (
        <Flex.Item grow={1}>
          <InputBox.Input
            ref={ref}
            placeholder={placeholder}
            value={propFilter || filter}
            onInput={(e) =>
              propSetFilter
                ? propSetFilter((e.currentTarget as HTMLInputElement).value)
                : setFilter((e.currentTarget as HTMLInputElement).value)
            }
            {...props}
            rcx-input-box--undecorated
          />
        </Flex.Item>
      )
    ),
    []
  );
  return (
    <MultiSelect filter={filter} options={options} {...props} anchor={anchor} />
  );
};
