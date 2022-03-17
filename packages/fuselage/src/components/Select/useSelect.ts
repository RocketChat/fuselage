import {
  useBorderBoxSize,
  useMutableCallback,
} from '@rocket.chat/fuselage-hooks';
import type {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
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

type UseSelectResult<TOption> = {
  containerRef: RefObject<HTMLElement>;
  anchorRef: RefObject<HTMLElement>;
  dropdownOpen: boolean;
  triggerDropdown: () => void;
  selectedOptions: TOption[];
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
  getLabel: (option: TOption) => ReactNode;
  getAccessibleLabel: (option: TOption) => string;
};

export function useSelect<TOption, TValue>(
  { value = undefined, options, onChange }: UseSelectParams<TOption, TValue>,
  {
    getValue,
    getLabel,
    getAccessibleLabel,
    toDropdownOption,
  }: UseSelectOptions<TOption, TValue>
): UseSelectResult<TOption> {
  const [option, setOption] = useState(() =>
    options.find((option) => getValue(option) === value)
  );
  const matchOption = useMutableCallback((o: TOption) =>
    option ? getValue(o) === getValue(option) : false
  );

  const [dropdownIndex, dropdownOptions, fromDropdownOption] = useMemo(() => {
    const dropdownOptions = options.map((option) =>
      toDropdownOption(option, matchOption(option))
    );

    const dropdownIndex = dropdownOptions.findIndex(
      (option) => option[2] ?? false
    );

    const fromDropdownOption = (option: OptionType) => {
      const index = dropdownOptions.findIndex((o) => o[0] === option[0]);
      return options[index];
    };

    return [dropdownIndex, dropdownOptions, fromDropdownOption];
  }, [matchOption, options, toDropdownOption]);

  const handleDropdownChange = useMutableCallback((option: OptionType) => {
    setOption(() => {
      const newOption = fromDropdownOption(option);
      if (!newOption) {
        return undefined;
      }

      onChange?.(getValue(newOption), newOption);
      return newOption;
    });
  });

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

  const handleDropdownSelect = useMutableCallback((option: OptionType) => {
    hideDropdown();
    setOption(() => {
      const newOption = fromDropdownOption(option);
      if (!newOption) {
        return undefined;
      }

      onChange?.(getValue(newOption), newOption);
      return newOption;
    });
  });

  const containerRef = useRef<HTMLElement>(null);
  const anchorRef = useRef<HTMLElement>(null);

  const triggerDropdown = useMutableCallback(() => {
    if (dropdownVisibility === AnimatedVisibility.VISIBLE) {
      hideDropdown();
      return;
    }

    anchorRef.current?.focus();
    showDropdown();
  });

  const { inlineSize } = useBorderBoxSize(containerRef);

  return {
    containerRef,
    anchorRef,
    dropdownOpen: dropdownVisibility !== AnimatedVisibility.HIDDEN,
    triggerDropdown,
    selectedOptions: option ? [option] : [],
    anchorProps: {
      onClick: showDropdown,
      onBlur: hideDropdown,
      onKeyDown: handleAnchorKeyDown,
      onKeyUp: handleAnchorKeyUp,
    },
    dropdownProps: {
      cursor: dropdownCursor,
      inlineSize,
      onSelect: handleDropdownSelect,
      options: dropdownOptions,
      visibility: dropdownVisibility,
    },
    getLabel,
    getAccessibleLabel,
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
