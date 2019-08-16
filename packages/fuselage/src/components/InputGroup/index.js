import React from 'react';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


export const InputGroup = React.forwardRef(function InputGroup({
  className,
  invisible,
  ...props
}, ref) {
  const inputGroupClassName = useStyle(styles, 'rcx-input-group', {
    invisible,
  }, className);

  return <fieldset className={inputGroupClassName} role='group' ref={ref} {...props}/>;
});
