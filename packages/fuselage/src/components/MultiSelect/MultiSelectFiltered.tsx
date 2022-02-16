import React, {
  ComponentProps,
  Dispatch,
  forwardRef,
  SetStateAction,
  useCallback,
  useState,
} from 'react';

import { Flex } from '../Box';
import { InputBox } from '../InputBox';
import { MultiSelect } from './MultiSelect';

type MultiSelectFilteredProps = ComponentProps<typeof MultiSelect> & {
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
    <MultiSelect {...props} filter={filter} options={options} anchor={anchor} />
  );
};
