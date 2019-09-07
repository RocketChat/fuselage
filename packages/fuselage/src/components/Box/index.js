import React from 'react';

import { useStyles } from '../../hooks/useStyles';
import styles from './styles.scss';


export const Box = React.forwardRef(function Box({
  as: Component = 'div',
  className,
  hidden,
  invisible,
  ...props
}, ref) {
  const classNames = useStyles(styles, ['box'], {
    hidden,
    invisible,
  }, className);

  return <Component
    aria-hidden='true'
    className={classNames.box}
    hidden={hidden}
    ref={ref}
    {...props}
  />;
});

Box.displayName = 'Box';
