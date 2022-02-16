import {
  useMergedRefs,
  useMutableCallback,
  useResizeObserver,
} from '@rocket.chat/fuselage-hooks';
import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  ComponentProps,
  SyntheticEvent,
  ElementType,
  Ref,
} from 'react';

import { SelectOption } from '..';
import { AnimatedVisibility, Box, Flex, Position } from '../Box';
import { Icon } from '../Icon';
import Margins from '../Margins';
import { Options, CheckOption, useCursor } from '../Options';
import { Focus, Addon } from '../Select/Select';
import { SelectedOptions } from './SelectedOptions';

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
  anchor?: ElementType;
  renderOptions?: ElementType;
  renderItem?: ElementType;
  renderSelected?: ElementType;
  addonIcon?: ComponentProps<typeof Icon>['name'];
};

export const MultiSelect = forwardRef(
  (
    {
      value,
      filter,
      options = [],
      error,
      disabled,
      anchor: Anchor = Focus,
      onChange = () => {},
      getLabel = ([, label] = ['', '']) => label,
      getValue = ([value]) => value,
      placeholder,
      renderOptions: _Options = Options,
      renderItem,
      customEmpty,
      renderSelected: RenderSelected,
      addonIcon,
      ...props
    }: MultiSelectProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [internalValue, setInternalValue] = useState<SelectOption[0][]>(
      value || []
    );
    const [currentOptionValue, setCurrentOption] = useState<SelectOption[0]>();

    const currentValue = value !== undefined ? value : internalValue;
    const option = options.find(
      (option) => getValue(option) === currentOptionValue
    );

    const index = options.findIndex(
      (option) => getValue(option) === currentOptionValue
    );

    const internalChanged = ([value]: SelectOption) => {
      if (currentValue.includes(value)) {
        setCurrentOption(undefined);
        const newValue = currentValue.filter((item) => item !== value);
        setInternalValue(newValue);
        return onChange(newValue);
      }
      setCurrentOption(value);
      const newValue = [...currentValue, value];
      setInternalValue(newValue);
      return onChange(newValue);
    };

    const mapOptions = ([value, label]: SelectOption): SelectOption => {
      if (currentValue.includes(value)) {
        return [value, label, true];
      }
      return [value, label];
    };

    const applyFilter = ([, option]: SelectOption) =>
      !filter || option.toLowerCase().includes(filter.toLowerCase());

    const filteredOptions: SelectOption[] = options
      .filter(applyFilter)
      .map(mapOptions);

    const [cursor, handleKeyDown, handleKeyUp, reset, [visible, hide, show]] =
      useCursor(index, filteredOptions, internalChanged);

    useEffect(reset, [filter]);

    const innerRef = useRef<HTMLElement>(null);
    const anchorRef = useMergedRefs(ref, innerRef);

    const { ref: containerRef, borderBoxSize } = useResizeObserver();

    return (
      <Box
        is='div'
        rcx-select
        className={[error && 'invalid', disabled && 'disabled']}
        ref={containerRef}
        onClick={useMutableCallback(() => {
          if (visible === AnimatedVisibility.VISIBLE) {
            return hide();
          }
          innerRef.current?.focus();
          return show();
        })}
        disabled={disabled}
        {...props}
      >
        <Flex.Item grow={1}>
          <Margins inline='x4'>
            <Flex.Container>
              <Box is='div'>
                <Box
                  is='div'
                  display='flex'
                  alignItems='center'
                  flexWrap='wrap'
                  margin='-x8'
                  role='listbox'
                >
                  <Margins all='x4'>
                    <Anchor
                      disabled={disabled}
                      ref={anchorRef}
                      aria-haspopup='listbox'
                      onClick={show}
                      onBlur={hide}
                      onKeyUp={handleKeyUp}
                      onKeyDown={handleKeyDown}
                      order={1}
                      rcx-input-box--undecorated
                      children={value ? option : placeholder}
                    />
                    {currentValue.map((value: SelectOption[0]) => {
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
            </Flex.Container>
          </Margins>
        </Flex.Item>
        <Flex.Item grow={0} shrink={0}>
          <Margins inline='x4'>
            <Addon
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
        </Flex.Item>
        <AnimatedVisibility visibility={visible}>
          <Position anchor={containerRef}>
            <_Options
              width={borderBoxSize.inlineSize}
              onMouseDown={prevent}
              multiple
              filter={filter}
              renderItem={renderItem || CheckOption}
              role='listbox'
              options={filteredOptions}
              onSelect={internalChanged}
              cursor={cursor}
              customEmpty={customEmpty}
            />
          </Position>
        </AnimatedVisibility>
      </Box>
    );
  }
);
