// @ts-nocheck
import {
  useMutableCallback,
  useResizeObserver,
} from '@rocket.chat/fuselage-hooks';
import type { ComponentProps, ElementType, ReactElement } from 'react';
import React, { useEffect, useRef, useMemo, useState } from 'react';

import AnimatedVisibility from '../AnimatedVisibility';
import Box from '../Box';
import Chip from '../Chip';
import { Icon } from '../Icon';
import { InputBox } from '../InputBox';
import Margins from '../Margins';
import { useCursor, Options } from '../Options';
import PositionAnimated from '../PositionAnimated';

const Addon = (props: ComponentProps<typeof Box>) => (
  <Box rcx-autocomplete__addon {...props} />
);

type AutoCompleteOption = {
  value: string;
  label: unknown;
};

type AutoCompleteProps = {
  value?: string | string[];
  filter: string;
  setFilter?: (filter: string) => void;
  options?: AutoCompleteOption[];
  renderItem?: ElementType;
  renderSelected?: ElementType;
  onChange: (value: string | string[]) => void;
  renderEmpty?: ElementType;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  multiple?: boolean;
};

const getSelected = (
  value: string | string[],
  options: AutoCompleteOption[]
) => {
  if (!value) {
    return [];
  }
  return typeof value === 'string'
    ? options.filter((option) => option.value === value)
    : options?.filter((option) => value.includes(option.value));
};

export function AutoComplete({
  value,
  filter,
  setFilter,
  options = [],
  renderItem,
  renderSelected: RenderSelected,
  onChange,
  renderEmpty,
  placeholder,
  error,
  disabled,
  multiple,
}: AutoCompleteProps): ReactElement {
  const ref = useRef();
  const { ref: containerRef, borderBoxSize } = useResizeObserver();

  const [selected, setSelected] = useState(
    () => getSelected(value, options) || []
  );

  const handleSelect = useMutableCallback(([currentValue]) => {
    if (selected?.some((item) => item.value === currentValue)) {
      hide();
      return;
    }

    if (multiple) {
      setSelected([...selected, ...getSelected(currentValue, options)]);
      onChange([...value, currentValue]);
    } else {
      setSelected(getSelected(currentValue, options));
      onChange(currentValue);
    }

    setFilter('');
    hide();
  });

  const handleRemove = useMutableCallback((event) => {
    event.stopPropagation();
    event.preventDefault();

    const filtered = selected.filter(
      (item) => item.value !== event.currentTarget.value
    );

    const filteredValue = value.filter(
      (item) => item !== event.currentTarget.value
    );

    setSelected(filtered);
    onChange(filteredValue);
    hide();
  });

  const memoizedOptions = useMemo(
    () => options.map(({ value, label }) => [value, label]),
    [options]
  );

  const [cursor, handleKeyDown, , reset, [optionsAreVisible, hide, show]] =
    useCursor(value, memoizedOptions, handleSelect);

  useEffect(reset, [filter]);

  return (
    <Box
      rcx-autocomplete
      ref={containerRef}
      onClick={useMutableCallback(() => ref.current.focus())}
      flexGrow={1}
      className={useMemo(
        () => [error && 'invalid', disabled && 'disabled'],
        [error, disabled]
      )}
    >
      <Box
        display='flex'
        flexGrow={1}
        alignItems='center'
        flexWrap='wrap'
        margin='neg-x4'
        role='listbox'
      >
        <Margins all='x4'>
          <InputBox.Input
            ref={ref}
            onChange={useMutableCallback((e) =>
              setFilter(e.currentTarget.value)
            )}
            onBlur={hide}
            onFocus={show}
            onKeyDown={handleKeyDown}
            placeholder={
              optionsAreVisible !== AnimatedVisibility.HIDDEN || !value
                ? placeholder
                : undefined
            }
            order={1}
            rcx-input-box--undecorated
            value={filter}
          />
          {selected &&
            selected.map((itemSelected) =>
              RenderSelected ? (
                <RenderSelected
                  key={itemSelected.value}
                  selected={itemSelected}
                  onRemove={handleRemove}
                />
              ) : (
                <Chip
                  role='option'
                  key={itemSelected.value}
                  value={itemSelected.value}
                  label={itemSelected.label}
                  children={itemSelected.label}
                  onClick={handleRemove}
                  selected={selected}
                />
              )
            )}
        </Margins>
      </Box>
      <Addon
        children={
          <Icon
            name={
              optionsAreVisible === AnimatedVisibility.VISIBLE
                ? 'cross'
                : 'magnifier'
            }
            size='x20'
          />
        }
      />
      <PositionAnimated visible={optionsAreVisible} anchor={containerRef}>
        <Options
          role='option'
          width={borderBoxSize.inlineSize}
          onSelect={handleSelect}
          renderItem={renderItem}
          renderEmpty={renderEmpty}
          cursor={cursor}
          value={value}
          options={memoizedOptions}
        />
      </PositionAnimated>
    </Box>
  );
}
