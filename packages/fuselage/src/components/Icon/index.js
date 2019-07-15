import React from 'react';
import * as characters from '@rocket.chat/icons/dist/font/characters.mjs';
import * as names from '@rocket.chat/icons/dist/font/index.mjs';
import '@rocket.chat/icons/dist/font/RocketChat.minimal.css';

import { useStyle } from '../../hooks/styles';
import styles from './styles.scss';


const mapNames = Object.entries(names).reduce((map, [symbol, name]) => Object.assign(map, { [name]: symbol }), {});

export function Icon({
  name,
  className,
  ...props
}) {
  const iconClassName = useStyle(styles, 'Icon');

  return <i className={iconClassName} data-char={characters[mapNames[name]]} {...props} />;
}
