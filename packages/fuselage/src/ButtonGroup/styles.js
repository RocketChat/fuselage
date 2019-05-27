import { css } from '@emotion/core';


export const base = css`
  display: flex;
  flex-flow: row wrap;
  margin: 10px -5px;

  & > * {
    margin: 0 5px;
  }
`;

export const wrap = css`
  margin: 5px -5px;
  flex-wrap: wrap;

  & > * {
    margin: 5px;
  }
`;

export const stretch = css`
  justify-content: stretch;

  & > * {
    flex: 1 1;
  }
`;

export const vertical = css`
  flex-direction: column;
`;
