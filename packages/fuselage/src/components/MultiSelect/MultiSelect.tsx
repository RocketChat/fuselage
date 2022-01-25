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
} from 'react';

import { AnimatedVisibility, Box, Flex, Position } from '../Box';
import { Icon } from '../Icon';
import Margins from '../Margins';
import { Options, CheckOption, useCursor } from '../Options';
import { UseCursorOnChange, Option } from '../Options/useCursor';
import { Focus, Addon } from '../Select/Select';
import { SelectedOptions } from './SelectedOptions';

type MultiSelectOptions = readonly (readonly [
  MultiSelectValue,
  string,
  boolean?
])[];

type MultiSelectValue = string | number;

type MultiSelectValues = MultiSelectValue[];

type MultiSelectProps = Omit<ComponentProps<typeof Box>, 'onChange'> & {
  error?: string;
  options: MultiSelectOptions;
  onChange: (value: MultiSelectValues) => void;
  getLabel?: (params: MultiSelectOptions[0]) => string;
  filter?: string;
  value?: MultiSelectValues;
};

const prevent = (e: SyntheticEvent) => {
  e.preventDefault();
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
};

export const MultiSelect = forwardRef<HTMLInputElement, MultiSelectProps>(
  (
    {
      value,
      filter,
      options = [],
      error,
      disabled,
      anchor: Anchor = Focus,
      onChange = () => {},
      getLabel = (args) => {
        if (Array.isArray(args) && args.length > 2) {
          return args[1];
        }
        return '';
      },
      getValue = ([value]: string[] | undefined[]) => value,
      placeholder,
      renderOptions: _Options = Options,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(value || []);
    const currentValue: MultiSelectValues =
      value !== undefined ? value : internalValue;

    const option = options.find((option) => getValue(option) === currentValue);
    const index = option ? options.indexOf(option) : undefined;

    const internalChanged: UseCursorOnChange = ([value]) => {
      if (currentValue.includes(value)) {
        const newValue = currentValue.filter((item) => item !== value);
        setInternalValue(newValue);
        return onChange(newValue);
      }
      const newValue = [...currentValue, value];
      setInternalValue(newValue);
      return onChange(newValue);
    };

    const mapOptions = ([value, label]: MultiSelectOptions[number]) => {
      if (currentValue.includes(value)) {
        return [value, label, true];
      }
      return [value, label];
    };

    const applyFilter = ([, option]: MultiSelectOptions[number]) =>
      !filter || ~option.toLowerCase().indexOf(filter.toLowerCase());

    const filteredOptions = options.filter(applyFilter).map(mapOptions);

    const [cursor, handleKeyDown, handleKeyUp, reset, [visible, hide, show]] =
      useCursor(
        index as number,
        filteredOptions as Option[],
        internalChanged as UseCursorOnChange
      );

    useEffect(reset, [filter]);

    const innerRef = useRef<HTMLInputElement | null>(null);
    const anchorRef = useMergedRefs(ref, innerRef);
    const { ref: containerRef, borderBoxSize } = useResizeObserver();

    const handleClick = useMutableCallback(() => {
      if (visible === AnimatedVisibility.VISIBLE) {
        return hide();
      }
      if (innerRef && innerRef.current) {
        innerRef.current.focus();
        return show();
      }
    });

    return (
      <Box
        is='div'
        rcx-select
        className={[error && 'invalid', disabled && 'disabled']}
        ref={containerRef}
        onClick={handleClick}
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
                      children={!value ? option || placeholder : null}
                    />
                    {currentValue.map((value) => (
                      <SelectedOptions
                        tabIndex={-1}
                        role='option'
                        key={`${value}`}
                        onMouseDown={(e: SyntheticEvent) => {
                          prevent(e);
                          internalChanged([value, '', false]);
                          return false;
                        }}
                        children={getLabel(
                          options.find(
                            ([val]) => val === value
                          ) as MultiSelectOptions[0]
                        )}
                      />
                    ))}
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
                      : 'chevron-down'
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
              renderItem={CheckOption}
              role='listbox'
              options={filteredOptions}
              onSelect={internalChanged}
              cursor={cursor}
            />
          </Position>
        </AnimatedVisibility>
      </Box>
    );
  }
);
