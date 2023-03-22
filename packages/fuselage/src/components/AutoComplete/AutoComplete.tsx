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
  value: string | string[];
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
  setFilter = () => {},
  options = [],
  renderItem,
  renderSelected: RenderSelected,
  onChange = () => {},
  renderEmpty,
  placeholder,
  error,
  disabled,
  multiple,
}: AutoCompleteProps): ReactElement {
  const { ref: containerRef, borderBoxSize } = useResizeObserver();

  const ref = useRef();
  const [selected, setSelected] = useState(
    () => getSelected(value, options) || []
  );

  const handleSelect = useMutableCallback(([value]) => {
    if (selected?.some((item) => item.value === value)) {
      hide();
      return;
    }
    multiple
      ? setSelected([...selected, ...getSelected(value, options)])
      : setSelected(getSelected(value, options));
    onChange(value);
    setFilter('');
    hide();
  });

  const handleRemove = useMutableCallback((event) => {
    event.stopPropagation();
    event.preventDefault();

    const filtered = selected.filter(
      (item) => item.value !== event.currentTarget.value
    );
    setSelected(filtered);
    hide();
  });

  const memoizedOptions = useMemo(
    () => options.map(({ label, value }) => [value, label]),
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
                  selected={itemSelected}
                  onRemove={handleRemove}
                />
              ) : (
                <Chip
                  role='option'
                  value={itemSelected.value}
                  label={itemSelected.label.name}
                  children={itemSelected.label.name}
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
