import { css } from '@emotion/core';

import {
  rcColorPrimaryLight,
  rcColorButtonPrimary,
  fontFamily,
} from '../variables';


export const base = css`
  flex: 0 0 auto;
  margin: 0 1rem;
	padding: 1rem 0;
  box-sizing: border-box;
	cursor: pointer;
	transition: all 0.3s;
	color: ${ rcColorPrimaryLight };
	border-bottom: 2px solid transparent;
  font-family: ${ fontFamily };
	font-size: 1rem;
	font-weight: 500;
	line-height: 1.25rem;
`;

export const active = css`
  color: ${ rcColorButtonPrimary };
	border-bottom-color: ${ rcColorButtonPrimary };
`;
