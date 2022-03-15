import {
  useBorderBoxSize,
  useMergedRefs,
  useMutableCallback,
} from '@rocket.chat/fuselage-hooks';
import type { Keys } from '@rocket.chat/icons';
import type { ComponentProps, Ref, ElementType, ReactNode } from 'react';
import React, { useEffect, useState, useRef, forwardRef, useMemo } from 'react';

import { renderComponentOrFunction } from '../../helpers/renderComponentOrFunction';
import type { OptionType } from '../../types/OptionType';
import type { SelectOption } from '../../types/SelectOption';
import AnimatedVisibility from '../AnimatedVisibility';
import type { Box } from '../Box';
import { Icon } from '../Icon';
import { useCursor } from '../Options/useCursor';
import SelectAddon from './SelectAddon';
import SelectAnchor from './SelectAnchor';
import type { SelectAnchorParams } from './SelectAnchorParams';
import SelectContainer from './SelectContainer';
import SelectDropdown from './SelectDropdown';
import SelectValue from './SelectValue';
import type { SelectValueParams } from './SelectValueParams';
import SelectWrapper from './SelectWrapper';

const defaultRenderAnchor = (params: SelectAnchorParams) => (
  <SelectAnchor {...params} />
);

const defaultRenderSelected = <TValue,>(params: SelectValueParams<TValue>) => (
  <SelectValue {...params} />
);

type SelectProps = Omit<ComponentProps<typeof Box>, 'value' | 'onChange'> & {
  anchor?:
    | ElementType<SelectAnchorParams>
    | ((params: SelectAnchorParams) => ReactNode);
  anchorInactive?: boolean;
  error?: string | boolean;
  options: SelectOption[];
  value?: SelectOption[0];
  onChange?: (value: SelectOption[0]) => void;
  getLabel?: (params: SelectOption) => SelectOption[1];
  getValue?: (params: SelectOption) => SelectOption[0];
  renderItem?: ElementType;
  renderSelected?:
    | ElementType<SelectValueParams>
    | ((params: SelectValueParams) => ReactNode);
  customEmpty?: string;
  addonIcon?: Keys;
};

const Select = forwardRef(function Select(
  {
    value,
    error,
    disabled = false,
    options = [],
    anchor: renderAnchor = defaultRenderAnchor,
    anchorInactive = true,
    onChange,
    getValue = ([value] = ['', '']) => value,
    getLabel = ([_, label] = ['', '']) => label,
    placeholder = '',
    renderItem,
    renderSelected = defaultRenderSelected,
    addonIcon,
    customEmpty,
    ...props
  }: SelectProps,
  ref: Ref<HTMLInputElement>
) {
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

  return (
    <SelectContainer
      ref={containerRef}
      disabled={disabled}
      invalid={Boolean(error)}
      onClick={handleClick}
      {...props}
    >
      <SelectWrapper
        hiddenAnchor={(anchorInactive || dropdownHidden) && valueShown}
      >
        {renderComponentOrFunction(
          renderSelected,
          option
            ? {
                value: getValue(option),
                label: getLabel(option),
                anchorActive: dropdownVisibility !== AnimatedVisibility.HIDDEN,
              }
            : {
                placeholder,
                anchorActive: dropdownVisibility !== AnimatedVisibility.HIDDEN,
              }
        )}
        {renderComponentOrFunction(renderAnchor, {
          ref: anchorRef,
          disabled,
          placeholder,
          filled: Boolean(option),
          onClick: showDropdown,
          onBlur: hideDropdown,
          onKeyDown: handleAnchorKeyDown,
          onKeyUp: handleAnchorKeyUp,
        })}
      </SelectWrapper>
      <SelectAddon>
        {dropdownVisibility === AnimatedVisibility.VISIBLE ? (
          <Icon name='cross' size={20} />
        ) : (
          <Icon name={addonIcon ?? 'chevron-down'} size={20} />
        )}
      </SelectAddon>
      <SelectDropdown
        anchorRef={containerRef}
        cursor={dropdownCursor}
        inlineSize={inlineSize}
        onSelect={handleDropdownSelect}
        options={dropdownOptions}
        renderItem={renderItem}
        customEmpty={customEmpty}
        visibility={dropdownVisibility}
      />
    </SelectContainer>
  );
});

export default Select;
