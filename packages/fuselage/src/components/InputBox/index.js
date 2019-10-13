import { useClassName, useMergedRefs } from '@rocket.chat/fuselage-hooks';
import React, { useRef, useLayoutEffect, useMemo } from 'react';

import { useTheme } from '../../hooks/useTheme';
import { Text } from '../Text';
import { Wrapper, Input, Addon, StyledInputBoxSkeleton } from './styles';

export const InputBox = React.forwardRef(function InputBox({
  className,
  addon,
  hidden,
  invisible,
  onChange,
  ...props
}, ref) {
  const classNames = {
    wrapper: useClassName('rcx-input-box__wrapper'),
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

  const handleChange = useMemo(() => {
    if (!addon) {
      return onChange;
    }

    return (event, ...args) => {
      if (addon) {
        innerRef.current.parentElement.classList.toggle('invalid', !innerRef.current.checkValidity());
      }

      return onChange && onChange.call(event.currentTarget, event, ...args);
    };
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
    <Input className={classNames.input} ref={mergedRef} theme={theme} onChange={handleChange} {...props} undecorated />
    <Addon children={addon} className={classNames.addon} theme={theme} />
  </Wrapper>;
});

InputBox.displayName = 'InputBox';

function Skeleton({ animated }) {
  const compoundClassName = useClassName('rcx-input-box__skeleton');
  const theme = useTheme();
  return <StyledInputBoxSkeleton className={compoundClassName} theme={theme}>
    <Text.Skeleton animated={animated} />
  </StyledInputBoxSkeleton>;
}

Skeleton.displayName = 'InputBox.Skeleton';

InputBox.Skeleton = Skeleton;
