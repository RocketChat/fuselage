import {
  useBorderBoxSize,
  useMutableCallback,
} from '@rocket.chat/fuselage-hooks';
import type { ReactNode } from 'react';
import { useEffect, useState, useRef, useMemo } from 'react';

import type { OptionType } from '../../types/OptionType';
import type { SelectOption } from '../../types/SelectOption';
import AnimatedVisibility from '../AnimatedVisibility';
import { useCursor } from '../Options/useCursor';

export const useSelect = <TOption = SelectOption<string>, TValue = string>({
  emptyValue,
  getValue,
  getLabel,
  getAccessibleLabel,
  value = emptyValue,
  options,
  onChange,
}: {
  emptyValue: TValue;
  getValue: (option: TOption) => TValue;
  getLabel: (option: TOption) => ReactNode;
  getAccessibleLabel: (option: TOption) => string;
  value?: TValue;
  options: TOption[];
  onChange?: (value: TValue, option: TOption) => void;
}) => {
  const [internalValue, setInternalValue] = useState(() => value);

  const handleChange = useMutableCallback((value: unknown) => {
    const newOption = options.find((option) => getValue(option) === value);

    if (!newOption) {
      setInternalValue(emptyValue);
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
      options.map((option): OptionType<TValue> => {
        const value = getValue(option);
        return [value, getAccessibleLabel(option), internalValue === value];
      }),
    [options, getValue, getAccessibleLabel, internalValue]
  );

  const handleDropdownChange = ([value]: OptionType<TValue>) => {
    handleChange(value);
  };

  const [
    dropdownCursor,
    handleAnchorKeyDown,
    handleAnchorKeyUp,
    resetCursor,
    [dropdownVisibility, hideDropdown, showDropdown],
  ] = useCursor(dropdownIndex, dropdownOptions, handleDropdownChange);

  const prevOptions = useRef<OptionType<TValue>[]>();

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
};
