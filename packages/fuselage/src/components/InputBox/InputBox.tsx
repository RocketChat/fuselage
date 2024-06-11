/* eslint-disable complexity */
import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import type {
  ComponentProps,
  ForwardRefExoticComponent,
  ReactNode,
  Ref,
} from 'react';
import React, { forwardRef, useCallback, useLayoutEffect, useRef } from 'react';

import type { InputBoxSkeleton } from '.';
import { Input, Wrapper } from '.';
import type Box from '../Box';
import { Icon } from '../Icon';
import { Addon } from './Addon';
import type { Option } from './Option';
import type { Placeholder } from './Placeholder';

type InputBoxProps = ComponentProps<typeof Box> & {
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

export type InputBox = ForwardRefExoticComponent<InputBoxProps> & {
  Input: ForwardRefExoticComponent<ComponentProps<typeof Box>>;
  Skeleton: ForwardRefExoticComponent<ComponentProps<typeof InputBoxSkeleton>>;
  Option: ForwardRefExoticComponent<ComponentProps<typeof Option>>;
  Placeholder: ForwardRefExoticComponent<ComponentProps<typeof Placeholder>>;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const InputBox = forwardRef(function InputBox(
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
  }: InputBoxProps,
  ref: Ref<any> | null
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
        !innerRef.current.checkValidity()
      );
    }
  }, []);

  const handleChange = useCallback(
    (event) => {
      if (addon && innerRef.current && innerRef.current.parentElement) {
        innerRef.current.parentElement.classList.toggle(
          'invalid',
          !innerRef.current.checkValidity()
        );
      }

      onChange?.call(event.currentTarget, event);
    },
    [addon, onChange]
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
    <Wrapper
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
      <Addon children={addon} />
    </Wrapper>
  );
}) as unknown as InputBox;
