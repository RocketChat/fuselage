import { useResizeObserver, useEffectEvent } from '@rocket.chat/fuselage-hooks';
import type {
  AllHTMLAttributes,
  ComponentProps,
  ElementType,
  ReactElement,
} from 'react';
import { useMemo, useRef, useState, useEffect } from 'react';
import type { View } from 'react-native';
import {
  Input,
  YStack,
  Text,
  AnimatePresence,
  SizableText,
  Theme,
  Button,
  XStack,
} from 'tamagui';

import { Chip } from '../Chip';
import { Icon } from '../Icon';
import { Options, useCursor } from '../Options';

const Addon = (props: ComponentProps<typeof XStack>) => <XStack {...props} />;

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
} & Omit<AllHTMLAttributes<HTMLInputElement>, 'onChange'>;

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
  onBlur: onBlurAction = () => {},
  ...props
}: AutoCompleteProps): ReactElement {
  const ref = useRef<View>(null);
  const { ref: containerRef, borderBoxSize } = useResizeObserver();

  const [selected, setSelected] = useState(
    () => getSelected(value, options) || []
  );

  const handleSelect = useEffectEvent(([currentValue]) => {
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

  const handleRemove = useEffectEvent((event) => {
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

  const handleOnBlur = useEffectEvent((event) => {
    hide();
    onBlurAction(event);
  });

  useEffect(reset, [filter]);

  return (
    <XStack
      ref={containerRef}
      onPress={useEffectEvent(() => ref.current.focus())}
      flexGrow={1}
      borderColor={error ? 'red' : '#ccc'}
      borderWidth={1}
      borderRadius={4}
      padding={8}
      opacity={disabled ? 0.5 : 1}
      alignItems='center'
    >
      <XStack flexGrow={1} flexWrap='wrap' alignItems='center' marginHorizontal={-4}>
        <Input
          ref={ref}
          onChangeText={setFilter}
          onBlur={handleOnBlur}
          onFocus={show}
          onKeyPress={handleKeyDown}
          placeholder={!value ? placeholder : undefined}
          flex={1}
          borderWidth={0}
          value={filter}
          {...props}
        />
        {selected?.length > 0 &&
          selected.map((itemSelected) =>
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
                onPress={handleRemove}
                margin={4}
              >
                {itemSelected.label}
              </Chip>
            )
          )}
      </XStack>
      <Addon paddingLeft={4}>
        <Icon
          name={
            optionsAreVisible
              ? 'cross'
              : 'magnifier'
          }
          size={20}
          color='#333'
        />
      </Addon>
      <AnimatePresence>
        {optionsAreVisible && (
          <YStack
            position='absolute'
            top={borderBoxSize.blockSize}
            left={0}
            right={0}
            backgroundColor='#fff'
            borderWidth={1}
            borderColor='#ccc'
            borderRadius={4}
            maxHeight={200}
            overflow='scroll'
            zIndex={9999}
          >
            <Options
              onSelect={handleSelect}
              renderItem={renderItem}
              renderEmpty={renderEmpty}
              cursor={cursor}
              value={value}
              options={memoizedOptions}
            />
          </YStack>
        )}
      </AnimatePresence>
    </XStack>
  );
}

AutoComplete.displayName = 'AutoComplete';

AutoComplete.Item = Options.Item;

AutoComplete.Empty = Options.Empty;