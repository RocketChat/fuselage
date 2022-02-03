import {
  useMutableCallback,
  useResizeObserver,
} from '@rocket.chat/fuselage-hooks';
import React, {
  useEffect,
  useRef,
  useMemo,
  useState,
  ComponentProps,
  ElementType,
  FC,
} from 'react';

import { Box, PositionAnimated, AnimatedVisibility } from '../Box';
import Chip from '../Chip';
import { Icon } from '../Icon';
import { InputBox } from '../InputBox';
import Margins from '../Margins';
import { useCursor, Options, OptionType } from '../Options';

type OptionValue = string | number;
type AutoCompleteOption = {
  value: OptionValue;
  label?: string | number;
};

type AutoCompleteProps = Omit<ComponentProps<typeof Options>, 'options'> & {
  value: OptionValue;
  filter: string;
  setFilter?: (filter: string) => void;
  options?: AutoCompleteOption[];
  renderItem?: ElementType;
  renderSelected?: ElementType;
  onChange: (value: OptionValue, action?: 'remove' | undefined) => void;
  getLabel?: (option: AutoCompleteOption) => string;
  getValue?: (option: AutoCompleteOption) => OptionValue;
  renderEmpty?: ElementType;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
};

const Addon = (props: ComponentProps<typeof Box>) => (
  <Box rcx-autocomplete__addon {...props} />
);

const SelectedOptions = React.memo((props) => <Chip {...props} />);
export const AutoComplete: FC<AutoCompleteProps> = ({
  value,
  filter,
  setFilter = () => {},
  options = [],
  renderItem,
  renderSelected: RenderSelected = SelectedOptions,
  onChange = () => {},
  getLabel = ({ label }) => label,
  getValue = ({ value }) => value,
  renderEmpty,
  placeholder,
  error,
  disabled,
}) => {
  const { ref: containerRef, borderBoxSize } = useResizeObserver();

  const ref = useRef<HTMLElement>(null);

  const [selected, setSelected] = useState(() =>
    options.find((option) => getValue(option) === value)
  );

  const index = (selected && options.indexOf(selected)) || 0;

  const selectByKeyboard = useMutableCallback(([value]) => {
    setSelected(options.find((option) => getValue(option) === value));
    onChange(value);
    setFilter('');
  });

  const memoizedOptions = useMemo<OptionType[]>(
    () => options.map(({ label, value }) => [value, label]),
    [options]
  );

  const [cursor, handleKeyDown, , reset, [optionsAreVisible, hide, show]] =
    useCursor(index, memoizedOptions, selectByKeyboard);

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
      onClick={useMutableCallback(() => ref.current && ref.current.focus())}
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
};
