import React from 'react';

import { useStyles } from '../../hooks/useStyles';
import { Box } from '../Box';
import styles from './styles.scss';


export const Text = React.forwardRef(function Text({
  className,
  variant,
  ...props
}, ref) {
  const classNames = useStyles(styles, ['text'], {
    variant,
  }, className);

  return <Box
    className={classNames.text}
    ref={ref}
    {...props}
  />;
});
