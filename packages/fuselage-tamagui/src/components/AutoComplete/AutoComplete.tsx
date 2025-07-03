import type { ComponentProps, ElementType } from 'react';
import { useState, useRef, useMemo, useCallback } from 'react';
import {
  styled,
  XStack,
  YStack,
  Input,
  AnimatePresence,
  Text,
  SizableText,
  Theme,
  Button,
} from 'tamagui';

// Styled components remain the same
const AutoCompleteContainer = styled(YStack, {
  flex: 1,
  position: 'relative',
  variants: {
    error: {
      true: {
        borderColor: '$stroke-error',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  },
});

const AutoCompleteInput = styled(Input, {
  flex: 1,
  padding: '$2',
  borderRadius: '$2',
});

const OptionsContainer = styled(YStack, {
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  backgroundColor: '$background',
  borderRadius: '$2',
  borderWidth: 1,
  borderColor: '$borderColor',
  zIndex: 1000,
  marginTop: 4,
  maxHeight: 200,
  overflow: 'auto',
});

type AutoCompleteOption = {
  value: string;
  label: string;
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
} & Omit<ComponentProps<typeof Input>, 'onChange'>;

const getSelected = (
  value: string | string[],
  options: AutoCompleteOption[],
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
  renderItem: RenderItem,
  renderSelected: RenderSelected,
  onChange,
  renderEmpty: RenderEmpty,
  placeholder,
  error,
  disabled,
  multiple,
  onBlur: onBlurAction = () => {},
  ...props
}: AutoCompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(() =>
    getSelected(value ?? '', options),
  );

  const handleSelect = useCallback(
    (selectedValue: string) => {
      if (selected?.some((item) => item.value === selectedValue)) {
        setIsOpen(false);
        return;
      }

      if (multiple) {
        const newSelected = [
          ...selected,
          ...getSelected(selectedValue, options),
        ];
        setSelected(newSelected);
        onChange([...(value as string[]), selectedValue]);
      } else {
        setSelected(getSelected(selectedValue, options));
        onChange(selectedValue);
      }

      setFilter?.('');
      setIsOpen(false);
    },
    [selected, multiple, options, onChange, setFilter, value],
  );

  const handleRemove = useCallback(
    (itemValue: string) => {
      const filtered = selected.filter((item) => item.value !== itemValue);
      const filteredValue = Array.isArray(value)
        ? value.filter((item) => item !== itemValue)
        : [];

      setSelected(filtered);
      onChange(filteredValue);
      setIsOpen(false);
    },
    [selected, onChange, value],
  );

  const filteredOptions = useMemo(() => {
    if (!filter) return options;
    return options.filter((option) =>
      option.label.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [filter, options]);

  return (
    <Theme name='light'>
      <AutoCompleteContainer error={error} disabled={disabled}>
        <XStack flex={1} flexWrap='wrap' gap='$2'>
          <AutoCompleteInput
            ref={inputRef}
            value={filter}
            onChange={(e) => setFilter?.(e.target.value)}
            onFocus={() => setIsOpen(true)}
            onBlur={(e) => {
              onBlurAction(e);
              // Delay to allow click events on options
              setTimeout(() => setIsOpen(false), 200);
            }}
            placeholder={!selected.length ? placeholder : undefined}
            {...props}
          />
          {selected.map((item) =>
            RenderSelected ? (
              <RenderSelected
                key={item.value}
                selected={item}
                onRemove={() => handleRemove(item.value)}
              />
            ) : (
              <Button
                key={item.value}
                size='$2'
                onPress={() => handleRemove(item.value)}
              >
                <SizableText>{item.label}</SizableText>
              </Button>
            ),
          )}
        </XStack>

        <AnimatePresence>
          {isOpen && (
            <OptionsContainer
              animation='quick'
              enterStyle={{ opacity: 0, scale: 0.95 }}
              exitStyle={{ opacity: 0, scale: 0.95 }}
              y={0}
            >
              {filteredOptions.length > 0
                ? filteredOptions.map((option) =>
                    RenderItem ? (
                      <RenderItem
                        key={option.value}
                        {...option}
                        onSelect={() => handleSelect(option.value)}
                      />
                    ) : (
                      <Button
                        key={option.value}
                        onPress={() => handleSelect(option.value)}
                        width='100%'
                        justifyContent='flex-start'
                      >
                        <Text>{option.label}</Text>
                      </Button>
                    ),
                  )
                : RenderEmpty && <RenderEmpty />}
            </OptionsContainer>
          )}
        </AnimatePresence>
      </AutoCompleteContainer>
    </Theme>
  );
}

export default AutoComplete;
