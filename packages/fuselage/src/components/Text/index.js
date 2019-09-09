import React from 'react';

import { useStyles } from '../../hooks/useStyles';
import { Box } from '../Box';
import styles from './styles.scss';


export const Text = React.forwardRef(function Text({
  className,
  colorVariant,
  variant,
  ...props
}, ref) {
  const classNames = useStyles(styles, ['text'], {
    colorVariant,
    variant,
  }, className);

  return <Box
    className={classNames.text}
    ref={ref}
    {...props}
  />;
});

Text.colorVariants = [
  'default',
  'info',
  'hint',
  'disabled',
  'alternative',
  'primary',
  'success',
  'danger',
  'warning',
];

Text.variants = [
  'h1',
  's1',
  's2',
  'p1',
  'p2',
  'c1',
  'c2',
  'micro',
];

Text.displayName = 'Text';
