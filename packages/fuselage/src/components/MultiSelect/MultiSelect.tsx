import {
  useBorderBoxSize,
  useMergedRefs,
  useMutableCallback,
} from '@rocket.chat/fuselage-hooks';
import type {
  ComponentProps,
  SyntheticEvent,
  ElementType,
  Ref,
  ReactNode,
} from 'react';
import React, { useMemo, useState, useRef, useEffect, forwardRef } from 'react';

import { renderComponentOrFunction } from '../../helpers/renderComponentOrFunction';
import type { SelectOption } from '../../types/SelectOption';
import AnimatedVisibility from '../AnimatedVisibility';
import { Box } from '../Box';
import Flex from '../Flex';
import { Icon } from '../Icon';
import Margins from '../Margins';
import { Options, CheckOption, useCursor } from '../Options';
import Position from '../Position';
import SelectAddon from '../Select/SelectAddon';
import MultiSelectAnchor from './MultiSelectAnchor';
import type { MultiSelectAnchorParams } from './MultiSelectAnchorParams';
import { SelectedOptions } from './SelectedOptions';

const defaultRenderAnchor = (params: MultiSelectAnchorParams) => (
  <MultiSelectAnchor {...params} />
);

const prevent = (e: SyntheticEvent) => {
  e.preventDefault();
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
};

type MultiSelectProps = Omit<
  ComponentProps<typeof Box>,
  'onChange' | 'value'
> & {
  value?: SelectOption[0][];
  error?: string;
  options: SelectOption[];
  onChange: (params: SelectOption[0][]) => void;
  getLabel?: (params: SelectOption) => SelectOption[1];
  getValue?: (params: SelectOption) => SelectOption[0];
  customEmpty?: string;
  anchor?:
    | ElementType<MultiSelectAnchorParams>
    | ((params: MultiSelectAnchorParams) => ReactNode);
  renderOptions?: ElementType;
  renderItem?: ElementType;
  renderSelected?: ElementType;
  addonIcon?: ComponentProps<typeof Icon>['name'];
  isControlled?: boolean;
};

export const MultiSelect = forwardRef(function MultiSelect(
  {
    value,
    filter,
    options = [],
    error,
    disabled,
    anchor: renderAnchor = defaultRenderAnchor,
    onChange = () => {},
    getLabel = ([, label] = ['', '']) => label,
    getValue = ([value]) => value,
    placeholder,
    renderOptions: _Options = Options,
    renderItem,
    customEmpty,
    renderSelected: RenderSelected,
    addonIcon,
    isControlled = false,
    ...props
  }: MultiSelectProps,
  ref: Ref<HTMLInputElement>
) {
  const [internalValue, setInternalValue] = useState<SelectOption[0][]>(
    value || []
  );
  const [currentOptionValue, setCurrentOption] = useState<SelectOption[0]>();

  const option = options.find(
    (option) => getValue(option) === currentOptionValue
  );

  const index = options.findIndex(
    (option) => getValue(option) === currentOptionValue
  );

  const internalChanged = ([value]: SelectOption) => {
    if (internalValue.includes(value)) {
      setCurrentOption(undefined);
      const newValue = internalValue.filter((item) => item !== value);
      setInternalValue(newValue);
      return onChange(newValue);
    }
    setCurrentOption(value);
    const newValue = [...internalValue, value];
    setInternalValue(newValue);
    return onChange(newValue);
  };

  const filteredOptions: SelectOption[] = useMemo(() => {
    const mapOptions = ([value, label]: SelectOption): SelectOption => {
      if (internalValue.includes(value)) {
        return [value, label, true];
      }
      return [value, label];
    };

    const applyFilter = ([, option]: SelectOption) =>
      !filter || option.toLowerCase().includes(filter.toLowerCase());

    if (isControlled) {
      return options.map(mapOptions);
    }
    return options.filter(applyFilter).map(mapOptions);
  }, [options, internalValue, filter, isControlled]);

  const [cursor, handleKeyDown, handleKeyUp, reset, [visibility, hide, show]] =
    useCursor(index, filteredOptions, internalChanged);

  useEffect(reset, [filter]);

  const innerRef = useRef<HTMLElement>(null);
  const anchorRef = useMergedRefs(ref, innerRef);

  const containerRef = useRef<HTMLElement>(null);
  const { inlineSize } = useBorderBoxSize(containerRef);

  const stateClassName = useMemo(
    () =>
      [error && 'invalid', disabled && 'disabled'].filter(Boolean).join(' '),
    [error, disabled]
  );

  const handleClick = useMutableCallback(() => {
    if (visibility === AnimatedVisibility.VISIBLE) {
      return hide();
    }

    innerRef.current?.focus();
    return show();
  });

  return (
    <Box
      rcx-multi-select
      className={stateClassName}
      ref={containerRef}
      onClick={handleClick}
      disabled={disabled}
      position='relative'
      alignItems='center'
      {...props}
    >
      <Flex.Item grow={1}>
        <Margins inline={4}>
          <Box display='flex'>
            <Box
              display='flex'
              alignItems='center'
              flexWrap='wrap'
              margin={-8}
              role='listbox'
            >
              <Margins all={4}>
                {renderComponentOrFunction(renderAnchor, {
                  ref: anchorRef,
                  children: !value ? option || placeholder : null,
                  disabled: disabled ?? false,
                  onClick: show,
                  onBlur: hide,
                  onKeyDown: handleKeyDown,
                  onKeyUp: handleKeyUp,
                })}
                {internalValue.map((value: SelectOption[0]) => {
                  const currentOption = options.find(
                    ([val]) => val === value
                  ) as SelectOption;
                  return RenderSelected ? (
                    <RenderSelected
                      role='option'
                      value={value}
                      key={value}
                      label={getLabel(currentOption)}
                      onMouseDown={(e: SyntheticEvent) => {
                        prevent(e);
                        internalChanged(currentOption);
                      }}
                      children={getLabel(currentOption)}
                    />
                  ) : (
                    <SelectedOptions
                      tabIndex={-1}
                      role='option'
                      key={String(value)}
                      onMouseDown={(e: SyntheticEvent) => {
                        prevent(e);
                        internalChanged(currentOption);
                      }}
                      children={getLabel(currentOption)}
                    />
                  );
                })}
              </Margins>
            </Box>
          </Box>
        </Margins>
      </Flex.Item>
      <Flex.Item grow={0} shrink={0}>
        <Margins inline={4}>
          <SelectAddon
            children={
              <Icon
                name={
                  visibility === AnimatedVisibility.VISIBLE
                    ? 'cross'
                    : addonIcon || 'chevron-down'
                }
                size={20}
              />
            }
          />
        </Margins>
      </Flex.Item>
      <AnimatedVisibility visibility={visibility}>
        <Position anchor={containerRef}>
          <_Options
            width={inlineSize}
            onMouseDown={prevent}
            multiple
            filter={filter}
            renderItem={renderItem || CheckOption}
            role='listbox'
            options={isControlled ? options : filteredOptions}
            onSelect={internalChanged}
            cursor={cursor}
            customEmpty={customEmpty}
          />
        </Position>
      </AnimatedVisibility>
    </Box>
  );
});
