import { css } from '@emotion/core';

import { Button } from '../Button';


export const base = css`
  display: flex;
  flex-flow: row wrap;
  margin: 10px -5px;

  & > ${ Button } {
    margin: 0 5px;
  }
`;

export const wrap = css`
  margin: 5px -5px;
  flex-wrap: wrap;

  & > ${ Button } {
    margin: 5px;
  }
`;

export const stretch = css`
  justify-content: stretch;

  & > ${ Button } {
    flex: 1 1;
  }
`;

export const vertical = css`
  flex-direction: column;
`;
