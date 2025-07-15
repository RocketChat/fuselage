import {
  styled,
  XStack,
  YStack,
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

export type PaginatedMultiSelectOption = {
  value: string | number;
  label: string;
};

type PaginatedMultiSelectProps = {
  value?: PaginatedMultiSelectOption[];
  options?: PaginatedMultiSelectOption[];
  onChange: (value: PaginatedMultiSelectOption[]) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  filter?: string;
  endReached?: (start?: number, end?: number) => void;
  renderItem?: ElementType;
  renderSelected?: ElementType;
} & Omit<ComponentProps<typeof XStack>, 'onChange'>;

export function PaginatedMultiSelect({
  value = [],
  options = [],
  onChange,
  placeholder,
  error,
  disabled,
  filter,
  endReached,
  renderItem: RenderItem,
  renderSelected: RenderSelected,
  ...props
}: PaginatedMultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = useCallback((selectedOption: PaginatedMultiSelectOption) => {
    const isSelected = value.some(v => v.value === selectedOption.value);
    if (isSelected) {
      onChange(value.filter(v => v.value !== selectedOption.value));
    } else {
      onChange([...value, selectedOption]);
    }
  }, [value, onChange]);

  const handleRemove = useCallback((optionValue: string | number) => {
    onChange(value.filter(v => v.value !== optionValue));
  }, [value, onChange]);

  const filteredOptions = useMemo(() => {
    if (!filter) return options;
    return options.filter(option =>
      option.label.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, options]);

  return (
    <Theme name="light">
      <MultiSelectContainer error={error} disabled={disabled}>
        <XStack 
          flex={1} 
          flexWrap="wrap" 
          gap="$2" 
          padding="$2" 
          borderWidth={1} 
          borderColor="$borderColor" 
          borderRadius="$2"
          onPress={() => !disabled && setIsOpen(!isOpen)}
          {...props}
        >
          {value.map((option) =>
            RenderSelected ? (
              <RenderSelected
                key={option.value}
                option={option}
                onRemove={() => handleRemove(option.value)}
              />
            ) : (
              <SelectedChip
                key={option.value}
                onPress={() => handleRemove(option.value)}
              >
                <Text fontSize="$2">{option.label} ×</Text>
              </SelectedChip>
            )
          )}
          {!value.length && (
            <Text color="$color2" padding="$1">
              {placeholder || 'Select options...'}
            </Text>
          )}
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
                filteredOptions.map((option, index) =>
                  RenderItem ? (
                    <RenderItem
                      key={option.value}
                      option={option}
                      selected={value.some(v => v.value === option.value)}
                      onSelect={() => handleSelect(option)}
                      onEndReached={() => endReached?.(index, filteredOptions.length)}
                    />
                  ) : (
                    <Button
                      key={option.value}
                      onPress={() => handleSelect(option)}
                      width="100%"
                      justifyContent="flex-start"
                      backgroundColor={value.some(v => v.value === option.value) ? '$background2' : 'transparent'}
                    >
                      <Text>{value.some(v => v.value === option.value) ? '✓ ' : ''}{option.label}</Text>
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

export default PaginatedMultiSelect;