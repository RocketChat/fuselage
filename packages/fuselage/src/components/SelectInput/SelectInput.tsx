import type { ComponentProps, FormEvent, ReactNode, Ref } from 'react';
import { forwardRef, useState, useCallback } from 'react';

import { Icon } from '../Icon';
import { InputBox } from '../InputBox';

type SelectInputOptions = readonly (readonly [string, string])[];

type SelectInputProps = Omit<ComponentProps<typeof InputBox>, 'type'> & {
  error?: string;
  options?: SelectInputOptions;
  htmlSize?: number;
  addon?: ReactNode;
};

/**
 * An input for selection of options.
 */
export const SelectInput = forwardRef(function SelectInput(
  { children, multiple, placeholder, onChange, ...props }: SelectInputProps,
  ref: Ref<HTMLElement>,
) {
  // State to track if the placeholder should be visible
  const [isPlaceholderVisible, setPlaceholderVisible] = useState(
    !props.value && !props.defaultValue,
  );

  // Update placeholder visibility based on the selected value
  const handleChange = useCallback(
    (event: FormEvent<HTMLSelectElement>) => {
      setPlaceholderVisible(!event.currentTarget.value);
      onChange?.call(event.currentTarget, event);
    },
    [onChange],
  );

  if (multiple) {
    return (
      <InputBox
        children={children}
        {...props}
        multiple
        type="select"
        onChange={handleChange}
      />
    );
  }

  return (
    <InputBox
      // Conditionally set placeholder visibility based on state
      placeholderVisible={isPlaceholderVisible ? !!placeholder : undefined}
      ref={ref}
      {...props}
      addon={<Icon name="chevron-down" size="x20" />}
      type="select"
      onChange={handleChange}
    >
      {/* Render a disabled, hidden placeholder option if no value is selected */}
      {placeholder && isPlaceholderVisible && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}
      {/* Render the provided children options */}
      {children}
    </InputBox>
  );
});
