import React, { useRef, useLayoutEffect } from 'react';

import { useClassName, useMergedRefs } from '../../hooks';
import { Box } from '../Box';
import { Text } from '../Text';
import { Label } from '../Label';

export const InputBox = React.forwardRef(function InputBox({
  className,
  addon,
  error,
  ...props
}, ref) {
  const classNames = {
    wrapper: useClassName('rcx-input-box__wrapper'),
    input: useClassName('rcx-input-box', {}, className),
    addon: useClassName('rcx-input-box__addon'),
    overlay: useClassName('rcx-input-box__overlay'),
  };

  const innerRef = useRef();
  const mergedRef = useMergedRefs(ref, innerRef);

  useLayoutEffect(() => {
    if (innerRef.current && innerRef.current.setCustomValidity) {
      innerRef.current.setCustomValidity(error || '');
    }
  }, [error]);

  const box = <Text className={classNames.input} is='span' paragraph ref={mergedRef} tabIndex='0' {...props} />;

  if (!addon) {
    return box;
  }

  return <Box className={classNames.wrapper} is={Label}>
    {box}
    <Box children={addon} className={classNames.addon} is='span' />
    <Box className={classNames.overlay} is='span' />
  </Box>;
});

InputBox.displayName = 'InputBox';

InputBox.Skeleton = function Skeleton({ animated }) {
  const compoundClassName = useClassName('rcx-input-box__skeleton');
  return <Box className={compoundClassName} is='span'>
    <Text.Skeleton animated={animated} />
  </Box>;
};
