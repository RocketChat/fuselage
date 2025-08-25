import type {
  AllHTMLAttributes,
  ComponentProps,
  ElementType,
  ReactElement,
} from 'react';
import { useMemo, useRef, useState, useEffect } from 'react';
import {
  Input,
  YStack,
  Text,
  AnimatePresence,
  XStack,
  styled,
} from 'tamagui';

import { Icon } from '../Icon';
import { Options, useCursor } from '../Options';

// Styled container to match the search bar in the image
const SearchBarContainer = styled(XStack, {
  name: 'SearchBarContainer',
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  width: 300,
  height: 40,
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '#E4E7EA',
  borderRadius: 6,
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontSize: 14,
  lineHeight: 20,
  fontWeight: '400',
  color: '#1F2329',
  cursor: 'text',
  overflow: 'visible',
  
  // Focus state - blue border like in the image
  focusStyle: {
    borderColor: '#156FF5',
  },
  
  // Error state
  variants: {
    error: {
      true: {
        borderColor: '#EC0D2A',
      },
    },
    disabled: {
      true: {
        backgroundColor: '#F7F8FA',
        borderColor: '#E4E7EA',
        color: '#9EA2A8',
        cursor: 'not-allowed',
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
  } as const,
});

// Styled input to be clean and simple
const SearchInput = styled(Input, {
  name: 'SearchInput',
  flex: 1,
  borderWidth: 0,
  backgroundColor: 'transparent',
  paddingHorizontal: 16,
  paddingVertical: 8,
  outline: 'none',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  fontWeight: 'inherit',
  color: 'inherit',
  
  // Placeholder styling
  placeholderTextColor: '#9EA2A8',
  
  // Remove default input styling
  '&:focus': {
    outline: 'none',
    borderWidth: 0,
  },
  
  // Disabled state
  variants: {
    disabled: {
      true: {
        color: '#9EA2A8',
        cursor: 'not-allowed',
      },
    },
  } as const,
});

type AutoCompleteOption = {
  value: string;
  label: unknown;
};

type AutoCompleteProps = {
  value?: string[];
  filter?: string;
  setFilter: (filter: string) => void;
  options: AutoCompleteOption[];
  renderItem?: ElementType;
  renderSelected?: ElementType;
  onChange?: (value: string[]) => void;
  renderEmpty?: ElementType;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  'aria-label'?: string;
} & Omit<AllHTMLAttributes<HTMLInputElement>, 'onChange' | 'aria-label'>;

export function AutoComplete({
  value = [],
  filter = '',
  setFilter,
  options = [],
  renderItem,
  renderSelected: RenderSelected,
  onChange = () => {},
  renderEmpty,
  placeholder = 'Search...',
  error,
  disabled,
  'aria-label': ariaLabel,
  onBlur: onBlurAction = () => {},
  ...props
}: AutoCompleteProps): ReactElement {
  const ref = useRef<any>(null);
  const [hasFocus, setHasFocus] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleSelect = (currentValue: any) => {
    onChange([currentValue]);
    setFilter('');
    hide();
    setHasInteracted(false);
  };

  const memoizedOptions = useMemo(
    () => options.map(({ value, label }) => [value, label]),
    [options]
  );

  const [cursor, handleKeyDown, , reset, [optionsAreVisible, hide, show]] =
    useCursor(value, memoizedOptions, handleSelect);

  const handleOnBlur = (event: any) => {
    setHasFocus(false);
    hide();
    setHasInteracted(false);
    onBlurAction(event);
  };

  const handleFocus = () => {
    setHasFocus(true);
    setHasInteracted(true);
    show();
  };

  const handleClick = () => {
    ref.current?.focus();
  };

  const handleClear = () => {
    setFilter('');
    ref.current?.focus();
  };

  useEffect(reset, [filter]);

  // Only show dropdown if user has interacted and there are options
  const shouldShowDropdown = hasInteracted && optionsAreVisible && options.length > 0;

  return (
    <YStack position="relative" overflow="visible">
      <SearchBarContainer
        role="combobox"
        aria-expanded={shouldShowDropdown}
        aria-haspopup="listbox"
        aria-controls="autocomplete-options"
        aria-label={ariaLabel}
        onPress={handleClick}
        error={error}
        disabled={disabled}
        focused={hasFocus}
      >
        {/* Search Input */}
        <SearchInput
            ref={ref}
            role="searchbox"
            aria-autocomplete="list"
            aria-controls="autocomplete-options"
            onChangeText={setFilter}
            onBlur={handleOnBlur}
            onFocus={handleFocus}
            onKeyPress={handleKeyDown}
          placeholder={placeholder}
            value={filter}
            disabled={disabled}
            {...props}
          />
        
        {/* Search Icon or Clear Button */}
        <XStack 
          marginRight="$3"
          alignItems="center"
          justifyContent="center"
          width={20}
          height={20}
          onPress={filter ? handleClear : undefined}
          cursor={filter ? 'pointer' : 'default'}
        >
          {filter ? (
            <Text fontSize={16} color="#9EA2A8">×</Text>
          ) : (
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#1F2329" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            )}
        </XStack>
      </SearchBarContainer>

      {/* Dropdown Options */}
      <AnimatePresence>
        {shouldShowDropdown && (
          <YStack
            id="autocomplete-options"
            role="listbox"
            aria-label="Options"
            position="absolute"
            top="100%"
            left={0}
            right={0}
            marginTop="$1"
            backgroundColor="#FFFFFF"
            borderWidth={1}
            borderColor="#E4E7EA"
            borderRadius={6}
            elevation={2}
            maxHeight={200}
            overflow="auto"
            zIndex={9999}
            enterStyle={{ opacity: 0, scale: 0.95 }}
            exitStyle={{ opacity: 0, scale: 0.95 }}
          >
            <Options
              onSelect={handleSelect}
              renderItem={renderItem}
              renderEmpty={renderEmpty}
              cursor={cursor}
              value={value}
              options={memoizedOptions}
              role="option"
            />
          </YStack>
        )}
      </AnimatePresence>
    </YStack>
  );
}

AutoComplete.displayName = 'AutoComplete';