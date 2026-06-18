import { useEffectEvent, useResizeObserver } from '@rocket.chat/fuselage-hooks';
import type {
  AllHTMLAttributes,
  ChangeEvent,
  ComponentType,
  FocusEvent,
  MouseEvent,
  ReactNode,
} from 'react';
import { useEffect, useMemo, useRef } from 'react';

import { AnimatedVisibility } from '../AnimatedVisibility';
import { Box } from '../Box';
import { Chip } from '../Chip';
import { Icon } from '../Icon';
import { Input } from '../InputBox';
import { Margins } from '../Margins';
import { Options, type OptionType } from '../Options';
import { PositionAnimated } from '../PositionAnimated';
import { useAutoCompleteCursor } from './useAutoCompleteCursor';

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

/**
 * Resolves the currently selected options from the controlled `value`.
 * The selection is always derived — never duplicated in local state — so it
 * cannot drift from `value`/`options`.
 */
const getSelected = <TLabel,>(
  value: string | string[] | undefined,
  options: AutoCompleteOption<TLabel>[],
): AutoCompleteOption<TLabel>[] => {
  if (!value) {
    return [];
  }
  return typeof value === 'string'
    ? options.filter((option) => option.value === value)
    : options.filter((option) => value.includes(option.value));
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
  onBlur: onBlurAction = () => undefined,
  ...props
}: AutoCompleteProps<TLabel>) {
  const ref = useRef<HTMLInputElement>(null);
  const { ref: containerRef, borderBoxSize } = useResizeObserver();

  const selected = useMemo(
    () => getSelected(value, options),
    [value, options],
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

  const handleSelect = useEffectEvent(
    ([newValue]: OptionType<string, TLabel>) => {
      if (selected.some((item) => item.value === newValue)) {
        hide();
        return;
      }

      if (multiple) {
        const current = Array.isArray(value) ? value : [];
        onChange([...current, newValue]);
      } else {
        onChange(newValue);
      }

      setFilter?.('');
      hide();
    },
  );

  const handleRemove = useEffectEvent(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      event.preventDefault();

      const removed = event.currentTarget.value;

      onChange(
        multiple && Array.isArray(value)
          ? value.filter((item) => item !== removed)
          : '',
      );
      hide();
    },
  );

  const { cursor, visible, show, hide, reset, handleKeyDown } =
    useAutoCompleteCursor(firstSelectedIndex, memoizedOptions, handleSelect);

  const handleOnBlur = useEffectEvent((event: FocusEvent<HTMLInputElement>) => {
    hide();
    onBlurAction(event);
  });

  const handleOnChange = useEffectEvent((e: ChangeEvent<HTMLInputElement>) =>
    setFilter?.(e.currentTarget.value),
  );

  const handleClick = useEffectEvent(() => ref.current?.focus());

  useEffect(reset, [filter, reset]);

  return (
    <Box
      rcx-autocomplete
      ref={containerRef}
      onClick={handleClick}
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
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            onFocus={show}
            onKeyDown={handleKeyDown}
            placeholder={
              visible === AnimatedVisibility.HIDDEN || !value
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
          name={visible === AnimatedVisibility.VISIBLE ? 'cross' : 'magnifier'}
          size='x20'
          color='default'
        />
      </Box>
      <PositionAnimated visible={visible} anchor={containerRef}>
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
