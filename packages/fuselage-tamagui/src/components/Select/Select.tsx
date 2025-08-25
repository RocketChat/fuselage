import { forwardRef, useState, useCallback } from 'react';
import { Stack, Text, Button, YStack, XStack } from 'tamagui';
import { Icon } from '../Icon';

type SelectOption = readonly [value: string, label: string, selected?: boolean];

type SelectProps = {
  options: SelectOption[];
  value?: string | null;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  small?: boolean;
  'aria-label'?: string;
};

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  function Select(
    { 
      options, 
      value, 
      onChange, 
      placeholder, 
      error, 
      disabled, 
      small,
      'aria-label': ariaLabel,
      ...props 
    }, 
    ref
  ) {
    const [isOpen, setIsOpen] = useState(false);
    
    const selectedOption = options.find(option => option[0] === value);
    const selectedLabel = selectedOption ? selectedOption[1] : null;

    const handleSelect = useCallback((optionValue: string) => {
      onChange?.(optionValue);
      setIsOpen(false);
    }, [onChange]);

    const handleToggle = useCallback(() => {
      if (!disabled) {
        setIsOpen(!isOpen);
      }
    }, [disabled, isOpen]);

    return (
      <Stack position="relative" width="100%">
        <Button
          ref={ref}
          onPress={handleToggle}
          disabled={disabled}
          aria-label={ariaLabel}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          backgroundColor="$colors-n100"
          borderWidth={1}
          borderColor={error ? '$colors-r500' : '$colors-n300'}
          borderRadius="$4"
          paddingHorizontal="$3"
          paddingVertical="$2"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
          minHeight={small ? 32 : 40}
          opacity={disabled ? 0.6 : 1}
          pointerEvents={disabled ? "none" : "auto"}
          {...props}
        >
          <Text
            color={selectedLabel ? '$colors-n900' : '$colors-n600'}
            fontSize={small ? '$2' : '$4'}
            flex={1}
            textAlign="left"
          >
            {selectedLabel || placeholder || 'Select...'}
          </Text>
          <Icon
            name={isOpen ? 'chevron-up' : 'chevron-down'}
            size={small ? 16 : 20}
            color="$colors-n600"
          />
        </Button>

        {isOpen && (
          <YStack
            position="absolute"
            top="100%"
            left={0}
            right={0}
            backgroundColor="$colors-white"
            borderWidth={1}
            borderColor="$colors-n300"
            borderRadius="$4"
            marginTop="$1"
            zIndex={1000}
            maxHeight={200}
            overflow="hidden"
            shadowColor="$colors-n900"
            shadowOffset={{ width: 0, height: 2 }}
            shadowOpacity={0.1}
            shadowRadius={4}
            elevation={4}
          >
            <YStack maxHeight={200} overflow="scroll">
              {options.map((option) => (
                <Button
                  key={option[0]}
                  onPress={() => handleSelect(option[0])}
                  backgroundColor={option[0] === value ? '$colors-n200' : 'transparent'}
                  borderWidth={0}
                  borderRadius={0}
                  paddingHorizontal="$3"
                  paddingVertical="$2"
                  justifyContent="flex-start"
                  alignItems="center"
                  minHeight={small ? 32 : 40}
                  hoverStyle={{
                    backgroundColor: option[0] === value ? '$colors-n200' : '$colors-n100',
                  }}
                >
                  <Text
                    color="$colors-n900"
                    fontSize={small ? '$2' : '$4'}
                    textAlign="left"
                  >
                    {option[1]}
                  </Text>
                </Button>
              ))}
            </YStack>
          </YStack>
        )}
      </Stack>
    );
  }
);

Select.displayName = 'Select';

export default Select;
