/* eslint-disable complexity */
import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { forwardRef, useCallback, useLayoutEffect, useRef } from 'react';

import { Box } from '../Box';
import { Label } from '../Label';
import { Option } from './Option';
import { Placeholder } from './Placeholder';
import { Skeleton } from '../Skeleton';

const Wrapper = (props) => <Box is={Label} rcx-input-box__wrapper {...props}/>;

const Input = forwardRef((props, ref) => <Box is='input' rcx-input-box ref={ref} {...props} />);

const Addon = forwardRef((props, ref) => <Box is='span' rcx-input-box__addon ref={ref} {...props} />);

export const InputBox = forwardRef(function InputBox({
  className,
  addon,
  error,
  hidden,
  invisible,
  multiple,
  placeholderVisible,
  type,
  onChange,
  ...props
}, ref) {
  const innerRef = useRef();
  const mergedRef = useMergedRefs(ref, innerRef);

  useLayoutEffect(() => {
    if (innerRef.current && innerRef.current.setCustomValidity) {
      innerRef.current.setCustomValidity(error || '');
    }
  }, [error]);

  useLayoutEffect(() => {
    if (addon) {
      innerRef.current.parentElement.classList.toggle('invalid', !innerRef.current.checkValidity());
    }
  }, []);

  const handleChange = useCallback((event, ...args) => {
    if (addon) {
      innerRef.current.parentElement.classList.toggle('invalid', !innerRef.current.checkValidity());
    }

    return onChange && onChange.call(event.currentTarget, event, ...args);
  }, [addon, onChange]);

  if (!addon) {
    return <Input
      is={
        (type === 'textarea' && 'textarea')
      || (type === 'select' && 'select')
      || 'input'}
      className={className}
      cols={
        (type === 'textarea' && 1)
      || (type === 'select' && 0)
      || 0}
      hidden={hidden}
      invisible={invisible}
      multiple={multiple}
      ref={mergedRef}
      size={
        (type === 'textarea' && undefined)
      || (type === 'select' && 1)
      || 1}
      type={type === 'textarea' || type === 'select' ? undefined : type}
      onChange={handleChange}
      rcx-input-box--multiple={multiple}
      rcx-input-box--placeholder-visible={placeholderVisible}
      rcx-input-box--type={type}
      {...props}
    />;
  }

  return <Wrapper
    className={[props.disabled && 'disabled', className].filter(Boolean).join(' ')}
    hidden={hidden}
    invisible={invisible}
  >
    <Input
      is={
        (type === 'textarea' && 'textarea')
      || (type === 'select' && 'select')
      || 'input'}
      className={className}
      cols={
        (type === 'textarea' && 1)
      || (type === 'select' && 0)
      || 0}
      multiple={multiple}
      ref={mergedRef}
      size={
        (type === 'textarea' && undefined)
      || (type === 'select' && 1)
      || 1}
      type={type === 'textarea' || type === 'select' ? undefined : type}
      onChange={handleChange}
      rcx-input-box--multiple={multiple}
      rcx-input-box--placeholder-visible={placeholderVisible}
      rcx-input-box--type={type}
      rcx-input-box--undecorated
      {...props}
    />
    <Addon children={addon} />
  </Wrapper>;
});

InputBox.defaultProps = {
  type: 'text',
};

InputBox.propTypes = {
  addon: PropTypes.element,
  input: PropTypes.element,
  error: PropTypes.string,
  type: PropTypes.oneOf([
    'button',
    'checkbox',
    'color',
    'date',
    'datetime',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
    'textarea',
    'select',
  ]).isRequired,
};

InputBox.Input = Input;

InputBox.Wrapper = Wrapper;

InputBox.Addon = Addon;

InputBox.Placeholder = Placeholder;

InputBox.Option = Option;

export function InputBoxSkeleton(props) {
  return <Box rcx-skeleton__input {...props}>
    <Skeleton width='100%' />
  </Box>;
}

InputBox.Skeleton = InputBoxSkeleton;
