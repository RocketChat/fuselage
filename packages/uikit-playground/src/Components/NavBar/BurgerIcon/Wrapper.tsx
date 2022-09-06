import { css } from '@rocket.chat/css-in-js';
import { Box } from '@rocket.chat/fuselage';
import type { ReactElement, ReactNode } from 'react';
import React from 'react';

const Wrapper = ({ children }: { children: ReactNode }): ReactElement => (
  <Box
    is='span'
    display='inline-flex'
    flexDirection='column'
    alignItems='center'
    justifyContent='space-between'
    paddingBlock='x4'
    paddingInline='x2'
    verticalAlign='middle'
    children={children}
    height='x24'
    className={css`
      cursor: pointer;
    `}
    width='x24'
  />
);

export default Wrapper;
