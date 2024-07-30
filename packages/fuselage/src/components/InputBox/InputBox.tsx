import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import type { ReactNode, ForwardedRef } from 'react';
import React, { forwardRef, useCallback, useLayoutEffect, useRef } from 'react';

import type { BoxProps } from '../Box';
import { Icon } from '../Icon';
import { Addon } from './Addon';
import Input from './Input';
import InputBoxSkeleton from './InputBoxSkeleton';
import Placeholder from './Placeholder';
import Wrapper from './Wrapper';

/** @public */
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

/** @public */
const InputBox = Object.assign(
  // eslint-disable-next-line complexity
  forwardRef(function InputBox(
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
    ref: ForwardedRef<any> | null
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

    const hasAddon = !!addon;

    useLayoutEffect(() => {
      if (hasAddon && innerRef.current && innerRef.current.parentElement) {
        innerRef.current.parentElement.classList.toggle(
          'invalid',
          !innerRef.current.checkValidity()
        );
      }
    }, [hasAddon]);

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
  }),
  {
    Input,
    Skeleton: InputBoxSkeleton,
    Wrapper,
    Addon,
    Placeholder,
    Option,
  } as const
);

export default InputBox;
