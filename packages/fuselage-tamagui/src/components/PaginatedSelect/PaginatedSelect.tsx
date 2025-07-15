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

const SelectContainer = styled(YStack, {
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

const SelectInput = styled(XStack, {
  padding: '$2',
  borderRadius: '$2',
  borderWidth: 1,
  borderColor: '$borderColor',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '$4',
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

type PaginatedOption = {
  value: string | number;
  label: string;
};

type PaginatedSelectProps = {
  value?: string | number;
  options?: PaginatedOption[];
  onChange: (value: string | number) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  filter?: string;
  setFilter?: (filter: string) => void;
  endReached?: (index: number) => void;
  renderItem?: ElementType;
} & Omit<ComponentProps<typeof SelectInput>, 'onChange'>;

export function PaginatedSelect({
  value,
  options = [],
  onChange,
  placeholder,
  error,
  disabled,
  filter,
  setFilter,
  endReached,
  renderItem: RenderItem,
  onBlur: onBlurAction = () => {},
  ...props
}: PaginatedSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectedOption = useMemo(() => {
    return options.find(option => option.value === value);
  }, [options, value]);

  const handleSelect = useCallback((selectedValue: string | number) => {
    onChange(selectedValue);
    setIsOpen(false);
  }, [onChange]);

  const filteredOptions = useMemo(() => {
    if (!filter) return options;
    return options.filter(option =>
      option.label.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter, options]);

  return (
    <Theme name="light">
      <SelectContainer error={error} disabled={disabled}>
        <SelectInput
          onPress={() => !disabled && setIsOpen(!isOpen)}
          {...props}
        >
          <Text color={selectedOption ? '$color' : '$color2'}>
            {selectedOption?.label || placeholder || 'Select...'}
          </Text>
          <Text>▼</Text>
        </SelectInput>

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
                      {...option}
                      selected={option.value === value}
                      onSelect={() => handleSelect(option.value)}
                      onEndReached={() => endReached?.(index)}
                    />
                  ) : (
                    <Button
                      key={option.value}
                      onPress={() => handleSelect(option.value)}
                      width="100%"
                      justifyContent="flex-start"
                      backgroundColor={option.value === value ? '$background2' : 'transparent'}
                    >
                      <Text>{option.label}</Text>
                    </Button>
                  )
                )
              ) : (
                <Text padding="$3" color="$color2">No options found</Text>
              )}
            </OptionsContainer>
          )}
        </AnimatePresence>
      </SelectContainer>
    </Theme>
  );
}

export default PaginatedSelect;