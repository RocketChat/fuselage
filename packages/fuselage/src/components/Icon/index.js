import * as characters from '@rocket.chat/icons/dist/font/characters';
import * as names from '@rocket.chat/icons/dist/font/index';
import React from 'react';
import styled from 'styled-components';

import { useStyles } from '../../hooks/useStyles';
import styles from './styles.scss';


const nameToCharacterMapping = Object.entries(names).reduce((map, [symbol, name]) => ({
  ...map,
  [name]: characters[symbol],
}), {});

export const Icon = styled(React.forwardRef(function Icon({
  as: Component = 'i',
  className,
  hidden,
  iconName,
  invisible,
  ...props
}, ref) {
  const classNames = useStyles(styles, ['icon'], {
    hidden,
    invisible,
  }, className);

  return <Component
    aria-hidden='true'
    children={nameToCharacterMapping[iconName]}
    className={classNames.icon}
    hidden={hidden}
    ref={ref}
    {...props}
  />;
}))``;

Icon.displayName = 'Icon';
