import { useCallback, useRef } from 'react';

import { useControlledState } from '../../hooks/useControlledState';

type UseSelectStateParams<TOption, TValue> = {
  options: TOption[];
  values?: TValue[];
  defaultValues: TValue[];
  getValue: (option: TOption) => TValue;
  onReplace?: (value: TValue, selected: TOption[]) => void;
  onAppend?: (values: TValue[], selected: TOption[]) => void;
};

type UseSelectStateResult<TOption> = {
  selected: TOption[];
  match: (a: TOption, b: TOption) => boolean;
  replace: (option: TOption) => void;
  append: (option: TOption) => void;
};

const extractSelected = <TOption, TValue>(
  options: TOption[],
  values: TValue[],
  getValue: (option: TOption) => TValue
) =>
  values
    .map((v) => options.find((o) => getValue(o) === v))
    .filter((o): o is TOption => !!o);

export const useSelectState = <TOption, TValue>({
  options,
  values: propValues,
  defaultValues,
  getValue,
  onReplace,
  onAppend,
}: UseSelectStateParams<TOption, TValue>): UseSelectStateResult<TOption> => {
  const [values, setValues] = useControlledState(propValues, defaultValues);

  const ref = useRef({
    options,
    setValues,
    getValue,
    onReplace,
    onAppend,
  });
  ref.current = {
    options,
    setValues,
    getValue,
    onReplace,
    onAppend,
  };

  const match = useCallback((a: TOption, b: TOption) => {
    const { getValue } = ref.current;
    return getValue(a) === getValue(b);
  }, []);

  const replace = useCallback((newOption: TOption) => {
    const { setValues } = ref.current;

    setValues((prevValues) => {
      const { options, getValue, onReplace } = ref.current;

      const newValue = getValue(newOption);

      if (prevValues.length === 1 && prevValues[0] === newValue) {
        return prevValues;
      }

      onReplace?.(newValue, extractSelected(options, [newValue], getValue));

      return [newValue];
    });
  }, []);

  const append = useCallback((newOption: TOption) => {
    const { setValues } = ref.current;

    setValues((prevValues) => {
      const { options, getValue, onAppend } = ref.current;

      const newValue = getValue(newOption);

      const newValues = prevValues.filter((v) => v !== newValue);
      newValues.push(newValue);

      onAppend?.(newValues, extractSelected(options, newValues, getValue));

      return newValues;
    });
  }, []);

  const selected = extractSelected(options, values, getValue);

  return {
    selected,
    match,
    replace,
    append,
  };
};
