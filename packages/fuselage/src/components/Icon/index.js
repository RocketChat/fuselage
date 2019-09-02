import * as characters from '@rocket.chat/icons/dist/font/characters';
import * as names from '@rocket.chat/icons/dist/font/index';
import styled from 'styled-components';

import { rebuildClassName } from '../../helpers/rebuildClassName';
import { reset } from '../../mixins/reset';


const mapNames = Object.entries(names).reduce((map, [symbol, name]) => Object.assign(map, { [name]: symbol }), {});

export const Icon = styled.i.attrs({ 'aria-hidden': 'true' }).attrs(rebuildClassName('rcx-icon'))`
  ${ reset }

  display: inline-block;

  font-family: 'RocketChat';
  font-weight: 400;
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: auto;

  &::before {
    content: ${ ({ iconName }) => JSON.stringify(characters[mapNames[iconName]]) };
  }
`;
Icon.displayName = 'Icon';
