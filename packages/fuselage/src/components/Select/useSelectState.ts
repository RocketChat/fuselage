import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import { useState } from 'react';

type UseSelectStateParams<TOption, TValue> = {
  defaultValue: TValue | undefined;
  options: TOption[];
  onChange?: (value: TValue, selectedOptions: TOption) => void;
  getValue: (option: TOption) => TValue;
};

type UseSelectStateResult<TOption> = {
  selectedOptions: TOption[];
  matchOptions: (a: TOption, b: TOption) => boolean;
  selectOption: (option: TOption) => void;
};

export const useSelectState = <TOption, TValue>({
  defaultValue,
  options,
  onChange,
  getValue,
}: UseSelectStateParams<TOption, TValue>): UseSelectStateResult<TOption> => {
  const [selectedOption, setSelectedOption] = useState(() =>
    options.find((option) => getValue(option) === defaultValue)
  );

  const matchOptions = useMutableCallback(
    (a: TOption, b: TOption) => getValue(a) === getValue(b)
  );

  const selectOption = useMutableCallback((newOption: TOption) => {
    setSelectedOption((selectedOption) => {
      if (selectedOption && getValue(selectedOption) === getValue(newOption)) {
        return selectedOption;
      }

      onChange?.(getValue(newOption), newOption);
      return newOption;
    });
  });

  const selectedOptions = selectedOption ? [selectedOption] : [];

  return {
    selectedOptions,
    matchOptions,
    selectOption,
  };
};
