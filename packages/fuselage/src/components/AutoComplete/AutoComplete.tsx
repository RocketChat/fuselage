import { useEffectEvent, useResizeObserver } from '@rocket.chat/fuselage-hooks';
import type {
  AllHTMLAttributes,
  ChangeEvent,
  ComponentType,
  FocusEvent,
  MouseEvent,
  ReactNode,
} from 'react';
import { useEffect, useRef, useMemo, useState } from 'react';

import { AnimatedVisibility } from '../AnimatedVisibility';
import { Box } from '../Box';
import { Chip } from '../Chip';
import { Icon } from '../Icon';
import { Input } from '../InputBox';
import { Margins } from '../Margins';
import { useCursor, Options, type OptionType } from '../Options';
import { PositionAnimated } from '../PositionAnimated';

type AutoCompleteOption<TLabel> = {
  value: string;
  label: TLabel;
};

export type AutoCompleteProps<TLabel> = Omit<
  AllHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'is'
> & {
  filter: string;
  setFilter?: (filter: string) => void;
  options?: AutoCompleteOption<TLabel>[];
  renderSelected?: ComponentType<{
    selected: AutoCompleteOption<TLabel>;
    onRemove?: (event: MouseEvent<HTMLButtonElement>) => void;
  }>;
  onChange: (value: string | string[]) => void;
  renderItem?: ComponentType<{
    role?: string;
    label: TLabel;
    value: string;
    selected?: boolean;
    focus?: boolean;
  }>;
  renderEmpty?: ComponentType<{
    customEmpty?: string;
  }>;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  multiple?: boolean;
  value?: string | string[];
};

const getSelected = <TLabel,>(
  value: string | string[] | undefined,
  options: AutoCompleteOption<TLabel>[],
) => {
  if (!value) {
    return [];
  }
  return typeof value === 'string'
    ? options.filter((option) => option.value === value)
    : options?.filter((option) => value.includes(option.value));
};

const isSelectedValid =
  <TLabel,>(value: string | string[] | undefined) =>
  (selected: AutoCompleteOption<TLabel>) => {
    if (!value) {
      return false;
    }

    return typeof value === 'string'
      ? selected.value === value
      : value.includes(selected.value);
  };

/**
 * An input for selection of options.
 */
function AutoComplete<TLabel = ReactNode>({
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
  onBlur: onBlurAction = () => {},
  ...props
}: AutoCompleteProps<TLabel>) {
  const ref = useRef<HTMLInputElement>(null);
  const { ref: containerRef, borderBoxSize } = useResizeObserver();

  const [selected, setSelected] = useState(
    () => getSelected(value, options) || [],
  );

  useEffect(() => {
    // Validates if selected items are still valid after value changes
    setSelected((selected) => {
      return !selected.every(isSelectedValid(value))
        ? selected.filter(isSelectedValid(value))
        : selected;
    });
  }, [value]);

  const handleSelect = useEffectEvent(
    ([newValue]: OptionType<string, TLabel>) => {
      if (selected.some((item) => item.value === newValue)) {
        hide();
        return;
      }

      if (multiple) {
        setSelected([...selected, ...getSelected(newValue as string, options)]);
        onChange([...(value || []), newValue as string]);
      } else {
        setSelected(getSelected(newValue as string, options));
        onChange(newValue as string);
      }

      setFilter?.('');
      hide();
    },
  );

  const handleRemove = useEffectEvent(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      event.preventDefault();

      const filtered = selected.filter(
        (item) => item.value !== event.currentTarget.value,
      );

      const filteredValue =
        multiple && Array.isArray(value)
          ? value?.filter((item) => item !== event.currentTarget.value) || []
          : '';

      setSelected(filtered);
      onChange(filteredValue);
      hide();
    },
  );

  const memoizedOptions = useMemo(
    () =>
      options.map(
        ({ value, label }): OptionType<string, TLabel> => [value, label],
      ),
    [options],
  );

  const firstSelectedIndex = useMemo(
    () => options.findIndex((option) => selected[0]?.value === option.value),
    [options, selected],
  );

  const [cursor, handleKeyDown, , reset, [optionsAreVisible, hide, show]] =
    useCursor(firstSelectedIndex, memoizedOptions, handleSelect);

  const handleOnBlur = useEffectEvent((event: FocusEvent<HTMLInputElement>) => {
    hide();
    onBlurAction(event);
  });

  useEffect(reset, [filter, reset]);

  const handleClear = (e: MouseEvent) => {
    e.stopPropagation();
    setFilter?.('');
    onChange(multiple ? [] : '');
    hide();
    if (ref.current) {
      ref.current.blur();
    }
  };
  return (
    <Box
      rcx-autocomplete
      ref={containerRef}
      onClick={useEffectEvent(() => ref.current?.focus())}
      flexGrow={1}
      className={useMemo(
        () => [error && 'invalid', disabled && 'disabled'],
        [error, disabled],
      )}
    >
      <Box
        display='flex'
        flexGrow={1}
        alignItems='center'
        flexWrap='wrap'
        margin='neg-x4'
        role='group'
      >
        <Margins all='x4'>
          <Input
            ref={ref}
            onChange={useEffectEvent((e: ChangeEvent<HTMLInputElement>) =>
              setFilter?.(e.currentTarget.value),
            )}
            onBlur={handleOnBlur}
            onFocus={show}
            onKeyDown={handleKeyDown}
            placeholder={
              optionsAreVisible === AnimatedVisibility.HIDDEN || !value
                ? placeholder
                : undefined
            }
            order={1}
            rcx-input-box--undecorated
            value={filter}
            disabled={disabled}
            {...props}
          />
          {selected.map((itemSelected) =>
            RenderSelected ? (
              <RenderSelected
                key={itemSelected.value}
                selected={itemSelected}
                onRemove={handleRemove}
              />
            ) : (
              <Chip
                key={itemSelected.value}
                value={itemSelected.value}
                children={itemSelected.label as ReactNode}
                onClick={handleRemove}
              />
            ),
          )}
        </Margins>
      </Box>
      <Box rcx-autocomplete__addon>
        <Icon
          name={
            optionsAreVisible === AnimatedVisibility.VISIBLE
              ? 'cross'
              : 'magnifier'
          }
          size='x20'
          color='default'

          onClick={(e) =>
            optionsAreVisible === AnimatedVisibility.VISIBLE
              ? handleClear(e)
              : ref.current?.focus()
          }
          onMouseDown={(e) => e.preventDefault()}
        />
      </Box>
      <PositionAnimated visible={optionsAreVisible} anchor={containerRef}>
        <Options
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

export default AutoComplete;
