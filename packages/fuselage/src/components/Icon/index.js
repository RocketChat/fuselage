import * as characters from '@rocket.chat/icons/dist/font/characters';
import * as names from '@rocket.chat/icons/dist/font/index';
import React from 'react';
import styled from 'styled-components';

import { Box } from '../Box';


const mapNames = Object.entries(names).reduce((map, [symbol, name]) => Object.assign(map, { [name]: symbol }), {});

const UnstyledIcon = React.forwardRef(({
  name,
  ...props
}, ref) => <Box
  aria-hidden='true'
  as='i'
  baseClassName='rcx-icon'
  ref={ref}
  {...props}
/>);

export const Icon = styled(UnstyledIcon)`
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
    content: ${ ({ name }) => JSON.stringify(characters[mapNames[name]]) };
  }
`;
