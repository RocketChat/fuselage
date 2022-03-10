import {
  useMergedRefs,
  useMutableCallback,
  useResizeObserver,
} from '@rocket.chat/fuselage-hooks';
import type { ComponentProps, Ref, ElementType, ReactNode } from 'react';
import React, { useState, useRef, forwardRef, useMemo } from 'react';

import { isForwardRefType } from '../../helpers/isForwardRefType';
import type { OptionType } from '../../types/OptionType';
import type { SelectOption } from '../../types/SelectOption';
import AnimatedVisibility from '../AnimatedVisibility';
import { Box } from '../Box';
import { Icon } from '../Icon';
import Margins from '../Margins';
import { Options, useCursor } from '../Options';
import PositionAnimated from '../PositionAnimated';
import SelectAddon from './SelectAddon';
import type { SelectAnchorParams } from './SelectAnchorParams';
import SelectFocus from './SelectFocus';
import SelectWrapper from './SelectWrapper';
import { useDidUpdate } from './useDidUpdate';

export type SelectProps = Omit<ComponentProps<typeof Box>, 'onChange'> & {
  anchor?: ElementType;
  error?: string;
  options: SelectOption[];
  onChange: (value: SelectOption[0]) => void;
  getLabel?: (params: SelectOption) => SelectOption[1];
  getValue?: (params: SelectOption) => SelectOption[0];
  filter?: string;
  renderOptions?: ElementType;
  renderItem?: ElementType;
  renderSelected?: ElementType;
  customEmpty?: string;
  addonIcon?: ComponentProps<typeof Icon>['name'];
  isControlled?: boolean;
};

export const Select = forwardRef(function Select(
  {
    value,
    filter,
    error,
    disabled,
    options = [],
    anchor: Anchor = SelectFocus,
    onChange = () => {},
    getValue = ([value] = ['', '']) => value,
    getLabel = ([_, label] = ['', '']) => label,
    placeholder = '',
    renderItem,
    renderSelected: RenderSelected,
    renderOptions: RenderOptions = Options,
    addonIcon,
    customEmpty,
    isControlled = false,
    ...props
  }: SelectProps,
  ref: Ref<HTMLInputElement>
) {
  const [internalValue, setInternalValue] = useState(value || '');

  const internalChangedByKeyboard = useMutableCallback(([value]) => {
    setInternalValue(value);
    onChange(value);
  });

  const option = options.find(
    (option) => getValue(option) === internalValue
  ) as SelectOption;

  const index = options.indexOf(option);

  const filteredOptions = useMemo<OptionType[]>((): OptionType[] => {
    const mapOptions = ([value, label]: SelectOption): OptionType => {
      if (internalValue === value) {
        return [value, label, true];
      }
      return [value, label];
    };

    if (isControlled) {
      return options.map(mapOptions);
    }
    const applyFilter = ([, option]: SelectOption) =>
      !filter || ~option.toLowerCase().indexOf(filter.toLowerCase());

    return options.filter(applyFilter).map(mapOptions);
  }, [options, internalValue, filter]);

  const [cursor, handleKeyDown, handleKeyUp, reset, [visible, hide, show]] =
    useCursor(index, filteredOptions, internalChangedByKeyboard);

  const internalChangedByClick = useMutableCallback(([value]) => {
    setInternalValue(value);
    onChange(value);
    hide();
  });

  const innerRef = useRef<HTMLInputElement | null>(null);
  const anchorRef = useMergedRefs(ref, innerRef);

  const renderAnchor = (params: SelectAnchorParams) => {
    if (isForwardRefType(Anchor)) {
      return <Anchor {...params} />;
    }

    if (typeof Anchor === 'function') {
      return (Anchor as (params: SelectAnchorParams) => ReactNode)(params);
    }

    return null;
  };

  const { ref: containerRef, borderBoxSize } = useResizeObserver();

  useDidUpdate(reset, [filter, internalValue]);

  const valueLabel = getLabel(option);

  const visibleText =
    (filter === undefined || visible === AnimatedVisibility.HIDDEN) &&
    (valueLabel || placeholder || typeof placeholder === 'string');

  const handleClick = useMutableCallback(() => {
    if (visible === AnimatedVisibility.VISIBLE) {
      return hide();
    }
    innerRef.current?.focus();
    return show();
  });

  return (
    <Box
      rcx-select
      disabled={disabled}
      ref={containerRef}
      onClick={handleClick}
      className={useMemo(
        () => [error && 'invalid', disabled && 'disabled'],
        [error, disabled]
      )}
      {...props}
    >
      <SelectWrapper
        display='flex'
        mi='neg-x4'
        rcx-select__wrapper--hidden={!!visibleText}
      >
        {visibleText &&
          (RenderSelected ? (
            <RenderSelected
              role='option'
              value={getValue(option)}
              label={valueLabel}
              key={getValue(option)}
              onClick={internalChangedByClick}
            />
          ) : (
            <Box
              flexGrow={1}
              is='span'
              mi='x4'
              rcx-select__item
              fontScale='p2'
              color={valueLabel ? 'default' : 'hint'}
            >
              {visibleText}
            </Box>
          ))}
        {renderAnchor({
          ref: anchorRef,
          children: !value ? option || placeholder : null,
          disabled: disabled ?? false,
          onClick: show,
          onBlur: hide,
          onKeyDown: handleKeyDown,
          onKeyUp: handleKeyUp,
        })}
        <Margins inline='x4'>
          <SelectAddon
            children={
              <Icon
                name={
                  visible === AnimatedVisibility.VISIBLE
                    ? 'cross'
                    : addonIcon || 'chevron-down'
                }
                size='x20'
              />
            }
          />
        </Margins>
      </SelectWrapper>
      <PositionAnimated visible={visible} anchor={containerRef}>
        <RenderOptions
          width={borderBoxSize.inlineSize}
          role='listbox'
          filter={filter}
          options={isControlled ? options : filteredOptions}
          onSelect={internalChangedByClick}
          renderItem={renderItem}
          cursor={cursor}
          customEmpty={customEmpty}
        />
      </PositionAnimated>
    </Box>
  );
});
