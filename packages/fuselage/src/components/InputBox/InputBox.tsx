import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import type { FormEvent, ReactNode } from 'react';
import { forwardRef, useCallback, useLayoutEffect, useRef } from 'react';

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

/**
 * A decorated input control with support for addons.
 *
 * Usually you'll perfer to use `-Input` (e.g. <LinkTo kind='Forms/TextInput' story='Default'>`TextInput`</LinkTo>)
 * components over this one because it works as a construction block for them.
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

  useLayoutEffect(() => {
    if (innerRef.current && innerRef.current.setCustomValidity) {
      innerRef.current.setCustomValidity(error || '');
    }
  }, [error]);

  useLayoutEffect(() => {
    if (addon && innerRef.current && innerRef.current.parentElement) {
      innerRef.current.parentElement.classList.toggle(
        'invalid',
        !innerRef.current.checkValidity(),
      );
    }
  }, [addon, error]);

  const handleChange = useCallback(
    (event: FormEvent<HTMLElement>) => {
      if (addon && innerRef.current && innerRef.current.parentElement) {
        innerRef.current.parentElement.classList.toggle(
          'invalid',
          !innerRef.current.checkValidity(),
        );
      }

      onChange?.call(event.currentTarget, event);
    },
    [addon, onChange],
  );

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
        rcx-input-box--multiple={multiple}
        rcx-input-box--placeholder-visible={placeholderVisible}
        rcx-input-box--type={type}
        rcx-input-box--small={small}
        {...props}
      />
    );
  }

  return (
    <InputBoxWrapper
      className={[
        props.disabled && 'disabled',
        ...(Array.isArray(className) ? className : [className]),
      ]}
      hidden={hidden}
      invisible={invisible}
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
        rcx-input-box--multiple={multiple}
        rcx-input-box--placeholder-visible={placeholderVisible}
        rcx-input-box--type={type}
        rcx-input-box--undecorated
        rcx-input-box--small={small}
        {...props}
      />
      <InputBoxAddon children={addon} />
    </InputBoxWrapper>
  );
});

export default InputBox;
