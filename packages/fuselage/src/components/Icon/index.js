import * as characters from '@rocket.chat/icons/dist/font/characters';
import * as names from '@rocket.chat/icons/dist/font/index';
import styled from 'styled-components';

import { rebuildClassName } from '../../helpers';
import { normalized } from '../../mixins';


const nameToCharacterMapping = Object.entries(names).reduce((map, [symbol, name]) => ({
  ...map,
  [name]: characters[symbol],
}), {});

export const Icon = styled.i.attrs(rebuildClassName('icon')).attrs({ 'aria-hidden': 'true' })
  .attrs(({ iconName }) => ({ children: nameToCharacterMapping[iconName] }))`
  ${ normalized }

  display: inline-block;

  font-family: 'RocketChat';
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  text-rendering: auto;
`;

Icon.displayName = 'Icon';
