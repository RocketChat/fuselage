import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export const Button = React.forwardRef(function Button({
  as: Component = 'button',
  className,
  danger,
  ghost,
  invisible,
  primary,
  small,
  square,
  ...props
}, ref) {
  const buttonClassName = useStyle(styles, 'rcx-button', {
    danger,
    ghost,
    invisible,
    small,
    square,
    primary,
  }, className);

  return <Component className={buttonClassName} ref={ref} {...props} />;
});
