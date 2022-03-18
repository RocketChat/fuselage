import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import { useState } from 'react';

type UseMultiSelectStateParams<TOption, TValue> = {
  defaultValue: TValue[];
  options: TOption[];
  onChange?: (values: TValue[], selectedOptions: TOption[]) => void;
  getValue: (option: TOption) => TValue;
};

type UseMultiSelectStateResult<TOption> = {
  selectedOptions: TOption[];
  matchOptions: (a: TOption, b: TOption) => boolean;
  selectOption: (option: TOption) => void;
};

export const useMultiSelectState = <TOption, TValue>({
  defaultValue,
  options,
  onChange,
  getValue,
}: UseMultiSelectStateParams<
  TOption,
  TValue
>): UseMultiSelectStateResult<TOption> => {
  const [selectedOptions, setSelectedOptions] = useState(() =>
    options.filter((option) => defaultValue.includes(getValue(option)))
  );

  const matchOptions = useMutableCallback(
    (a: TOption, b: TOption) => getValue(a) === getValue(b)
  );

  const selectOption = useMutableCallback((newOption: TOption) => {
    setSelectedOptions((selectedOptions) => {
      const filtered = selectedOptions.filter(
        (selectedOption) => getValue(selectedOption) !== getValue(newOption)
      );

      if (filtered.length !== selectedOptions.length) {
        return filtered;
      }

      const expanded = [...selectedOptions, newOption];

      onChange?.(expanded.map(getValue), expanded);
      return expanded;
    });
  });

  return {
    selectedOptions,
    matchOptions,
    selectOption,
  };
};
