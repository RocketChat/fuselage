import {
  useMutableCallback,
  useResizeObserver,
} from '@rocket.chat/fuselage-hooks';
import React, { useEffect, useRef, useMemo, useState } from 'react';

import { Box, PositionAnimated, AnimatedVisibility } from '../Box';
import Chip from '../Chip';
import { Icon } from '../Icon';
import { InputBox } from '../InputBox';
import Margins from '../Margins';
import { useCursor, Options } from '../Options';

const Addon = (props) => <Box rcx-autocomplete__addon {...props} />;

const SelectedOptions = React.memo((props) => <Chip {...props} />);
export function AutoComplete({
  value,
  filter,
  setFilter = () => {},
  options = [],
  renderItem,
  renderSelected: RenderSelected = SelectedOptions,
  onChange = () => {},
  getLabel = ({ label } = {}) => label,
  getValue = ({ value }) => value,
  renderEmpty,
  placeholder,
  error,
  disabled,
}) {
  const { ref: containerRef, borderBoxSize } = useResizeObserver();

  const ref = useRef();

  const [selected, setSelected] = useState(() =>
    options.find((option) => getValue(option) === value)
  );

  const selectByKeyboard = useMutableCallback(([value]) => {
    setSelected(options.find((option) => getValue(option) === value));
    onChange(value);
    setFilter('');
  });

  const memoizedOptions = useMemo(
    () => options.map(({ label, value }) => [value, label]),
    [options]
  );

  const [
    cursor,
    handleKeyDown,
    ,
    reset,
    [optionsAreVisible, hide, show],
  ] = useCursor(value, memoizedOptions, selectByKeyboard);

  const onSelect = useMutableCallback(([value]) => {
    setSelected(options.find((option) => getValue(option) === value));
    onChange(value);
    setFilter('');
    hide();
  });

  useEffect(reset, [filter]);

  return (
    <Box
      rcx-autocomplete
      ref={containerRef}
      onClick={useMutableCallback(() => ref.current.focus())}
      flexGrow={1}
      className={useMemo(() => [error && 'invalid', disabled && 'disabled'], [
        error,
        disabled,
      ])}
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
          {selected && optionsAreVisible === AnimatedVisibility.HIDDEN && (
            <RenderSelected
              role='option'
              value={value}
              label={getLabel(selected)}
              children={getLabel(selected)}
            />
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
          onSelect={onSelect}
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
