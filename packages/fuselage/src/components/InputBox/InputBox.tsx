import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import type { FormEvent, ReactNode } from 'react';
import {
  forwardRef,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import type { BoxProps } from '../Box';
import { Icon } from '../Icon';

import Input from './Input';
import InputBoxAddon from './InputBoxAddon';
import InputBoxWrapper from './InputBoxWrapper';

export type InputBoxProps = BoxProps & {
  addon?: ReactNode;
  input?: ReactNode;
  multiple?: boolean;
  error?: string;
  placeholder?: string;
  placeholderVisible?: boolean;
  small?: boolean;
  type:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | 'textarea'
    | 'select';
};

// Common input styles (previously from .rcx-input-box SCSS)
const inputBaseStyles: BoxProps = {
  position: 'relative',
  display: 'inline-flex',
  flexGrow: 1,
  flexShrink: 0,
  minWidth: 128,
  verticalAlign: 'baseline',
  whiteSpace: 'nowrap',
  outline: 0,
  backgroundColor: 'transparent',
  fontScale: 'p2m',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  color: 'default',
};

// Decorated input styles (standalone, no wrapper — includes border)
const decoratedStyles: BoxProps = {
  minHeight: 40,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'var(--rcx-color-stroke-light, var(--strokeLight))',
  borderRadius: 4,
  bg: 'surface-light',
  padding: '8px 15px', // 16 - 1px border
};

// Small input styles
const smallInputStyles: BoxProps = {
  fontScale: 'c1',
};

const smallDecoratedStyles: BoxProps = {
  minWidth: 112,
  minHeight: 28,
  padding: '4px 7px', // 8 - 1px border
};

// Inside wrapper, input has no min-width or border
const wrappedInputStyles: BoxProps = {
  width: 0,
  minWidth: 0,
};

/**
 * A decorated input control with support for addons.
 */
// eslint-disable-next-line complexity
const InputBox = forwardRef<any, InputBoxProps>(function InputBox(
  {
    className,
    addon,
    error,
    hidden,
    invisible,
    multiple,
    placeholderVisible,
    type = 'text',
    small,
    onChange,
    ...props
  },
  ref,
) {
  const innerRef = useRef<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >(null);
  const mergedRef = useMergedRefs(ref, innerRef);
  const [isFocused, setIsFocused] = useState(false);

  useLayoutEffect(() => {
    if (innerRef.current && innerRef.current.setCustomValidity) {
      innerRef.current.setCustomValidity(error || '');
    }
  }, [addon, error]);

  const handleChange = useCallback(
    (event: FormEvent<HTMLElement>) => {
      onChange?.call(event.currentTarget, event);
    },
    [onChange],
  );

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);

  const handleAddonClick = () =>
    (innerRef.current as HTMLInputElement).showPicker();

  if (type === 'date') {
    addon = <Icon name='calendar' size='x20' onClick={handleAddonClick} />;
  }
  if (type === 'time') {
    addon = <Icon name='clock' size='x20' onClick={handleAddonClick} />;
  }

  if (!addon) {
    return (
      <Input
        is={
          (type === 'textarea' && 'textarea') ||
          (type === 'select' && 'select') ||
          'input'
        }
        className={className}
        cols={(type === 'textarea' && 1) || (type === 'select' && 0) || 0}
        hidden={hidden}
        invisible={invisible}
        multiple={multiple}
        ref={mergedRef}
        htmlSize={
          (type === 'textarea' && undefined) || (type === 'select' && 1) || 1
        }
        type={type === 'textarea' || type === 'select' ? undefined : type}
        onChange={handleChange}
        {...inputBaseStyles}
        {...decoratedStyles}
        {...(small ? { ...smallInputStyles, ...smallDecoratedStyles } : {})}
        {...(placeholderVisible ? { color: 'hint' } : {})}
        {...props}
      />
    );
  }

  return (
    <InputBoxWrapper
      hidden={hidden}
      invisible={invisible}
      disabled={props.disabled || undefined}
      invalid={!!error || undefined}
      focused={isFocused || undefined}
      small={small || undefined}
    >
      <Input
        is={
          (type === 'textarea' && 'textarea') ||
          (type === 'select' && 'select') ||
          'input'
        }
        className={className}
        cols={(type === 'textarea' && 1) || (type === 'select' && 0) || 0}
        multiple={multiple}
        ref={mergedRef}
        htmlSize={
          (type === 'textarea' && undefined) || (type === 'select' && 1) || 1
        }
        type={type === 'textarea' || type === 'select' ? undefined : type}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...inputBaseStyles}
        {...wrappedInputStyles}
        {...(small ? { ...smallInputStyles, padding: 0 } : {})}
        {...(placeholderVisible ? { color: 'hint' } : {})}
        {...props}
      />
      <InputBoxAddon children={addon} />
    </InputBoxWrapper>
  );
});

export default InputBox;
