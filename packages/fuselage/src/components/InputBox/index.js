import { useClassName, useMergedRefs } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { useCallback, useLayoutEffect, useRef } from 'react';

import { useTheme } from '../../hooks/useTheme';
import { Wrapper, Input, Addon } from './styles';
import { Skeleton } from './Skeleton';

export const InputBox = React.forwardRef(function InputBox({
  className,
  addon,
  hidden,
  invisible,
  onChange,
  ...props
}, ref) {
  const classNames = {
    wrapper: useClassName('rcx-input-box__wrapper', {}, props.disabled && 'disabled', className),
    input: useClassName('rcx-input-box', {}, className),
    addon: useClassName('rcx-input-box__addon'),
  };
  const theme = useTheme();

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
      className={classNames.input}
      hidden={hidden}
      invisible={invisible}
      ref={ref}
      theme={theme}
      onChange={handleChange}
      {...props}
      undecorated={false}
    />;
  }

  return <Wrapper className={classNames.wrapper} hidden={hidden} invisible={invisible} theme={theme}>
    <Input
      className={classNames.input}
      ref={mergedRef}
      theme={theme}
      onChange={handleChange}
      {...props}
      undecorated
    />
    <Addon children={addon} className={classNames.addon} theme={theme} />
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
