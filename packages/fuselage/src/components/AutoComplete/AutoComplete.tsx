import { useEffectEvent, useResizeObserver } from '@rocket.chat/fuselage-hooks';
import type {
  AllHTMLAttributes,
  ChangeEvent,
  ComponentProps,
  ElementType,
  FocusEvent,
  MouseEvent,
  ReactElement,
  ReactNode,
} from 'react';
import { useEffect, useRef, useMemo, useState } from 'react';

import AnimatedVisibility from '../AnimatedVisibility';
import Box from '../Box';
import Chip from '../Chip';
import { Icon } from '../Icon';
import { Input } from '../InputBox';
import Margins from '../Margins';
import type { OptionType } from '../Options';
import { useCursor, Options } from '../Options';
import PositionAnimated from '../PositionAnimated';

const Addon = (props: ComponentProps<typeof Box>) => (
  <Box rcx-autocomplete__addon {...props} />
);

type AutoCompleteOption = {
  value: string;
  // TODO: label type shoudn't be unknown
  label: unknown;
};

type AutoCompleteProps = Omit<
  AllHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'is'
> & {
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
  value?: string | string[];
};

const getSelected = (
  value: string | string[] | undefined,
  options: AutoCompleteOption[],
) => {
  if (!value) {
    return [];
  }
  return typeof value === 'string'
    ? options.filter((option) => option.value === value)
    : options?.filter((option) => value.includes(option.value));
};

const isSelectedValid =
  (value: string | string[] | undefined) => (selected: AutoCompleteOption) => {
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
  onBlur: onBlurAction = () => {},
  ...props
}: AutoCompleteProps): ReactElement {
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

  const handleSelect = useEffectEvent(([newValue]: OptionType) => {
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
  });

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

  const memoizedOptions = useMemo<OptionType[]>(
    () => options.map(({ value, label }) => [value, label as ReactNode]),
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
      <Addon
        children={
          <Icon
            name={
              optionsAreVisible === AnimatedVisibility.VISIBLE
                ? 'cross'
                : 'magnifier'
            }
            size='x20'
            color='default'
          />
        }
      />
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
