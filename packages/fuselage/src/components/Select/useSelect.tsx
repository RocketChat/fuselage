import {
  useBorderBoxSize,
  useMergedRefs,
  useMutableCallback,
} from '@rocket.chat/fuselage-hooks';
import type { Keys } from '@rocket.chat/icons';
import type { Ref, ElementType } from 'react';
import React, { useEffect, useState, useRef, useMemo } from 'react';

import type { OptionType } from '../../types/OptionType';
import type { SelectOption } from '../../types/SelectOption';
import AnimatedVisibility from '../AnimatedVisibility';
import { Icon } from '../Icon';
import { useCursor } from '../Options/useCursor';

const defaultGetValue = ([value]: SelectOption = ['', '']) => value;
const defaultGetLabel = ([_, label]: SelectOption = ['', '']) => label;

export const useSelect = ({
  ref,
  value,
  options,
  onChange,
  getValue = defaultGetValue,
  getLabel = defaultGetLabel,
  placeholder,
  disabled,
  error,
  anchorInactive,
  addonIcon,
  renderItem,
  customEmpty,
}: {
  ref: Ref<HTMLElement>;
  value?: SelectOption[0];
  options: SelectOption[];
  onChange?: (value: SelectOption[0]) => void;
  getValue?: (params: SelectOption) => SelectOption[0];
  getLabel?: (params: SelectOption) => SelectOption[1];
  placeholder?: string;
  disabled: boolean;
  error: string | boolean;
  anchorInactive: boolean;
  addonIcon: Keys;
  renderItem?: ElementType;
  customEmpty?: string;
}) => {
  const [internalValue, setInternalValue] = useState(value || '');

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

  const innerAnchorRef = useRef<HTMLInputElement | null>(null);
  const anchorRef = useMergedRefs(ref, innerAnchorRef);

  const containerRef = useRef<HTMLElement>(null);
  const { inlineSize } = useBorderBoxSize(containerRef);

  const dropdownHidden = dropdownVisibility === AnimatedVisibility.HIDDEN;
  const valueShown = Boolean(getLabel(option)) || Boolean(placeholder);

  const handleClick = useMutableCallback(() => {
    if (dropdownVisibility === AnimatedVisibility.VISIBLE) {
      hideDropdown();
      return;
    }

    innerAnchorRef.current?.focus();
    showDropdown();
  });

  return {
    containerProps: {
      ref: containerRef,
      disabled,
      invalid: Boolean(error),
      onClick: handleClick,
    },
    wrapperProps: {
      hiddenAnchor: (anchorInactive || dropdownHidden) && valueShown,
    },
    valueParams: option
      ? {
          value: getValue(option),
          label: getLabel(option),
          anchorActive: dropdownVisibility !== AnimatedVisibility.HIDDEN,
        }
      : {
          placeholder,
          anchorActive: dropdownVisibility !== AnimatedVisibility.HIDDEN,
        },
    anchorParams: {
      ref: anchorRef,
      disabled,
      placeholder,
      filled: Boolean(option),
      onClick: showDropdown,
      onBlur: hideDropdown,
      onKeyDown: handleAnchorKeyDown,
      onKeyUp: handleAnchorKeyUp,
    },
    addonProps: {
      children:
        dropdownVisibility === AnimatedVisibility.VISIBLE ? (
          <Icon name='cross' size={20} />
        ) : (
          <Icon name={addonIcon} size={20} />
        ),
    },
    dropdownProps: {
      anchorRef: containerRef,
      cursor: dropdownCursor,
      inlineSize,
      onSelect: handleDropdownSelect,
      options: dropdownOptions,
      renderItem,
      customEmpty,
      visibility: dropdownVisibility,
    },
  };
};
