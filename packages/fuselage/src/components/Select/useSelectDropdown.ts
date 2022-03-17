import {
  useBorderBoxSize,
  useMutableCallback,
} from '@rocket.chat/fuselage-hooks';
import type {
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
  RefObject,
} from 'react';
import { useEffect, useRef, useMemo } from 'react';

import type { OptionType } from '../../types/OptionType';
import AnimatedVisibility from '../AnimatedVisibility';
import { useCursor } from '../Options/useCursor';

type UseSelectDropdownParams<TOption> = {
  options: TOption[];
  isOptionSelected: (option: TOption) => boolean;
  selectOption: (option: TOption) => void;
  toDropdownOption: (option: TOption, selected: boolean) => OptionType;
};

type UseSelectDropdownResult = {
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

export const useSelectDropdown = <TOption>({
  options,
  isOptionSelected,
  selectOption,
  toDropdownOption,
}: UseSelectDropdownParams<TOption>): UseSelectDropdownResult => {
  const [dropdownIndex, dropdownOptions, fromDropdownOption] = useMemo(() => {
    const dropdownOptions = options.map((option) =>
      toDropdownOption(option, isOptionSelected(option))
    );

    const dropdownIndex = dropdownOptions.findIndex(
      (option) => option[2] ?? false
    );

    const fromDropdownOption = (option: OptionType): TOption | undefined => {
      const index = dropdownOptions.findIndex((o) => o[0] === option[0]);
      return options[index];
    };

    return [dropdownIndex, dropdownOptions, fromDropdownOption];
  }, [isOptionSelected, options, toDropdownOption]);

  const handleDropdownChange = useMutableCallback((option: OptionType) => {
    const newOption = fromDropdownOption(option);
    if (!newOption) {
      return;
    }

    selectOption(newOption);
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
    const newOption = fromDropdownOption(option);
    if (!newOption) {
      return;
    }

    selectOption(newOption);
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
  };
};
