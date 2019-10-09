import React from 'react';

import { useClassName } from '../../hooks';
import { Box } from '../Box';
import { Text } from '../Text';
import { Label } from '../Label';

export const InputBox = React.forwardRef(function InputBox({
  className,
  addon,
  ...props
}, ref) {
  const classNames = {
    wrapper: useClassName('rcx-input-box__wrapper', {}, className),
    input: useClassName('rcx-input-box'),
    addon: useClassName('rcx-input-box__addon'),
    overlay: useClassName('rcx-input-box__overlay'),
  };

  const box = <Text className={classNames.input} is='span' paragraph ref={ref} tabIndex='0' {...props} />;

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
