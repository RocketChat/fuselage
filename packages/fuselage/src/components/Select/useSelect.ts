import {
  useBorderBoxSize,
  useMutableCallback,
} from '@rocket.chat/fuselage-hooks';
import { useEffect, useState, useRef, useMemo } from 'react';

import type { OptionType } from '../../types/OptionType';
import type { SelectOption } from '../../types/SelectOption';
import AnimatedVisibility from '../AnimatedVisibility';
import { useCursor } from '../Options/useCursor';

const defaultGetValue = ([value]: SelectOption<string> = ['', '']) => value;
const defaultGetLabel = ([_, label]: SelectOption<string> = ['', '']) => label;

export const useSelect = ({
  value = '',
  options,
  onChange,
  getValue = defaultGetValue,
  getLabel = defaultGetLabel,
}: {
  value?: SelectOption<string>[0];
  options: SelectOption<string>[];
  onChange?: (value: SelectOption<string>[0]) => void;
  getValue?: (params: SelectOption<string>) => SelectOption<string>[0];
  getLabel?: (params: SelectOption<string>) => SelectOption<string>[1];
}) => {
  const [internalValue, setInternalValue] = useState(() => value);

  const handleChange = useMutableCallback((value: unknown) => {
    const newOption = options.find((option) => getValue(option) === value);

    if (!newOption) {
      setInternalValue('');
      return;
    }

    setInternalValue(getValue(newOption));
    onChange?.(getValue(newOption));
  });

  const dropdownIndex = options.findIndex(
    (option) => getValue(option) === internalValue
  );

  const option = options[dropdownIndex];

  const dropdownOptions = useMemo(
    (): OptionType[] =>
      options.map(
        (option): OptionType => [
          getValue(option),
          getLabel(option),
          internalValue === getValue(option),
        ]
      ),
    [options, getValue, getLabel, internalValue]
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
      accessibleLabel: option ? getLabel(option) : undefined,
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
