import React from 'react';

import { useClassName } from '../../hooks';
import { Text } from '../Text';

export const Hint = React.forwardRef(function Hint({
  className,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-hint', {}, className);

  return <Text className={compoundClassName} hint is='div' paragraph ref={ref} {...props} />;
});

Hint.displayName = 'Hint';
