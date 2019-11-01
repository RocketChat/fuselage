import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { useCallback, useLayoutEffect, useRef } from 'react';

import { createStyledComponent } from '../../styles';
import { InputControl } from '../InputControl';
import { Skeleton } from './Skeleton';
import styles from './styles';

const Wrapper = createStyledComponent(styles, 'rcx-input-box__wrapper', 'span');
const Input = createStyledComponent(styles, 'rcx-input-box', InputControl);
const Addon = createStyledComponent(styles, 'rcx-input-box__addon', 'span');

export const InputBox = React.forwardRef(function InputBox({
  className,
  addon,
  hidden,
  invisible,
  onChange,
  ...props
}, ref) {
  const innerRef = useRef();
  const mergedRef = useMergedRefs(ref, innerRef);

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
      className={className}
      hidden={hidden}
      invisible={invisible}
      ref={ref}
      onChange={handleChange}
      {...props}
      undecorated={false}
    />;
  }

  return <Wrapper
    className={[props.disabled && 'disabled', className].filter(Boolean).join(' ')}
    hidden={hidden}
    invisible={invisible}
  >
    <Input
      className={className}
      ref={mergedRef}
      onChange={handleChange}
      {...props}
      undecorated
    />
    <Addon children={addon} />
  </Wrapper>;
});

InputBox.defaultProps = {
  type: 'text',
};

InputBox.displayName = 'InputBox';

InputBox.propTypes = {
  addon: PropTypes.element,
  input: PropTypes.element,
  error: PropTypes.string,
  invisible: PropTypes.bool,
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

InputBox.Skeleton = Skeleton;
