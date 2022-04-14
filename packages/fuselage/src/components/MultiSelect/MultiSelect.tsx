import {
  useMergedRefs,
  useMutableCallback,
  useResizeObserver,
} from '@rocket.chat/fuselage-hooks';
import type {
  ComponentProps,
  SyntheticEvent,
  ElementType,
  Ref,
  ReactNode,
} from 'react';
import React, { useState, useRef, useEffect, forwardRef } from 'react';

import type { SelectOption } from '..';
import { isForwardRefType } from '../../helpers/isForwardRefType';
import AnimatedVisibility from '../AnimatedVisibility';
import Box from '../Box';
import Flex from '../Flex';
import { Icon } from '../Icon';
import Margins from '../Margins';
import { Options, CheckOption, useCursor } from '../Options';
import Position from '../Position';
import SelectAddon from '../Select/SelectAddon';
import MultiSelectAnchor from './MultiSelectAnchor';
import type { MultiSelectAnchorParams } from './MultiSelectAnchorParams';
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
  anchor?:
    | ElementType<MultiSelectAnchorParams>
    | ((params: MultiSelectAnchorParams) => ReactNode);
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
      anchor: Anchor = MultiSelectAnchor,
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

    const mapOptions = ([value, label]: SelectOption): SelectOption => {
      if (internalValue.includes(value)) {
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

    const [visibility, setVisibility] = useState(visible);

    useEffect(reset, [filter]);

    const innerRef = useRef<HTMLElement>(null);
    const anchorRef = useMergedRefs(ref, innerRef);

    const { ref: containerRef, borderBoxSize } = useResizeObserver();

    const renderAnchor = (params: MultiSelectAnchorParams) => {
      if (isForwardRefType(Anchor)) {
        return <Anchor {...params} />;
      }

      if (typeof Anchor === 'function') {
        return (Anchor as (params: MultiSelectAnchorParams) => ReactNode)(
          params
        );
      }

      return null;
    };

    return (
      <Box
        is='div'
        rcx-select
        className={[error && 'invalid', disabled && 'disabled']}
        ref={containerRef}
        onClick={useMutableCallback(() => {
          if (visibility === AnimatedVisibility.VISIBLE) {
            setVisibility('hidden');
            return hide();
          }
          setVisibility('visible');
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
                    {renderAnchor({
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
            </Flex.Container>
          </Margins>
        </Flex.Item>
        <Flex.Item grow={0} shrink={0}>
          <Margins inline='x4'>
            <SelectAddon
              children={
                <Icon
                  name={
                    visibility === AnimatedVisibility.VISIBLE
                      ? 'cross'
                      : addonIcon || 'chevron-down'
                  }
                  size='x20'
                />
              }
            />
          </Margins>
        </Flex.Item>
        <AnimatedVisibility visibility={visibility}>
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
