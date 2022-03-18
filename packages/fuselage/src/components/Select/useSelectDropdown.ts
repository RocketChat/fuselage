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
  selectedOptions: TOption[];
  hideOnSelect: boolean;
  matchOptions: (a: TOption, b: TOption) => boolean;
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
  selectedOptions,
  hideOnSelect,
  matchOptions,
  selectOption,
  toDropdownOption,
}: UseSelectDropdownParams<TOption>): UseSelectDropdownResult => {
  const matchOptionsRef = useRef(matchOptions);
  matchOptionsRef.current = matchOptions;

  const toDropdownOptionRef = useRef(toDropdownOption);
  toDropdownOptionRef.current = toDropdownOption;

  const dropdownOptions = useMemo(() => {
    const toDropdownOption = toDropdownOptionRef.current;
    const matchOptions = matchOptionsRef.current;

    return options.map((option) =>
      toDropdownOption(
        option,
        selectedOptions.some((selectedOption) =>
          matchOptions(option, selectedOption)
        )
      )
    );
  }, [options, selectedOptions]);

  const initialIndexRef = useRef<number>();
  if (initialIndexRef.current === undefined) {
    initialIndexRef.current = dropdownOptions.findIndex(
      (option) => option[2] ?? false
    );
  }

  const fromDropdownOption = useMutableCallback(
    (option: OptionType): TOption | undefined => {
      const index = dropdownOptions.findIndex((o) => o[0] === option[0]);
      return options[index];
    }
  );

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
  ] = useCursor(initialIndexRef.current, dropdownOptions, handleDropdownChange);

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
    if (hideOnSelect) {
      hideDropdown();
    }

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
