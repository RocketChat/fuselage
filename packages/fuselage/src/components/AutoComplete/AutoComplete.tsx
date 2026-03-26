import {
  useStableCallback,
  useResizeObserver,
} from '@rocket.chat/fuselage-hooks';
import type {
  AllHTMLAttributes,
  ChangeEvent,
  ComponentType,
  FocusEvent,
  MouseEvent,
  ReactNode,
} from 'react';
import { useEffect, useRef, useMemo, useState } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../primitives';
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

// .rcx-autocomplete — extends .rcx-select which extends %rcx-input-box / %input
const AutoCompleteFrame = styled(RcxView, {
  name: 'AutoCompleteFrame',

  position: 'relative',

  display: 'inline-flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  flexGrow: 1,

  alignItems: 'center',

  minWidth: 144,
  minHeight: '$x40',

  paddingBlock: '$x8',
  paddingInline: 15, // 16px - 1px border

  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '$strokeLight',
  borderRadius: '$x4',
  backgroundColor: '$surfaceLight',
  boxShadow: 'none',

  hoverStyle: {
    borderColor: '$strokeLight',
  },

  focusVisibleStyle: {
    borderColor: '$strokeHighlight',
    boxShadow: '0 0 0 2px var(--shadowHighlight)',
  },

  pressStyle: {
    borderColor: '$strokeMedium',
    boxShadow: 'none',
  },

  variants: {
    isInvalid: {
      true: {
        borderColor: '$strokeError',

        hoverStyle: {
          borderColor: '$strokeError',
        },

        focusVisibleStyle: {
          borderColor: '$strokeError',
          boxShadow: '0 0 0 2px var(--shadowDanger)',
        },

        pressStyle: {
          borderColor: '$strokeMedium',
          boxShadow: 'none',
        },
      },
    },

    isDisabled: {
      true: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        borderColor: '$strokeLight',
        backgroundColor: '$surfaceDisabled',
      },
    },
  } as const,
});

// .rcx-autocomplete__addon — extends .rcx-input-box__addon
const AutoCompleteAddon = styled(RcxView, {
  name: 'AutoCompleteAddon',

  cursor: 'pointer',

  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 'auto',

  alignItems: 'flex-start',
});

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

  const handleSelect = useStableCallback(
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

  const handleRemove = useStableCallback(
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

  const handleOnBlur = useStableCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      hide();
      onBlurAction(event);
    },
  );

  useEffect(reset, [filter, reset]);

  return (
    <AutoCompleteFrame
      ref={containerRef as any}
      onClick={useStableCallback(() => ref.current?.focus())}
      isInvalid={error || undefined}
      isDisabled={disabled || undefined}
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
            onChange={useStableCallback((e: ChangeEvent<HTMLInputElement>) =>
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
      <AutoCompleteAddon>
        <Icon
          name={
            optionsAreVisible === AnimatedVisibility.VISIBLE
              ? 'cross'
              : 'magnifier'
          }
          size='x20'
          color='default'
        />
      </AutoCompleteAddon>
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
    </AutoCompleteFrame>
  );
}

export default AutoComplete;
