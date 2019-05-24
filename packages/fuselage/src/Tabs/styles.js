import { css } from '@emotion/core';

import {
  colorGrayLight,
} from '../variables';


export const base = css`
  margin-bottom: 0.5rem;
  border-bottom: 2px solid ${ colorGrayLight };
`;

export const wrapper = css`
  display: flex;
  width: 100%;
  margin: 0 -1rem -2px;
`;
