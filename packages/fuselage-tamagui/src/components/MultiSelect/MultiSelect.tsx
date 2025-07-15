import {
  styled,
  XStack,
  YStack,
  Input,
  AnimatePresence,
  Text,
  Button,
  Theme,
} from 'tamagui';
import { useState, useRef, useMemo, useCallback } from 'react';
import type { ComponentProps, ElementType } from 'react';

const MultiSelectContainer = styled(YStack, {
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

const MultiSelectInput = styled(Input, {
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

const SelectedChip = styled(Button, {
  size: '$2',
  backgroundColor: '$background2',
  borderRadius: '$2',
  paddingHorizontal: '$2',
  paddingVertical: '$1',
});

type SelectOption = [string, string, boolean?];

type MultiSelectProps = {
  value?: string[];
  options?: SelectOption[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  renderItem?: ElementType;
  renderSelected?: ElementType;
} & Omit<ComponentProps<typeof Input>, 'onChange'>;

export function MultiSelect({
  value = [],
  options = [],
  onChange,
  placeholder,
  error,
  disabled,
  renderItem: RenderItem,
  renderSelected: RenderSelected,
  onBlur: onBlurAction = () => {},
  ...props
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelect = useCallback((selectedValue: string) => {
    if (value.includes(selectedValue)) {
      onChange(value.filter(v => v !== selectedValue));
    } else {
      onChange([...value, selectedValue]);
    }
    setFilter('');
  }, [value, onChange]);

  const handleRemove = useCallback((itemValue: string) => {
    onChange(value.filter(v => v !== itemValue));
  }, [value, onChange]);

  const filteredOptions = useMemo(() => {
    if (!filter) return options;
    return options.filter(([, label]) =>
      label.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, options]);

  const selectedOptions = useMemo(() => {
    return options.filter(([optionValue]) => value.includes(optionValue));
  }, [options, value]);

  return (
    <Theme name="light">
      <MultiSelectContainer error={error} disabled={disabled}>
        <XStack flex={1} flexWrap="wrap" gap="$2" padding="$2" borderWidth={1} borderColor="$borderColor" borderRadius="$2">
          {selectedOptions.map(([optionValue, label]) =>
            RenderSelected ? (
              <RenderSelected
                key={optionValue}
                value={optionValue}
                label={label}
                onRemove={() => handleRemove(optionValue)}
              />
            ) : (
              <SelectedChip
                key={optionValue}
                onPress={() => handleRemove(optionValue)}
              >
                <Text fontSize="$2">{label} ×</Text>
              </SelectedChip>
            )
          )}
          <MultiSelectInput
            ref={inputRef}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            onFocus={() => setIsOpen(true)}
            onBlur={(e) => {
              onBlurAction(e);
              setTimeout(() => setIsOpen(false), 200);
            }}
            placeholder={!selectedOptions.length ? placeholder : undefined}
            flex={1}
            minWidth={100}
            {...props}
          />
        </XStack>

        <AnimatePresence>
          {isOpen && (
            <OptionsContainer
              animation="quick"
              enterStyle={{ opacity: 0, scale: 0.95 }}
              exitStyle={{ opacity: 0, scale: 0.95 }}
              y={0}
            >
              {filteredOptions.length > 0 ? (
                filteredOptions.map(([optionValue, label]) =>
                  RenderItem ? (
                    <RenderItem
                      key={optionValue}
                      value={optionValue}
                      label={label}
                      selected={value.includes(optionValue)}
                      onSelect={() => handleSelect(optionValue)}
                    />
                  ) : (
                    <Button
                      key={optionValue}
                      onPress={() => handleSelect(optionValue)}
                      width="100%"
                      justifyContent="flex-start"
                      backgroundColor={value.includes(optionValue) ? '$background2' : 'transparent'}
                    >
                      <Text>{value.includes(optionValue) ? '✓ ' : ''}{label}</Text>
                    </Button>
                  )
                )
              ) : (
                <Text padding="$3" color="$color2">No options found</Text>
              )}
            </OptionsContainer>
          )}
        </AnimatePresence>
      </MultiSelectContainer>
    </Theme>
  );
}

export default MultiSelect;