import React from 'react';
import * as characters from '@rocket.chat/icons/dist/font/characters';
import * as names from '@rocket.chat/icons/dist/font/index';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


const mapNames = Object.entries(names).reduce((map, [symbol, name]) => Object.assign(map, { [name]: symbol }), {});

export const Icon = React.forwardRef(function Icon({
  name,
  className,
  ...props
}, ref) {
  const iconClassName = useStyle(styles, 'rcx-icon');

  return <i className={iconClassName} data-char={characters[mapNames[name]]} ref={ref} {...props} />;
});
