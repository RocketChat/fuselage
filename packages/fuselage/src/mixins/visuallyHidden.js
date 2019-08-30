import { css } from 'styled-components';

export const visuallyHidden = css`
  position: absolute;

  overflow: hidden;
  clip: rect(0, 0, 0, 0);

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;

  white-space: nowrap;

  border: 0;
  clip-path: inset(50%);
`;
