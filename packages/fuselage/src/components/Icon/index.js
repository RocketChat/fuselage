import * as characters from '@rocket.chat/icons/dist/font/characters';
import * as names from '@rocket.chat/icons/dist/font/index';
import React from 'react';
import styled from 'styled-components';

import { useStyles } from '../../hooks/useStyles';
import { Box } from '../Box';
import styles from './styles.scss';


const nameToCharacterMapping = Object.entries(names).reduce((map, [symbol, name]) => ({
  ...map,
  [name]: characters[symbol],
}), {});

export const Icon = styled(React.forwardRef(function Icon({
  className,
  iconName,
  ...props
}, ref) {
  const classNames = useStyles(styles, ['icon'], {}, className);

  return <Box
    aria-hidden='true'
    as='i'
    children={nameToCharacterMapping[iconName]}
    className={classNames.icon}
    ref={ref}
    {...props}
  />;
}))``;

Icon.displayName = 'Icon';
