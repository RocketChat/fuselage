import React, {
  ComponentProps,
  FC,
  forwardRef,
  SyntheticEvent,
  useCallback,
  useState,
} from 'react';

import { Flex } from '../Box';
import { InputBox } from '../InputBox';
import { MultiSelect } from './MultiSelect';

type MultiSelectFilteredProps = ComponentProps<typeof MultiSelect>;

export const MultiSelectFiltered: FC<MultiSelectFilteredProps> = ({
  options,
  placeholder,
  ...props
}) => {
  const [filter, setFilter] = useState('');
  const anchor = useCallback(
    forwardRef<HTMLInputElement, MultiSelectFilteredProps>(
      ({ children, filter, ...props }, ref) => (
        <Flex.Item grow={1}>
          <InputBox.Input
            ref={ref}
            placeholder={placeholder}
            value={filter}
            onInput={(e: SyntheticEvent) =>
              setFilter((e.currentTarget as HTMLInputElement).value)
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
