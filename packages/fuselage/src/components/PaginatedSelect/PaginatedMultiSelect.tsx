// @ts-nocheck
import {
  useMutableCallback,
  useResizeObserver,
} from '@rocket.chat/fuselage-hooks';
import type { SyntheticEvent, ComponentProps, Ref } from 'react';
import React, { useState, useRef, useCallback, forwardRef, memo } from 'react';

import AnimatedVisibility from '../AnimatedVisibility';
import Box from '../Box';
import Chip from '../Chip';
import Flex from '../Flex';
import { Icon } from '../Icon';
import { InputBox } from '../InputBox';
import Margins from '../Margins';
import { useVisible } from '../Options/useVisible';
import { OptionsPaginated } from '../OptionsPaginated';
import Position from '../Position';
import SelectAddon from '../Select/SelectAddon';
import SelectFocus from '../Select/SelectFocus';

const SelectedOptions = memo((props) => (
  <Chip maxWidth='150px' withTruncatedText {...props} />
));

const prevent = (e: SyntheticEvent) => {
  e.preventDefault();
  e.stopPropagation();
  e.nativeEvent.stopImmediatePropagation();
};
type PaginatedMultiSelecOption = {
  value?: string | number;
  label?: string | number;
};
type PaginatedMultiSelectProps = ComponentProps<typeof Box> & {
  error?: boolean;
  options: PaginatedMultiSelecOption[];
  withTitle?: boolean;
};

export const PaginatedMultiSelect = ({
  withTitle,
  value,
  filter,
  options = [],
  error,
  disabled,
  anchor: Anchor = SelectFocus,
  onChange = () => {},
  placeholder,
  renderOptions: _Options = OptionsPaginated,
  endReached,
  ...props
}: PaginatedMultiSelectProps) => {
  const [internalValue, setInternalValue] = useState(value || []);

  const currentValue = value !== undefined ? value : internalValue;
  const option = options.find(
    (option: PaginatedMultiSelecOption) => option.value === currentValue
  );

  const internalChanged = ([value]: PaginatedMultiSelecOption[]) => {
    if (
      currentValue.some(
        (item: PaginatedMultiSelecOption) => item.value === value.value
      )
    ) {
      const newValue = currentValue.filter(
        (item: PaginatedMultiSelecOption) => item.value !== value.value
      );
      setInternalValue(newValue);
      return onChange(newValue);
    }
    const newValue = [...currentValue, value];
    setInternalValue(newValue);
    return onChange(newValue);
  };

  const [visible, hide, show] = useVisible();

  const ref = useRef<HTMLInputElement>(null);
  const { ref: containerRef, borderBoxSize } = useResizeObserver();

  const handleClick = useMutableCallback(() => {
    if (visible === AnimatedVisibility.VISIBLE) {
      return hide();
    }
    if (ref && ref.current) {
      ref.current.focus();
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
                    ref={ref}
                    aria-haspopup='listbox'
                    onClick={show}
                    onBlur={hide}
                    order={1}
                    rcx-input-box--undecorated
                    children={!value ? option || placeholder : null}
                  />
                  {currentValue.map(
                    (value: PaginatedMultiSelecOption, index: number) => (
                      <SelectedOptions
                        {...(withTitle && {
                          title:
                            value.label ||
                            options.find(
                              (val: PaginatedMultiSelecOption) =>
                                val.value === value
                            )?.label,
                        })}
                        tabIndex={-1}
                        role='option'
                        key={index}
                        onMouseDown={(e: SyntheticEvent) => {
                          prevent(e);
                          internalChanged([value]);
                          return false;
                        }}
                        children={
                          value.label ||
                          options.find(
                            (val: PaginatedMultiSelecOption) =>
                              val.value === value
                          )?.label
                        }
                      />
                    )
                  )}
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
            {...(withTitle && { title: withTitle })}
            width={borderBoxSize.inlineSize}
            onMouseDown={prevent}
            multiple
            filter={filter}
            role='listbox'
            options={options}
            onSelect={internalChanged}
            endReached={endReached}
          />
        </Position>
      </AnimatedVisibility>
    </Box>
  );
};

type PaginatedMultiSelectFilteredProps = ComponentProps<typeof Box> & {
  setFilter?: (value: PaginatedMultiSelecOption['value']) => void;
  placeholder: string;
  error?: boolean;
  options: PaginatedMultiSelecOption[];
  filter?: string;
  value?: PaginatedMultiSelecOption['value'];
};

export const PaginatedMultiSelectFiltered = ({
  filter,
  setFilter,
  options,
  placeholder,
  ...props
}: PaginatedMultiSelectFilteredProps) => {
  const anchor = useCallback(
    forwardRef(
      (
        {
          children: _children,
          filter,
          ...props
        }: ComponentProps<typeof InputBox>,
        ref: Ref<HTMLInputElement>
      ) => (
        <Flex.Item grow={1}>
          <InputBox.Input
            ref={ref}
            placeholder={placeholder}
            value={filter}
            onInput={(e: SyntheticEvent) =>
              setFilter &&
              setFilter((e.currentTarget as HTMLInputElement).value)
            }
            {...props}
            rcx-input-box--undecorated
          />
        </Flex.Item>
      )
    ),
    []
  );
  return (
    <PaginatedMultiSelect
      filter={filter}
      options={options}
      {...props}
      anchor={anchor}
    />
  );
};
