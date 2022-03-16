import {
  useBorderBoxSize,
  useMutableCallback,
} from '@rocket.chat/fuselage-hooks';
import type {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
  Ref,
  RefObject,
} from 'react';
import { useEffect, useState, useRef, useMemo } from 'react';

import type { OptionType } from '../../types/OptionType';
import type { SelectOption } from '../../types/SelectOption';
import AnimatedVisibility from '../AnimatedVisibility';
import { useCursor } from '../Options/useCursor';

type UseSelectParams<TOption, TValue> = {
  value?: TValue;
  options: TOption[];
  onChange?: (value: TValue, option: TOption) => void;
};

type UseSelectOptions<TOption, TValue> = {
  getValue: (option: TOption) => TValue;
  getLabel: (option: TOption) => ReactNode;
  getAccessibleLabel: (option: TOption) => string;
  toDropdownOption: (option: TOption, selected: boolean) => OptionType;
};

type UseSelectResult = {
  containerRef: Ref<HTMLElement>;
  anchorRef: Ref<HTMLElement>;
  dropdownOpen: boolean;
  containerProps: {
    onClick: MouseEventHandler;
  };
  valueProps: {
    label: ReactNode;
    accessibleLabel: string | undefined;
  };
  anchorProps: {
    onClick: MouseEventHandler;
    onBlur: FocusEventHandler;
    onKeyDown: KeyboardEventHandler;
    onKeyUp: KeyboardEventHandler;
  };
  dropdownProps: {
    anchorRef: RefObject<HTMLElement>;
    cursor: number;
    inlineSize: number;
    options: OptionType[];
    onSelect: (value: OptionType) => void;
    visibility: 'hidden' | 'visible' | 'hiding' | 'unhiding' | undefined;
  };
};

export function useSelect<TOption, TValue>(
  { value = undefined, options, onChange }: UseSelectParams<TOption, TValue>,
  {
    getValue,
    getLabel,
    getAccessibleLabel,
    toDropdownOption,
  }: UseSelectOptions<TOption, TValue>
): UseSelectResult {
  const [internalValue, setInternalValue] = useState(() => value);

  const handleChange = useMutableCallback((value: unknown) => {
    const newOption = options.find((option) => getValue(option) === value);

    if (!newOption) {
      setInternalValue(undefined);
      return;
    }

    setInternalValue(getValue(newOption));
    onChange?.(getValue(newOption), newOption);
  });

  const dropdownIndex = options.findIndex(
    (option) => getValue(option) === internalValue
  );

  const option = options[dropdownIndex];

  const dropdownOptions = useMemo(
    () =>
      options.map(
        (option): OptionType =>
          toDropdownOption(option, getValue(option) === internalValue)
      ),
    [options, getValue, internalValue, toDropdownOption]
  );

  const handleDropdownChange = ([value]: OptionType) => {
    handleChange(value);
  };

  const [
    dropdownCursor,
    handleAnchorKeyDown,
    handleAnchorKeyUp,
    resetCursor,
    [dropdownVisibility, hideDropdown, showDropdown],
  ] = useCursor(dropdownIndex, dropdownOptions, handleDropdownChange);

  const prevOptions = useRef<OptionType[]>();

  useEffect(
    () => () => {
      if (prevOptions.current === dropdownOptions) {
        return;
      }

      resetCursor();
      prevOptions.current = dropdownOptions;
    },
    [dropdownOptions, resetCursor]
  );

  const handleDropdownSelect = useMutableCallback(([value]) => {
    handleChange(value);
    hideDropdown();
  });

  const containerRef = useRef<HTMLElement>(null);
  const anchorRef = useRef<HTMLElement>(null);

  const { inlineSize } = useBorderBoxSize(containerRef);

  const handleClick = useMutableCallback(() => {
    if (dropdownVisibility === AnimatedVisibility.VISIBLE) {
      hideDropdown();
      return;
    }

    anchorRef.current?.focus();
    showDropdown();
  });

  return {
    containerRef,
    anchorRef,
    dropdownOpen: dropdownVisibility !== AnimatedVisibility.HIDDEN,
    containerProps: {
      onClick: handleClick,
    },
    valueProps: {
      label: option ? getLabel(option) : null,
      accessibleLabel: option ? getAccessibleLabel(option) : undefined,
    },
    anchorProps: {
      onClick: showDropdown,
      onBlur: hideDropdown,
      onKeyDown: handleAnchorKeyDown,
      onKeyUp: handleAnchorKeyUp,
    },
    dropdownProps: {
      anchorRef: containerRef,
      cursor: dropdownCursor,
      inlineSize,
      onSelect: handleDropdownSelect,
      options: dropdownOptions,
      visibility: dropdownVisibility,
    },
  };
}

const defaultOptions: UseSelectOptions<SelectOption<string>, string> = {
  getValue: (option: SelectOption) => option[0],
  getLabel: (option: SelectOption) => option[1],
  getAccessibleLabel: (option: SelectOption) => option[1],
  toDropdownOption: (option, selected): OptionType => {
    const value = option[0];
    return [value, option[1], selected];
  },
};

export const useDefaultSelect = (
  params: UseSelectParams<SelectOption<string>, string>
) => useSelect(params, defaultOptions);
