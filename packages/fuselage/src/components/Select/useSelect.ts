import type {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  RefObject,
} from 'react';

import type { OptionType } from '../../types/OptionType';
import { useSelectDropdown } from './useSelectDropdown';
import { useSelectFilter } from './useSelectFilter';
import { useSelectState } from './useSelectState';

type UseSelectParams<TOption, TValue> =
  | {
      options: TOption[];
      multiple: true;
      values?: TValue[];
      defaultValues?: TValue[];
      onChange?: (values: TValue[], selected: TOption[]) => void;
      getValue: (option: TOption) => TValue;
      filter?: string;
      defaultFilter?: string;
      onChangeFilter?: (filter: string) => void;
      matchFilter: (option: TOption, filter: string) => boolean;
      toDropdownOption: (option: TOption, selected: boolean) => OptionType;
    }
  | {
      options: TOption[];
      value?: TValue;
      defaultValue?: TValue;
      onChange?: (value: TValue, selected: TOption[]) => void;
      getValue: (option: TOption) => TValue;
      filter?: string;
      defaultFilter?: string;
      onChangeFilter?: (filter: string) => void;
      matchFilter: (option: TOption, filter: string) => boolean;
      toDropdownOption: (option: TOption, selected: boolean) => OptionType;
    }
  | {
      options: TOption[];
      multiple: true;
      values?: TValue[];
      defaultValues?: TValue[];
      onChange?: (values: TValue[], selected: TOption[]) => void;
      getValue: (option: TOption) => TValue;
      toDropdownOption: (option: TOption, selected: boolean) => OptionType;
    }
  | {
      options: TOption[];
      value?: TValue;
      defaultValue?: TValue;
      onChange?: (value: TValue, selected: TOption[]) => void;
      getValue: (option: TOption) => TValue;
      toDropdownOption: (option: TOption, selected: boolean) => OptionType;
    };

const hasMultipleSelections = <TOption, TValue>(
  params: UseSelectParams<TOption, TValue>
): params is UseSelectParams<TOption, TValue> & { multiple: true } =>
  'multiple' in params && params.multiple;

const hasFilter = <TOption, TValue>(
  params: UseSelectParams<TOption, TValue>
): params is UseSelectParams<TOption, TValue> & {
  matchFilter: (option: TOption, filter: string) => boolean;
} => 'matchFilter' in params && params.matchFilter !== undefined;

type UseSelectResult<TOption> = {
  selected: TOption[];
  select: (option: TOption) => void;
  filter: string;
  setFilter: (filter: string) => void;
  containerRef: RefObject<HTMLElement>;
  anchorRef: RefObject<HTMLElement>;
  dropdownOpen: boolean;
  triggerDropdown: () => void;
  anchorProps: {
    onClick: MouseEventHandler;
    onBlur: FocusEventHandler;
    onKeyDown: KeyboardEventHandler;
    onKeyUp: KeyboardEventHandler;
  };
  dropdownProps: {
    cursor: number;
    inlineSize: number;
    options: OptionType[];
    onSelect: (value: OptionType) => void;
    visibility: 'hidden' | 'visible' | 'hiding' | 'unhiding' | undefined;
  };
};

export const useSelect = <TOption, TValue>(
  params: UseSelectParams<TOption, TValue>
): UseSelectResult<TOption> => {
  const { filtered, filter, setFilter } = useSelectFilter({
    options: params.options,
    ...(hasFilter(params) && {
      filter: params.filter,
      defaultFilter: params.defaultFilter,
      onChangeFilter: params.onChangeFilter,
      match: params.matchFilter,
    }),
  });

  const { selected, match, replace, append } = useSelectState({
    options: filtered,
    getValue: params.getValue,
    ...(hasMultipleSelections(params)
      ? {
          values: params.values,
          defaultValues: params.defaultValues ?? [],
          onAppend: params.onChange,
        }
      : {
          values: params.value ? [params.value] : undefined,
          defaultValues: params.defaultValue ? [params.defaultValue] : [],
          onReplace: params.onChange,
        }),
  });

  const {
    containerRef,
    anchorRef,
    anchorProps,
    dropdownProps,
    dropdownOpen,
    triggerDropdown,
  } = useSelectDropdown({
    options: filtered,
    selectedOptions: selected,
    hideOnSelect: !hasMultipleSelections(params),
    matchOptions: match,
    selectOption: hasMultipleSelections(params) ? append : replace,
    toDropdownOption: params.toDropdownOption,
  });

  return {
    selected,
    select: hasMultipleSelections(params) ? append : replace,
    filter,
    setFilter,
    containerRef,
    anchorRef,
    anchorProps,
    dropdownProps,
    dropdownOpen,
    triggerDropdown,
  };
};
